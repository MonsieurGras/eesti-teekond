/* Eesti Teekond — lesson engine. Content lives in data/s1.js … s6.js (window.UNITS), glosses in data/gloss.js, drawings in data/icons.js. */
"use strict";
const UNITS = (window.UNITS || []).slice().sort((a, b) => a.id - b.id);
const GLOSS = window.GLOSS || {};
const ICONS = window.ICONS || {};
const SECTIONS = [
  { n: 1, t: "Esimesed sammud", lv: "A1.1" },
  { n: 2, t: "Igapäev", lv: "A1.2" },
  { n: 3, t: "Linnas", lv: "A1.3" },
  { n: 4, t: "Inimesed ja minevik", lv: "A2.1" },
  { n: 5, t: "Plaanid", lv: "A2.2" },
  { n: 6, t: "Mitmus ja sihitis", lv: "A2.3" }
];
const NODE_T = [
  ["Uued sõnad", "Parole nuove", "book"], ["Grammatika", "Grammatica", "puzzle"], ["Kuula ja räägi", "Ascolta e parla", "mic"],
  ["Olukord", "Situazione", "chat"], ["Lugu", "Storia", "scroll"], ["Kordamine", "Ripasso", "trophy"]
];
const INS = {
  intro: ["Uus sõna", "Parola nuova"], pickword: ["Mis see on?", "Che cos'è?"], listenpic: ["Kuula ja vali pilt", "Ascolta e scegli l'immagine"],
  meaning: ["Mida see tähendab?", "Che cosa significa?"], typeword: ["Kirjuta eesti keeles", "Scrivi in estone"], pairs: ["Leia paarid", "Trova le coppie"],
  buildl: ["Kuula ja pane sõnad järjekorda", "Ascolta e metti in ordine le parole"], buildt: ["Tõlgi eesti keelde", "Traduci in estone"],
  dict: ["Kirjuta, mida kuuled", "Scrivi ciò che senti"], repeat: ["Kuula ja korda", "Ascolta e ripeti"], read: ["Loe valjusti ette", "Leggi ad alta voce"],
  qa: ["Vasta küsimusele", "Rispondi alla domanda"], qas: ["Vasta valjusti", "Rispondi ad alta voce"], gchoose: ["Vali õige vorm", "Scegli la forma giusta"],
  gtype: ["Kirjuta õige vorm", "Scrivi la forma giusta"], sit: ["Mida sa ütled?", "Che cosa dici?"], storyq: ["Vasta loo põhjal", "Rispondi in base alla storia"],
  tf: ["Õige või vale?", "Vero o falso?"], note: ["Grammatika", "Grammatica"], storyread: ["Loe ja kuula", "Leggi e ascolta"],
  smeaning: ["Mida see lause tähendab?", "Che cosa significa questa frase?"]
};
const TASKS = {
  neg: ["Muuda eitavaks", "Rendi negativo"], past: ["Pane minevikku", "Metti al passato"], pres: ["Pane olevikku", "Metti al presente"],
  pl: ["Pane mitmusesse", "Metti al plurale"], sg: ["Pane ainsusesse", "Metti al singolare"], q: ["Tee küsimus", "Trasforma in domanda"],
  perf: ["Pane täisminevikku", "Metti al passato prossimo"], cond: ["Ütle viisakamalt", "Dillo in modo più cortese"],
  imp: ["Ütle käskivalt", "Dillo all'imperativo"], te: ["Ütle viisakalt (teie)", "Dillo con il Lei/voi"], imps: ["Ütle umbisikuliselt", "Dillo in forma impersonale"]
};

/* ============ ICONS ============ */
const I = {
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.5 5.5 5.5 5.5 11a5.5 5.5 0 0 1-11 0c0-2.6 1.3-4.3 2.6-5.6.2 1.8 1 3 2.2 3.4C10.6 8.4 11.2 5 12 2z"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10l4 6-9 12L3 9z"/><path d="M3 9h18M12 21 8.5 9 12 3l3.5 6z" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8.5-5.3-8.5-11.2A4.8 4.8 0 0 1 12 6.5a4.8 4.8 0 0 1 8.5 3.3C20.5 15.7 12 21 12 21z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2h3v3a4 4 0 0 1-4.2 4A5 5 0 0 1 13 14.9V18h3v3H8v-3h3v-3.1A5 5 0 0 1 8.2 12 4 4 0 0 1 4 8V5h3zm0 4H6v1a2 2 0 0 0 1.3 1.9A6 6 0 0 1 7 8zm10 0v1a6 6 0 0 1-.3 1.9A2 2 0 0 0 18 8V7z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5a.5.5 0 0 0 0 1H20v3H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 3a2 2 0 0 1 4 0v1h4a1 1 0 0 1 1 1v4h-1a2 2 0 0 0 0 4h1v5a1 1 0 0 1-1 1h-5v-1a2 2 0 0 0-4 0v1H4a1 1 0 0 1-1-1v-5h1a2 2 0 0 0 0-4H3V5a1 1 0 0 1 1-1h6z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-7 0v-6A3.5 3.5 0 0 1 12 2z"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21m-3.5 0h7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M20 8h.5A1.5 1.5 0 0 1 22 9.5v6a1.5 1.5 0 0 1-1.5 1.5H20v3l-3-3h-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h11a3 3 0 0 1 3 3v1h-3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1h3zm3 5v1.8h6V8zm0 4v1.8h6V12z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  spk: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17c0-4 3.2-7 7-7 3 0 5 2 5.5 4h2.2a2.3 2.3 0 1 1 0 4.6H4A1 1 0 0 1 3 17z"/><circle cx="10" cy="11" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  path: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 3 7v2h18V7zM5 11v7h3v-7zm5.5 0v7h3v-7zM16 11v7h3v-7zM3 20h18v2H3z"/></svg>',
  words: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3zm3 4v2h8V8zm0 4v2h6v-2z"/><path d="M20 7h1v15H8v-1h12z"/></svg>',
  me: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.5"/><path d="M3.5 21a8.5 8.5 0 0 1 17 0z"/></svg>',
  dumb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h2V8h3v8H4v-2H2zm20 0h-2V8h-3v8h3v-2h2zM8 11h8v2H8z"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4m0 0h11l-2 4 2 4H5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg>'
};
function bird(mood) {
  const eye = mood === "happy" ? '<path d="M73 41q7-8 14 0" fill="none" stroke="#111" stroke-width="3.4" stroke-linecap="round"/>'
    : mood === "sad" ? '<circle cx="80" cy="41" r="8.5" fill="#fff"/><circle cx="80" cy="44" r="4.2" fill="#111"/><path d="M70 31l15 3" stroke="var(--bird)" stroke-width="4" stroke-linecap="round"/>'
      : '<circle cx="80" cy="40" r="8.5" fill="#fff"/><circle cx="82" cy="41" r="4.4" fill="#111"/><circle cx="83.6" cy="39.4" r="1.5" fill="#fff"/>';
  return `<svg viewBox="0 0 120 112" role="img" aria-label="Pääsu"><path d="M34 70 6 100l20-20-12 28 28-34z" fill="var(--bird)"/><ellipse cx="62" cy="60" rx="38" ry="35" fill="var(--bird)"/><ellipse cx="70" cy="74" rx="25" ry="20" fill="var(--belly)"/><ellipse cx="84" cy="56" rx="11" ry="8.5" fill="#C8553D"/><path d="M36 56q24-10 38 14-26 7-38-14z" fill="var(--bird-2)"/>${eye}<path d="M96 45l13 4-13 5z" fill="#F2B705"/><path d="M58 94v8m-4 0h8M72 94v8m-4 0h8" stroke="#F2B705" stroke-width="3" stroke-linecap="round"/></svg>`;
}
function pic(p) { if (!p) return ""; if (p.startsWith("svg:")) return ICONS[p.slice(4)] || ""; return esc(p); }

/* ============ STATE ============ */
const KEY = "eesti-teekond-v1", HEART_MS = 30 * 60 * 1000, MAXH = 5;
const DEF = { xp: 0, streak: 0, lastDay: null, hearts: MAXH, heartsTs: 0, done: {}, daily: { d: null, xp: 0 }, goal: 30, sound: true, unlimited: false, best: 0,
  forceTts: false, speech: "auto", noSpeakUntil: 0, noteLang: "et", showIt: false, weak: {}, reports: [], v: 2 };
let S = Object.assign({}, DEF);
try { const r = JSON.parse(localStorage.getItem(KEY) || "null"); if (r) S = Object.assign({}, DEF, r); } catch (e) { }
function save() { S.updatedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
(function migrate() {
  // Version 1 kept keys like "0-1" / "0-r" (old unit index 0–5). Version 2 uses "u1-0" … "u1-5".
  const old = Object.keys(S.done).filter(k => /^\d+-(\d|r)$/.test(k));
  if (!old.length) return;
  for (let ui = 0; ui < 6; ui++) {
    const ks = old.filter(k => k.startsWith(ui + "-"));
    if (!ks.length) continue;
    const n = ks.includes(ui + "-r") || ks.length >= 4 ? 6 : Math.min(6, Math.round(ks.length * 1.5));
    for (let j = 0; j < n; j++) S.done[`u${ui + 1}-${j}`] = S.done[`u${ui + 1}-${j}`] || 1;
  }
  old.forEach(k => delete S.done[k]);
  save();
})();
const pad = n => String(n).padStart(2, "0");
const dstr = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const today = () => dstr(new Date());
const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dstr(d); };
const liveStreak = () => (S.lastDay === today() || S.lastDay === yesterday()) ? S.streak : 0;
const dailyXp = () => S.daily.d === today() ? S.daily.xp : 0;
function syncHearts() {
  if (S.hearts >= MAXH) { S.heartsTs = Date.now(); return; }
  const n = Math.floor((Date.now() - S.heartsTs) / HEART_MS);
  if (n > 0) { S.hearts = Math.min(MAXH, S.hearts + n); S.heartsTs += n * HEART_MS; if (S.hearts >= MAXH) S.heartsTs = Date.now(); }
}
const nextHeartMin = () => Math.max(1, Math.ceil((HEART_MS - (Date.now() - S.heartsTs)) / 60000));

const NODES = [];
UNITS.forEach(u => { for (let k = 0; k < 6; k++) NODES.push({ id: `u${u.id}-${k}`, u, k }); });
function curIndex() { const i = NODES.findIndex(n => !S.done[n.id]); return i < 0 ? NODES.length : i; }

/* ============ UTIL ============ */
const $ = (q, el = document) => el.querySelector(q);
function esc(t) { return String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pickN = (a, n) => shuffle(a).slice(0, n);
const rnd = a => a[Math.floor(Math.random() * a.length)];
const norm = t => String(t).toLowerCase().replace(/[’`´]/g, "'").replace(/[.,!?¡¿;:"«»„“”()\-–—]/g, " ").replace(/\s+/g, " ").trim();
const deacc = t => t.replace(/õ/g, "o").normalize("NFD").replace(/[̀-ͯ]/g, "");
const ETEQ = { ma: "mina", sa: "sina", ta: "tema", me: "meie", te: "teie", nad: "nemad", mu: "minu", su: "sinu", ta_: "tema", pole: "ei ole" };
const ITPRO = new Set(["io", "tu", "lui", "lei", "noi", "voi", "loro"]);
function canon(t, lang) {
  let k = norm(t).split(" ").filter(Boolean);
  if (lang === "et") k = k.map(x => ETEQ[x] || x).join(" ").split(" ");
  else { if (k.length > 1 && ITPRO.has(k[0])) k = k.slice(1); k = k.map(x => x.replace(/^(dov|com|quant)'?(è|e)$/, "$1e è")); }
  return k.join(" ");
}
function lev(a, b) { const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3; const d = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; }
function judge(input, answers, lang, typed) {
  const u = canon(input, lang);
  for (const a of answers) if (canon(a, lang) === u) return { ok: true, kind: "exact" };
  for (const a of answers) if (deacc(canon(a, lang)) === deacc(u)) return { ok: true, kind: "accent", a };
  if (typed) for (const a of answers) { const c = canon(a, lang); if (c.length >= 6 && lev(c, u) <= 1) return { ok: true, kind: "typo", a }; }
  return { ok: false };
}
function keyCheck(input, keys) {
  const toks = deacc(canon(input, "et")).split(" ");
  return keys.every(k => k.split("|").some(alt => { const a = deacc(canon(alt, "et")); return a.includes(" ") ? (" " + toks.join(" ") + " ").includes(" " + a + " ") : toks.some(t => t === a || (a.length >= 5 && lev(t, a) <= 1)); }));
}
const PROPER = /^[A-ZÕÄÖÜŠŽ]/;
function toks(t, keepCase) { return String(t).replace(/[.,!?;:«»"„“”]/g, "").split(/\s+/).filter(Boolean).map(x => keepCase || isName(x) ? x : x.toLowerCase()); }
const NAMES = new Set(["Mari", "Jaan", "Kati", "Tõnu", "Piret", "Toomas", "Liis", "Marco", "Anna", "Peeter", "Tallinn", "Tallinnas", "Tallinna", "Tartu", "Tartus", "Tartusse", "Eesti", "Eestis", "Eestisse", "Itaalia", "Itaaliast", "Itaalias", "Pärnu", "Pärnus", "Saaremaa", "Saaremaale", "Saaremaal", "Kadri", "Mart", "Siim", "Laura", "Rooma", "Roomas", "Narva", "Euroopa", "Soome", "Soomes", "Selver", "Selveris", "Rimi", "Rimis", "Jaanipäev", "Jõulud", "Kalev", "Helen", "Andres", "Kristjan", "Maria", "Juhan", "Ott", "Eva", "Tiit", "Kersti", "Raul", "Malle", "Hiiumaa", "Hiiumaale", "Hiiumaal", "Viljandi", "Viljandis", "Otepää", "Otepääl", "Läänemeri", "Toompea", "Toompeal", "Raekoja", "Emajõgi", "Emajõe", "Vanalinn", "Riia", "Rakvere", "Haapsalu", "Haapsallu", "Kuressaare", "Kuressaarde", "Kuressaares", "Mika", "John", "Pierre", "Luca", "Siimu", "Liisi", "Jaani", "Kadri", "Kadrile", "Marcole", "Liisil", "Siimul", "Marcol", "Maril"]);
function isName(x) { return NAMES.has(x.replace(/[.,!?]/g, "")); }

/* ============ GLOSS (tap-hints) ============ */
const GL = Object.assign({}, GLOSS);
UNITS.forEach(u => { (u.words || []).forEach(w => { const k = w[0].toLowerCase(); if (!GL[k]) GL[k] = w[1]; }); Object.assign(GL, u.gl || {}); });
const WRE = /([A-Za-zÕÄÖÜŠŽõäöüšžé]+(?:-[A-Za-zÕÄÖÜŠŽõäöüšž]+)*)/g;
function gloss(text) { return esc(text).replace(WRE, m => { const g = GL[m.toLowerCase()]; return g ? `<span class="w" data-g="${esc(g)}">${m}</span>` : m; }); }
let tipT = null;
function showTip(el) {
  const t = $("#tip"); t.textContent = el.dataset.g; t.hidden = false;
  const r = el.getBoundingClientRect(); const tw = t.offsetWidth;
  t.style.left = Math.max(8, Math.min(window.innerWidth - tw - 8, r.left + r.width / 2 - tw / 2)) + "px";
  t.style.top = Math.max(8, r.top - t.offsetHeight - 8) + "px";
  clearTimeout(tipT); tipT = setTimeout(() => { t.hidden = true; }, 2600);
}

/* ============ AUDIO ============ */
let etVoice = null;
function loadVoices() { try { const v = speechSynthesis.getVoices(); etVoice = v.find(x => /^et([-_]|$)/i.test(x.lang)) || null; } catch (e) { } }
if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = () => { const had = !!etVoice; loadVoices(); if (!had && etVoice && !PL) render(); }; }
let vTries = 0; const vTimer = setInterval(() => { const had = !!etVoice; loadVoices(); if (!had && etVoice && !PL) render(); if (etVoice || ++vTries > 20) clearInterval(vTimer); }, 500);
const hasVoice = () => !!etVoice || !!S.forceTts;
function say(t, slow, onend) {
  if (!hasVoice() || !("speechSynthesis" in window)) { if (onend) onend(); return; }
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); if (etVoice) u.voice = etVoice; u.lang = etVoice ? etVoice.lang : "et-EE"; u.rate = slow ? .6 : .92; if (onend) u.onend = onend; speechSynthesis.speak(u); } catch (e) { if (onend) onend(); }
}
let AC = null;
function tone(good) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const now = AC.currentTime;
    (good ? [[660, 0], [880, .09]] : [[220, 0], [180, .12]]).forEach(([fq, t]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = good ? "triangle" : "sawtooth"; o.frequency.value = fq; g.gain.setValueAtTime(.0001, now + t); g.gain.exponentialRampToValueAtTime(good ? .18 : .06, now + t + .02); g.gain.exponentialRampToValueAtTime(.0001, now + t + .18); o.connect(g).connect(AC.destination); o.start(now + t); o.stop(now + t + .2); });
  } catch (e) { }
}
function toast(m) { const t = document.createElement("div"); t.className = "toast"; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2400); }

/* ============ SPEAKING ============ */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function speakMode() { if (Date.now() < S.noSpeakUntil) return "off"; if (S.speech === "rec" || !SR) return "rec"; return "sr"; }
let REC = null, MREC = null;
function stopListening() { try { REC && REC.abort(); } catch (e) { } REC = null; try { MREC && MREC.state !== "inactive" && MREC.stop(); } catch (e) { } }
function recognize(onres, onerr) {
  stopListening();
  const r = new SR(); REC = r; r.lang = "et-EE"; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false; let got = false;
  r.onresult = e => { got = true; const alts = []; for (const a of e.results[0]) alts.push(a.transcript); onres(alts); };
  r.onerror = e => { got = true; onerr(e.error || "error"); };
  r.onend = () => { if (!got) onerr("no-speech"); REC = null; };
  try { r.start(); } catch (e) { onerr("start"); }
}
function speechScore(target, alts) {
  const tw = toks(target).map(x => deacc(canon(x, "et")));
  let best = null;
  for (const alt of alts) {
    const hw = deacc(canon(alt, "et")).split(" ").filter(Boolean);
    const marks = tw.map(w => hw.some(h => h === w || (w.length >= 4 && lev(h, w) <= 1) || (w.length >= 7 && lev(h, w) <= 2)));
    const ratio = marks.filter(Boolean).length / Math.max(1, tw.length);
    if (!best || ratio > best.ratio) best = { ratio, marks, heard: alt };
  }
  return best || { ratio: 0, marks: tw.map(() => false), heard: "" };
}
async function recordClip(onReady, onErr) {
  stopListening();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks = []; const m = new MediaRecorder(stream); MREC = m;
    m.ondataavailable = e => chunks.push(e.data);
    m.onstop = () => { stream.getTracks().forEach(t => t.stop()); onReady(URL.createObjectURL(new Blob(chunks, { type: m.mimeType || "audio/webm" }))); };
    m.start(); setTimeout(() => { if (m.state !== "inactive") m.stop(); }, 8000);
  } catch (e) { onErr(e); }
}

/* ============ LESSON GENERATION ============ */
const sentsOf = u => u.sent || [];
function poolUpTo(uid) { const W = [], Sn = []; UNITS.filter(u => u.id <= uid).forEach(u => { W.push(...(u.words || [])); Sn.push(...sentsOf(u)); }); return { W, S: Sn }; }
const wobj = w => ({ e: w[0], i: w[1], p: w[2] || "", x: w[3] || "", ia: w[4] || [] });
function wordsOf(u) { return (u.words || []).map(wobj); }
function mkPickword(w, c) { return { t: "pickword", w, opts: shuffle([w.e, ...pickN(c.filter(x => x.e !== w.e).map(x => x.e), 3)]), tag: "u" + w.uid }; }
function mkListenpic(w, c) { return { t: "listenpic", w, opts: shuffle([w, ...pickN(c.filter(x => x.p && x.e !== w.e && x.p !== w.p), 3)]), tag: "u" + w.uid }; }
function mkMeaning(w, c) { return { t: "meaning", w, opts: shuffle([w.i, ...pickN(c.filter(x => x.i !== w.i && !w.ia.includes(x.i)).map(x => x.i), 2)]), tag: "u" + w.uid }; }
function mkBuild(sn, dir, pool, u) {
  const toEt = dir !== "e2i";
  const ans = toks(toEt ? sn.e : sn.i);
  const src = pool.map(x => toks(toEt ? x.e : x.i)).flat();
  const low = new Set(ans.map(x => x.toLowerCase()));
  const dis = pickN([...new Set(src)].filter(x => !low.has(x.toLowerCase())), Math.min(4, Math.max(2, 8 - ans.length)));
  return { t: dir === "listen" ? "buildl" : "buildt", dir, sn, tiles: shuffle([...ans, ...dis]), tag: "u" + u.id };
}
function lessonFor(node) {
  const u = node.u, k = node.k, W = wordsOf(u).map(w => Object.assign(w, { uid: u.id })), Sn = sentsOf(u);
  const prevW = UNITS.filter(x => x.id < u.id && x.id >= u.id - 3).flatMap(x => wordsOf(x).map(w => Object.assign(w, { uid: x.id })));
  const C = W.concat(prevW), listen = hasVoice(), spk = speakMode() !== "off";
  const pool = poolUpTo(u.id).S, gt = "g" + u.id;
  const ex = [];
  if (k === 0) {
    const withPic = W.filter(w => w.p);
    W.forEach((w, i) => {
      ex.push({ t: "intro", w });
      if (i % 2 === 1 || i === W.length - 1) {
        const pair = W.slice(Math.max(0, i - 1), i + 1);
        pair.forEach(x => ex.push(x.p ? (listen && Math.random() < .5 ? mkListenpic(x, C) : mkPickword(x, C)) : mkMeaning(x, C)));
      }
    });
    if (W.length >= 4) ex.push({ t: "pairs", items: pickN(withPic.length >= 4 ? withPic : W, 5), pics: withPic.length >= 4, tag: "u" + u.id });
    pickN(withPic, 3).forEach(w => ex.push({ t: "typeword", w, tag: "u" + u.id }));
    pickN(W.filter(w => !w.p), 1).forEach(w => ex.push(mkMeaning(w, C)));
    return ex;
  }
  if (k === 1) {
    if (u.note) ex.push({ t: "note", u });
    const G = (u.gram || []).map(g => Object.assign({}, g, { tag: gt }));
    G.forEach((g, i) => ex.push({ t: g.o && (i % 3 !== 2) ? "gchoose" : "gtype", g, opts: g.o ? shuffle(g.o) : null, tag: gt }));
    (u.tr || []).forEach(tr => ex.push({ t: "trans", tr, tag: gt }));
    return [ex[0], ...shuffle(ex.slice(1))].filter(Boolean).slice(0, 16);
  }
  if (k === 2) {
    const ss = shuffle(Sn);
    ss.slice(0, 3).forEach(sn => ex.push(listen ? mkBuild(sn, "listen", pool, u) : mkBuild(sn, "i2e", pool, u)));
    if (listen) ss.slice(3, 5).forEach(sn => ex.push({ t: "dict", sn, tag: "u" + u.id }));
    if (spk) {
      ss.slice(5, 8).forEach(sn => ex.push({ t: "repeat", sn, tag: "s" + u.id }));
      ss.slice(0, 2).forEach(sn => ex.push({ t: "read", sn, tag: "s" + u.id }));
      pickN(u.qa || [], 2).forEach(q => ex.push({ t: "qas", q, tag: "s" + u.id }));
    } else pickN(u.qa || [], 2).forEach(q => ex.push({ t: "qa", q, tag: "s" + u.id }));
    return ex;
  }
  if (k === 3) {
    (u.sit || []).forEach(s => ex.push({ t: "sit", s, opts: shuffle(s.o.map((o, i) => ({ o, ok: i === 0 }))), tag: "u" + u.id }));
    pickN(u.qa || [], 3).forEach(q => ex.push({ t: "qa", q, tag: "s" + u.id }));
    if (u.sec <= 2) pickN(Sn, 2).forEach(sn => ex.push(mkBuild(sn, "i2e", pool, u)));
    pickN(Sn, 1).forEach(sn => ex.push({ t: "smeaning", sn, opts: shuffle([sn.i, ...pickN(pool.filter(x => x.i !== sn.i).map(x => x.i), 2)]), tag: "u" + u.id }));
    return shuffle(ex);
  }
  if (k === 4 && u.story) {
    ex.push({ t: "storyread", st: u.story });
    (u.story.q || []).forEach(q => ex.push({ t: "storyq", q, opts: shuffle(q.o.map((o, i) => ({ o, ok: i === 0 }))), st: u.story, tag: "u" + u.id }));
    (u.story.tf || []).forEach(tf => ex.push({ t: "tf", tf, st: u.story, tag: "u" + u.id }));
    return ex;
  }
  // review
  const all = [];
  [0, 1, 2, 3].forEach(j => all.push(...lessonFor({ u, k: j }).filter(e => !["intro", "note", "storyread"].includes(e.t))));
  const weakFirst = all.filter(e => (S.weak[e.tag] || 0) > 0);
  return shuffle(weakFirst.slice(0, 4).concat(pickN(all.filter(e => !weakFirst.slice(0, 4).includes(e)), 12)));
}
function practiceLesson() {
  const doneU = UNITS.filter(u => S.done[`u${u.id}-0`]);
  const src = doneU.length ? doneU : UNITS.slice(0, 1);
  const all = [];
  src.forEach(u => [0, 1, 2, 3].forEach(k => all.push(...lessonFor({ u, k }).filter(e => !["intro", "note", "storyread"].includes(e.t)))));
  const weight = e => 1 + (S.weak[e.tag] || 0) * 2;
  const out = []; const bag = all.slice();
  while (out.length < 12 && bag.length) { const tot = bag.reduce((a, e) => a + weight(e), 0); let r = Math.random() * tot; let i = 0; for (; i < bag.length; i++) { r -= weight(bag[i]); if (r <= 0) break; } out.push(bag.splice(Math.min(i, bag.length - 1), 1)[0]); }
  return out;
}

/* ============ MAIN RENDER ============ */
let TAB = "path", PL = null;
function topbar() {
  syncHearts(); const st = liveStreak();
  return `<header class="top"><div class="wrap"><div class="flag" aria-label="Eesti keel"><i></i><i></i><i></i></div>
  <div class="stat s-flame ${st ? "" : "off"}" title="Päevi järjest">${I.flame}<span>${st}</span></div>
  <div class="stat s-gem" title="XP">${I.gem}<span>${S.xp}</span></div>
  <div class="stat s-heart" title="Südamed">${I.heart}<span>${S.unlimited ? "∞" : S.hearts}</span></div></div></header>`;
}
function navbar() {
  const b = (id, ic, l) => `<button data-tab="${id}" ${TAB === id ? 'aria-current="page"' : ""}>${I[ic]}<span>${l}</span></button>`;
  return `<nav class="nav"><div class="in">${b("path", "path", "Teekond")}${b("words", "words", "Sõnad")}${b("practice", "dumb", "Harjuta")}${b("me", "me", "Profiil")}</div></nav>`;
}
const OFF = [0, 40, 60, 40, 0, -40, -60, -40];
function renderPath() {
  const cur = curIndex(); let k = 0, h = "";
  SECTIONS.forEach(sec => {
    const us = UNITS.filter(u => u.sec === sec.n); if (!us.length) return;
    h += `<div class="sechead"><span>Osa ${sec.n} · ${sec.lv}</span><h2>${esc(sec.t)}</h2></div>`;
    us.forEach((u, ui) => {
      const c = `var(--u${u.c})`, cd = `var(--u${u.c}-d)`;
      h += `<section class="unit" style="--c:${c};--cd:${cd}"><div class="ubar" style="background:${c};--ud:${cd}"><div><small>Peatükk ${u.id}</small><h3>${esc(u.t)}</h3><p>${esc(u.ti)}</p></div>${u.note ? `<button class="gbtn" data-guide="${u.id}">${I.book}Juhend</button>` : ""}</div><div class="nodes">`;
      for (let j = 0; j < 6; j++) {
        const n = NODES.find(x => x.u === u && x.k === j), gi = NODES.indexOf(n), done = !!S.done[n.id], isCur = gi === cur, locked = gi > cur;
        const ic = done ? I.check : locked ? I.lock : I[NODE_T[j][2]];
        h += `<div class="nwrap" style="transform:translateX(${OFF[(k++) % 8]}px)">${isCur ? `<div class="start-tag">${done ? "KORDA" : "ALUSTA"}</div>` : ""}<button class="node ${done ? "done" : ""} ${locked ? "locked" : ""} ${isCur ? "cur" : ""}" data-node="${n.id}" aria-label="${esc(NODE_T[j][0])}${done ? ", tehtud" : locked ? ", lukus" : ""}">${ic}</button>${isCur || j === 4 ? `<div class="nlabel">${esc(NODE_T[j][0])}</div>` : ""}</div>`;
      }
      h += `<div class="pmascot ${ui % 2 ? "l" : "r"}">${bird(ui % 3 === 2 ? "happy" : "")}</div></div></section>`;
    });
  });
  h += `<p class="endnote">${cur >= NODES.length ? "Kõik on tehtud. Väga tubli!" : "Uued peatükid tulevad peagi."}</p>`;
  return h;
}
function learnedUnits() { return UNITS.filter(u => S.done[`u${u.id}-0`]); }
function renderWords() {
  const us = learnedUnits(); const tot = us.reduce((a, u) => a + (u.words || []).length, 0);
  let h = `<div class="page"><h1>Sinu sõnad</h1><p class="sub">${tot ? `${tot} õpitud sõna · <i>parole imparate</i>` : "Lõpeta esimene tund, siis näed siin oma sõnu."}</p>`;
  if (!tot) h += `<div class="empty"><div style="width:120px;margin:0 auto 10px">${bird()}</div>Alusta esimesest tunnist: «Tere!»</div>`;
  us.forEach(u => { h += `<div class="sect"><h2>${esc(u.t)} <span class="hint" style="font-size:14px">· ${u.id}</span></h2><div class="card wlist">${wordsOf(u).map(w => `<div class="w"><span class="em">${pic(w.p) || "·"}</span><div class="tx"><div class="et">${esc(w.e)}</div><div class="it">${esc(w.i)}</div></div>${hasVoice() ? `<button class="spk" data-say="${esc(w.e)}" aria-label="Kuula">${I.spk}</button>` : ""}</div>`).join("")}</div></div>`; });
  return h + "</div>";
}
function renderPractice() {
  const weak = Object.entries(S.weak).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const name = t => { const id = +t.slice(1); const u = UNITS.find(x => x.id === id); if (!u) return t; return t[0] === "g" ? `Grammatika: ${u.gname || u.t}` : t[0] === "s" ? `Kõne: ${u.t}` : `Sõnad: ${u.t}`; };
  return `<div class="page"><h1>Harjuta</h1><p class="sub">Kordamine sinu vigade põhjal · <i>ripasso basato sui tuoi errori</i></p>
  <button class="btn ok" data-practice>Alusta harjutust${S.unlimited || S.hearts >= MAXH ? "" : " · +1 süda"}</button>
  <div class="sect"><h2>Mida harjutada</h2><div class="card">${weak.length ? weak.map(([t, v]) => `<div class="row"><div class="lbl">${esc(name(t))}</div><span class="hint">${Math.ceil(v)} viga</span></div>`).join("") : `<div class="row"><div class="lbl">Vigu pole veel. Tubli!<small>Nessun errore da ripassare.</small></div></div>`}</div></div></div>`;
}
function renderMe() {
  syncHearts();
  const nDone = NODES.filter(n => S.done[n.id]).length, nWords = learnedUnits().reduce((a, u) => a + (u.words || []).length, 0), dx = dailyXp();
  const t = (ic, col, v, l) => `<div class="tile"><span style="color:${col}">${I[ic]}</span><div><b>${v}</b><span>${l}</span></div></div>`;
  const sm = speakMode(), smTxt = sm === "off" ? "Rääkimine on 15 minutiks välja lülitatud" : sm === "sr" ? "Kõnetuvastus (Chrome)" : "Salvesta ja võrdle";
  return `<div class="page"><h1>Profiil</h1><p class="sub">Eesti keel · tase ${Math.floor(S.xp / 100) + 1}</p>
  <div class="grid2">${t("flame", "var(--flame)", liveStreak(), "päeva järjest")}${t("gem", "var(--blue)", S.xp, "XP kokku")}${t("check", "var(--ok)", nDone + "/" + NODES.length, "tundi")}${t("words", "var(--u3)", nWords, "sõna")}</div>
  <div class="sect"><h2>Tänane eesmärk</h2><div class="card" style="padding:14px"><div style="display:flex;justify-content:space-between;font-weight:800"><span>${dx} / ${S.goal} XP</span><span class="hint">${dx >= S.goal ? "Tehtud!" : "Veel " + (S.goal - dx) + " XP"}</span></div><div class="goalbar"><i style="width:${Math.min(100, dx / S.goal * 100)}%"></i></div></div></div>
  <div class="sect"><h2>Rääkimine</h2><div class="card">
   <div class="row"><div class="lbl">Kõnetuvastuse test<small>${esc(smTxt)} · test del riconoscimento vocale</small></div><button class="btn small" data-srtest>Testi</button></div>
   <div class="row"><div class="lbl">Rääkimise režiim<small>Modalità di parlato</small></div><div class="seg"><button data-speech="auto" aria-pressed="${S.speech !== "rec"}">Automaatne</button><button data-speech="rec" aria-pressed="${S.speech === "rec"}">Salvesta</button></div></div>
   <div class="row"><label class="lbl" for="sw-tts">Kasuta eesti häält<small>${etVoice ? "Hääl «" + esc(etVoice.name) + "» leitud" : "Attiva se la voce estone è installata ma non trovata"}</small></label><input type="checkbox" class="sw" id="sw-tts" ${S.forceTts || etVoice ? "checked" : ""} ${etVoice ? "disabled" : ""}></div>
   ${hasVoice() ? `<div class="row"><div class="lbl">Proovi häält<small>Prova la voce</small></div><button class="spk" data-say="Tere! Kuidas läheb?" aria-label="Kuula">${I.spk}</button></div>` : ""}
  </div></div>
  <div class="sect"><h2>Seaded</h2><div class="card">
   <div class="row"><div class="lbl">Päeva eesmärk<small>Obiettivo giornaliero (XP)</small></div><div class="seg">${[10, 20, 30, 50].map(v => `<button data-goal="${v}" aria-pressed="${S.goal === v}">${v}</button>`).join("")}</div></div>
   <div class="row"><div class="lbl">Grammatika keel<small>Lingua delle spiegazioni</small></div><div class="seg"><button data-nl="et" aria-pressed="${S.noteLang === "et"}">Eesti</button><button data-nl="it" aria-pressed="${S.noteLang === "it"}">Italiano</button></div></div>
   <div class="row"><label class="lbl" for="sw-it">Näita juhiseid ka itaalia keeles<small>Mostra anche le istruzioni in italiano</small></label><input type="checkbox" class="sw" id="sw-it" ${S.showIt ? "checked" : ""}></div>
   <div class="row"><label class="lbl" for="sw-sound">Heliefektid<small>Effetti sonori</small></label><input type="checkbox" class="sw" id="sw-sound" ${S.sound ? "checked" : ""}></div>
   <div class="row"><label class="lbl" for="sw-unl">Lõpmatud südamed<small>Cuori illimitati</small></label><input type="checkbox" class="sw" id="sw-unl" ${S.unlimited ? "checked" : ""}></div>
   <div class="row"><div class="lbl">Südamed<small>${S.unlimited ? "Lõpmatud" : S.hearts >= MAXH ? "Täis" : "Järgmine " + nextHeartMin() + " min pärast"}</small></div><span class="stat s-heart">${I.heart}${S.unlimited ? "∞" : S.hearts}</span></div>
  </div></div>
  <div class="sect"><h2>Teatatud vead</h2><div class="card">${S.reports.length ? S.reports.slice().reverse().map(r => `<div class="rep"><b>${esc(r.item)}</b>${r.ans ? `<small>Sinu vastus: ${esc(r.ans)}</small><br>` : ""}<small>Peatükk ${r.u} · ${esc(r.n)} · ${esc(r.at)}</small></div>`).join("") + `<div class="row"><button class="btn small" data-repcopy>Kopeeri nimekiri</button><button class="btn small ghost" data-repclear>Tühjenda</button></div>` : `<div class="row"><div class="lbl">Ühtegi viga pole teatatud.<small>Usa la bandierina nella lezione per segnalare un errore.</small></div></div>`}</div></div>
  <div class="sect"><h2>Edenemise ülekanne</h2><div class="card" style="padding:14px;display:flex;flex-direction:column;gap:12px"><p class="hint" style="margin:0">Kopeeri kood ühes seadmes ja kleebi teises. · Copia il codice e incollalo sull'altro dispositivo.</p><button class="btn ghost" data-export>Kopeeri minu kood</button><textarea id="imp" placeholder="Kleebi kood siia" style="min-height:70px;font-size:14px"></textarea><button class="btn" data-import>Impordi kood</button></div></div>
  <div class="sect"><button class="btn ghost" data-reset style="color:var(--bad)">Kustuta edenemine</button></div>
  </div>`;
}
function render() {
  const body = TAB === "path" ? renderPath() : TAB === "words" ? renderWords() : TAB === "practice" ? renderPractice() : renderMe();
  $("#app").innerHTML = topbar() + `<main><div class="wrap">${body}</div></main>` + navbar();
}

/* ============ SHEETS ============ */
function sheet(html) { $("#layer").innerHTML = `<div class="scrim" data-close><div class="sheet" role="dialog" aria-modal="true">${html}</div></div>`; }
function closeSheet() { stopListening(); $("#layer").innerHTML = ""; }
function noteHtml(u, lang) { return `<div class="note">${(lang === "it" ? u.note.it : u.note.et) || u.note.et}</div>`; }
function langSwitch() { return `<div class="langsw"><button data-nl="et" aria-pressed="${S.noteLang === "et"}">ET</button><button data-nl="it" aria-pressed="${S.noteLang === "it"}">IT</button></div>`; }
let GUIDE_U = null;
function guideSheet(id) { const u = UNITS.find(x => x.id === id); GUIDE_U = u; sheet(`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div class="eyebrow">Juhend · Peatükk ${u.id}</div>${langSwitch()}</div><h3>${esc(u.t)}</h3><div id="notebox">${noteHtml(u, S.noteLang)}</div><div style="margin-top:18px"><button class="btn ghost" data-close-btn>Sulge</button></div>`); }
function nodeSheet(id) {
  const n = NODES.find(x => x.id === id), gi = NODES.indexOf(n), cur = curIndex(), u = n.u;
  if (gi > cur) { toast("Tee kõigepealt eelmised tunnid. · Completa prima le lezioni precedenti."); return; }
  const done = !!S.done[n.id], c = `var(--u${u.c})`, cd = `var(--u${u.c}-d)`, xp = n.k === 5 ? 20 : 10;
  const noH = !S.unlimited && S.hearts <= 0;
  const chips = n.k === 0 ? (u.words || []).map(w => `<span class="chip">${esc(w[0])}</span>`).join("") : n.k === 4 && u.story ? `<span class="chip">${esc(u.story.t)}</span>` : n.k === 1 && u.gname ? `<span class="chip">${esc(u.gname)}</span>` : "";
  sheet(`<div class="eyebrow">Peatükk ${u.id} · ${esc(u.t)} · ${n.k + 1}/6</div><h3>${esc(NODE_T[n.k][0])}</h3><p class="hint" style="margin:0">${esc(NODE_T[n.k][1])}</p><div class="chips">${chips}</div>
  ${noH ? `<p class="hint">Südamed on otsas. Järgmine tuleb ${nextHeartMin()} minuti pärast, või harjuta, et üks kohe saada.</p><button class="btn ok" data-practice>Harjuta · +1 süda</button>` : `<button class="btn" style="--b:${c};--bd:${cd}" data-start="${id}">${done ? "Korda" : "Alusta"} · +${xp} XP</button>`}`);
}
function srTestSheet() {
  sheet(`<div class="eyebrow">Kõnetuvastuse test</div><h3>Ütle: «Tere, kuidas läheb?»</h3><p class="hint" style="margin:0">Say «Tere, kuidas läheb?» after tapping the microphone.</p>
  ${SR ? `<button class="mic" id="srt" aria-label="Räägi">${I.mic}</button><div class="heard" id="srout"></div>` : `<p><b>See brauser ei toeta kõnetuvastust.</b> Rääkimise harjutused kasutavad salvestamist. · Questo browser non supporta il riconoscimento vocale.</p>`}
  <div style="margin-top:12px"><button class="btn ghost" data-close-btn>Sulge</button></div>`);
  const b = $("#srt"); if (!b) return;
  b.onclick = () => {
    b.classList.add("on"); $("#srout").textContent = "Kuulan…";
    recognize(alts => {
      b.classList.remove("on"); const sc = speechScore("Tere kuidas läheb", alts);
      $("#srout").innerHTML = `«${esc(alts[0] || "")}»<br><span class="${sc.ratio >= .66 ? "ok" : "no"}">${sc.ratio >= .66 ? "Töötab! Eesti kõnetuvastus on sees." : "Ei saanud hästi aru. Proovi uuesti."}</span>`;
      if (sc.ratio >= .66) { S.speech = "auto"; save(); }
    }, err => {
      b.classList.remove("on");
      const msg = err === "language-not-supported" ? "Eesti keelt ei toetata. Lülitan sisse salvestamise režiimi. · Estone non supportato: uso la registrazione." : err === "not-allowed" || err === "service-not-allowed" ? "Mikrofon pole lubatud. Luba mikrofon brauseri seadetes. · Microfono non consentito." : err === "network" ? "Võrguviga: kõnetuvastus vajab internetti. · Serve la connessione." : "Midagi ei kuulnud (" + err + "). Proovi uuesti.";
      $("#srout").innerHTML = `<span class="no">${esc(msg)}</span>`;
      if (err === "language-not-supported") { S.speech = "rec"; save(); }
    });
  };
}

/* ============ PLAYER ============ */
function start(kind, node) {
  closeSheet(); syncHearts();
  const ex = kind === "practice" ? practiceLesson() : lessonFor(node);
  if (!ex.length) { toast("Selles tunnis pole veel harjutusi."); return; }
  PL = { kind, node, queue: ex.slice(), total: ex.filter(e => !["intro", "note", "storyread"].includes(e.t)).length || 1, doneN: 0, mist: 0, t0: Date.now(), cur: null, state: "ask", retry: false };
  document.body.style.overflow = "hidden";
  nextEx();
}
function quit() { stopListening(); PL = null; document.body.style.overflow = ""; $("#layer").innerHTML = ""; render(); }
const passive = e => ["intro", "note", "storyread"].includes(e.t);
function nextEx() {
  stopListening();
  if (!PL.queue.length) return finish();
  if (!S.unlimited && PL.kind !== "practice" && S.hearts <= 0) return outOfHearts();
  PL.cur = PL.queue.shift(); Object.assign(PL, { sel: null, ans: [], state: "ask", mSel: null, heard: null, tries: 0, clip: null, showTr: false, showIt: S.showIt });
  draw(); autoplay();
}
function autoplay() {
  const c = PL.cur;
  const t = c.t === "intro" ? c.w.e : c.t === "buildl" || c.t === "dict" || c.t === "repeat" ? c.sn.e : c.t === "qas" || c.t === "qa" ? c.q.q : c.t === "sit" ? (c.s.line ? c.s.line[1] : null) : c.t === "listenpic" ? c.w.e : c.t === "buildt" && c.dir === "e2i" ? c.sn.e : null;
  if (t) setTimeout(() => say(t), 250);
}
function head() {
  return `<div class="phead"><button class="xbtn" data-quit aria-label="Välju">${I.x}</button><div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="${PL.total}" aria-valuenow="${PL.doneN}"><i style="width:${Math.min(100, PL.doneN / PL.total * 100)}%"></i></div>${PL.kind === "practice" || S.unlimited ? "" : `<span class="stat s-heart">${I.heart}${S.hearts}</span>`}<button class="xbtn flagbtn" data-report aria-label="Teata veast">${I.flag}</button></div>`;
}
function insRow(key, custom) {
  const p = custom || INS[key];
  return `<div class="ins"><h2>${esc(p[0])}</h2><button class="itbtn" data-itt aria-pressed="${PL.showIt}">IT</button></div>${PL.showIt ? `<p class="insit">${esc(p[1])}</p>` : ""}`;
}
function bubble(text, et, it) {
  const tr = it ? `<button class="reveal" data-tr>${PL.showTr ? esc(it) : "Tõlge"}</button>` : "";
  return `<div class="speech"><div class="m">${bird()}</div><div class="bubble">${et && hasVoice() ? `<button class="spk" data-say="${esc(text)}" aria-label="Kuula">${I.spk}</button>` : ""}<span class="t">${et ? gloss(text) : esc(text)}${tr ? "<br>" + tr : ""}</span></div></div>`;
}
const optBtns = (arr, f) => `<div class="opts">${arr.map((o, k) => `<button class="opt ${PL.sel === k ? "sel" : ""}" data-sel="${k}"><span class="k">${k + 1}</span><span>${f(o)}</span></button>`).join("")}</div>`;
function micBlock(target) {
  const m = speakMode();
  if (m === "sr") {
    const marks = PL.heard ? PL.heard.marks : null;
    const tgt = target ? `<div class="target">${toks(target, true).map((w, i) => `<span class="${marks ? (marks[i] ? "hit" : "miss") : ""}">${esc(w)}</span>`).join(" ")}</div>` : "";
    return `${tgt}<button class="mic" data-mic aria-label="Räägi">${I.mic}</button><div class="heard">${PL.heard ? "«" + esc(PL.heard.heard) + "»" : `<span class="hint">Puuduta mikrofoni ja räägi</span>`}</div><button class="linkbtn" data-nospeak>Ma ei saa praegu rääkida</button>`;
  }
  return `${target ? `<div class="target">${gloss(target)}</div>` : ""}<button class="mic" data-recclip aria-label="Salvesta">${I.mic}</button>
   <div class="heard">${PL.clip ? `<button class="btn small ghost" data-playclip>${I.play} Minu salvestus</button> ${target && hasVoice() ? `<button class="btn small ghost" data-say="${esc(target)}">${I.spk} Näidis</button>` : ""}` : `<span class="hint">Salvesta oma hääl ja võrdle näidisega (8 s)</span>`}</div>
   <button class="linkbtn" data-nospeak>Ma ei saa praegu rääkida</button>`;
}
function exBody() {
  const c = PL.cur; const retry = PL.retry ? `<div class="tag err">Eelmine viga</div>` : "";
  switch (c.t) {
    case "intro": return `${insRow("intro")}<div class="wcard"><div class="bigpic">${pic(c.w.p)}</div><div class="word">${esc(c.w.e)}${hasVoice() ? `<button class="spk" data-say="${esc(c.w.e)}" aria-label="Kuula">${I.spk}</button>` : ""}</div>${c.w.x ? `<div class="exs">${gloss(c.w.x)}${hasVoice() ? ` <button class="spk" style="display:inline-grid;vertical-align:middle" data-say="${esc(c.w.x)}" aria-label="Kuula">${I.spk}</button>` : ""}</div>` : ""}<button class="reveal" data-tr>${PL.showTr ? esc(c.w.i) : "Näita tõlget"}</button></div>`;
    case "note": return `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div class="eyebrow">Grammatika · ${esc(c.u.gname || "")}</div>${langSwitch()}</div><div id="notebox">${noteHtml(c.u, S.noteLang)}</div>`;
    case "pickword": return `${retry}${insRow("pickword")}<div class="bigpic">${pic(c.w.p)}</div>${optBtns(c.opts, o => esc(o))}`;
    case "listenpic": return `${retry}${insRow("listenpic")}<div class="listen"><button class="bigspk" data-say="${esc(c.w.e)}" aria-label="Kuula">${I.spk}</button></div><div class="pics">${c.opts.map((o, k) => `<button class="pic ${PL.sel === k ? "sel" : ""}" data-sel="${k}" aria-label="Valik ${k + 1}"><span class="em">${pic(o.p)}</span></button>`).join("")}</div>`;
    case "meaning": return `${retry}${insRow("meaning")}${bubble(c.w.e, true)}${optBtns(c.opts, o => esc(o))}`;
    case "typeword": return `${retry}${insRow("typeword")}<div class="bigpic">${pic(c.w.p)}</div><input class="txt" id="typed" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(c.w.e[0])}…">${keys()}`;
    case "pairs": {
      if (!c.L) { c.L = shuffle(c.items.map((w, k) => ({ k, t: w.e }))); c.R = shuffle(c.items.map((w, k) => ({ k, p: w.p, t: w.i }))); c.gone = new Set(); }
      const cell = (x, side) => `<button class="mt ${c.gone.has(x.k) ? "gone" : ""} ${PL.mSel && PL.mSel.side === side && PL.mSel.k === x.k ? "sel" : ""}" data-m="${side}:${x.k}">${side === "R" && c.pics ? `<span class="em">${pic(x.p)}</span>` : esc(x.t)}</button>`;
      return `${insRow("pairs")}<div class="match"><div class="col">${c.L.map(x => cell(x, "L")).join("")}</div><div class="col">${c.R.map(x => cell(x, "R")).join("")}</div></div>`;
    }
    case "buildl": case "buildt": {
      const prompt = c.t === "buildl" ? `<div class="listen"><button class="bigspk" data-say="${esc(c.sn.e)}" aria-label="Kuula">${I.spk}</button><button class="bigspk slow" data-say-slow="${esc(c.sn.e)}" aria-label="Aeglaselt">${I.slow}</button></div>` : bubble(c.sn.i, false);
      const used = new Set(PL.ans);
      return `${retry}${insRow(c.t)}${prompt}<div class="ansline">${PL.ans.map((ti, k) => `<button class="wt" data-out="${k}">${esc(c.tiles[ti])}</button>`).join("")}</div><div class="bank">${c.tiles.map((t, k) => `<button class="wt ${used.has(k) ? "ghost" : ""}" data-in="${k}" ${used.has(k) ? 'tabindex="-1" aria-hidden="true"' : ""}>${esc(t)}</button>`).join("")}</div>`;
    }
    case "dict": return `${retry}${insRow("dict")}<div class="listen"><button class="bigspk" data-say="${esc(c.sn.e)}" aria-label="Kuula">${I.spk}</button><button class="bigspk slow" data-say-slow="${esc(c.sn.e)}" aria-label="Aeglaselt">${I.slow}</button></div><textarea id="typed" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Kirjuta eesti keeles"></textarea>${keys()}`;
    case "repeat": return `${insRow("repeat")}<div class="listen"><button class="bigspk" data-say="${esc(c.sn.e)}" aria-label="Kuula">${I.spk}</button><button class="bigspk slow" data-say-slow="${esc(c.sn.e)}" aria-label="Aeglaselt">${I.slow}</button></div>${micBlock(c.sn.e)}`;
    case "read": return `${insRow("read")}${micBlock(c.sn.e)}`;
    case "qas": return `${insRow("qas")}${bubble(c.q.q, true, c.q.qi)}${micBlock(null)}${c.q.h ? `<p class="hint" style="text-align:center;margin:0">${gloss(c.q.h)}</p>` : ""}`;
    case "qa": return `${retry}${insRow("qa")}${bubble(c.q.q, true, c.q.qi)}<textarea id="typed" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Vasta eesti keeles"></textarea>${c.q.h ? `<p class="hint" style="margin:0">${gloss(c.q.h)}</p>` : ""}${keys()}`;
    case "gchoose": case "gtype": {
      const g = c.g, fill = PL.sel != null && c.opts ? esc(c.opts[PL.sel]) : "&nbsp;";
      const q = gloss(g.q).replace("___", c.t === "gchoose" ? `<span class="blank">${fill}</span>` : `<span class="blank">?</span>`);
      return `${retry}${insRow(c.t)}<div class="fill">${q}</div>${g.h ? `<p class="hint" style="margin:0">(${esc(g.h)})</p>` : ""}${g.it ? `<button class="reveal" style="align-self:flex-start" data-tr>${PL.showTr ? esc(g.it) : "Tõlge"}</button>` : ""}${c.t === "gchoose" ? optBtns(c.opts, o => esc(o)) : `<input class="txt" id="typed" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(g.h || "")}">${keys()}`}`;
    }
    case "trans": { const tk = TASKS[c.tr.task] || [c.tr.ti || "Muuda lauset", c.tr.tii || "Trasforma la frase"]; return `${retry}${insRow(null, tk)}${bubble(c.tr.q, true, c.tr.it)}<textarea id="typed" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Kirjuta lause"></textarea>${keys()}`; }
    case "sit": return `${retry}${insRow("sit")}<div class="ctx">${gloss(c.s.ctx)}</div>${c.s.line ? bubble((c.s.line[0] ? c.s.line[0] + ": " : "") + c.s.line[1], true, c.s.li) : ""}${optBtns(c.opts, o => gloss(o.o))}`;
    case "smeaning": return `${retry}${insRow("smeaning")}${bubble(c.sn.e, true)}${optBtns(c.opts, o => esc(o))}`;
    case "storyread": return `${insRow("storyread")}${storyHtml(c.st)}`;
    case "storyq": return `${retry}${insRow("storyq")}${storyMini(c.st)}${bubble(c.q.q, true, c.q.qi)}${optBtns(c.opts, o => gloss(o.o))}`;
    case "tf": return `${retry}${insRow("tf")}${storyMini(c.st)}${bubble(c.tf[0], true)}${optBtns(["Õige", "Vale"], o => o)}`;
  }
  return "";
}
function storyHtml(st) {
  const who = n => n ? `<div class="who" style="background:var(--u${(n.charCodeAt(0) % 6) + 1})">${esc(n[0])}</div>` : `<div class="who n">·</div>`;
  return `<div class="story"><p class="stitle">${esc(st.t)} ${hasVoice() ? `<button class="btn small ghost" data-playstory>${I.play} Kuula</button>` : ""}</p>${st.lines.map((l, i) => `<div class="sline">${who(l[0])}<div class="tx ${l[0] ? "" : "n"}" data-line="${i}">${l[0] ? `<b>${esc(l[0])}:</b> ` : ""}${gloss(l[1])}</div>${hasVoice() ? `<button class="spk" data-say="${esc(l[1])}" aria-label="Kuula">${I.spk}</button>` : ""}</div>`).join("")}</div>`;
}
function storyMini(st) { return `<details><summary class="hint" style="cursor:pointer">Loe lugu uuesti · ${esc(st.t)}</summary>${storyHtml(st)}</details>`; }
function keys() { return `<div class="keys">${["õ", "ä", "ö", "ü"].map(k => `<button data-key="${k}">${k}</button>`).join("")}</div>`; }
function canCheck() {
  const c = PL.cur;
  if (["buildl", "buildt"].includes(c.t)) return PL.ans.length > 0;
  if (["typeword", "dict", "qa", "gtype", "trans"].includes(c.t)) { const t = $("#typed"); return !!(t && t.value.trim()); }
  if (["repeat", "read", "qas"].includes(c.t)) return false;
  return PL.sel != null;
}
function foot() {
  const c = PL.cur;
  if (passive(c)) return `<div class="pfoot"><button class="btn" data-next>Jätka</button></div>`;
  if (PL.state === "ask") {
    if (c.t === "pairs") return `<div class="pfoot"><button class="btn ghost" data-skip>Jäta vahele</button></div>`;
    if (["repeat", "read", "qas"].includes(c.t)) {
      if (speakMode() === "rec" && PL.clip) return `<div class="pfoot"><button class="btn ghost" data-recretry>Proovi uuesti</button><button class="btn ok" data-selfok>Kõlas hästi</button></div>`;
      return `<div class="pfoot"><button class="btn ghost" data-skip>Jäta vahele</button></div>`;
    }
    return `<div class="pfoot"><button class="btn ghost skip" data-skip>Jäta vahele</button><button class="btn ok" data-check ${canCheck() ? "" : "disabled"}>Kontrolli</button></div>`;
  }
  const r = PL.res, good = r.ok;
  const praise = rnd(["Õige!", "Väga hea!", "Tubli!", "Suurepärane!", "Täpselt!"]);
  const title = good ? (r.kind === "exact" || !r.kind ? praise : "Peaaegu õige") : (r.title || "Õige vastus:");
  let tx = "";
  if (good && r.kind === "accent") tx = `Pane tähele täpitähti: <b>${esc(r.a)}</b>`;
  else if (good && r.kind === "typo") tx = `Väike trükiviga: <b>${esc(r.a)}</b>`;
  else if (good && r.show) tx = esc(r.show);
  else if (!good && r.right) tx = esc(r.right);
  if (r.mean) tx += `<small>${esc(r.mean)}</small>`;
  if (r.why) tx += `<span class="why">${esc(r.why)}</span>`;
  return `<div class="pfoot fb ${good ? "good" : "wrong"}"><div class="fbin"><div class="fbt"><span class="ic" style="color:var(${good ? "--ok" : "--bad"})">${good ? I.check : I.x}</span><div><h3>${esc(title)}</h3>${tx ? `<div class="fbtx">${tx}</div>` : ""}</div></div><button class="btn ${good ? "ok" : "bad"}" data-next>Jätka</button></div></div>`;
}
function draw() {
  $("#layer").innerHTML = `<div class="player" role="dialog" aria-modal="true" aria-label="Tund">${head()}<div class="pbody">${exBody()}</div>${foot()}</div>`;
  const t = $("#typed"); if (t) { t.focus({ preventScroll: true }); t.addEventListener("input", () => { const b = $("[data-check]"); if (b) b.disabled = !canCheck(); }); }
}
function refreshBody() { const pb = $(".pbody"); if (!pb) return; const val = $("#typed") ? $("#typed").value : null; pb.innerHTML = exBody(); if (val != null && $("#typed")) $("#typed").value = val; $(".pfoot").outerHTML = foot(); const t = $("#typed"); if (t) t.addEventListener("input", () => { const b = $("[data-check]"); if (b) b.disabled = !canCheck(); }); }
function check() {
  const c = PL.cur; let r;
  const typed = () => ($("#typed") || {}).value || "";
  switch (c.t) {
    case "pickword": r = { ok: c.opts[PL.sel] === c.w.e, right: c.w.e, mean: c.w.i }; say(c.w.e); break;
    case "listenpic": r = { ok: c.opts[PL.sel].e === c.w.e, right: c.w.e, mean: c.w.i }; break;
    case "meaning": r = { ok: c.opts[PL.sel] === c.w.i || c.w.ia.includes(c.opts[PL.sel]), right: c.w.i }; break;
    case "typeword": r = judge(typed(), [c.w.e], "et", true); r.right = c.w.e; r.mean = c.w.i; say(c.w.e); break;
    case "buildl": case "buildt": {
      const user = PL.ans.map(k => c.tiles[k]).join(" ");
      const toEt = c.dir !== "e2i", answers = toEt ? [c.sn.e, ...(c.sn.ea || [])] : [c.sn.i, ...(c.sn.ia || [])];
      r = judge(user, answers, toEt ? "et" : "it", false); if (r.ok) r.kind = "exact";
      r.right = toEt ? c.sn.e : c.sn.i; r.mean = c.dir === "listen" ? c.sn.i : null; if (r.ok && c.dir === "listen") r.show = c.sn.i;
      if (toEt && c.dir !== "listen") say(c.sn.e); break;
    }
    case "dict": r = judge(typed(), [c.sn.e, ...(c.sn.ea || [])], "et", true); r.right = c.sn.e; r.mean = c.sn.i; break;
    case "qa": { const ok = keyCheck(typed(), c.q.k); r = { ok, kind: "exact", right: c.q.a[0], title: ok ? null : "Näiteks:", show: ok && canon(typed(), "et") !== canon(c.q.a[0], "et") ? "Näiteks: " + c.q.a[0] : null }; say(c.q.a[0]); break; }
    case "gchoose": { const v = c.opts[PL.sel]; r = { ok: v === c.g.a || (c.g.aa || []).includes(v), right: c.g.q.replace("___", c.g.a), why: c.g.why, mean: c.g.it }; say(c.g.q.replace("___", c.g.a)); break; }
    case "gtype": r = judge(typed(), [c.g.a, ...(c.g.aa || [])], "et", true); r.right = c.g.q.replace("___", c.g.a); r.why = c.g.why; r.mean = c.g.it; say(c.g.q.replace("___", c.g.a)); break;
    case "trans": r = judge(typed(), c.tr.a, "et", true); r.right = c.tr.a[0]; r.why = c.tr.why; say(c.tr.a[0]); break;
    case "sit": r = { ok: c.opts[PL.sel].ok, right: c.s.o[0], why: c.s.why }; say(c.s.o[0]); break;
    case "smeaning": r = { ok: c.opts[PL.sel] === c.sn.i, right: c.sn.i }; break;
    case "storyq": r = { ok: c.opts[PL.sel].ok, right: c.q.o[0] }; break;
    case "tf": r = { ok: (PL.sel === 0) === c.tf[1], right: c.tf[1] ? "Õige" : "Vale", why: c.tf[2] || null }; break;
  }
  resolve(r);
}
function resolve(r, noHeart) {
  const c = PL.cur; PL.res = r; PL.state = "fb"; tone(r.ok);
  if (c.tag) { S.weak[c.tag] = Math.max(0, (S.weak[c.tag] || 0) + (r.ok ? -.5 : 1)); }
  if (r.ok) PL.doneN++;
  else {
    PL.mist++; if (!c._retry) { c._retry = true; PL.queue.push(c); } else PL.doneN++;
    if (!noHeart && !S.unlimited && PL.kind !== "practice") { S.hearts = Math.max(0, S.hearts - 1); if (S.hearts === MAXH - 1) S.heartsTs = Date.now(); }
  }
  save(); draw();
  const m = $(".speech .m"); if (m && r.ok) m.classList.add("hop");
}
function speakResult(sc, target) {
  PL.heard = sc; const pass = sc.ratio >= (toks(target || "x").length <= 3 ? .66 : .75);
  if (pass) resolve({ ok: true, kind: "exact", show: "Sain aru: «" + sc.heard + "»" }, true);
  else { PL.tries++; refreshBody(); if (PL.tries >= 3) resolve({ ok: false, title: "Proovime hiljem uuesti", right: target || "", mean: "Kõnetuvastus ei saanud aru." }, true); }
}
function micTap() {
  const c = PL.cur, b = $("[data-mic]"); if (!b) return;
  if (REC) { stopListening(); b.classList.remove("on"); return; }
  b.classList.add("on"); $(".heard").innerHTML = `<span class="hint">Kuulan…</span>`;
  recognize(alts => {
    if (c.t === "qas") {
      const best = alts.find(a => keyCheck(a, c.q.k));
      PL.heard = { heard: best || alts[0], marks: null };
      if (best) resolve({ ok: true, kind: "exact", show: "Sain aru: «" + best + "»" + (canon(best, "et") !== canon(c.q.a[0], "et") ? " · Näiteks: " + c.q.a[0] : "") }, true);
      else { PL.tries++; refreshBody(); if (PL.tries >= 3) resolve({ ok: false, title: "Näiteks:", right: c.q.a[0] }, true); }
    } else speakResult(speechScore(c.sn.e, alts), c.sn.e);
  }, err => {
    b.classList.remove("on");
    if (err === "language-not-supported") { S.speech = "rec"; save(); toast("Eesti kõnetuvastust pole. Kasutan salvestamist."); refreshBody(); return; }
    if (err === "not-allowed" || err === "service-not-allowed") { toast("Mikrofon pole lubatud. · Microfono non consentito."); return; }
    $(".heard").innerHTML = `<span class="hint">Ma ei kuulnud midagi. Proovi uuesti.</span>`;
  });
}
function recTap() {
  const b = $("[data-recclip]"); if (!b) return;
  if (MREC && MREC.state === "recording") { MREC.stop(); return; }
  b.classList.add("on"); $(".heard").innerHTML = `<span class="hint">Salvestan… puuduta uuesti, et lõpetada</span>`;
  recordClip(url => { PL.clip = url; MREC = null; refreshBody(); }, () => { b.classList.remove("on"); toast("Mikrofon pole kättesaadav. · Microfono non disponibile."); PL.clip = "none"; refreshBody(); });
}
function matchTap(side, k) {
  const c = PL.cur;
  if (!PL.mSel || PL.mSel.side === side) { PL.mSel = { side, k }; if (side === "L") say(c.items[k].e); refreshBody(); return; }
  const a = PL.mSel; PL.mSel = null;
  if (a.k === k) {
    c.gone.add(k); tone(true); refreshBody();
    if (c.gone.size === c.items.length) { PL.doneN++; PL.res = { ok: true, kind: "exact" }; PL.state = "fb"; if (c.tag) S.weak[c.tag] = Math.max(0, (S.weak[c.tag] || 0) - .5); setTimeout(draw, 250); }
  } else {
    tone(false); if (c.tag) S.weak[c.tag] = (S.weak[c.tag] || 0) + .5; refreshBody();
    [`[data-m="${a.side}:${a.k}"]`, `[data-m="${side}:${k}"]`].forEach(q => { const el = $(q); if (el) el.classList.add("err"); });
  }
}
function cont() { PL.retry = !!(PL.queue.length && PL.queue[0]._retry); nextEx(); }
function outOfHearts() {
  $("#layer").innerHTML = `<div class="player"><div class="end"><div class="m">${bird("sad")}</div><h2 style="color:var(--heart)">Südamed on otsas</h2><p>Järgmine süda tuleb ${nextHeartMin()} minuti pärast. Harjuta, et saada üks kohe. · Ripassa per guadagnare subito un cuore.</p><div style="width:100%;max-width:420px;display:flex;flex-direction:column;gap:12px"><button class="btn ok" data-practice>Harjuta · +1 süda</button><button class="btn ghost" data-quit-now>Tagasi</button></div></div></div>`;
}
function finish() {
  stopListening();
  const n = PL.node, perfect = PL.mist === 0;
  let xp = PL.kind === "practice" ? 5 : (n.k === 5 ? 20 : 10); if (perfect && PL.kind !== "practice") xp += 5;
  const before = dailyXp();
  S.xp += xp; if (S.daily.d !== today()) S.daily = { d: today(), xp: 0 }; S.daily.xp += xp;
  if (S.lastDay !== today()) { S.streak = S.lastDay === yesterday() ? S.streak + 1 : 1; S.lastDay = today(); }
  S.best = Math.max(S.best || 0, S.streak);
  if (PL.kind !== "practice") S.done[n.id] = (S.done[n.id] || 0) + 1;
  else if (S.hearts < MAXH) { S.hearts++; if (S.hearts >= MAXH) S.heartsTs = Date.now(); }
  save();
  const acc = Math.round(PL.total / (PL.total + PL.mist) * 100), sec = Math.round((Date.now() - PL.t0) / 1000);
  const time = Math.floor(sec / 60) + ":" + pad(sec % 60);
  const goalHit = before < S.goal && S.daily.xp >= S.goal;
  const title = PL.kind === "practice" ? "Harjutus tehtud!" : n.k === 5 ? "Peatükk läbitud!" : "Tund tehtud!";
  $("#layer").innerHTML = `<div class="player"><div class="end"><div class="m hop">${bird("happy")}</div><h2>${title}</h2>
  <div class="grid3"><div class="etile" style="--c:var(--gold)"><small>XP</small><b>+${xp}</b></div><div class="etile" style="--c:var(--ok)"><small>Täpsus</small><b>${acc}%</b></div><div class="etile" style="--c:var(--blue)"><small>Aeg</small><b>${time}</b></div></div>
  <p>${perfect && PL.kind !== "practice" ? "Ühtegi viga! +5 XP. " : ""}${goalHit ? "Tänane eesmärk on täidetud! " : ""}${PL.kind === "practice" && !S.unlimited ? "Said ühe südame. " : ""}Seeria: ${S.streak} ${S.streak === 1 ? "päev" : "päeva"}.</p>
  <div style="width:100%;max-width:420px"><button class="btn" data-quit-now>Jätka</button></div></div></div>`;
}
function report() {
  const c = PL.cur; if (!c) return;
  const item = c.w ? c.w.e + " = " + c.w.i : c.sn ? c.sn.e + " = " + c.sn.i : c.g ? c.g.q.replace("___", c.g.a) : c.tr ? c.tr.q + " → " + c.tr.a[0] : c.q ? c.q.q + " → " + (c.q.a ? c.q.a[0] : c.q.o[0]) : c.s ? c.s.ctx + " → " + c.s.o[0] : c.tf ? c.tf[0] : c.st ? c.st.t : c.u ? "Grammatika: " + c.u.t : c.t;
  const ans = $("#typed") ? $("#typed").value : PL.ans && PL.ans.length ? PL.ans.map(k => c.tiles[k]).join(" ") : PL.heard ? PL.heard.heard : "";
  const u = PL.node ? PL.node.u.id : "harjutus";
  S.reports.push({ u, n: c.t, item, ans, at: today() }); save(); toast("Aitäh! Viga on salvestatud Profiili. · Segnalazione salvata.");
}

/* ============ TRANSFER ============ */
let PENDING = null;
function exportCode() { const o = Object.assign({}, S); delete o.updatedAt; return "ET1:" + btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
function parseCode(v) { try { const m = v.trim().replace(/\s+/g, ""); if (!m.startsWith("ET1:")) return null; const o = JSON.parse(decodeURIComponent(escape(atob(m.slice(4))))); if (typeof o !== "object" || typeof o.xp !== "number" || typeof o.done !== "object") return null; return o; } catch (e) { return null; } }
function copyText(txt, okMsg) { try { navigator.clipboard.writeText(txt).then(() => toast(okMsg), () => fallbackCopy(txt)); } catch (e) { fallbackCopy(txt); } }
function fallbackCopy(txt) { const t = $("#imp"); if (t) { t.value = txt; t.focus(); t.select(); toast("Vali tekst ja kopeeri see."); } }

/* ============ EVENTS ============ */
document.addEventListener("click", e => {
  const w = e.target.closest(".w"); if (w && w.dataset.g) { showTip(w); }
  const t = e.target.closest("button,[data-close]"); if (!t) return;
  const d = t.dataset;
  if (d.say) { say(d.say); return; }
  if (d.saySlow) { say(d.saySlow, true); return; }
  if (d.tab) { TAB = d.tab; render(); window.scrollTo(0, 0); return; }
  if (d.node) { nodeSheet(d.node); return; }
  if (d.guide != null) { guideSheet(+d.guide); return; }
  if (d.closeBtn != null) { closeSheet(); return; }
  if (d.close != null && e.target === t) { closeSheet(); return; }
  if (d.nl) { S.noteLang = d.nl; save(); document.querySelectorAll("[data-nl]").forEach(b => b.setAttribute("aria-pressed", b.dataset.nl === S.noteLang)); const nb = $("#notebox"); if (nb) { const u = PL && PL.cur && PL.cur.u ? PL.cur.u : GUIDE_U; if (u) nb.innerHTML = noteHtml(u, S.noteLang); } else if (!PL) render(); return; }
  if (d.start) { start("lesson", NODES.find(n => n.id === d.start)); return; }
  if (d.practice != null) { start("practice", null); return; }
  if (d.srtest != null) { srTestSheet(); return; }
  if (d.speech) { S.speech = d.speech; save(); render(); return; }
  if (d.goal) { S.goal = +d.goal; save(); render(); return; }
  if (d.repcopy != null) { copyText(S.reports.map(r => `[${r.u}/${r.n}] ${r.item}${r.ans ? " | vastus: " + r.ans : ""}`).join("\n"), "Nimekiri kopeeritud"); return; }
  if (d.repclear != null) { S.reports = []; save(); render(); return; }
  if (d.export != null) { copyText(exportCode(), "Kood kopeeritud"); return; }
  if (d.import != null) { const r = parseCode(($("#imp") || {}).value || ""); if (!r) { toast("Kood ei sobi. Kleebi see tervikuna."); return; } PENDING = r; sheet(`<h3>Impordin edenemise?</h3><p class="hint">${r.xp || 0} XP · ${Object.keys(r.done || {}).length} tundi. See asendab praeguse edenemise.</p><div style="display:flex;flex-direction:column;gap:12px;margin-top:16px"><button class="btn ok" data-import-ok>Impordi</button><button class="btn ghost" data-close-btn>Tühista</button></div>`); return; }
  if (d.importOk != null) { if (PENDING) { S = Object.assign({}, DEF, PENDING); PENDING = null; save(); location.reload(); } return; }
  if (d.reset != null) { sheet(`<h3>Kustutan kogu edenemise?</h3><p class="hint">XP, seeria ja tehtud tunnid kaovad. Seda ei saa tagasi võtta.</p><div style="display:flex;flex-direction:column;gap:12px;margin-top:16px"><button class="btn bad" data-reset-ok>Jah, kustuta</button><button class="btn ghost" data-close-btn>Tühista</button></div>`); return; }
  if (d.resetOk != null) { S = Object.assign({}, DEF, { goal: S.goal, sound: S.sound, forceTts: S.forceTts, speech: S.speech }); save(); closeSheet(); TAB = "path"; render(); return; }
  if (!PL) return;
  if (d.quit != null) { $("#layer").querySelector(".pfoot").outerHTML = `<div class="pfoot"><div class="fbin"><div class="fbt"><div><h3>Kas tahad lõpetada?</h3><div class="fbtx" style="color:var(--muted)">Selle tunni edenemine läheb kaotsi.</div></div></div><div style="display:flex;gap:12px"><button class="btn ghost" data-stay>Jää</button><button class="btn bad" data-quit-now>Lõpeta</button></div></div></div>`; return; }
  if (d.stay != null) { draw(); return; }
  if (d.quitNow != null) { quit(); return; }
  if (d.report != null) { report(); return; }
  if (d.itt != null) { PL.showIt = !PL.showIt; refreshBody(); return; }
  if (d.tr != null) { PL.showTr = !PL.showTr; refreshBody(); return; }
  if (d.playstory != null) { const ls = PL.cur.st.lines; let i = 0; const nx = () => { if (i < ls.length && PL) say(ls[i++][1], false, nx); }; nx(); return; }
  if (d.playclip != null) { if (PL.clip && PL.clip !== "none") new Audio(PL.clip).play().catch(() => { }); return; }
  if (d.nospeak != null) { S.noSpeakUntil = Date.now() + 15 * 60 * 1000; save(); PL.doneN++; toast("Rääkimine on 15 minutiks välja lülitatud."); PL.queue = PL.queue.filter(x => !["repeat", "read", "qas"].includes(x.t)); cont(); return; }
  if (d.next != null) { cont(); return; }
  if (PL.state === "ask") {
    if (d.sel != null) { PL.sel = +d.sel; const c = PL.cur; if (c.t === "listenpic") say(c.opts[PL.sel].e); if (c.t === "pickword") say(c.opts[PL.sel]); refreshBody(); return; }
    if (d.in != null) { PL.ans.push(+d.in); if (PL.cur.dir !== "e2i") say(PL.cur.tiles[+d.in]); refreshBody(); return; }
    if (d.out != null) { PL.ans.splice(+d.out, 1); refreshBody(); return; }
    if (d.m) { const [sd, k] = d.m.split(":"); matchTap(sd, +k); return; }
    if (d.key) { const ta = $("#typed"); if (!ta) return; const p = ta.selectionStart ?? ta.value.length; ta.value = ta.value.slice(0, p) + d.key + ta.value.slice(ta.selectionEnd ?? p); ta.focus(); ta.selectionStart = ta.selectionEnd = p + 1; const b = $("[data-check]"); if (b) b.disabled = !canCheck(); return; }
    if (d.check != null) { if (canCheck()) check(); return; }
    if (d.mic != null) { micTap(); return; }
    if (d.recclip != null) { recTap(); return; }
    if (d.recretry != null) { PL.clip = null; refreshBody(); return; }
    if (d.selfok != null) { resolve({ ok: true, kind: "exact", show: PL.cur.sn ? PL.cur.sn.e : PL.cur.q.a[0] }, true); return; }
    if (d.skip != null) {
      const c = PL.cur; const right = c.sn ? (c.dir === "e2i" ? c.sn.i : c.sn.e) : c.g ? c.g.q.replace("___", c.g.a) : c.tr ? c.tr.a[0] : c.q ? (c.q.a || c.q.o)[0] : c.s ? c.s.o[0] : c.w ? c.w.e + " = " + c.w.i : c.tf ? (c.tf[1] ? "Õige" : "Vale") : "";
      const spoken = ["repeat", "read", "qas", "pairs"].includes(c.t);
      PL.res = { ok: false, right, title: "Õige vastus:" }; PL.state = "fb";
      if (!spoken && !c._retry) { c._retry = true; PL.queue.push(c); } else PL.doneN++;
      draw(); return;
    }
  }
});
document.addEventListener("change", e => {
  const id = e.target.id, v = e.target.checked;
  if (id === "sw-sound") { S.sound = v; save(); }
  else if (id === "sw-unl") { S.unlimited = v; if (!v) syncHearts(); save(); render(); }
  else if (id === "sw-tts") { S.forceTts = v; save(); render(); if (v) say("Tere! Kuidas läheb?"); }
  else if (id === "sw-it") { S.showIt = v; save(); }
});
document.addEventListener("keydown", e => {
  if (!PL) { if (e.key === "Escape") closeSheet(); return; }
  if (e.key === "Enter" && !e.shiftKey) {
    if ((PL.state === "fb" || passive(PL.cur)) && $("[data-next]")) { e.preventDefault(); cont(); return; }
    if (PL.state === "ask" && canCheck()) { e.preventDefault(); check(); return; }
  }
  if (PL.state === "ask" && /^[1-4]$/.test(e.key) && PL.cur.opts && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "INPUT") { const k = +e.key - 1; if (k < PL.cur.opts.length) { PL.sel = k; refreshBody(); } }
});
setInterval(() => { if (!PL && !$("#layer").innerHTML) { const h = S.hearts; syncHearts(); if (S.hearts !== h) { save(); render(); } } }, 60000);
render();
