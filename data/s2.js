/* Osa 2 · Igapäev · A1.2 — units 7–12. */
(window.UNITS = window.UNITS || []).push(
{
  id: 7, sec: 2, c: 1, t: "Mida sa teed?", ti: "Che cosa fai?", gname: "Olevik: -n, -d, -b, -me, -te, -vad",
  words: [
    ["elama", "vivere", "", "Ma elan Tallinnas."],
    ["töötama", "lavorare", "💼", "Ta töötab koolis."],
    ["õppima", "studiare, imparare", "🎓", "Me õpime eesti keelt."],
    ["rääkima", "parlare", "🗣️", "Nad räägivad eesti keelt."],
    ["lugema", "leggere", "📖", "Ma loen raamatut."],
    ["kirjutama", "scrivere", "✍️", "Ta kirjutab kirja."],
    ["kuulama", "ascoltare", "🎧", "Me kuulame muusikat."],
    ["tegema", "fare", "", "Mida sa teed?"],
    ["tulema", "venire", "", "Ta tuleb homme."],
    ["Ma ei saa aru.", "Non capisco.", "", "Vabandust, ma ei saa aru."],
    ["Palun korrake.", "Ripeta, per favore.", "", "Palun korrake aeglasemalt."],
    ["Mida see tähendab?", "Che cosa significa?", "", "«Tänav»? Mida see tähendab?"]
  ],
  gl: { "elan": "vivo", "elad": "vivi", "elab": "vive", "elame": "viviamo", "elate": "vivete", "elavad": "vivono", "töötan": "lavoro", "töötad": "lavori", "töötab": "lavora", "töötame": "lavoriamo", "töötate": "lavorate", "töötavad": "lavorano", "õpin": "studio", "õpid": "studi", "õpib": "studia", "õpime": "studiamo", "õpite": "studiate", "õpivad": "studiano", "räägin": "parlo", "räägid": "parli", "räägib": "parla", "räägime": "parliamo", "räägite": "parlate", "räägivad": "parlano", "loen": "leggo", "loed": "leggi", "loeb": "legge", "loeme": "leggiamo", "loete": "leggete", "loevad": "leggono", "kirjutan": "scrivo", "kirjutad": "scrivi", "kirjutab": "scrive", "kirjutame": "scriviamo", "kirjutavad": "scrivono", "kuulan": "ascolto", "kuulame": "ascoltiamo", "kuulab": "ascolta", "teen": "faccio", "teed": "fai", "teeb": "fa", "teeme": "facciamo", "teete": "fate", "teevad": "fanno", "tulen": "vengo", "tuled": "vieni", "tuleb": "viene", "tuleme": "veniamo", "tulevad": "vengono", "keelt": "lingua (partitivo)", "raamatut": "libro (partitivo)", "kirja": "lettera (partitivo)", "muusikat": "musica (partitivo)", "aru": "(capire: aru saama)", "saa": "(capire: aru saama)", "korrake": "ripetete / ripeta", "tähendab": "significa", "aeglasemalt": "più lentamente", "kursus": "corso", "kursusel": "al corso", "tunnis": "a lezione" },
  note: {
    et: `<h4>Olevik</h4><div class="tabw"><table><tr><th></th><th>elama</th><th>rääkima</th></tr><tr><td>ma</td><td>ela<b>n</b></td><td>räägi<b>n</b></td></tr><tr><td>sa</td><td>ela<b>d</b></td><td>räägi<b>d</b></td></tr><tr><td>ta</td><td>ela<b>b</b></td><td>räägi<b>b</b></td></tr><tr><td>me</td><td>ela<b>me</b></td><td>räägi<b>me</b></td></tr><tr><td>te</td><td>ela<b>te</b></td><td>räägi<b>te</b></td></tr><tr><td>nad</td><td>ela<b>vad</b></td><td>räägi<b>vad</b></td></tr></table></div>
<p>Sõnastikus on <b>-ma</b>: elama, rääkima.</p>
<h4>Tüvi muutub</h4><div class="ex">rää<b>k</b>ima → rää<b>g</b>in · õ<b>pp</b>ima → õ<b>p</b>in · lugema → <b>loen</b> · tegema → <b>teen</b></div>
<h4>Tunnis</h4><div class="ex">Ma ei saa aru. · Palun korrake. · Mida see tähendab?</div>`,
    it: `<h4>Il presente</h4><p>Si toglie <b>-ma</b> dall'infinito e si aggiungono le desinenze: <b>-n, -d, -b, -me, -te, -vad</b>. elama → ela<b>n</b> (vivo), ela<b>d</b>, ela<b>b</b>, ela<b>me</b>, ela<b>te</b>, ela<b>vad</b>.</p>
<p>Nel dizionario i verbi sono all'infinito in <b>-ma</b>.</p>
<h4>La radice può cambiare</h4><p>Molti verbi hanno una radice «forte» nell'infinito e una «debole» nel presente (alternanza consonantica): rää<b>k</b>ima → rää<b>g</b>in, õ<b>pp</b>ima → õ<b>p</b>in. Alcuni vanno imparati: lugema → <b>loen</b>, tegema → <b>teen</b>, minema → <b>lähen</b>.</p>
<h4>Frasi per la lezione</h4><p>Ma ei saa aru = non capisco · Palun korrake = ripeta, per favore · Mida see tähendab? = che cosa significa? Da qui in poi le istruzioni dell'app sono in estone: usa il pulsante IT se serve.</p>`
  },
  gram: [
    { q: "Ma ___ Tallinnas.", h: "elama", a: "elan", o: ["elan", "elab", "elavad"], why: "ma → -n", it: "Vivo a Tallinn." },
    { q: "Sa ___ koolis.", h: "töötama", a: "töötad", o: ["töötad", "töötan", "töötab"], why: "sa → -d", it: "Lavori a scuola." },
    { q: "Ta ___ eesti keelt.", h: "õppima", a: "õpib", o: ["õpib", "õppib", "õpima"], why: "õppima → õpib (pp → p)", it: "Studia l'estone." },
    { q: "Me ___ eesti keelt.", h: "rääkima", a: "räägime", o: ["räägime", "rääkime", "räägite"], why: "rääkima → räägi- (k → g) + -me", it: "Parliamo estone." },
    { q: "Te ___ raamatut.", h: "lugema", a: "loete", o: ["loete", "lugete", "loeme"], why: "lugema → loe- + -te", it: "Leggete un libro." },
    { q: "Nad ___ kirja.", h: "kirjutama", a: "kirjutavad", o: ["kirjutavad", "kirjutab", "kirjutame"], why: "nad → -vad", it: "Scrivono una lettera." },
    { q: "Mida sa ___?", h: "tegema", a: "teed", o: ["teed", "tegad", "teeb"], why: "tegema → tee- + -d", it: "Che cosa fai?" },
    { q: "Ta ___ homme.", h: "tulema", a: "tuleb", why: "ta → -b", it: "Viene domani." },
    { q: "Me ___ muusikat.", h: "kuulama", a: "kuulame", why: "me → -me", it: "Ascoltiamo musica." },
    { q: "Nad ___ Tartus.", h: "elama", a: "elavad", why: "nad → -vad", it: "Vivono a Tartu." },
    { q: "Ma ___ raamatut.", h: "lugema", a: "loen", why: "lugema → loen", it: "Leggo un libro." }
  ],
  tr: [
    { q: "Ma elan Tartus.", task: null, ti: "Ütle «meie» vormis", tii: "Dillo con «noi»", a: ["Me elame Tartus.", "Meie elame Tartus."], why: "me → -me" },
    { q: "Ta räägib eesti keelt.", task: null, ti: "Ütle «nemad» vormis", tii: "Dillo con «loro»", a: ["Nad räägivad eesti keelt.", "Nemad räägivad eesti keelt."], why: "nad → -vad" },
    { q: "Sa töötad koolis.", task: "q", a: ["Kas sa töötad koolis?", "Kas sina töötad koolis?"], why: "kas + lause" }
  ],
  sent: [
    { e: "Ma elan Tallinnas.", i: "Vivo a Tallinn.", ia: ["Io vivo a Tallinn."] },
    { e: "Ta töötab koolis.", i: "Lavora a scuola.", ia: ["Lui lavora a scuola.", "Lei lavora a scuola."] },
    { e: "Me õpime eesti keelt.", i: "Studiamo l'estone.", ia: ["Studiamo estone.", "Noi studiamo l'estone."] },
    { e: "Mida sa teed?", i: "Che cosa fai?", ia: ["Cosa fai?"] },
    { e: "Ma loen raamatut.", i: "Leggo un libro.", ia: ["Sto leggendo un libro."] },
    { e: "Nad räägivad itaalia keelt.", i: "Parlano italiano.", ia: ["Loro parlano italiano."] },
    { e: "Ma ei saa aru.", i: "Non capisco." },
    { e: "Palun korrake.", i: "Ripeta, per favore.", ia: ["Ripetete, per favore."] },
    { e: "Mida see tähendab?", i: "Che cosa significa?", ia: ["Cosa significa?"] },
    { e: "Me kuulame muusikat.", i: "Ascoltiamo musica.", ia: ["Ascoltiamo la musica."] }
  ],
  qa: [
    { q: "Mida sa teed?", qi: "Che cosa fai?", a: ["Ma õpin eesti keelt."], k: ["ma|mina"], h: "Ma loen… / Ma õpin…" },
    { q: "Kus sa elad?", qi: "Dove vivi?", a: ["Ma elan Tallinnas."], k: ["elan"] },
    { q: "Kus sa töötad?", qi: "Dove lavori?", a: ["Ma töötan koolis."], k: ["töötan"] },
    { q: "Kas sa räägid eesti keelt?", qi: "Parli estone?", a: ["Jah, natuke."], k: ["jah|ei|natuke"] }
  ],
  sit: [
    { ctx: "Õpetaja räägib väga kiiresti. Sa ei saa aru.", line: ["Õpetaja", "Täna me loeme teksti ja kirjutame lauseid."], o: ["Vabandust, ma ei saa aru. Palun korrake.", "Aitäh, head aega!", "Ma olen õpetaja."] },
    { ctx: "Raamatus on uus sõna: «tänav».", line: null, o: ["Mida see tähendab?", "Mida sa teed?", "Kus sa elad?"] },
    { ctx: "Sõber helistab ja küsib, mida sa teed. Sa loed.", line: ["Sõber", "Tere! Mida sa teed?"], o: ["Ma loen raamatut.", "Ma loeb raamatut.", "Ma lugema raamatut."] },
    { ctx: "Uus naaber küsib, kus sa töötad.", line: ["Naaber", "Kus te töötate?"], o: ["Ma töötan koolis.", "Ma töötad koolis.", "Ta töötan koolis."] }
  ],
  story: {
    t: "Esimene tund",
    lines: [["", "On esmaspäev. Marco on eesti keele kursusel."], ["Õpetaja", "Tere! Mina olen Kadri. Kuidas teie nimi on?"], ["Marco", "Minu nimi on Marco. Ma elan Tallinnas ja töötan koolis."], ["Õpetaja", "Väga tore. Mida te koolis teete?"], ["Marco", "Vabandust, ma ei saa aru. Palun korrake."], ["Õpetaja", "Mida te koolis teete?"], ["Marco", "Ah! Ma õpetan matemaatikat."], ["Õpetaja", "Ja nüüd te õpite eesti keelt!"], ["", "Tunnis nad loevad, kirjutavad ja räägivad."]],
    q: [{ q: "Kes on Kadri?", qi: "Chi è Kadri?", o: ["Õpetaja", "Marco sõber", "Marco õde"] }, { q: "Mida Marco koolis teeb?", qi: "Che cosa fa Marco a scuola?", o: ["Ta õpetab matemaatikat.", "Ta õpib eesti keelt.", "Ta loeb raamatut."] }, { q: "Mida Marco ütleb, kui ta ei saa aru?", qi: "Che cosa dice Marco quando non capisce?", o: ["Palun korrake.", "Head aega.", "Väga tore."] }],
    tf: [["Kursus on reedel.", false], ["Marco elab Tallinnas.", true], ["Tunnis nad ainult kuulavad.", false]]
  }
},
{
  id: 8, sec: 2, c: 2, t: "Mis keelt sa räägid?", ti: "Che lingua parli?", gname: "Eitus: ei + tüvi",
  words: [
    ["keel", "lingua", "", "Eesti keel on ilus."],
    ["eesti keel", "lingua estone", "", "Ma õpin eesti keelt."],
    ["inglise keel", "lingua inglese", "", "Kas sa räägid inglise keelt?"],
    ["vene keel", "lingua russa", "", "Ma ei räägi vene keelt."],
    ["itaalia keel", "lingua italiana", "", "Minu emakeel on itaalia keel."],
    ["venelane", "russo (persona)", "🇷🇺", "Ta on venelane."],
    ["soomlane", "finlandese (persona)", "🇫🇮", "Mika on soomlane."],
    ["inglane", "inglese (persona)", "🇬🇧", "John on inglane."],
    ["sakslane", "tedesco (persona)", "🇩🇪", "Anna on sakslane."],
    ["prantslane", "francese (persona)", "🇫🇷", "Pierre on prantslane."],
    ["maa", "paese, terra", "🗺️", "Eesti on väike maa."],
    ["pärit", "originario", "📍", "Ma olen pärit Itaaliast."],
    ["natuke", "un po'", "🤏", "Ma räägin natuke eesti keelt."],
    ["emakeel", "lingua madre", "", "Minu emakeel on itaalia keel."]
  ],
  gl: { "keelt": "lingua (partitivo)", "itaaliast": "dall'Italia", "eestist": "dall'Estonia", "soomest": "dalla Finlandia", "saksamaalt": "dalla Germania", "prantsusmaalt": "dalla Francia", "inglismaalt": "dall'Inghilterra", "venemaalt": "dalla Russia", "kust": "da dove", "räägi": "parla (dopo ei)", "ela": "vive (dopo ei)", "tule": "viene (dopo ei)", "õpi": "studia (dopo ei)", "loe": "legge (dopo ei)", "tee": "fa (dopo ei)", "tea": "sa (dopo ei)", "tean": "so", "oska": "sa fare (dopo ei)", "oskan": "so (fare)", "pole": "non è", "te": "voi, Lei", "räägite": "parlate / parla (Lei)", "saksa": "tedesco", "prantsuse": "francese", "soome": "finlandese", "inglise": "inglese", "vene": "russo", "itaalia": "italiano", "rahvusvaheline": "internazionale", "peol": "alla festa", "pidu": "festa" },
  note: {
    et: `<h4>Ei + tüvi</h4><div class="ex">Ma räägin. → Ma <b>ei räägi</b>.<br>Nad tulevad. → Nad <b>ei tule</b>.</div><p>Kõik isikud: ma, sa, ta, me, te, nad <b>ei räägi</b>.</p><div class="tabw"><table><tr><th>jah</th><th>ei</th></tr><tr><td>ma elan</td><td>ma ei ela</td></tr><tr><td>ta õpib</td><td>ta ei õpi</td></tr><tr><td>me teeme</td><td>me ei tee</td></tr><tr><td>ma olen</td><td>ma ei ole / ma pole</td></tr></table></div>
<h4>Keel</h4><div class="ex">Ma räägin eesti <b>keelt</b>. Ma õpin itaalia <b>keelt</b>.</div><h4>Kust?</h4><div class="ex">Ma olen pärit <b>Itaaliast</b>.</div>`,
    it: `<h4>La negazione per tutti i verbi</h4><p><b>ei</b> + radice del presente (la forma senza desinenza), uguale per tutte le persone: ma räägin → ma <b>ei räägi</b>; nad tulevad → nad <b>ei tule</b>. Trucco: prendi la forma di «io» e togli la <b>-n</b>.</p><p>Con olema: <b>ei ole</b> oppure <b>pole</b>.</p>
<h4>Parlare una lingua</h4><p>Dopo rääkima, õppima, oskama la lingua va al partitivo: eesti <b>keelt</b>. Gli aggettivi di lingua non cambiano: eesti, itaalia, inglise, vene, soome, saksa.</p>
<h4>Da dove vieni?</h4><p><b>Kust sa pärit oled?</b> — Ma olen pärit <b>Itaaliast</b> (-st = da). Il caso -st torna nell'unità 13.</p>`
  },
  gram: [
    { q: "Ma ___ räägi vene keelt.", a: "ei", o: ["ei", "ole", "mitte"], why: "ei + räägi", it: "Non parlo russo." },
    { q: "Ta ei ___ Itaalias.", h: "elama", a: "ela", o: ["ela", "elab", "elama"], why: "ei + ela (senza -b)", it: "Non vive in Italia." },
    { q: "Me ei ___ homme.", h: "tulema", a: "tule", o: ["tule", "tuleme", "tulema"], why: "ei + tule", it: "Domani non veniamo." },
    { q: "Nad ei ___ soome keelt.", h: "õppima", a: "õpi", o: ["õpi", "õpivad", "õppi"], why: "ei + õpi", it: "Non studiano il finlandese." },
    { q: "Sa ei ___ midagi.", h: "tegema", a: "tee", o: ["tee", "teed", "tege"], why: "ei + tee", it: "Non fai niente." },
    { q: "Ma õpin eesti ___.", h: "keel", a: "keelt", o: ["keelt", "keel", "keele"], why: "õppima + keelt", it: "Studio l'estone." },
    { q: "Kas sa räägid inglise ___?", h: "keel", a: "keelt", why: "rääkima + keelt", it: "Parli inglese?" },
    { q: "Mika on ___. 🇫🇮", a: "soomlane", o: ["soomlane", "soome", "Soome"], why: "persona → -lane", it: "Mika è finlandese." },
    { q: "Ma olen pärit ___.", h: "Itaalia", a: "Itaaliast", o: ["Itaaliast", "Itaalias", "Itaalia"], why: "pärit + -st", it: "Vengo dall'Italia." },
    { q: "Ma ei ___ (lugema) ajalehte.", a: "loe", why: "lugema → loen → ei loe", it: "Non leggo il giornale." }
  ],
  tr: [
    { q: "Ma räägin vene keelt.", task: "neg", a: ["Ma ei räägi vene keelt.", "Mina ei räägi vene keelt."], why: "ei + räägi" },
    { q: "Ta elab Tartus.", task: "neg", a: ["Ta ei ela Tartus.", "Tema ei ela Tartus."], why: "ei + ela" },
    { q: "Me tuleme homme.", task: "neg", a: ["Me ei tule homme.", "Meie ei tule homme."], why: "ei + tule" },
    { q: "Nad õpivad saksa keelt.", task: "neg", a: ["Nad ei õpi saksa keelt.", "Nemad ei õpi saksa keelt."], why: "ei + õpi" },
    { q: "Ma olen eestlane.", task: "neg", a: ["Ma ei ole eestlane.", "Ma pole eestlane.", "Mina ei ole eestlane."], why: "ei ole / pole" }
  ],
  sent: [
    { e: "Ma räägin natuke eesti keelt.", i: "Parlo un po' di estone.", ea: ["Ma räägin eesti keelt natuke."] },
    { e: "Ma ei räägi vene keelt.", i: "Non parlo russo." },
    { e: "Kust sa pärit oled?", i: "Da dove vieni?", ia: ["Di dove sei?"] },
    { e: "Ma olen pärit Itaaliast.", i: "Vengo dall'Italia.", ia: ["Sono originario dell'Italia.", "Sono di origine italiana."] },
    { e: "Kas sa räägid inglise keelt?", i: "Parli inglese?" },
    { e: "Minu emakeel on itaalia keel.", i: "La mia lingua madre è l'italiano." },
    { e: "Ta ei ela Eestis.", i: "Non vive in Estonia.", ia: ["Lui non vive in Estonia.", "Lei non vive in Estonia."] },
    { e: "Eesti on väike maa.", i: "L'Estonia è un piccolo paese." },
    { e: "Me ei tule täna.", i: "Oggi non veniamo.", ia: ["Non veniamo oggi."] }
  ],
  qa: [
    { q: "Kust sa pärit oled?", qi: "Da dove vieni?", a: ["Ma olen pärit Itaaliast."], k: ["pärit|olen"] },
    { q: "Mis keelt sa räägid?", qi: "Che lingua parli?", a: ["Ma räägin itaalia keelt."], k: ["keelt"] },
    { q: "Kas sa räägid vene keelt?", qi: "Parli russo?", a: ["Ei, ma ei räägi vene keelt."], k: ["räägin|räägi"] },
    { q: "Mis on sinu emakeel?", qi: "Qual è la tua lingua madre?", a: ["Minu emakeel on itaalia keel."], k: ["keel"] }
  ],
  sit: [
    { ctx: "Poes räägib müüja sinuga vene keelt. Sa ei räägi vene keelt.", line: null, o: ["Vabandust, ma ei räägi vene keelt. Kas te räägite eesti keelt?", "Jah, ma räägin vene keelt.", "Ma ei räägib vene keelt."] },
    { ctx: "Peol küsib keegi, kust sa pärit oled.", line: ["Mart", "Kust sa pärit oled?"], o: ["Ma olen pärit Itaaliast.", "Ma olen pärit Itaalias.", "Ma elan Itaaliast."] },
    { ctx: "Kolleeg kiidab sinu eesti keelt.", line: ["Kolleeg", "Sa räägid väga hästi eesti keelt!"], o: ["Aitäh! Ma õpin natuke iga päev.", "Ei, ma ei õpib.", "Mida see tähendab?"] }
  ],
  story: {
    t: "Rahvusvaheline pidu",
    lines: [["", "Laupäeval on Kati juures pidu. Seal on palju inimesi."], ["Kati", "Marco, see on Mika. Ta on soomlane."], ["Mika", "Tere! Kust sina pärit oled?"], ["Marco", "Ma olen pärit Itaaliast, aga ma elan Tallinnas."], ["Mika", "Kas sa räägid soome keelt?"], ["Marco", "Ei, ma ei räägi soome keelt. Ma räägin itaalia, inglise ja natuke eesti keelt."], ["Mika", "Mina ei räägi itaalia keelt. Räägime eesti keelt!"], ["Marco", "Hea mõte!"]],
    q: [{ q: "Kust on Mika pärit?", qi: "Da dove viene Mika?", o: ["Soomest", "Itaaliast", "Eestist"] }, { q: "Mis keelt nad lõpus räägivad?", qi: "Che lingua parlano alla fine?", o: ["Eesti keelt", "Soome keelt", "Itaalia keelt"] }],
    tf: [["Marco räägib soome keelt.", false], ["Pidu on Kati juures.", true], ["Mika räägib itaalia keelt.", false]]
  }
},
{
  id: 9, sec: 2, c: 3, t: "Kelle oma?", ti: "Di chi è?", gname: "Omastav (genitiiv): kelle? mille?",
  words: [
    ["raamat", "libro", "📕", "See on minu raamat."],
    ["vihik", "quaderno", "📓", "Kelle vihik see on?"],
    ["pliiats", "matita", "✏️", "Kas see on sinu pliiats?"],
    ["pastakas", "penna", "🖊️", "Minu pastakas on laual."],
    ["kott", "borsa", "👜", "See on õpetaja kott."],
    ["telefon", "telefono", "📱", "Kelle telefon see on?"],
    ["võti", "chiave", "🔑", "Kus on auto võti?"],
    ["prillid", "occhiali", "👓", "Vanaema prillid on laual."],
    ["arvuti", "computer", "💻", "See on kooli arvuti."],
    ["vihmavari", "ombrello", "☂️", "Kelle vihmavari see on?"],
    ["kelle", "di chi", "", "Kelle kott see on?"],
    ["ülikool", "università", "🏛️", "Ma õpin Tartu ülikoolis."]
  ],
  gl: { "kelle": "di chi", "mille": "di che cosa", "minu": "mio", "sinu": "tuo", "tema": "suo / di lui, di lei", "meie": "nostro", "teie": "vostro", "nende": "loro", "jaani": "di Jaan", "kati": "di Kati", "õpetaja": "insegnante / dell'insegnante", "sõbra": "dell'amico", "venna": "del fratello", "õe": "della sorella", "lapse": "del bambino", "kooli": "della scuola", "auto": "auto / dell'auto", "tallinna": "di Tallinn", "tartu": "di Tartu", "laual": "sul tavolo", "koti": "della borsa", "võtme": "della chiave", "raamatu": "del libro", "vihikud": "quaderni", "oma": "proprio, suo", "ülikoolis": "all'università", "klassis": "in classe", "tund": "lezione", "pärast": "dopo" },
  note: {
    et: `<h4>Kelle? Mille?</h4><div class="ex"><b>Kelle</b> kott see on? — See on <b>Jaani</b> kott.</div><div class="tabw"><table><tr><th>Kes? Mis?</th><th>Kelle? Mille?</th></tr><tr><td>mina</td><td><b>minu</b> (mu)</td></tr><tr><td>sina</td><td><b>sinu</b> (su)</td></tr><tr><td>tema</td><td><b>tema</b></td></tr><tr><td>meie / teie / nemad</td><td><b>meie / teie / nende</b></td></tr><tr><td>Jaan</td><td><b>Jaani</b></td></tr><tr><td>sõber</td><td><b>sõbra</b></td></tr><tr><td>vend</td><td><b>venna</b></td></tr><tr><td>laps</td><td><b>lapse</b></td></tr><tr><td>Tallinn</td><td><b>Tallinna</b></td></tr></table></div>
<h4>Võti</h4><p>See vorm on väga tähtis. Sellest tulevad teised vormid: Tallinn<b>a</b> → Tallinna<b>s</b>, sõbra → sõbra<b>ga</b>.</p>`,
    it: `<h4>Il genitivo: kelle? mille? (di chi? di che cosa?)</h4><p>Il possessore va <b>prima</b> della cosa posseduta, al genitivo: <b>Jaani</b> kott = la borsa di Jaan, <b>Tallinna</b> ülikool = l'università di Tallinn.</p>
<p>Il genitivo singolare non ha una desinenza unica: spesso finisce in vocale e può cambiare la radice. Va imparato con la parola: sõber → <b>sõbra</b>, vend → <b>venna</b>, õde → <b>õe</b>, laps → <b>lapse</b>, kott → <b>koti</b>, võti → <b>võtme</b>. Le parole che finiscono in vocale spesso non cambiano: ema → ema, õpetaja → õpetaja.</p>
<h4>Perché è la chiave</h4><p>Quasi tutti gli altri casi si costruiscono sul genitivo: Tallinna → Tallinna<b>s</b> (a Tallinn), sõbra → sõbra<b>ga</b> (con l'amico). Per questo i dizionari danno sempre tre forme: <b>raamat, raamatu, raamatut</b> (nominativo, genitivo, partitivo).</p>`
  },
  gram: [
    { q: "See on ___ raamat.", h: "mina", a: "minu", aa: ["mu"], o: ["minu", "mina", "mul"], why: "kelle? → minu", it: "È il mio libro." },
    { q: "See on ___ kott.", h: "Jaan", a: "Jaani", o: ["Jaani", "Jaan", "Jaanil"], why: "Jaan → Jaani", it: "È la borsa di Jaan." },
    { q: "___ telefon see on?", a: "Kelle", o: ["Kelle", "Kes", "Kus"], why: "kelle = di chi", it: "Di chi è questo telefono?" },
    { q: "See on ___ arvuti.", h: "sõber", a: "sõbra", o: ["sõbra", "sõber", "sõpra"], why: "sõber → sõbra", it: "È il computer dell'amico." },
    { q: "Ma õpin ___ ülikoolis.", h: "Tallinn", a: "Tallinna", o: ["Tallinna", "Tallinnas", "Tallinn"], why: "Tallinn → Tallinna", it: "Studio all'università di Tallinn." },
    { q: "See on ___ auto.", h: "vend", a: "venna", o: ["venna", "vend", "venda"], why: "vend → venna", it: "È la macchina del fratello." },
    { q: "See on ___ maja.", h: "nemad", a: "nende", o: ["nende", "nemad", "neil"], why: "nemad → nende", it: "È la loro casa." },
    { q: "Kus on ___ võti?", h: "auto", a: "auto", o: ["auto", "autot", "autos"], why: "auto → auto", it: "Dov'è la chiave della macchina?" },
    { q: "See on ___ mänguasi.", h: "laps", a: "lapse", why: "laps → lapse", it: "È il giocattolo del bambino." },
    { q: "Kas see on ___ pliiats?", h: "sina", a: "sinu", aa: ["su"], why: "sina → sinu", it: "È la tua matita?" }
  ],
  tr: [
    { q: "Raamat on minu.", task: null, ti: "Ütle teisiti: «See on … raamat.»", tii: "Dillo diversamente: «È il … libro.»", a: ["See on minu raamat.", "See on mu raamat."], why: "minu + raamat" }
  ],
  sent: [
    { e: "Kelle raamat see on?", i: "Di chi è questo libro?" },
    { e: "See on minu raamat.", i: "È il mio libro.", ia: ["Questo è il mio libro."] },
    { e: "See on Jaani kott.", i: "È la borsa di Jaan.", ia: ["Questa è la borsa di Jaan."] },
    { e: "Kelle telefon see on?", i: "Di chi è questo telefono?" },
    { e: "Minu sõbra nimi on Kadri.", i: "La mia amica si chiama Kadri.", ia: ["Il nome della mia amica è Kadri."] },
    { e: "Ma õpin Tartu ülikoolis.", i: "Studio all'università di Tartu." },
    { e: "Kus on minu võti?", i: "Dov'è la mia chiave?" },
    { e: "Vanaema prillid on laual.", i: "Gli occhiali della nonna sono sul tavolo." },
    { e: "See on õpetaja arvuti.", i: "È il computer dell'insegnante." }
  ],
  qa: [
    { q: "Mis on sinu ema nimi?", qi: "Come si chiama tua madre?", a: ["Minu ema nimi on Maria."], k: ["nimi"] },
    { q: "Mis on sinu sõbra nimi?", qi: "Come si chiama il tuo amico?", a: ["Minu sõbra nimi on Jaan."], k: ["sõbra|nimi"] },
    { q: "Kelle telefon on sinu käes?", qi: "Di chi è il telefono che hai in mano?", a: ["Minu telefon."], k: ["minu|mu"] }
  ],
  sit: [
    { ctx: "Klassis on laual kott. Sa ei tea, kelle oma see on.", line: null, o: ["Kelle kott see on?", "Kes kott see on?", "Kus kott see on?"] },
    { ctx: "Õpetaja küsib, kas see on sinu vihik. Jah, see on sinu oma.", line: ["Õpetaja", "Kas see on sinu vihik?"], o: ["Jah, see on minu vihik.", "Jah, see on mina vihik.", "Jah, see on mul vihik."] },
    { ctx: "Sõbra telefon heliseb, aga sõber on köögis.", line: null, o: ["Jaan, see on sinu telefon!", "Jaan, see on sina telefon!", "Jaan, see on sul telefon!"] }
  ],
  story: {
    t: "Kelle kott?",
    lines: [["", "Tund on läbi. Klassis on laual kott, vihik ja vihmavari."], ["Õpetaja", "Kelle kott see on?"], ["Liis", "See on Siimu kott."], ["Õpetaja", "Ja kelle vihik see on?"], ["Siim", "See on minu vihik. Aitäh!"], ["Õpetaja", "Ja vihmavari? Kas see on sinu vihmavari, Liis?"], ["Liis", "Ei, see ei ole minu vihmavari. See on õpetaja vihmavari!"], ["Õpetaja", "Oi! Tõesti, see on minu oma."]],
    q: [{ q: "Kelle kott on laual?", qi: "Di chi è la borsa sul tavolo?", o: ["Siimu", "Liisi", "Õpetaja"] }, { q: "Kelle vihmavari see on?", qi: "Di chi è l'ombrello?", o: ["Õpetaja", "Liisi", "Siimu"] }],
    tf: [["Vihik on Liisi oma.", false], ["Kott on Siimu oma.", true], ["Tund on läbi.", true]]
  }
},
{
  id: 10, sec: 2, c: 4, t: "Mis kell on?", ti: "Che ore sono?", gname: "Millal? Aeg ja nädalapäevad",
  words: [
    ["kell", "orologio, ora", "⏰", "Mis kell on?"],
    ["tund", "ora, lezione", "⏳", "Tund algab kell kaheksa."],
    ["minut", "minuto", "⏱️", "Buss tuleb viie minuti pärast."],
    ["pool", "mezzo, metà", "🌗", "Kell on pool kolm."],
    ["veerand", "un quarto", "", "Kell on veerand neli."],
    ["esmaspäev", "lunedì", "", "Esmaspäeval ma töötan."],
    ["teisipäev", "martedì", "", "Teisipäeval on eesti keele tund."],
    ["kolmapäev", "mercoledì", "", "Kolmapäeval ma ujun."],
    ["neljapäev", "giovedì", "", "Neljapäeval ma olen kodus."],
    ["reede", "venerdì", "", "Reedel me läheme kinno."],
    ["laupäev", "sabato", "", "Laupäeval ma magan kaua."],
    ["pühapäev", "domenica", "", "Pühapäeval me sööme koos."],
    ["nädal", "settimana", "🗓️", "Nädalas on seitse päeva."],
    ["kakskümmend", "venti", "", "Mul on kakskümmend eurot."]
  ],
  gl: { "kell": "ora, orologio, alle (ore)", "esmaspäeval": "lunedì (il)", "teisipäeval": "martedì", "kolmapäeval": "mercoledì", "neljapäeval": "giovedì", "reedel": "venerdì", "laupäeval": "sabato", "pühapäeval": "domenica", "esmaspäeviti": "di lunedì (ogni lunedì)", "laupäeviti": "il sabato (sempre)", "reedeti": "il venerdì (sempre)", "pühapäeviti": "la domenica (sempre)", "hommikuti": "la mattina (sempre)", "õhtuti": "la sera (sempre)", "millal": "quando", "algab": "comincia", "lõpeb": "finisce", "pärast": "dopo, tra", "viie": "cinque (genitivo)", "minuti": "minuto (genitivo)", "kaua": "a lungo", "koos": "insieme", "kinno": "al cinema", "nädalas": "in una settimana", "üksteist": "undici", "kaksteist": "dodici", "kolmteist": "tredici", "viisteist": "quindici", "kolmkümmend": "trenta", "nelikümmend": "quaranta", "viiskümmend": "cinquanta", "sada": "cento", "kolmveerand": "tre quarti", "ujun": "nuoto", "magan": "dormo", "kohtume": "ci incontriamo", "päeva": "giorni (partitivo)" },
  note: {
    et: `<h4>Mis kell on?</h4><div class="tabw"><table><tr><td>3:00</td><td>Kell on <b>kolm</b>.</td></tr><tr><td>3:15</td><td>Kell on <b>veerand neli</b>.</td></tr><tr><td>3:30</td><td>Kell on <b>pool neli</b>.</td></tr><tr><td>3:45</td><td>Kell on <b>kolmveerand neli</b>.</td></tr></table></div><p>Pool <b>neli</b> = 3:30! (pool teed neljani)</p>
<h4>Millal?</h4><div class="ex"><b>Kell kolm.</b> · <b>Esmaspäeval.</b> · <b>Hommikul.</b></div><div class="ex">esmaspäev → esmaspäeva<b>l</b> · reede → reede<b>l</b></div>
<h4>Iga esmaspäev</h4><div class="ex">esmaspäevi<b>ti</b> · laupäevi<b>ti</b> · hommiku<b>ti</b></div>
<h4>11–100</h4><div class="ex">11 üks<b>teist</b> · 12 kaks<b>teist</b> · 20 kaks<b>kümmend</b> · 25 kakskümmend viis · 100 sada</div>`,
    it: `<h4>Che ore sono?</h4><p>Attenzione: l'estone conta verso l'ora successiva. <b>Pool neli</b> = 3:30 (lett. «metà verso le quattro»), <b>veerand neli</b> = 3:15, <b>kolmveerand neli</b> = 3:45.</p>
<h4>Quando? — l'adessivo -l</h4><p>Per i giorni e i momenti della giornata si usa la desinenza <b>-l</b>: esmaspäeva<b>l</b> (lunedì), reede<b>l</b> (venerdì), hommiku<b>l</b> (di mattina), õhtu<b>l</b> (di sera). L'ora invece è semplice: <b>kell kolm</b> = alle tre.</p>
<h4>Abitudini: -ti</h4><p>Per qualcosa che succede sempre in quel giorno si usa <b>-ti</b>: esmaspäevi<b>ti</b> = ogni lunedì, hommiku<b>ti</b> = tutte le mattine.</p>
<h4>Numeri 11–100</h4><p>11–19: numero + <b>teist</b> (üksteist, kaksteist…). Decine: numero + <b>kümmend</b> (kakskümmend = 20). 100 = <b>sada</b>.</p>`
  },
  gram: [
    { q: "Mis ___ on?", a: "kell", o: ["kell", "tund", "aeg"], why: "Mis kell on? = Che ore sono?", it: "Che ore sono?" },
    { q: "Ma töötan ___.", h: "esmaspäev", a: "esmaspäeval", o: ["esmaspäeval", "esmaspäev", "esmaspäevas"], why: "Millal? → -l", it: "Lavoro lunedì." },
    { q: "Me kohtume ___.", h: "reede", a: "reedel", o: ["reedel", "reede", "reedes"], why: "Millal? → -l", it: "Ci vediamo venerdì." },
    { q: "Ta ujub ___ (iga laupäev).", h: "laupäev", a: "laupäeviti", o: ["laupäeviti", "laupäeval", "laupäev"], why: "iga laupäev → -ti", it: "Nuota ogni sabato." },
    { q: "___ sa tuled? — Kell viis.", a: "Millal", o: ["Millal", "Kus", "Kuhu"], why: "millal = quando", it: "Quando vieni?" },
    { q: "Kell on ___ neli. (3:30)", a: "pool", o: ["pool", "veerand", "kolmveerand"], why: "3:30 = pool neli", it: "Sono le tre e mezza." },
    { q: "Kell on ___ neli. (3:15)", a: "veerand", o: ["veerand", "pool", "kolmveerand"], why: "3:15 = veerand neli", it: "Sono le tre e un quarto." },
    { q: "Kell on pool ___. (5:30)", a: "kuus", o: ["kuus", "viis", "seitse"], why: "5:30 = pool kuus", it: "Sono le cinque e mezza." },
    { q: "12 = ___", a: "kaksteist", o: ["kaksteist", "kakskümmend", "kaks"], why: "kaks + teist", it: "dodici" },
    { q: "Tund algab ___ kaheksa.", a: "kell", why: "kell + number = alle …", it: "La lezione comincia alle otto." },
    { q: "Ma magan ___ kaua. (pühapäev)", h: "pühapäev", a: "pühapäeval", why: "Millal? → -l", it: "Domenica dormo a lungo." }
  ],
  tr: [
    { q: "Esmaspäev.", task: null, ti: "Vasta: Millal?", tii: "Rispondi: quando?", a: ["Esmaspäeval."], why: "-l" },
    { q: "Ma käin ujumas laupäeval.", task: null, ti: "Ütle, et see on iga laupäev", tii: "Di' che succede ogni sabato", a: ["Ma käin ujumas laupäeviti.", "Laupäeviti ma käin ujumas.", "Laupäeviti käin ma ujumas."], why: "-ti" }
  ],
  sent: [
    { e: "Mis kell on?", i: "Che ore sono?" },
    { e: "Kell on pool neli.", i: "Sono le tre e mezza." },
    { e: "Tund algab kell kaheksa.", i: "La lezione comincia alle otto." },
    { e: "Teisipäeval on eesti keele tund.", i: "Martedì c'è la lezione di estone." },
    { e: "Reedel me läheme kinno.", i: "Venerdì andiamo al cinema.", ea: ["Me läheme reedel kinno."] },
    { e: "Laupäeval ma magan kaua.", i: "Sabato dormo a lungo.", ea: ["Ma magan laupäeval kaua."] },
    { e: "Nädalas on seitse päeva.", i: "In una settimana ci sono sette giorni." },
    { e: "Mul on kakskümmend eurot.", i: "Ho venti euro." },
    { e: "Ta ujub esmaspäeviti.", i: "Nuota ogni lunedì.", ia: ["Il lunedì nuota."] },
    { e: "Kell on veerand kaksteist.", i: "Sono le undici e un quarto." }
  ],
  qa: [
    { q: "Mis kell praegu on?", qi: "Che ore sono adesso?", a: ["Kell on kolm."], k: ["kell"] },
    { q: "Millal sa ärkad?", qi: "Quando ti svegli?", a: ["Ma ärkan kell seitse."], k: ["kell|hommikul"] },
    { q: "Mis päev täna on?", qi: "Che giorno è oggi?", a: ["Täna on laupäev."], k: ["esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev|pühapäev"] },
    { q: "Millal on eesti keele tund?", qi: "Quando c'è la lezione di estone?", a: ["Teisipäeval kell viis."], k: ["-päeval|reedel|kell|-ti"] }
  ],
  sit: [
    { ctx: "Tänaval küsib keegi kellaaega. Kell on 4:30.", line: ["Mees", "Vabandust, mis kell on?"], o: ["Kell on pool viis.", "Kell on pool neli.", "Kell on neli pool."] },
    { ctx: "Sõber küsib, millal sa vaba oled. Sa oled vaba reedel.", line: ["Sõber", "Millal sul aega on?"], o: ["Reedel.", "Reede.", "Reedes."] },
    { ctx: "Bussijaamas. Buss läheb kell 18:00.", line: ["Turist", "Millal buss Tartusse läheb?"], o: ["Kell kuus.", "Kell kaheksateist läheb Tartusse buss pool.", "Laupäeviti."] }
  ],
  story: {
    t: "Liisi nädal",
    lines: [["", "Liis on õpilane. Tal on väga kiire nädal."], ["", "Esmaspäeviti ja kolmapäeviti on tal ujumine kell pool viis."], ["", "Teisipäeval ja neljapäeval on tal inglise keele tund."], ["", "Reedel läheb ta sõbraga kinno."], ["", "Laupäeval ta magab kaua, kuni kella kümneni."], ["", "Pühapäeval sööb kogu perekond koos lõunat."], ["Liis", "Minu lemmikpäev on laupäev!"]],
    q: [{ q: "Mis kell on Liisil ujumine?", qi: "A che ora nuota Liis?", o: ["Pool viis", "Pool neli", "Kell viis"] }, { q: "Millal läheb Liis kinno?", qi: "Quando va al cinema Liis?", o: ["Reedel", "Laupäeval", "Pühapäeval"] }],
    tf: [["Liis ujub teisipäeviti.", false], ["Pühapäeval sööb perekond koos.", true], ["Liisi lemmikpäev on laupäev.", true]]
  }
},
{
  id: 11, sec: 2, c: 5, t: "Minu päev", ti: "La mia giornata", gname: "Lähen sööma: ma-tegevusnimi",
  words: [
    ["ärkama", "svegliarsi", "🥱", "Ma ärkan kell seitse."],
    ["pesema", "lavare", "🚿", "Ma pesen hambaid."],
    ["hommikusöök", "colazione", "🥐", "Hommikusöögiks ma söön putru."],
    ["lõunasöök", "pranzo", "🍽️", "Lõunasöök on kell kaksteist."],
    ["õhtusöök", "cena", "🍝", "Õhtusöök on kell seitse."],
    ["magama", "dormire", "😴", "Ma lähen magama kell üksteist."],
    ["hommikul", "di mattina", "🌅", "Hommikul ma joon kohvi."],
    ["õhtul", "di sera", "🌆", "Õhtul ma loen."],
    ["öösel", "di notte", "🌙", "Öösel ma magan."],
    ["hakkama", "cominciare (a)", "", "Ma hakkan õppima."],
    ["töö", "lavoro", "", "Ma lähen tööle kell kaheksa."],
    ["puder", "porridge", "🥣", "Lapsed söövad putru."]
  ],
  gl: { "ärkan": "mi sveglio", "ärkad": "ti svegli", "ärkab": "si sveglia", "pesen": "lavo", "peseb": "lava", "hambaid": "denti (partitivo pl.)", "hommikusöögiks": "per colazione", "putru": "porridge (partitivo)", "lähen": "vado", "läheb": "va", "läheme": "andiamo", "lähevad": "vanno", "hakkan": "comincio", "hakkab": "comincia", "hakkame": "cominciamo", "tööle": "al lavoro", "töölt": "dal lavoro", "tööl": "al lavoro", "sööma": "a mangiare", "magama": "a dormire", "õppima": "a studiare", "ujuma": "a nuotare", "jalutama": "a passeggiare", "vaatama": "a guardare", "telekat": "la tv (partitivo)", "seejärel": "poi", "kõigepealt": "prima di tutto", "siis": "poi", "lõpuks": "alla fine", "lapsed": "bambini", "kooli": "a scuola", "riidesse": "(vestirsi: riidesse panema)", "panen": "metto", "duši": "doccia (genitivo)", "all": "sotto", "käin": "vado (abitualmente)", "tavaliselt": "di solito", "päev": "giorno", "koju": "a casa" },
  note: {
    et: `<h4>Ma lähen sööma</h4><p>Pärast <b>minema, tulema, hakkama</b> on verb <b>-ma</b> vormis.</p><div class="ex">Ma <b>lähen sööma</b>. · Ta <b>läheb magama</b>. · Me <b>hakkame õppima</b>. · <b>Tule sööma!</b></div>
<h4>Päev</h4><div class="tabw"><table><tr><td>🌅</td><td>hommik</td><td>hommiku<b>l</b></td></tr><tr><td>☀️</td><td>päev</td><td>päeva<b>l</b></td></tr><tr><td>🌆</td><td>õhtu</td><td>õhtu<b>l</b></td></tr><tr><td>🌙</td><td>öö</td><td><b>öösel</b></td></tr></table></div>
<h4>Järjekord</h4><div class="ex">Kõigepealt… · Siis… · Lõpuks…</div>`,
    it: `<h4>Andare a fare qualcosa: infinito in -ma</h4><p>Dopo i verbi di movimento <b>minema</b> (andare), <b>tulema</b> (venire) e dopo <b>hakkama</b> (cominciare) il secondo verbo è all'infinito in <b>-ma</b>: Ma lähen <b>sööma</b> = vado a mangiare. Ta hakkab <b>õppima</b> = comincia a studiare.</p><p>Con altri verbi (tahtma, oskama…) si usa un altro infinito in <b>-da</b>: arriva nell'unità 25. Per ora: dopo minema/tulema/hakkama sempre <b>-ma</b>.</p>
<h4>Momenti della giornata</h4><p>hommiku<b>l</b> = di mattina, päeva<b>l</b> = di giorno, õhtu<b>l</b> = di sera, <b>öösel</b> = di notte (irregolare).</p>
<h4>Raccontare in ordine</h4><p>kõigepealt = prima di tutto · siis = poi · lõpuks = alla fine.</p>`
  },
  gram: [
    { q: "Ma lähen ___.", h: "magama", a: "magama", o: ["magama", "magan", "magab"], why: "minema + -ma", it: "Vado a dormire." },
    { q: "Ta hakkab ___.", h: "õppima", a: "õppima", o: ["õppima", "õpib", "õpin"], why: "hakkama + -ma", it: "Comincia a studiare." },
    { q: "Kell seitse ma ___.", h: "ärkama", a: "ärkan", o: ["ärkan", "ärkama", "ärkab"], why: "ma → -n", it: "Alle sette mi sveglio." },
    { q: "Me läheme ___.", h: "ujuma", a: "ujuma", o: ["ujuma", "ujume", "ujub"], why: "minema + -ma", it: "Andiamo a nuotare." },
    { q: "Lapsed lähevad ___.", h: "kool, Kuhu?", a: "kooli", o: ["kooli", "koolis", "kool"], why: "Kuhu? → kooli", it: "I bambini vanno a scuola." },
    { q: "___ ma joon kohvi. 🌅", a: "Hommikul", o: ["Hommikul", "Hommik", "Hommikuti"], why: "Millal? → -l", it: "Di mattina bevo caffè." },
    { q: "___ ma magan. 🌙", a: "Öösel", o: ["Öösel", "Ööl", "Öö"], why: "öö → öösel", it: "Di notte dormo." },
    { q: "Tule ___!", h: "sööma", a: "sööma", o: ["sööma", "söö", "sööd"], why: "tulema + -ma", it: "Vieni a mangiare!" },
    { q: "Ma lähen ___ kell kaheksa.", h: "töö, Kuhu?", a: "tööle", o: ["tööle", "töös", "töö"], why: "Kuhu? → tööle", it: "Vado al lavoro alle otto." },
    { q: "Õhtul me hakkame telekat ___.", h: "vaatama", a: "vaatama", why: "hakkama + -ma", it: "La sera cominciamo a guardare la tv." }
  ],
  tr: [
    { q: "Ma söön.", task: null, ti: "Ütle «Ma lähen …»", tii: "Di' «Vado a …»", a: ["Ma lähen sööma.", "Mina lähen sööma."], why: "minema + -ma" },
    { q: "Ta õpib.", task: null, ti: "Ütle «Ta hakkab …»", tii: "Di' «Comincia a …»", a: ["Ta hakkab õppima.", "Tema hakkab õppima."], why: "hakkama + -ma" }
  ],
  sent: [
    { e: "Ma ärkan kell seitse.", i: "Mi sveglio alle sette." },
    { e: "Hommikul ma joon kohvi.", i: "Di mattina bevo caffè.", ea: ["Ma joon hommikul kohvi."] },
    { e: "Ma lähen tööle kell kaheksa.", i: "Vado al lavoro alle otto." },
    { e: "Lõunasöök on kell kaksteist.", i: "Il pranzo è a mezzogiorno.", ia: ["Il pranzo è alle dodici."] },
    { e: "Õhtul ma loen.", i: "La sera leggo.", ia: ["Di sera leggo."], ea: ["Ma loen õhtul."] },
    { e: "Ma lähen magama kell üksteist.", i: "Vado a dormire alle undici." },
    { e: "Me hakkame õppima.", i: "Cominciamo a studiare." },
    { e: "Tule sööma!", i: "Vieni a mangiare!" },
    { e: "Kõigepealt ma pesen hambaid.", i: "Prima di tutto mi lavo i denti." }
  ],
  qa: [
    { q: "Mis kell sa ärkad?", qi: "A che ora ti svegli?", a: ["Ma ärkan kell seitse."], k: ["ärkan|kell"] },
    { q: "Mida sa hommikul sööd?", qi: "Che cosa mangi di mattina?", a: ["Hommikul ma söön putru."], k: ["söön|joon"] },
    { q: "Millal sa lähed magama?", qi: "Quando vai a dormire?", a: ["Ma lähen magama kell üksteist."], k: ["kell|õhtul|öösel"] },
    { q: "Mida sa õhtul teed?", qi: "Che cosa fai la sera?", a: ["Õhtul ma loen."], k: ["ma|mina"] }
  ],
  sit: [
    { ctx: "Ema helistab ja küsib, mida sa teed. Sa oled teel poodi.", line: ["Ema", "Mida sa teed?"], o: ["Ma lähen poodi.", "Ma lähen poes.", "Ma lähen pood."] },
    { ctx: "On kell 23. Sõber tahab rääkida, aga sa oled väsinud.", line: ["Sõber", "Räägime veel natuke!"], o: ["Vabandust, ma lähen magama.", "Vabandust, ma lähen magan.", "Head hommikut!"] },
    { ctx: "Õhtusöök on valmis. Sa kutsud lapsi.", line: null, o: ["Lapsed, tulge sööma!", "Lapsed, tulge söön!", "Lapsed, sööma tulema!"] }
  ],
  story: {
    t: "Marco tavaline päev",
    lines: [["", "Marco ärkab kell pool seitse."], ["", "Kõigepealt ta läheb duši alla ja peseb hambaid."], ["", "Hommikusöögiks ta sööb putru ja joob kohvi."], ["", "Kell kaheksa ta läheb tööle. Ta sõidab bussiga."], ["", "Lõunasöök on kell kaksteist. Marco läheb kolleegidega sööma."], ["", "Kell neli ta tuleb koju ja hakkab eesti keelt õppima."], ["", "Õhtul ta loeb või vaatab telekat."], ["", "Kell üksteist ta läheb magama."]],
    q: [{ q: "Mis kell Marco ärkab?", qi: "A che ora si sveglia Marco?", o: ["Pool seitse", "Pool kaheksa", "Kell seitse"] }, { q: "Mida Marco teeb kell neli?", qi: "Che cosa fa Marco alle quattro?", o: ["Ta tuleb koju ja hakkab õppima.", "Ta läheb tööle.", "Ta läheb magama."] }],
    tf: [["Marco sõidab tööle rongiga.", false], ["Marco sööb hommikul putru.", true], ["Marco läheb magama kell üksteist.", true]]
  }
},
{
  id: 12, sec: 2, c: 6, t: "Esimene nädal", ti: "La prima settimana (ripasso)", gname: "Kordamine: peatükid 7–11",
  words: [
    ["uus", "nuovo", "🆕", "Mul on uus töö."],
    ["kolleeg", "collega", "🧑‍💼", "Minu kolleeg on väga sõbralik."],
    ["sõbralik", "gentile, amichevole", "😊", "Inimesed on sõbralikud."],
    ["kontor", "ufficio", "🏢", "Ma töötan kontoris."],
    ["nädalavahetus", "fine settimana", "🏖️", "Nädalavahetusel ma puhkan."],
    ["puhkama", "riposare", "😌", "Pühapäeval me puhkame."],
    ["väsinud", "stanco", "😩", "Õhtul ma olen väsinud."],
    ["raske", "difficile", "🏋️", "Eesti keel on raske, aga ilus."],
    ["huvitav", "interessante", "🤔", "See raamat on huvitav."],
    ["kiire", "di fretta, veloce", "⚡", "Mul on täna kiire."]
  ],
  gl: { "nädalavahetusel": "nel fine settimana", "kontoris": "in ufficio", "sõbralikud": "gentili", "inimesed": "le persone", "puhkan": "riposo", "puhkame": "riposiamo", "mulle": "a me", "meeldib": "piace", "kõik": "tutto", "uues": "nuovo (in)", "linnas": "in città", "esimene": "primo", "esimesel": "nel primo", "päeval": "giorno (il)", "iga": "ogni", "päev": "giorno", "kirjutab": "scrive", "kiri": "lettera", "kallis": "caro", "tervitused": "saluti", "sinu": "tuo" },
  note: {
    et: `<h4>Kordame</h4><div class="tabw"><table><tr><th>Teema</th><th>Näide</th></tr><tr><td>olevik</td><td>ma elan, sa elad, nad elavad</td></tr><tr><td>eitus</td><td>ma ei ela, ta ei tule</td></tr><tr><td>kelle?</td><td>minu, Jaani, sõbra</td></tr><tr><td>millal?</td><td>kell kolm, esmaspäeval, hommikul</td></tr><tr><td>lähen + -ma</td><td>lähen sööma, hakkan õppima</td></tr></table></div>`,
    it: `<h4>Ripasso delle unità 7–11</h4><div class="tabw"><table><tr><th>Argomento</th><th>Esempio</th></tr><tr><td>presente</td><td>ma elan, sa elad, nad elavad</td></tr><tr><td>negazione</td><td>ma ei ela, ta ei tule</td></tr><tr><td>genitivo (di chi?)</td><td>minu, Jaani, sõbra</td></tr><tr><td>quando?</td><td>kell kolm, esmaspäeval, hommikul</td></tr><tr><td>vado a + -ma</td><td>lähen sööma, hakkan õppima</td></tr></table></div><p>Nuovo: <b>mulle meeldib</b> = mi piace (si vedrà meglio nell'unità 14).</p>`
  },
  gram: [
    { q: "Nad ___ Tartus.", h: "elama", a: "elavad", o: ["elavad", "elab", "elame"], why: "nad → -vad", it: "Vivono a Tartu." },
    { q: "Ma ei ___ täna.", h: "töötama", a: "tööta", o: ["tööta", "töötan", "töötama"], why: "ei + tööta", it: "Oggi non lavoro." },
    { q: "See on minu ___ kontor.", h: "kolleeg", a: "kolleegi", o: ["kolleegi", "kolleeg", "kolleegid"], why: "kelle? → kolleegi", it: "È l'ufficio del mio collega." },
    { q: "Me kohtume ___.", h: "neljapäev", a: "neljapäeval", o: ["neljapäeval", "neljapäev", "neljapäeviti"], why: "Millal? → -l", it: "Ci vediamo giovedì." },
    { q: "Pärast tööd ma lähen ___.", h: "ujuma", a: "ujuma", o: ["ujuma", "ujun", "ujuda"], why: "minema + -ma", it: "Dopo il lavoro vado a nuotare." },
    { q: "Ma ___ eesti keelt iga päev.", h: "õppima", a: "õpin", o: ["õpin", "õppin", "õpib"], why: "õppima → õpin", it: "Studio l'estone ogni giorno." },
    { q: "Kell on pool ___. (7:30)", a: "kaheksa", o: ["kaheksa", "seitse", "kuus"], why: "7:30 = pool kaheksa", it: "Sono le sette e mezza." },
    { q: "Kas sa ___ eesti keelt? — Natuke.", h: "rääkima", a: "räägid", why: "sa → räägid", it: "Parli estone? — Un po'." },
    { q: "Ma ei ___ aru.", a: "saa", o: ["saa", "saan", "saab"], why: "ei + saa", it: "Non capisco." }
  ],
  tr: [
    { q: "Ma töötan nädalavahetusel.", task: "neg", a: ["Ma ei tööta nädalavahetusel.", "Mina ei tööta nädalavahetusel.", "Nädalavahetusel ma ei tööta."], why: "ei + tööta" },
    { q: "Ta loeb.", task: null, ti: "Ütle «Ta hakkab …»", tii: "Di' «Comincia a …»", a: ["Ta hakkab lugema.", "Tema hakkab lugema."], why: "hakkama + -ma" }
  ],
  sent: [
    { e: "Mul on uus töö.", i: "Ho un lavoro nuovo." },
    { e: "Ma töötan kontoris.", i: "Lavoro in ufficio." },
    { e: "Minu kolleeg on väga sõbralik.", i: "Il mio collega è molto gentile.", ia: ["La mia collega è molto gentile."] },
    { e: "Nädalavahetusel ma puhkan.", i: "Nel fine settimana riposo.", ea: ["Ma puhkan nädalavahetusel."] },
    { e: "Eesti keel on raske, aga ilus.", i: "L'estone è difficile, ma bello." },
    { e: "Õhtul ma olen väsinud.", i: "La sera sono stanco.", ia: ["La sera sono stanca."] },
    { e: "Mul on täna kiire.", i: "Oggi ho fretta.", ia: ["Oggi sono di fretta."] },
    { e: "See raamat on huvitav.", i: "Questo libro è interessante." }
  ],
  qa: [
    { q: "Kas sul on täna kiire?", qi: "Hai fretta oggi?", a: ["Jah, mul on täna kiire."], k: ["jah|ei"] },
    { q: "Mida sa nädalavahetusel teed?", qi: "Che cosa fai nel fine settimana?", a: ["Nädalavahetusel ma puhkan."], k: ["ma|mina"] },
    { q: "Kas eesti keel on raske?", qi: "L'estone è difficile?", a: ["Jah, aga ilus."], k: ["jah|ei|raske|lihtne"] }
  ],
  sit: [
    { ctx: "Esimene päev uues töökohas. Kolleeg tervitab sind.", line: ["Kolleeg", "Tere! Kas sa oled uus kolleeg?"], o: ["Jah, tere! Minu nimi on Marco.", "Jah, ma olen uus kolleegi.", "Ei, aitäh."] },
    { ctx: "Kolleeg kutsub sind lõunale, aga sul on kiire.", line: ["Kolleeg", "Kas tuled sööma?"], o: ["Vabandust, mul on täna kiire.", "Jah, mul on kiire sööma.", "Ma ei kiire."] },
    { ctx: "Reede õhtu. Sõber küsib, kuidas nädal läks. Sa oled väsinud.", line: ["Sõber", "Kuidas läheb?"], o: ["Hästi, aga ma olen väga väsinud.", "Hästi, aga ma väsinud.", "Ma ei ole hästi väsinud."] }
  ],
  story: {
    t: "Esimene nädal Tallinnas",
    lines: [["", "Marco kirjutab emale kirja."], ["Marco", "Kallis ema! Mul on uues linnas kõik hästi."], ["Marco", "Ma töötan koolis. Minu kolleegid on väga sõbralikud."], ["Marco", "Teisipäeval ja neljapäeval ma õpin eesti keelt."], ["Marco", "Eesti keel on raske, aga mulle meeldib."], ["Marco", "Hommikul ma sõidan bussiga tööle. Õhtul ma olen väsinud."], ["Marco", "Nädalavahetusel ma puhkan ja jalutan vanalinnas."], ["Marco", "Tervitused isale! Sinu Marco"]],
    q: [{ q: "Kellele Marco kirjutab?", qi: "A chi scrive Marco?", o: ["Emale", "Isale", "Kolleegile"] }, { q: "Millal Marco eesti keelt õpib?", qi: "Quando studia l'estone Marco?", o: ["Teisipäeval ja neljapäeval", "Esmaspäeval ja reedel", "Nädalavahetusel"] }, { q: "Mida Marco nädalavahetusel teeb?", qi: "Che cosa fa Marco nel fine settimana?", o: ["Ta puhkab ja jalutab.", "Ta töötab.", "Ta õpib eesti keelt."] }],
    tf: [["Marco kolleegid ei ole sõbralikud.", false], ["Marco sõidab tööle bussiga.", true], ["Marcole ei meeldi eesti keel.", false]]
  }
}
);
