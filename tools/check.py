"""Check all Estonian content with Vabamorf and build data/gloss.js (tap-hints).

Run: python3 tools/check.py [--strict]
- spelling: every token of every Estonian string shown as correct is spell-checked
- grammar items: the filled-in sentence is spell-checked and the answer must not be among wrong options
- gloss: every token gets an Italian hint from the unit words, the unit's own `gl`, or tools/lex.tsv via its lemma
"""
import json, re, subprocess, sys, os, collections
from estnltk.vabamorf.morf import Vabamorf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
units = json.loads(subprocess.check_output(["node", os.path.join(ROOT, "tools", "dump.js")]))
vm = Vabamorf.instance()

NAMES = set("""Mari Jaan Kati Tõnu Piret Toomas Liis Marco Anna Peeter Tallinn Tallinnas Tallinna Tallinnasse Tallinnast Tartu Tartus Tartusse Tartust Eesti Eestis Eestisse Eestist Itaalia Itaaliast Itaalias Itaaliasse Pärnu Pärnus Pärnusse Saaremaa Saaremaale Saaremaal Saaremaalt Kadri Mart Siim Laura Rooma Roomas Roomast Narva Narvas Euroopa Soome Soomes Selver Selveris Rimi Rimis Kalev Helen Andres Kristjan Maria Juhan Ott Eva Tiit Kersti Raul Malle Hiiumaa Hiiumaale Hiiumaal Viljandi Viljandis Otepää Otepääl Läänemeri Toompea Toompeal Raekoja Emajõgi Emajõe Vanalinn Riia Rakvere Haapsalu Haapsallu Kuressaare Kuressaarde Kuressaares Luca Siimul Liisil Marcol Maril Kati Katil Jaanil Siimu Liisi Marco Pireti Toomase Jaani Tiidu Kadrile Kadril Mardil Mart Liisile Siimule Marcole Jaanile Katile Andrese Helenil Laural Lauraga Mariga Jaaniga Katiga Marcoga Siimuga Liisiga Kristjanil Evaga Evale Evat Andrus Rasmus Rasmusel Rasmusele Eveli Kertu Kertul Kertule Ago Agole Aleksander Tiina Tiinal Tiinale Rein Reinul Reinule Maret Maretil Marko Margus Margusel Pille Pillel Pillele Linda Lindal Lindale Mika John Pierre Mikaga""".split())

lex = {}
lexpath = os.path.join(ROOT, "tools", "lex.tsv")
if os.path.exists(lexpath):
    for line in open(lexpath, encoding="utf8"):
        line = line.rstrip("\n")
        if not line or line.startswith("#") or "\t" not in line: continue
        k, v = line.split("\t", 1); lex[k.strip()] = v.strip()

TOK = re.compile(r"[A-Za-zÕÄÖÜŠŽõäöüšžé]+(?:-[A-Za-zÕÄÖÜŠŽõäöüšž]+)*")
def tokens(s): return TOK.findall(s or "")

shown = []   # (unit id, where, text) — Estonian text displayed as correct
wrongopts = []
problems = []
for u in units:
    uid = u["id"]
    def add(where, t):
        if t: shown.append((uid, where, t))
    for w in u.get("words", []):
        add("word", w[0]); add("example", w[3] if len(w) > 3 else "")
    for g in u.get("gram", []):
        filled = g["q"].replace("___", g["a"])
        add("gram", re.sub(r"\(.*?\)", "", filled))
        if "o" in g:
            if g["a"] not in g["o"]: problems.append(f"U{uid} gram: answer '{g['a']}' not among options in: {g['q']}")
            if len(set(g["o"])) != len(g["o"]): problems.append(f"U{uid} gram: duplicate options in {g['q']}")
    for tr in u.get("tr", []):
        add("tr-q", tr["q"]); [add("tr-a", a) for a in tr["a"]]
    for s in u.get("sent", []):
        add("sent", s["e"]); [add("sent-alt", a) for a in s.get("ea", [])]
    for q in u.get("qa", []):
        add("qa-q", q["q"]); add("qa-a", q["a"][0]); add("qa-h", q.get("h", ""))
        for k in q["k"]:
            for alt in k.split("|"):
                if not any(alt.lower() in a.lower() for a in q["a"]) and alt not in ("jah", "ei"):
                    pass
        if not all(any(alt.lower() in q["a"][0].lower() for alt in k.split("|")) for k in q["k"]):
            problems.append(f"U{uid} qa: sample answer fails its own keywords: {q['q']} → {q['a'][0]} / {q['k']}")
    for s in u.get("sit", []):
        add("sit-ctx", s["ctx"]); add("sit-line", s["line"][1] if s.get("line") else ""); add("sit-ok", s["o"][0])
        wrongopts.extend(s["o"][1:])
    st = u.get("story")
    if st:
        add("story-t", st["t"])
        for l in st["lines"]: add("story", l[1])
        for q in st.get("q", []): add("story-q", q["q"]); add("story-a", q["o"][0]); [add("story-opt", o) for o in q["o"][1:]]
        for tf in st.get("tf", []): add("tf", tf[0])
    for n in (u.get("note") or {}).get("et", ""), :
        add("note", re.sub(r"<[^>]+>", " ", n))

# --- spelling
toks_all = collections.OrderedDict()
for uid, where, t in shown:
    if where == "note": continue
    t = re.sub(r"\(.*?\)|«.*?»", " ", t)
    for tok in tokens(t):
        if tok in NAMES or tok.capitalize() in NAMES: continue
        toks_all.setdefault(tok.lower(), (uid, where, t))
words = list(toks_all.keys())
bad = []
for i in range(0, len(words), 500):
    for r in vm.spellcheck(words[i:i+500], suggestions=True):
        if not r["spelling"]: bad.append(r)
for r in bad:
    uid, where, t = toks_all[r["text"]]
    problems.append(f"U{uid} {where}: unknown word '{r['text']}' (suggest {r['suggestions'][:3]}) in: {t}")

# --- gloss
manual = {}
for u in units:
    for w in u.get("words", []):
        manual.setdefault(w[0].lower(), w[1])
    for k, v in (u.get("gl") or {}).items():
        if v: manual.setdefault(k.lower(), v)
base = dict(lex)
for u in units:
    for w in u.get("words", []):
        if " " not in w[0]: base.setdefault(w[0].lower(), w[1].split(",")[0].strip())
out = {}
missing = collections.Counter(); missing_ex = {}
alltoks = set()
for uid, where, t in shown + [(0, "opt", o) for o in wrongopts]:
    for tok in tokens(t):
        alltoks.add(tok)
for tok in sorted(alltoks):
    low = tok.lower()
    if low in manual or low in out: continue
    if tok in NAMES: continue
    an = vm.analyze([tok], guess=True, disambiguate=False)[0]["analysis"]
    lemmas = []
    for a in an:
        lm = a["lemma"].replace("=", "").replace("_", "")
        if lm not in lemmas: lemmas.append(lm)
    g = None
    for lm in lemmas:
        lml = lm.lower()
        if lml in base:
            g = base[lml] if lml == low else f"{lml}: {base[lml]}"
            break
    if g: out[low] = g
    else:
        key = lemmas[0].lower() if lemmas else low
        missing[key] += 1; missing_ex.setdefault(key, tok)

with open(os.path.join(ROOT, "data", "gloss.js"), "w", encoding="utf8") as f:
    f.write("/* Generated by tools/check.py — tap-hints for inflected forms (lemma: Italian). */\nwindow.GLOSS=" + json.dumps(out, ensure_ascii=False, sort_keys=True) + ";\n")

print(f"units: {len(units)}  shown strings: {len(shown)}  distinct tokens: {len(alltoks)}  auto glosses: {len(out)}")
print(f"\nPROBLEMS ({len(problems)}):")
for p in problems: print(" -", p)
print(f"\nMISSING GLOSS LEMMAS ({len(missing)}):")
print("\n".join(f"{k}\t# {missing_ex[k]}" for k, _ in missing.most_common()))
