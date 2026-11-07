/* Osa 1 · Esimesed sammud · A1.1 — units 1–6 (rebuilt from the first version of the app). */
(window.UNITS = window.UNITS || []).push(
{
  id: 1, sec: 1, c: 1, t: "Tervitused", ti: "Saluti e cortesia", gname: "Tere ja aitäh",
  words: [
    ["tere", "ciao, salve", "👋", "Tere, Mari!", ["salve", "ciao"]],
    ["aitäh", "grazie", "🙏", "Aitäh, väga hea!"],
    ["palun", "per favore, prego", "", "Üks kohv, palun.", ["per favore", "prego"]],
    ["jah", "sì", "✅", "Jah, palun."],
    ["ei", "no", "❌", "Ei, aitäh."],
    ["tere hommikust", "buongiorno", "🌅", "Tere hommikust, Jaan!"],
    ["tere õhtust", "buonasera", "🌆", "Tere õhtust, Kati!"],
    ["head ööd", "buonanotte", "🌙", "Head ööd, Mari!"],
    ["head aega", "arrivederci", "", "Head aega! Homseni!"],
    ["vabandust", "scusa, scusi", "🙇", "Vabandust, kus on kohvik?"],
    ["kuidas läheb", "come va", "", "Tere! Kuidas läheb?"],
    ["hästi", "bene", "👍", "Mul läheb hästi."]
  ],
  gl: { "homseni": "a domani", "kus": "dove", "on": "è", "kohvik": "caffetteria", "mul": "a me", "läheb": "va", "väga": "molto", "hea": "buono", "üks": "uno", "kohv": "caffè", "halvasti": "male", "normaalselt": "normalmente", "nägemist": "arrivederci", "tänan": "ringrazio" },
  note: {
    et: `<h4>Tere!</h4><p><b>Tere</b> sobib alati: hommikul, päeval ja õhtul.</p>
<div class="tabw"><table><tr><th>Millal?</th><th>Ütle</th></tr><tr><td>🌅 hommikul</td><td>Tere hommikust!</td></tr><tr><td>☀️ päeval</td><td>Tere päevast!</td></tr><tr><td>🌆 õhtul</td><td>Tere õhtust!</td></tr><tr><td>🌙 enne und</td><td>Head ööd!</td></tr></table></div>
<h4>Aitäh ja palun</h4><div class="ex">— Aitäh! — <b>Palun!</b></div><p><b>Palun</b> = «per favore» ja ka «prego».</p>
<h4>Rõhk</h4><p>Rõhk on peaaegu alati esimesel silbil: <b>TE</b>-re, <b>AI</b>-täh, <b>PA</b>-lun.</p>`,
    it: `<h4>Tere!</h4><p><b>Tere</b> va bene sempre, a ogni ora del giorno.</p>
<div class="tabw"><table><tr><th>Quando</th><th>Si dice</th></tr><tr><td>🌅 al mattino</td><td>Tere hommikust!</td></tr><tr><td>☀️ di giorno</td><td>Tere päevast!</td></tr><tr><td>🌆 di sera</td><td>Tere õhtust!</td></tr><tr><td>🌙 prima di dormire</td><td>Head ööd!</td></tr></table></div>
<h4>Aitäh e palun</h4><p><b>Palun</b> vuol dire sia «per favore» sia «prego» (in risposta a «grazie»).</p>
<h4>Niente articoli, niente genere</h4><p>L'estone non ha articoli (il, un) e i nomi non hanno maschile o femminile.</p>
<h4>Accento e vocali</h4><p>L'accento cade quasi sempre sulla prima sillaba. <b>õ</b> è il suono più tipico: labbra distese, lingua indietro. Le lettere doppie sono lunghe e cambiano il significato: <b>sada</b> (cento) · <b>saada</b> (manda).</p>`
  },
  gram: [
    { q: "Tere ___! 🌅", a: "hommikust", o: ["hommikust", "õhtust", "ööd"], why: "hommik = mattino" },
    { q: "Tere ___! 🌆", a: "õhtust", o: ["õhtust", "hommikust", "päevast"], why: "õhtu = sera" },
    { q: "Head ___! 🌙", a: "ööd", o: ["ööd", "aega", "hommikust"], why: "öö = notte" },
    { q: "— Aitäh! — ___!", a: "Palun", o: ["Palun", "Tere", "Ei"], why: "Aitäh → palun (grazie → prego)" },
    { q: "Head ___! 🚶", a: "aega", o: ["aega", "ööd", "õhtust"], why: "head aega = arrivederci" },
    { q: "— Kuidas läheb? — ___, aitäh!", a: "Hästi", o: ["Hästi", "Vabandust", "Palun"], why: "hästi = bene" }
  ],
  tr: [],
  sent: [
    { e: "Tere!", i: "Ciao!", ia: ["Salve!"] },
    { e: "Tere hommikust!", i: "Buongiorno!" },
    { e: "Aitäh!", i: "Grazie!" },
    { e: "Jah, palun.", i: "Sì, per favore." },
    { e: "Ei, aitäh.", i: "No, grazie." },
    { e: "Head aega!", i: "Arrivederci!" },
    { e: "Kuidas läheb?", i: "Come va?", ia: ["Come stai?"] },
    { e: "Hästi, aitäh.", i: "Bene, grazie." },
    { e: "Vabandust!", i: "Scusa!", ia: ["Scusi!", "Mi scusi!"] },
    { e: "Head ööd!", i: "Buonanotte!", ia: ["Buona notte!"] }
  ],
  qa: [
    { q: "Kuidas läheb?", qi: "Come va?", a: ["Hästi, aitäh!"], k: ["hästi|halvasti|normaalselt|hea"] },
    { q: "Tere hommikust!", qi: "Buongiorno!", a: ["Tere hommikust!"], k: ["tere|hommikust"] },
    { q: "Aitäh!", qi: "Grazie!", a: ["Palun!"], k: ["palun"] },
    { q: "Head ööd!", qi: "Buonanotte!", a: ["Head ööd!"], k: ["ööd"] }
  ],
  sit: [
    { ctx: "On hommik. Sa näed naabrit.", line: ["Naaber", "Tere hommikust!"], o: ["Tere hommikust!", "Head ööd!", "Head aega!"] },
    { ctx: "Sõber annab sulle kohvi.", line: ["Sõber", "Palun, sinu kohv."], o: ["Aitäh!", "Vabandust!", "Tere õhtust!"] },
    { ctx: "Sa lähed koju.", line: ["Kati", "Noh, ma lähen ka."], o: ["Head aega!", "Tere hommikust!", "Palun!"] },
    { ctx: "Sa astud kogemata kellegi jalale.", line: null, o: ["Vabandust!", "Aitäh!", "Head ööd!"] }
  ],
  story: {
    t: "Hommik kohvikus",
    lines: [["", "On hommik. Mari tuleb kohvikusse."], ["Mari", "Tere hommikust!"], ["Jaan", "Tere, Mari! Kuidas läheb?"], ["Mari", "Hästi, aitäh. Ja sul?"], ["Jaan", "Ka hästi. Kohvi?"], ["Mari", "Jah, palun."], ["Jaan", "Palun."], ["Mari", "Aitäh! Väga hea kohv."], ["", "Mari joob kohvi ja läheb tööle."], ["Mari", "Head aega, Jaan!"], ["Jaan", "Head aega!"]],
    q: [{ q: "Millal Mari kohvikusse tuleb?", qi: "Quando arriva Mari al caffè?", o: ["Hommikul", "Õhtul", "Öösel"] }, { q: "Kuidas Maril läheb?", qi: "Come sta Mari?", o: ["Hästi", "Halvasti", "Väga halvasti"] }, { q: "Mida Mari joob?", qi: "Che cosa beve Mari?", o: ["Kohvi", "Teed", "Vett"] }],
    tf: [["Jaan ütleb: «Head ööd!»", false], ["Mari tahab kohvi.", true], ["Mari läheb lõpus tööle.", true]]
  }
},
{
  id: 2, sec: 1, c: 2, t: "Mina ja sina", ti: "Io, tu e gli altri", gname: "olema (essere)",
  words: [
    ["mina", "io", "🙋", "Mina olen Marco."],
    ["sina", "tu", "👉", "Sina oled Mari."],
    ["tema", "lui, lei", "🧍", "Tema on õpetaja.", ["lui", "lei"]],
    ["mees", "uomo", "👨", "Jaan on mees."],
    ["naine", "donna", "👩", "Mari on naine."],
    ["poiss", "ragazzo", "👦", "Siim on poiss."],
    ["tüdruk", "ragazza", "👧", "Liis on tüdruk."],
    ["sõber", "amico, amica", "🤝", "Jaan on minu sõber.", ["amico", "amica"]],
    ["õpetaja", "insegnante", "🧑‍🏫", "Ma olen õpetaja."],
    ["õpilane", "studente, alunno", "🎒", "Siim on õpilane.", ["studente", "alunno", "alunna"]],
    ["nimi", "nome", "🏷️", "Minu nimi on Marco."],
    ["eestlane", "estone (persona)", "🇪🇪", "Kati on eestlane.", ["estone"]],
    ["itaallane", "italiano (persona)", "🇮🇹", "Marco on itaallane.", ["italiano", "italiana"]]
  ],
  gl: { "olen": "sono", "oled": "sei", "on": "è / sono", "oleme": "siamo", "olete": "siete", "ma": "io", "sa": "tu", "ta": "lui, lei", "meie": "noi", "me": "noi", "teie": "voi, Lei", "te": "voi, Lei", "nemad": "loro", "nad": "loro", "minu": "mio", "mu": "mio", "sinu": "tuo", "su": "tuo", "mis": "che cosa", "kes": "chi", "kas": "(domanda sì/no)", "sõbrad": "amici", "õpilased": "studenti", "õpetajad": "insegnanti", "elan": "vivo", "eestis": "in Estonia", "tallinnas": "a Tallinn", "tartus": "a Tartu", "ka": "anche", "ja": "e", "aga": "ma" },
  note: {
    et: `<h4>olema</h4><div class="tabw"><table><tr><td>mina / ma</td><td><b>olen</b></td></tr><tr><td>sina / sa</td><td><b>oled</b></td></tr><tr><td>tema / ta</td><td><b>on</b></td></tr><tr><td>meie / me</td><td><b>oleme</b></td></tr><tr><td>teie / te</td><td><b>olete</b></td></tr><tr><td>nemad / nad</td><td><b>on</b></td></tr></table></div>
<p><b>ma</b> = <b>mina</b>. Lühike vorm on tavalisem.</p><p><b>tema</b> = mees või naine.</p>
<h4>Kas…?</h4><div class="ex"><b>Kas</b> sa oled eestlane? — Jah. / Ei.</div>`,
    it: `<h4>Il verbo olema (essere)</h4><div class="tabw"><table><tr><td>mina / ma</td><td><b>olen</b></td><td>sono</td></tr><tr><td>sina / sa</td><td><b>oled</b></td><td>sei</td></tr><tr><td>tema / ta</td><td><b>on</b></td><td>è</td></tr><tr><td>meie / me</td><td><b>oleme</b></td><td>siamo</td></tr><tr><td>teie / te</td><td><b>olete</b></td><td>siete</td></tr><tr><td>nemad / nad</td><td><b>on</b></td><td>sono</td></tr></table></div>
<p>Ogni pronome ha una forma lunga (enfasi) e una breve (più comune): <b>mina = ma</b>.</p><p><b>tema</b> vale sia per «lui» sia per «lei».</p>
<h4>Domande con kas</h4><p><b>Kas</b> all'inizio trasforma una frase in domanda sì/no: <b>Kas</b> sa oled eestlane? = Sei estone?</p><h4>Plurale in -d</h4><p>sõber → sõbra<b>d</b>, õpetaja → õpetaja<b>d</b>.</p>`
  },
  gram: [
    { q: "Mina ___ Marco.", h: "olema", a: "olen", o: ["olen", "oled", "on"], why: "mina → olen" },
    { q: "Sina ___ õpetaja.", h: "olema", a: "oled", o: ["oled", "olen", "olete"], why: "sina → oled" },
    { q: "Tema ___ eestlane.", h: "olema", a: "on", o: ["on", "olen", "oleme"], why: "tema → on" },
    { q: "Meie ___ sõbrad.", h: "olema", a: "oleme", o: ["oleme", "olete", "on"], why: "meie → oleme" },
    { q: "Teie ___ õpilased.", h: "olema", a: "olete", o: ["olete", "oled", "oleme"], why: "teie → olete" },
    { q: "Nemad ___ õpetajad.", h: "olema", a: "on", o: ["on", "olen", "oleme"], why: "nemad → on" },
    { q: "Ma ___ itaallane.", h: "olema", a: "olen", why: "ma = mina → olen" },
    { q: "___ sa oled eestlane?", a: "Kas", o: ["Kas", "Kes", "Mis"], why: "kas = domanda sì/no" },
    { q: "___ sa oled? — Ma olen Marco.", a: "Kes", o: ["Kes", "Kas", "Mis"], why: "kes = chi" }
  ],
  tr: [
    { q: "Sa oled eestlane.", task: "q", a: ["Kas sa oled eestlane?", "Kas sina oled eestlane?"], why: "kas + lause" }
  ],
  sent: [
    { e: "Ma olen itaallane.", i: "Sono italiano.", ia: ["Sono italiana.", "Io sono italiano."] },
    { e: "Minu nimi on Marco.", i: "Mi chiamo Marco.", ia: ["Il mio nome è Marco."] },
    { e: "Mis su nimi on?", i: "Come ti chiami?", ia: ["Qual è il tuo nome?"] },
    { e: "Kas sa oled eestlane?", i: "Sei estone?" },
    { e: "Ta on õpetaja.", i: "È insegnante.", ia: ["Lui è insegnante.", "Lei è insegnante.", "È un insegnante."] },
    { e: "Meie oleme sõbrad.", i: "Siamo amici.", ia: ["Noi siamo amici."], ea: ["Me oleme sõbrad."] },
    { e: "Kes sa oled?", i: "Chi sei?" },
    { e: "Ma elan Eestis.", i: "Vivo in Estonia.", ia: ["Io vivo in Estonia."] },
    { e: "Siim on õpilane.", i: "Siim è uno studente.", ia: ["Siim è studente.", "Siim è un alunno."] }
  ],
  qa: [
    { q: "Mis su nimi on?", qi: "Come ti chiami?", a: ["Minu nimi on Marco."], k: ["nimi|olen"] },
    { q: "Kas sa oled eestlane?", qi: "Sei estone?", a: ["Ei, ma olen itaallane."], k: ["jah|ei"] },
    { q: "Kes sa oled?", qi: "Chi sei?", a: ["Ma olen õpetaja."], k: ["olen"] },
    { q: "Kus sa elad?", qi: "Dove vivi?", a: ["Ma elan Eestis."], k: ["elan"] }
  ],
  sit: [
    { ctx: "Uus kolleeg küsib sinu nime.", line: ["Kolleeg", "Tere! Mis su nimi on?"], o: ["Minu nimi on Marco.", "Ma olen hästi.", "Head ööd!"] },
    { ctx: "Keegi küsib, kas sa oled eestlane. Sa oled itaallane.", line: ["Mari", "Kas sa oled eestlane?"], o: ["Ei, ma olen itaallane.", "Jah, ma olen itaallane.", "Aitäh, hästi."] },
    { ctx: "Sa tutvustad oma sõpra.", line: null, o: ["See on minu sõber Jaan.", "Mina olen Jaan sõber.", "Sina oled Jaan."] }
  ],
  story: {
    t: "Uus kolleeg",
    lines: [["", "Koolis on uus õpetaja."], ["Kati", "Tere! Mina olen Kati. Mis su nimi on?"], ["Marco", "Tere! Minu nimi on Marco."], ["Kati", "Kas sa oled itaallane?"], ["Marco", "Jah, ma olen itaallane. Aga ma elan Eestis."], ["Kati", "Ma olen eestlane. Kas sa oled õpetaja?"], ["Marco", "Jah, ma olen matemaatikaõpetaja."], ["Kati", "Väga tore! Meie oleme kolleegid."]],
    q: [{ q: "Kes on Marco?", qi: "Chi è Marco?", o: ["Õpetaja", "Õpilane", "Poiss"] }, { q: "Kus Marco elab?", qi: "Dove vive Marco?", o: ["Eestis", "Itaalias", "Soomes"] }],
    tf: [["Kati on itaallane.", false], ["Marco on itaallane.", true], ["Kati ja Marco on kolleegid.", true]]
  }
},
{
  id: 3, sec: 1, c: 3, t: "Numbrid", ti: "Numeri ed età", gname: "Numbrid ja «mul on»",
  words: [
    ["üks", "uno", "1️⃣", "Mul on üks kass."], ["kaks", "due", "2️⃣", "Mul on kaks koera."], ["kolm", "tre", "3️⃣", "Kolm kohvi, palun."],
    ["neli", "quattro", "4️⃣", "Neli või viis?"], ["viis", "cinque", "5️⃣", "Viis eurot."], ["kuus", "sei", "6️⃣", "Kuus õpilast."],
    ["seitse", "sette", "7️⃣", "Seitse päeva."], ["kaheksa", "otto", "8️⃣", "Kell on kaheksa."], ["üheksa", "nove", "9️⃣", "Üheksa eurot."],
    ["kümme", "dieci", "🔟", "Mul on kümme sõpra."], ["kass", "gatto", "🐈", "See on minu kass."], ["koer", "cane", "🐕", "Koer on suur."], ["euro", "euro", "💶", "See maksab viis eurot."]
  ],
  gl: { "mul": "io ho (lett. «presso di me»)", "on": "è / c'è", "kassi": "gatti (partitivo)", "koera": "cani (partitivo)", "eurot": "euro (partitivo)", "sõpra": "amici (partitivo)", "õpilast": "studenti (partitivo)", "päeva": "giorni (partitivo)", "kohvi": "caffè (partitivo)", "kell": "l'ora, orologio", "või": "o", "maksab": "costa", "see": "questo", "kui": "quanto", "palju": "molto", "mitu": "quanti", "vana": "vecchio", "aastat": "anni (partitivo)", "suur": "grande", "sul": "tu hai" },
  note: {
    et: `<h4>1–10</h4><div class="tabw"><table><tr><td>1 üks</td><td>6 kuus</td></tr><tr><td>2 kaks</td><td>7 seitse</td></tr><tr><td>3 kolm</td><td>8 kaheksa</td></tr><tr><td>4 neli</td><td>9 üheksa</td></tr><tr><td>5 viis</td><td>10 kümme</td></tr></table></div>
<h4>Mul on</h4><div class="ex"><b>Mul on</b> kass. · <b>Sul on</b> koer.</div>
<h4>Pärast 2, 3, 4 …</h4><div class="ex">üks <b>kass</b> → kaks <b>kassi</b> · üks <b>koer</b> → kolm <b>koera</b></div><p>Küsimus: <b>Mitu?</b> — Mitu kassi sul on?</p>`,
    it: `<h4>Numeri da 1 a 10</h4><div class="tabw"><table><tr><td>1 üks</td><td>6 kuus</td></tr><tr><td>2 kaks</td><td>7 seitse</td></tr><tr><td>3 kolm</td><td>8 kaheksa</td></tr><tr><td>4 neli</td><td>9 üheksa</td></tr><tr><td>5 viis</td><td>10 kümme</td></tr></table></div>
<h4>Mul on = ho</h4><p>L'estone non ha il verbo «avere»: si dice «presso di me c'è». <b>Mul on</b> kass = ho un gatto. <b>Sul on</b> = hai.</p>
<h4>Dopo i numeri da 2 in su: partitivo singolare</h4><p>Il nome resta <b>singolare</b> ma prende la forma del partitivo: üks kass → kaks <b>kassi</b>, üks koer → kolm <b>koera</b>. Per ora impara queste forme come blocchi; il partitivo torna nell'unità 16.</p><p><b>Mitu?</b> = quanti?</p>`
  },
  gram: [
    { q: "Mul on kaks ___.", h: "kass", a: "kassi", o: ["kassi", "kass"], why: "2, 3 … → kassi" },
    { q: "Mul on üks ___.", h: "kass", a: "kass", o: ["kass", "kassi"], why: "1 → kass" },
    { q: "Mul on kolm ___.", h: "koer", a: "koera", o: ["koera", "koer"], why: "3 → koera" },
    { q: "See maksab viis ___.", h: "euro", a: "eurot", o: ["eurot", "euro"], why: "5 → eurot" },
    { q: "Mul on kümme ___.", h: "sõber", a: "sõpra", o: ["sõpra", "sõber"], why: "10 → sõpra" },
    { q: "___ kassi sul on?", a: "Mitu", o: ["Mitu", "Kes", "Mis"], why: "mitu = quanti" },
    { q: "___ on kass.", h: "mina", a: "Mul", o: ["Mul", "Mina", "Ma"], why: "mul on = ho" },
    { q: "Mul on kaks ___.", h: "koer", a: "koera", why: "2 → koera" }
  ],
  tr: [],
  sent: [
    { e: "Üks, kaks, kolm.", i: "Uno, due, tre." },
    { e: "Mul on üks kass.", i: "Ho un gatto." },
    { e: "Mul on kaks kassi.", i: "Ho due gatti." },
    { e: "Mul on kolm koera.", i: "Ho tre cani." },
    { e: "See maksab viis eurot.", i: "Costa cinque euro.", ia: ["Questo costa cinque euro."] },
    { e: "Mitu kassi sul on?", i: "Quanti gatti hai?" },
    { e: "Kuus, seitse, kaheksa.", i: "Sei, sette, otto." },
    { e: "Mul on kümme sõpra.", i: "Ho dieci amici." }
  ],
  qa: [
    { q: "Mitu kassi sul on?", qi: "Quanti gatti hai?", a: ["Mul on üks kass."], k: ["kass|kassi|ei"] },
    { q: "Kas sul on koer?", qi: "Hai un cane?", a: ["Jah, mul on koer."], k: ["jah|ei"] },
    { q: "Mis on kaks pluss kolm?", qi: "Quanto fa due più tre?", a: ["Viis."], k: ["viis"] }
  ],
  sit: [
    { ctx: "Turul küsib müüja: «Mitu õuna?» Sa tahad kolm.", line: ["Müüja", "Mitu õuna?"], o: ["Kolm, palun.", "Kolm kass, palun.", "Ma olen kolm."] },
    { ctx: "Sõber küsib sinu lemmikloomade kohta. Sul on kaks kassi.", line: ["Sõber", "Mitu kassi sul on?"], o: ["Mul on kaks kassi.", "Mul on kaks kass.", "Ma olen kaks kassi."] },
    { ctx: "Kohvik. Raamat maksab kümme eurot.", line: ["Müüja", "See maksab kümme eurot."], o: ["Palun, siin on kümme eurot.", "Mul on üheksa koera.", "Head ööd!"] }
  ],
  story: {
    t: "Mitu looma?",
    lines: [["Liis", "Mul on kaks kassi ja üks koer."], ["Siim", "Kaks kassi? Väga tore!"], ["Liis", "Ja sul? Kas sul on kass?"], ["Siim", "Ei, mul ei ole kassi. Aga mul on kolm koera."], ["Liis", "Kolm koera! See on palju."], ["Siim", "Jah. Ja kümme kala."], ["Liis", "Kümme kala? Vau!"]],
    q: [{ q: "Mitu kassi Liisil on?", qi: "Quanti gatti ha Liis?", o: ["Kaks", "Kolm", "Üks"] }, { q: "Mitu koera Siimul on?", qi: "Quanti cani ha Siim?", o: ["Kolm", "Kaks", "Kümme"] }],
    tf: [["Siimul on kass.", false], ["Liisil on koer.", true], ["Siimul on kümme kala.", true]]
  }
},
{
  id: 4, sec: 1, c: 4, t: "Söök ja jook", ti: "Cibo e bevande", gname: "sööma, jooma, tahtma",
  words: [
    ["vesi", "acqua", "💧", "Ma joon vett."], ["kohv", "caffè", "☕", "Üks kohv, palun."], ["tee", "tè", "🍵", "Kas sa tahad teed?"],
    ["piim", "latte", "🥛", "Ma ei joo piima."], ["õlu", "birra", "🍺", "Üks õlu, palun."], ["mahl", "succo", "🧃", "Laps joob mahla."],
    ["leib", "pane nero", "🍞", "Ma söön leiba."], ["juust", "formaggio", "🧀", "Ma armastan juustu."], ["kala", "pesce", "🐟", "Ta sööb kala."],
    ["õun", "mela", "🍎", "Üks õun, palun."], ["supp", "zuppa", "🍲", "See supp on hea."], ["liha", "carne", "🥩", "Ma ei söö liha."]
  ],
  gl: { "joon": "bevo", "jood": "bevi", "joob": "beve", "söön": "mangio", "sööd": "mangi", "sööb": "mangia", "tahan": "voglio", "tahad": "vuoi", "tahab": "vuole", "vett": "acqua (partitivo)", "kohvi": "caffè (partitivo)", "teed": "tè (partitivo)", "piima": "latte (partitivo)", "mahla": "succo (partitivo)", "leiba": "pane (partitivo)", "juustu": "formaggio (partitivo)", "suppi": "zuppa (partitivo)", "armastan": "amo", "laps": "bambino", "hea": "buono", "ei": "non", "või": "o", "ja": "e", "see": "questo", "tänan": "grazie" },
  note: {
    et: `<h4>Verb: -n, -d, -b</h4><div class="tabw"><table><tr><th></th><th>jooma</th><th>sööma</th><th>tahtma</th></tr><tr><td>ma</td><td>joo<b>n</b></td><td>söö<b>n</b></td><td>taha<b>n</b></td></tr><tr><td>sa</td><td>joo<b>d</b></td><td>söö<b>d</b></td><td>taha<b>d</b></td></tr><tr><td>ta</td><td>joo<b>b</b></td><td>söö<b>b</b></td><td>taha<b>b</b></td></tr></table></div>
<h4>Ei</h4><div class="ex">Ma <b>ei joo</b>. Sa <b>ei joo</b>. Ta <b>ei joo</b>.</div>
<h4>Natuke …</h4><div class="ex">vesi → Ma joon <b>vett</b> · kohv → <b>kohvi</b> · leib → <b>leiba</b></div><p>Kohvikus: <b>Üks kohv, palun.</b></p>`,
    it: `<h4>Il presente: -n, -d, -b</h4><p>Io → <b>-n</b>, tu → <b>-d</b>, lui/lei → <b>-b</b>: ma joo<b>n</b> (bevo), sa joo<b>d</b>, ta joo<b>b</b>. <b>tahtma</b> (volere): ma taha<b>n</b>, sa taha<b>d</b>, ta taha<b>b</b>.</p>
<h4>La negazione</h4><p><b>ei</b> + radice del verbo, uguale per tutte le persone: ma <b>ei joo</b>, sa <b>ei joo</b>, ta <b>ei joo</b>.</p>
<h4>«Un po' di»: il partitivo</h4><p>Quando mangi o bevi una quantità indefinita, l'oggetto va al partitivo. Le forme si imparano con la parola: vesi → <b>vett</b>, kohv → <b>kohvi</b>, tee → <b>teed</b>, leib → <b>leiba</b>, piim → <b>piima</b>. Dopo una negazione l'oggetto è sempre al partitivo: Ma ei joo <b>piima</b>.</p><p>Per ordinare va benissimo il nominativo: <b>Üks kohv, palun.</b></p>`
  },
  gram: [
    { q: "Ma ___ kohvi.", h: "jooma", a: "joon", o: ["joon", "jood", "joob"], why: "ma → -n" },
    { q: "Sa ___ leiba.", h: "sööma", a: "sööd", o: ["sööd", "söön", "sööb"], why: "sa → -d" },
    { q: "Ta ___ vett.", h: "tahtma", a: "tahab", o: ["tahab", "tahan", "tahad"], why: "ta → -b" },
    { q: "Ma joon ___.", h: "vesi", a: "vett", o: ["vett", "vesi"], why: "jooma + partitiiv: vett" },
    { q: "Ma söön ___.", h: "leib", a: "leiba", o: ["leiba", "leib"], why: "sööma + partitiiv: leiba" },
    { q: "Ma ___ joo piima.", a: "ei", o: ["ei", "mitte", "ole"], why: "ei + joo" },
    { q: "Kas sa tahad ___?", h: "tee", a: "teed", o: ["teed", "tee"], why: "tahtma + partitiiv: teed" },
    { q: "Ta ___ kala.", h: "sööma", a: "sööb", why: "ta → -b" },
    { q: "Ma ei ___ liha.", h: "sööma", a: "söö", o: ["söö", "söön", "sööb"], why: "ei + söö (ilma -n)" }
  ],
  tr: [
    { q: "Ma joon piima.", task: "neg", a: ["Ma ei joo piima.", "Mina ei joo piima."], why: "ei + joo" },
    { q: "Ta sööb liha.", task: "neg", a: ["Ta ei söö liha.", "Tema ei söö liha."], why: "ei + söö" }
  ],
  sent: [
    { e: "Ma joon kohvi.", i: "Bevo caffè.", ia: ["Bevo il caffè.", "Io bevo caffè."] },
    { e: "Ma tahan vett.", i: "Voglio acqua.", ia: ["Voglio dell'acqua.", "Vorrei acqua."] },
    { e: "Kas sa tahad teed?", i: "Vuoi del tè?", ia: ["Vuoi tè?", "Vuoi un tè?"] },
    { e: "Üks õlu, palun.", i: "Una birra, per favore." },
    { e: "Ma ei joo piima.", i: "Non bevo latte.", ia: ["Non bevo il latte."] },
    { e: "Ma söön leiba.", i: "Mangio pane.", ia: ["Mangio il pane."] },
    { e: "Ta sööb kala.", i: "Mangia pesce.", ia: ["Lui mangia pesce.", "Lei mangia pesce."] },
    { e: "See supp on hea.", i: "Questa zuppa è buona." },
    { e: "Ma ei söö liha.", i: "Non mangio carne.", ia: ["Non mangio la carne."] }
  ],
  qa: [
    { q: "Kas sa jood kohvi?", qi: "Bevi caffè?", a: ["Jah, ma joon kohvi."], k: ["joon|joo"] },
    { q: "Mida sa tahad?", qi: "Che cosa vuoi?", a: ["Ma tahan vett."], k: ["tahan"] },
    { q: "Kas sa sööd liha?", qi: "Mangi carne?", a: ["Ei, ma ei söö liha."], k: ["söön|söö"] }
  ],
  sit: [
    { ctx: "Kohvikus. Sa tahad kohvi.", line: ["Teenindaja", "Mida soovite?"], o: ["Üks kohv, palun.", "Ma olen kohv.", "Head ööd!"] },
    { ctx: "Sõber pakub piima. Sa ei joo piima.", line: ["Sõber", "Kas sa tahad piima?"], o: ["Ei, aitäh. Ma ei joo piima.", "Jah, ma ei joo piima.", "Ma joon piim."] },
    { ctx: "Sa oled taimetoitlane (vegetariano).", line: ["Ema", "Kas sa sööd liha?"], o: ["Ei, ma ei söö liha.", "Jah, ma söön liha.", "Ma ei sööb liha."] }
  ],
  story: {
    t: "Hommikusöök",
    lines: [["", "On hommik. Kati ja Jaan on köögis."], ["Kati", "Kas sa tahad kohvi?"], ["Jaan", "Ei, aitäh. Ma joon teed."], ["Kati", "Ja leiba? Juustu?"], ["Jaan", "Jah, palun. Ma söön leiba ja juustu."], ["Kati", "Ma joon kohvi ja söön õuna."], ["Jaan", "Kas sa ei söö leiba?"], ["Kati", "Ei. Ma ei söö hommikul leiba."]],
    q: [{ q: "Mida Jaan joob?", qi: "Che cosa beve Jaan?", o: ["Teed", "Kohvi", "Piima"] }, { q: "Mida Kati sööb?", qi: "Che cosa mangia Kati?", o: ["Õuna", "Leiba", "Kala"] }],
    tf: [["Jaan joob kohvi.", false], ["Jaan sööb leiba ja juustu.", true], ["Kati sööb hommikul leiba.", false]]
  }
},
{
  id: 5, sec: 1, c: 5, t: "Perekond", ti: "La famiglia", gname: "Mul on / mul ei ole",
  words: [
    ["ema", "madre, mamma", "👩", "See on minu ema.", ["madre", "mamma"]], ["isa", "padre, papà", "👨", "Minu isa on õpetaja.", ["padre", "papà"]],
    ["vend", "fratello", "👦", "Mul on vend."], ["õde", "sorella", "👧", "Mul on kaks õde."], ["poeg", "figlio", "👶", "Mul on poeg."],
    ["tütar", "figlia", "👧", "Tal on tütar."], ["vanaema", "nonna", "👵", "Vanaema elab Tartus."], ["vanaisa", "nonno", "👴", "Vanaisa on vana."],
    ["laps", "bambino", "🧒", "Laps on väike."], ["perekond", "famiglia", "👨‍👩‍👧", "Meie perekond on suur."],
    ["suur", "grande", "🐘", "Maja on suur."], ["väike", "piccolo", "🐭", "Kass on väike."], ["noor", "giovane", "🌱", "Mu vend on noor."], ["ilus", "bello", "🌸", "Sinu õde on ilus."]
  ],
  gl: { "mul": "io ho", "sul": "tu hai", "tal": "lui/lei ha", "meil": "noi abbiamo", "venda": "fratello (partitivo)", "õde": "sorella", "õde_": "", "poega": "figlio (partitivo)", "tütart": "figlia (partitivo)", "last": "bambino (partitivo)", "elab": "vive", "vana": "vecchio", "maja": "casa", "minu": "mio", "mu": "mio", "sinu": "tuo", "su": "tuo", "meie": "nostro", "see": "questo", "pole": "non c'è", "kedagi": "nessuno" },
  note: {
    et: `<h4>Mul on, sul on…</h4><div class="tabw"><table><tr><td>mina</td><td><b>mul on</b></td></tr><tr><td>sina</td><td><b>sul on</b></td></tr><tr><td>tema</td><td><b>tal on</b></td></tr><tr><td>meie</td><td><b>meil on</b></td></tr></table></div>
<h4>Mul ei ole …</h4><div class="ex">Mul on <b>vend</b>. → Mul ei ole <b>venda</b>.</div><p>vend → venda · õde → õde · poeg → poega · laps → last</p>
<h4>Minu, sinu</h4><p><b>mu / minu</b> ema, <b>su / sinu</b> isa. Sõna ei muutu.</p>`,
    it: `<h4>Possesso: mul on, sul on…</h4><p>Si usa la forma in <b>-l</b> del pronome + <b>on</b>: <b>mul on</b> = ho, <b>sul on</b> = hai, <b>tal on</b> = ha, <b>meil on</b> = abbiamo.</p>
<h4>Al negativo: partitivo</h4><p><b>Mul ei ole</b> + partitivo: Mul on vend → Mul ei ole <b>venda</b>. Forme utili: vend → venda, õde → õde, poeg → poega, laps → last.</p>
<h4>Possessivi invariabili</h4><p><b>mu / minu</b> = mio, mia, miei, mie; <b>su / sinu</b> = tuo… Non cambiano mai.</p>
<h4>Aggettivi</h4><p>Vanno prima del nome: <b>suur</b> perekond, <b>väike</b> laps.</p>`
  },
  gram: [
    { q: "___ on vend.", h: "mina", a: "Mul", o: ["Mul", "Mina", "Minu"], why: "mul on = ho" },
    { q: "___ on tütar.", h: "tema", a: "Tal", o: ["Tal", "Tema", "Sul"], why: "tal on = ha" },
    { q: "Mul ei ole ___.", h: "vend", a: "venda", o: ["venda", "vend"], why: "ei ole + partitiiv" },
    { q: "Tal ei ole ___.", h: "laps", a: "last", o: ["last", "laps", "lapsi"], why: "ei ole + partitiiv: last" },
    { q: "Meil ei ole ___.", h: "poeg", a: "poega", o: ["poega", "poeg"], why: "ei ole + partitiiv: poega" },
    { q: "See on ___ ema.", h: "mina", a: "minu", aa: ["mu"], o: ["minu", "mul", "mina"], why: "minu = mio" },
    { q: "___ on kaks õde.", h: "sina", a: "Sul", o: ["Sul", "Sina", "Sinu"], why: "sul on = hai" },
    { q: "Mul ei ole ___.", h: "poeg", a: "poega", why: "ei ole + poega" }
  ],
  tr: [
    { q: "Mul on vend.", task: "neg", a: ["Mul ei ole venda.", "Mul pole venda."], why: "ei ole + partitiiv" },
    { q: "Tal on poeg.", task: "neg", a: ["Tal ei ole poega.", "Tal pole poega."], why: "ei ole + partitiiv" }
  ],
  sent: [
    { e: "See on minu ema.", i: "Questa è mia madre.", ia: ["Questa è mia mamma.", "È mia madre."] },
    { e: "Mu isa on õpetaja.", i: "Mio padre è insegnante.", ia: ["Mio padre è un insegnante."] },
    { e: "Mul on vend.", i: "Ho un fratello." },
    { e: "Mul on kaks õde.", i: "Ho due sorelle." },
    { e: "Mul ei ole venda.", i: "Non ho un fratello.", ia: ["Non ho fratelli."], ea: ["Mul pole venda."] },
    { e: "Meie perekond on suur.", i: "La nostra famiglia è grande." },
    { e: "Vanaema elab Tartus.", i: "La nonna vive a Tartu." },
    { e: "Laps on väike ja ilus.", i: "Il bambino è piccolo e bello." }
  ],
  qa: [
    { q: "Kas sul on vend?", qi: "Hai un fratello?", a: ["Jah, mul on vend."], k: ["jah|ei"] },
    { q: "Kas sinu perekond on suur?", qi: "La tua famiglia è grande?", a: ["Jah, meie perekond on suur."], k: ["suur|väike"] },
    { q: "Kus sinu ema elab?", qi: "Dove vive tua madre?", a: ["Mu ema elab Itaalias."], k: ["elab"] }
  ],
  sit: [
    { ctx: "Sa näitad fotot. Fotol on sinu ema.", line: ["Sõber", "Kes see on?"], o: ["See on minu ema.", "Mul on ema.", "Ema on mina."] },
    { ctx: "Sul ei ole venda.", line: ["Kolleeg", "Kas sul on vend?"], o: ["Ei, mul ei ole venda.", "Ei, mul ei ole vend.", "Jah, mul ei ole venda."] },
    { ctx: "Sõber räägib oma pojast.", line: ["Sõber", "Mul on poeg. Ta on viis."], o: ["Väga tore! Mul on tütar.", "Head ööd!", "Mul ei ole tütar."] }
  ],
  story: {
    t: "Foto",
    lines: [["Kati", "Kes on fotol?"], ["Marco", "See on minu perekond. See on mu ema ja see on mu isa."], ["Kati", "Ja kes on see noor mees?"], ["Marco", "See on minu vend Luca. Ta elab Roomas."], ["Kati", "Kas sul on ka õde?"], ["Marco", "Ei, mul ei ole õde. Aga mul on kaks vanaema!"], ["Kati", "Teil on suur perekond."]],
    q: [{ q: "Kes on Luca?", qi: "Chi è Luca?", o: ["Marco vend", "Marco isa", "Marco poeg"] }, { q: "Kus Luca elab?", qi: "Dove vive Luca?", o: ["Roomas", "Tallinnas", "Tartus"] }],
    tf: [["Marcol on õde.", false], ["Marcol on kaks vanaema.", true], ["Luca on noor.", true]]
  }
},
{
  id: 6, sec: 1, c: 6, t: "Linnas", ti: "In città", gname: "Kus? Kuhu?",
  words: [
    ["kool", "scuola", "🏫", "Laps on koolis."], ["pood", "negozio", "🏪", "Ema on poes."], ["kodu", "casa (la propria)", "🏡", "Ma olen kodus.", ["casa"]],
    ["maja", "edificio, casa", "🏠", "See maja on suur.", ["casa", "edificio"]], ["haigla", "ospedale", "🏥", "Haigla on seal."], ["raamatukogu", "biblioteca", "📚", "Ma olen raamatukogus."],
    ["kus", "dove", "📍", "Kus on pood?"], ["siin", "qui", "⬇️", "Pood on siin."], ["seal", "lì", "↗️", "Buss on seal.", ["là"]],
    ["vasakul", "a sinistra", "⬅️", "Kool on vasakul."], ["paremal", "a destra", "➡️", "Haigla on paremal."], ["buss", "autobus", "🚌", "Ma sõidan bussiga."],
    ["linn", "città", "🏙️", "Tallinn on ilus linn."], ["täna", "oggi", "📆", "Täna ma lähen linna."]
  ],
  gl: { "koolis": "a scuola", "poes": "al negozio", "kodus": "a casa", "raamatukogus": "in biblioteca", "haiglas": "in ospedale", "linnas": "in città", "kooli": "a scuola (verso)", "koju": "a casa (verso)", "linna": "in città (verso)", "poodi": "al negozio (verso)", "lähen": "vado", "lähed": "vai", "läheb": "va", "kuhu": "dove (verso dove)", "sõidan": "viaggio, vado (con un mezzo)", "bussiga": "in autobus", "rongiga": "in treno", "rong": "treno", "ilus": "bello", "olen": "sono", "on": "è", "see": "questo", "ema": "mamma", "laps": "bambino", "ma": "io", "vabandust": "scusi" },
  note: {
    et: `<h4>Kus? → -s</h4><div class="ex">kool → kooli<b>s</b> · kodu → kodu<b>s</b> · linn → linna<b>s</b> · pood → <b>poes</b></div>
<h4>Kuhu?</h4><div class="ex">Ma lähen <b>kooli</b> · <b>koju</b> · <b>linna</b> · <b>poodi</b></div>
<div class="tabw"><table><tr><th>Kus?</th><th>Kuhu?</th></tr><tr><td>koolis</td><td>kooli</td></tr><tr><td>kodus</td><td>koju</td></tr><tr><td>linnas</td><td>linna</td></tr><tr><td>poes</td><td>poodi</td></tr></table></div>
<h4>minema</h4><p>ma <b>lähen</b>, sa <b>lähed</b>, ta <b>läheb</b></p>`,
    it: `<h4>Kus? (dove sto?) → -s</h4><p>Stato in luogo: kool → kooli<b>s</b> (a scuola), kodu → kodu<b>s</b> (a casa). Alcune parole cambiano radice: pood → <b>poes</b> (al negozio).</p>
<h4>Kuhu? (dove vado?)</h4><p>Moto a luogo, forme brevi da imparare a memoria: Ma lähen <b>kooli</b>, <b>koju</b>, <b>linna</b>, <b>poodi</b>. Il sistema completo arriva nell'unità 13.</p>
<h4>minema (andare)</h4><p>Irregolare: ma <b>lähen</b>, sa <b>lähed</b>, ta <b>läheb</b>.</p><h4>-ga = con</h4><p>Anche per i mezzi: bussi<b>ga</b> (in autobus).</p>`
  },
  gram: [
    { q: "Ma olen ___.", h: "kodu, Kus?", a: "kodus", o: ["kodus", "koju", "kodu"], why: "Kus? → kodus" },
    { q: "Ma lähen ___.", h: "kodu, Kuhu?", a: "koju", o: ["koju", "kodus", "kodu"], why: "Kuhu? → koju" },
    { q: "Ema on ___.", h: "pood, Kus?", a: "poes", o: ["poes", "poodi", "pood"], why: "Kus? → poes" },
    { q: "Laps läheb ___.", h: "kool, Kuhu?", a: "kooli", o: ["kooli", "koolis", "kool"], why: "Kuhu? → kooli" },
    { q: "___ on pood? — Siin.", a: "Kus", o: ["Kus", "Kuhu", "Kes"], why: "kus = dove (stato)" },
    { q: "___ sa lähed? — Koju.", a: "Kuhu", o: ["Kuhu", "Kus", "Mis"], why: "kuhu = dove (moto)" },
    { q: "Ma ___ linna.", h: "minema", a: "lähen", o: ["lähen", "läheb", "lähed"], why: "ma → lähen" },
    { q: "Ma sõidan ___.", h: "buss", a: "bussiga", o: ["bussiga", "bussis", "buss"], why: "-ga = con" },
    { q: "Ma olen ___.", h: "raamatukogu, Kus?", a: "raamatukogus", why: "Kus? → -s" }
  ],
  tr: [],
  sent: [
    { e: "Ma olen kodus.", i: "Sono a casa.", ia: ["Io sono a casa."] },
    { e: "Ta on koolis.", i: "È a scuola.", ia: ["Lui è a scuola.", "Lei è a scuola."] },
    { e: "Ema on poes.", i: "La mamma è al negozio.", ia: ["Mamma è al negozio."] },
    { e: "Kus on pood?", i: "Dov'è il negozio?" },
    { e: "Kool on vasakul.", i: "La scuola è a sinistra." },
    { e: "Ma lähen koju.", i: "Vado a casa.", ia: ["Io vado a casa."] },
    { e: "Täna ma lähen linna.", i: "Oggi vado in città.", ea: ["Ma lähen täna linna.", "Täna lähen ma linna."] },
    { e: "Ma sõidan bussiga.", i: "Vado in autobus.", ia: ["Viaggio in autobus."] },
    { e: "Vabandust, kus on haigla?", i: "Scusi, dov'è l'ospedale?", ia: ["Scusa, dov'è l'ospedale?"] }
  ],
  qa: [
    { q: "Kus sa praegu oled?", qi: "Dove sei adesso?", a: ["Ma olen kodus."], k: ["olen"] },
    { q: "Kuhu sa täna lähed?", qi: "Dove vai oggi?", a: ["Ma lähen linna."], k: ["lähen"] },
    { q: "Kas sa sõidad bussiga?", qi: "Vai in autobus?", a: ["Jah, ma sõidan bussiga."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Turist küsib, kus on haigla. Haigla on paremal.", line: ["Turist", "Vabandust, kus on haigla?"], o: ["Haigla on paremal.", "Ma lähen haiglasse koju.", "Haigla on kodus."] },
    { ctx: "Sõber helistab. Sa oled raamatukogus.", line: ["Sõber", "Kus sa oled?"], o: ["Ma olen raamatukogus.", "Ma lähen raamatukogu.", "Raamatukogu on mina."] },
    { ctx: "On õhtu. Sa lähed koju.", line: ["Kolleeg", "Kuhu sa lähed?"], o: ["Koju.", "Kodus.", "Kodu."] }
  ],
  story: {
    t: "Kus on pood?",
    lines: [["", "Marco on uues linnas. Ta tahab leiba."], ["Marco", "Vabandust, kus on pood?"], ["Naine", "Pood on seal, vasakul."], ["Marco", "Aitäh! Ja kus on raamatukogu?"], ["Naine", "Raamatukogu on paremal, kooli kõrval."], ["", "Marco läheb poodi. Siis ta läheb raamatukogusse."], ["", "Õhtul ta sõidab bussiga koju."]],
    q: [{ q: "Kus on pood?", qi: "Dov'è il negozio?", o: ["Vasakul", "Paremal", "Kooli kõrval"] }, { q: "Kuidas Marco koju sõidab?", qi: "Come torna a casa Marco?", o: ["Bussiga", "Rongiga", "Autoga"] }],
    tf: [["Raamatukogu on vasakul.", false], ["Marco tahab leiba.", true], ["Õhtul Marco läheb koju.", true]]
  }
}
);
