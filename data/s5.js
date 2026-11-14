/* Osa 5 · Plaanid · A2.2 — units 25–30. In qa keys, "-xx" means "a word ending in xx". */
(window.UNITS = window.UNITS || []).push(
{
  id: 25, sec: 5, c: 1, t: "Ma pean minema", ti: "Devo andare", gname: "-ma või -da? pean minema / tahan minna",
  words: [
    ["pidama", "dovere", "", "Ma pean tööle minema."],
    ["oskama", "saper fare", "", "Ma oskan ujuda."],
    ["võima", "potere (permesso)", "", "Kas ma võin siin istuda?"],
    ["saama", "potere (riuscire)", "", "Ma ei saa täna tulla."],
    ["koristama", "pulire", "🧹", "Laupäeval ma pean koristama."],
    ["süüa tegema", "cucinare", "👩‍🍳", "Ma armastan süüa teha."],
    ["nõusid pesema", "lavare i piatti", "🧽", "Kes peab nõusid pesema?"],
    ["aitama", "aiutare", "", "Kas sa saad mind aidata?"],
    ["tantsima", "ballare", "💃", "Ta oskab hästi tantsida."],
    ["laulma", "cantare", "🎤", "Mulle meeldib laulda."],
    ["kitarr", "chitarra", "🎸", "Ta oskab kitarri mängida."],
    ["autot juhtima", "guidare la macchina", "", "Kas sa oskad autot juhtida?"],
    ["plaan", "piano, programma", "", "Mis plaanid sul on?"]
  ],
  gl: { "pean": "devo", "pead": "devi", "peab": "deve", "peavad": "devono", "oskan": "so (fare)", "oskad": "sai (fare)", "oskab": "sa (fare)", "võin": "posso", "võid": "puoi", "saan": "posso, riesco", "saad": "puoi", "saa": "(non) posso", "minna": "andare", "tulla": "venire", "olla": "essere", "süüa": "mangiare", "juua": "bere", "teha": "fare", "ujuda": "nuotare", "istuda": "sedersi", "lugeda": "leggere", "õppida": "studiare", "laulda": "cantare", "tantsida": "ballare", "mängida": "suonare, giocare", "aidata": "aiutare", "juhtida": "guidare", "küpsetada": "cuocere al forno", "puhata": "riposare", "mind": "me (partitivo)", "sind": "te (partitivo)", "kitarri": "chitarra (partitivo)", "nõusid": "piatti (partitivo pl.)", "plaanid": "piani", "vara": "presto", "rohkem": "di più", "kahju": "peccato", "külla": "in visita", "õunakoogi": "torta di mele (oggetto)", "koos": "insieme", "oleks": "sarebbe" },
  note: {
    et: `<h4>Kaks tegevusnime</h4><p>Eesti keeles on kaks vormi: <b>-ma</b> ja <b>-da</b>.</p><div class="tabw"><table><tr><th>+ -ma</th><th>+ -da</th></tr><tr><td>pidama: Ma <b>pean</b> mine<b>ma</b>.</td><td>tahtma: Ma <b>tahan</b> min<b>na</b>.</td></tr><tr><td>minema, tulema: Lähen söö<b>ma</b>.</td><td>oskama: Ma <b>oskan</b> uju<b>da</b>.</td></tr><tr><td>hakkama: Hakkan õppi<b>ma</b>.</td><td>võima, saama: Kas ma <b>võin</b> istu<b>da</b>?</td></tr><tr><td></td><td>meeldima, armastama: Mulle <b>meeldib</b> laul<b>da</b>.</td></tr></table></div>
<h4>-da vormid</h4><div class="ex">ujuma → uju<b>da</b> · lugema → luge<b>da</b> · minema → <b>minna</b> · tulema → <b>tulla</b> · olema → <b>olla</b> · tegema → <b>teha</b> · sööma → <b>süüa</b> · jooma → <b>juua</b></div>`,
    it: `<h4>Due infiniti</h4><p>L'estone ha due infiniti, e il verbo che precede decide quale usare.</p><p><b>Infinito in -ma</b> dopo: <b>pidama</b> (dovere), i verbi di movimento <b>minema, tulema</b> e <b>hakkama</b> (cominciare): Ma pean mine<b>ma</b> = devo andare.</p><p><b>Infinito in -da</b> dopo: <b>tahtma</b> (volere), <b>oskama</b> (saper fare), <b>võima</b> (potere, permesso), <b>saama</b> (potere, riuscire), <b>meeldima</b>, <b>armastama</b>: Ma tahan min<b>na</b> = voglio andare.</p>
<h4>Come si forma l'infinito in -da</h4><p>Di solito radice + <b>-da</b> (ujuda, lugeda, õppida), ma i verbi più comuni sono irregolari: minema → <b>minna</b>, tulema → <b>tulla</b>, olema → <b>olla</b>, tegema → <b>teha</b>, nägema → <b>näha</b>, sööma → <b>süüa</b>, jooma → <b>juua</b>, ostma → <b>osta</b>, aitama → <b>aidata</b>. Nei dizionari i verbi sono dati con entrambe le forme: <b>minema, minna, lähen</b>.</p>`
  },
  gram: [
    { q: "Ma pean tööle ___.", h: "minema", a: "minema", v: "minema|ma", o: ["minema", "minna", "lähen"], why: "pidama + -ma", it: "Devo andare al lavoro." },
    { q: "Ma tahan koju ___.", h: "minema", a: "minna", v: "minema|da", o: ["minna", "minema", "lähen"], why: "tahtma + -da", it: "Voglio andare a casa." },
    { q: "Ta oskab hästi ___.", h: "ujuma", a: "ujuda", v: "ujuma|da", o: ["ujuda", "ujuma", "ujub"], why: "oskama + -da", it: "Sa nuotare bene." },
    { q: "Kas ma võin siin ___?", h: "istuma", a: "istuda", v: "istuma|da", o: ["istuda", "istuma", "istun"], why: "võima + -da", it: "Posso sedermi qui?" },
    { q: "Ma ei saa täna ___.", h: "tulema", a: "tulla", v: "tulema|da", o: ["tulla", "tulema", "tulen"], why: "saama + -da", it: "Oggi non posso venire." },
    { q: "Sa pead rohkem ___.", h: "õppima", a: "õppima", v: "õppima|ma", o: ["õppima", "õppida", "õpid"], why: "pidama + -ma", it: "Devi studiare di più." },
    { q: "Mulle meeldib ___.", h: "lugema", a: "lugeda", v: "lugema|da", o: ["lugeda", "lugema", "loen"], why: "meeldima + -da", it: "Mi piace leggere." },
    { q: "Ma tahan midagi ___.", h: "sööma", a: "süüa", v: "sööma|da", o: ["süüa", "sööma", "sööda"], why: "sööma → süüa", it: "Voglio mangiare qualcosa." },
    { q: "Kas sa oskad süüa ___?", h: "tegema", a: "teha", v: "tegema|da", why: "tegema → teha", it: "Sai cucinare?" },
    { q: "Lapsed peavad vara magama ___.", h: "minema", a: "minema", v: "minema|ma", why: "pidama + -ma", it: "I bambini devono andare a dormire presto." },
    { q: "Ma armastan ___.", h: "laulma", a: "laulda", v: "laulma|da", why: "armastama + -da", it: "Amo cantare." },
    { q: "Me hakkame ___.", h: "sööma", a: "sööma", v: "sööma|ma", o: ["sööma", "süüa", "sööme"], why: "hakkama + -ma", it: "Cominciamo a mangiare." }
  ],
  tr: [
    { q: "Ma lähen koju.", task: null, ti: "Ütle «Ma tahan …»", tii: "Di' «Voglio …»", a: ["Ma tahan koju minna.", "Ma tahan minna koju."], why: "tahtma + minna" },
    { q: "Ma lähen tööle.", task: null, ti: "Ütle «Ma pean …»", tii: "Di' «Devo …»", a: ["Ma pean tööle minema.", "Ma pean minema tööle."], why: "pidama + minema" },
    { q: "Ta ujub.", task: null, ti: "Ütle «Ta oskab …»", tii: "Di' «Sa …»", a: ["Ta oskab ujuda.", "Tema oskab ujuda."], why: "oskama + ujuda" }
  ],
  sent: [
    { e: "Ma pean tööle minema.", i: "Devo andare al lavoro.", ea: ["Ma pean minema tööle."] },
    { e: "Ma tahan koju minna.", i: "Voglio andare a casa.", ea: ["Ma tahan minna koju."] },
    { e: "Kas sa oskad ujuda?", i: "Sai nuotare?" },
    { e: "Kas ma võin siin istuda?", i: "Posso sedermi qui?" },
    { e: "Ma ei saa täna tulla.", i: "Oggi non posso venire.", ea: ["Ma ei saa tulla täna.", "Täna ma ei saa tulla."] },
    { e: "Mulle meeldib laulda.", i: "Mi piace cantare." },
    { e: "Laupäeval ma pean koristama.", i: "Sabato devo pulire.", ea: ["Ma pean laupäeval koristama."] },
    { e: "Kas sa saad mind aidata?", i: "Puoi aiutarmi?" },
    { e: "Ta oskab kitarri mängida.", i: "Sa suonare la chitarra." }
  ],
  qa: [
    { q: "Mida sa täna tegema pead?", qi: "Che cosa devi fare oggi?", a: ["Ma pean täna töötama."], k: ["pean"] },
    { q: "Mida sa oskad hästi teha?", qi: "Che cosa sai fare bene?", a: ["Ma oskan hästi süüa teha."], k: ["oskan"] },
    { q: "Mida sa tahad nädalavahetusel teha?", qi: "Che cosa vuoi fare nel fine settimana?", a: ["Ma tahan puhata."], k: ["tahan|tahaksin"] },
    { q: "Kas sa oskad autot juhtida?", qi: "Sai guidare?", a: ["Jah, oskan."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Kohvikus on vaba tool teise inimese laua juures.", line: null, o: ["Vabandust, kas ma võin siin istuda?", "Vabandust, kas ma pean siin istuma?", "Vabandust, ma oskan siin istuda."] },
    { ctx: "Sõber kutsub sind kinno, aga sa pead töötama.", line: ["Sõber", "Kas tuled täna kinno?"], o: ["Kahjuks ma ei saa. Ma pean töötama.", "Kahjuks ma ei saa. Ma pean töötada.", "Jah, ma pean kinos töötama."] },
    { ctx: "Sul on väga raske kott. Sa palud abi.", line: null, o: ["Kas sa saad mind aidata?", "Kas sa saad mind aitama?", "Kas ma pean sind aitama?"] }
  ],
  story: {
    t: "Kiire nädalavahetus",
    lines: [["", "Kati helistab Marcole."], ["Kati", "Kas sa tahad laupäeval Saaremaale sõita?"], ["Marco", "Ma tahan väga, aga ma ei saa. Ma pean laupäeval töötama."], ["Kati", "Kahju! Aga pühapäeval?"], ["Marco", "Pühapäeval pean ma koristama ja süüa tegema. Ema tuleb külla."], ["Kati", "Kas ma võin sind aidata? Ma oskan hästi kooki küpsetada."], ["Marco", "Tõesti? See oleks suurepärane!"], ["", "Pühapäeval nad koristavad koos ja Kati küpsetab õunakoogi."]],
    q: [{ q: "Miks Marco laupäeval sõita ei saa?", qi: "Perché Marco sabato non può partire?", o: ["Ta peab töötama.", "Ta on haige.", "Tal ei ole raha."] }, { q: "Mida Kati oskab hästi teha?", qi: "Che cosa sa fare bene Kati?", o: ["Kooki küpsetada", "Autot juhtida", "Laulda"] }],
    tf: [["Marco ema tuleb pühapäeval külla.", true], ["Kati ei taha aidata.", false], ["Pühapäeval nad koristavad koos.", true]]
  }
},
{
  id: 26, sec: 5, c: 2, t: "Töö ja kool", ti: "Lavoro e scuola", gname: "Kellena? -na · Kelleks? -ks · söömas",
  words: [
    ["amet", "professione", "", "Mis on sinu amet?"],
    ["kokk", "cuoco", "👨‍🍳", "Ta töötab kokana."],
    ["ehitaja", "muratore, operaio edile", "👷", "Ehitaja ehitab maja."],
    ["ajakirjanik", "giornalista", "📰", "Ajakirjanik kirjutab artiklit."],
    ["juuksur", "parrucchiere", "✂️", "Ma käin juuksuri juures."],
    ["insener", "ingegnere", "", "Mu vend õpib inseneriks."],
    ["müüja", "commesso", "🛒", "Ta töötab poes müüjana."],
    ["bussijuht", "autista di autobus", "", "Bussijuht töötab ka öösel."],
    ["ülemus", "capo", "", "Minu ülemus on koosolekul."],
    ["koosolek", "riunione", "", "Koosolek algab kell kümme."],
    ["palk", "stipendio", "💰", "Palk tuleb kuu lõpus."],
    ["tööpäev", "giornata lavorativa", "", "Minu tööpäev algab kell kaheksa."],
    ["valmis", "pronto, finito", "", "Töö on valmis!"]
  ],
  gl: { "kokana": "come cuoco", "õpetajana": "come insegnante", "müüjana": "come commesso", "insenerina": "come ingegnere", "ajakirjanikuna": "come giornalista", "arstiks": "(diventare) medico", "inseneriks": "(diventare) ingegnere", "kokaks": "(diventare) cuoco", "bussijuhiks": "(diventare) autista", "õpetajaks": "(diventare) insegnante", "saada": "diventare, ricevere", "söömas": "a mangiare (stato)", "ujumas": "a nuotare (stato)", "ujumast": "dal nuoto", "töötamas": "a lavorare", "koosolekul": "in riunione", "lõunat": "pranzo (partitivo)", "artiklit": "articolo (partitivo)", "juuksuri": "parrucchiere (genitivo)", "lõpus": "alla fine", "kuu": "mese", "kellena": "come che cosa (lavoro)", "kelleks": "(diventare) che cosa", "firma": "ditta", "direktor": "direttore", "tööd": "lavoro (partitivo)", "leidnud": "trovato (dopo ei)", "otsis": "cercava", "aruanne": "relazione", "müüb": "vende", "õpetab": "insegna", "ehitab": "costruisce" },
  note: {
    et: `<h4>Kellena? → -na</h4><div class="ex">Ma töötan õpetaja<b>na</b>. · Ta töötab koka<b>na</b>.</div>
<h4>Kelleks? → -ks</h4><div class="ex">Ta tahab arsti<b>ks</b> saada. · Mu vend õpib inseneri<b>ks</b>.</div><p>Omastav + <b>na</b> / <b>ks</b>.</p>
<h4>Tegija: -ja</h4><div class="ex">õpetama → õpeta<b>ja</b> · müüma → müü<b>ja</b> · ehitama → ehita<b>ja</b> · lugema → luge<b>ja</b></div>
<h4>Kus ta on? → -mas</h4><div class="tabw"><table><tr><th>Kuhu?</th><th>Kus?</th><th>Kust?</th></tr><tr><td>Ta läheb söö<b>ma</b>.</td><td>Ta on söö<b>mas</b>.</td><td>Ta tuleb söö<b>mast</b>.</td></tr></table></div>`,
    it: `<h4>Essivo -na: «come, in qualità di»</h4><p>Genitivo + <b>-na</b>: Ma töötan õpetaja<b>na</b> = lavoro come insegnante. Domanda: <b>Kellena?</b></p>
<h4>Traslativo -ks: «diventare»</h4><p>Genitivo + <b>-ks</b> indica ciò che si diventa: Ta tahab arsti<b>ks</b> saada = vuole diventare medico; õpib inseneri<b>ks</b> = studia da ingegnere. Domanda: <b>Kelleks?</b> Si usa anche per uno scopo o un momento: sünnipäeva<b>ks</b> (per il compleanno), reede<b>ks</b> (per venerdì).</p>
<h4>Nomi d'agente in -ja</h4><p>Radice del verbo + <b>-ja</b> = chi fa l'azione: õpetama → õpetaja (insegnante), müüma → müüja (venditore), lugema → lugeja (lettore).</p>
<h4>-ma, -mas, -mast</h4><p>L'infinito in -ma ha tre «casi», come i luoghi: Ta läheb söö<b>ma</b> (va a mangiare) · Ta on söö<b>mas</b> (è a mangiare, sta mangiando fuori) · Ta tuleb söö<b>mast</b> (torna dall'aver mangiato). Con <b>käima</b> si usa -mas: Ma käin uju<b>mas</b> = vado (regolarmente) a nuotare.</p>`
  },
  gram: [
    { q: "Ta töötab ___.", h: "kokk · Kellena?", a: "kokana", v: "kokk|sg es", o: ["kokana", "kokaks", "kokk"], why: "Kellena? → -na", it: "Lavora come cuoco." },
    { q: "Ma töötan ___.", h: "õpetaja · Kellena?", a: "õpetajana", v: "õpetaja|sg es", o: ["õpetajana", "õpetajaks", "õpetajal"], why: "Kellena? → -na", it: "Lavoro come insegnante." },
    { q: "Ta tahab ___ saada.", h: "arst · Kelleks?", a: "arstiks", v: "arst|sg tr", o: ["arstiks", "arstina", "arst"], why: "Kelleks? → -ks", it: "Vuole diventare medico." },
    { q: "Mu vend õpib ___.", h: "insener · Kelleks?", a: "inseneriks", v: "insener|sg tr", why: "Kelleks? → -ks", it: "Mio fratello studia da ingegnere." },
    { q: "Ta on lõunat ___.", h: "sööma · Kus?", a: "söömas", v: "sööma|mas", o: ["söömas", "sööma", "söömast"], why: "Kus? → -mas", it: "È a pranzo." },
    { q: "Ta tuleb ___.", h: "ujuma · Kust?", a: "ujumast", v: "ujuma|mast", o: ["ujumast", "ujumas", "ujuma"], why: "Kust? → -mast", it: "Torna dal nuoto." },
    { q: "Lapsed käivad ___.", h: "ujuma", a: "ujumas", v: "ujuma|mas", o: ["ujumas", "ujuma", "ujuda"], why: "käima + -mas", it: "I bambini vanno a nuoto." },
    { q: "Inimene, kes õpetab, on ___.", a: "õpetaja", o: ["õpetaja", "õpetama", "õpilane"], why: "õpetama → õpetaja", it: "Chi insegna è un insegnante." },
    { q: "Inimene, kes müüb, on ___.", a: "müüja", o: ["müüja", "müüma", "müüb"], why: "müüma → müüja", it: "Chi vende è un venditore." },
    { q: "Ta töötab ___.", h: "ajakirjanik · Kellena?", a: "ajakirjanikuna", v: "ajakirjanik|sg es", why: "ajakirjaniku + na", it: "Lavora come giornalista." },
    { q: "Laps tahab ___ saada.", h: "bussijuht · Kelleks?", a: "bussijuhiks", v: "bussijuht|sg tr", why: "bussijuhi + ks", it: "Il bambino vuole diventare autista di autobus." },
    { q: "Ülemus on ___.", h: "koosolek · Kus?", a: "koosolekul", v: "koosolek|sg ad", o: ["koosolekul", "koosolekus", "koosolekule"], why: "koosolek → -l", it: "Il capo è in riunione." }
  ],
  tr: [
    { q: "Ma olen õpetaja.", task: null, ti: "Ütle «Ma töötan …»", tii: "Di' «Lavoro come …»", a: ["Ma töötan õpetajana."], why: "-na" },
    { q: "Ta on arst.", task: null, ti: "Ütle «Ta tahab … saada»", tii: "Di' «Vuole diventare …»", a: ["Ta tahab arstiks saada.", "Ta tahab saada arstiks."], why: "-ks" }
  ],
  sent: [
    { e: "Mis on sinu amet?", i: "Qual è la tua professione?", ia: ["Che lavoro fai?"] },
    { e: "Ma töötan õpetajana.", i: "Lavoro come insegnante." },
    { e: "Ta tahab arstiks saada.", i: "Vuole diventare medico.", ea: ["Ta tahab saada arstiks."] },
    { e: "Ülemus on koosolekul.", i: "Il capo è in riunione." },
    { e: "Ta on lõunat söömas.", i: "È a pranzo.", ia: ["Sta pranzando."] },
    { e: "Koosolek algab kell kümme.", i: "La riunione comincia alle dieci." },
    { e: "Mu vend õpib inseneriks.", i: "Mio fratello studia da ingegnere.", ia: ["Mio fratello studia per diventare ingegnere."] },
    { e: "Töö on valmis!", i: "Il lavoro è finito!", ia: ["Il lavoro è pronto!"] },
    { e: "Ma käin juuksuri juures.", i: "Vado dal parrucchiere." }
  ],
  qa: [
    { q: "Kellena sa töötad?", qi: "Che lavoro fai?", a: ["Ma töötan õpetajana."], k: ["-na|olen"] },
    { q: "Kelleks sa lapsena saada tahtsid?", qi: "Che cosa volevi diventare da bambino?", a: ["Ma tahtsin arstiks saada."], k: ["-ks"] },
    { q: "Mis kell sinu tööpäev algab?", qi: "A che ora comincia la tua giornata di lavoro?", a: ["Minu tööpäev algab kell kaheksa."], k: ["kell"] }
  ],
  sit: [
    { ctx: "Keegi helistab ja küsib sinu ülemust. Ülemus on koosolekul.", line: ["Klient", "Tere! Kas ma saaksin direktoriga rääkida?"], o: ["Kahjuks on ta praegu koosolekul.", "Kahjuks on ta praegu koosolekuks.", "Ta töötab koosolekuna."] },
    { ctx: "Ülemus küsib, kas aruanne on valmis. Sa lõpetasid selle just.", line: ["Ülemus", "Kas aruanne on valmis?"], o: ["Jah, see on valmis.", "Jah, ma olen valmis aruanne.", "Jah, see on söömas."] },
    { ctx: "Peol küsib keegi sinu ametit. Sa oled õpetaja.", line: ["Naine", "Kellena te töötate?"], o: ["Ma töötan õpetajana.", "Ma töötan õpetajaks.", "Ma töötan õpetaja."] }
  ],
  story: {
    t: "Uus töökoht",
    lines: [["", "Kati vend Toomas otsis kaua tööd."], ["", "Ta õppis ülikoolis inseneriks, aga ta ei leidnud insenerina tööd."], ["", "Suvel töötas ta kohvikus kokana."], ["Toomas", "Mulle meeldib süüa teha, aga ma tahan töötada insenerina."], ["", "Eile helistas talle ühe firma direktor."], ["Direktor", "Tere! Kas te saate esmaspäeval tööle tulla?"], ["Toomas", "Jah, muidugi! Mis kell tööpäev algab?"], ["Direktor", "Kell üheksa. Kõigepealt on koosolek."], ["", "Nüüd töötab Toomas insenerina ja on väga rõõmus."]],
    q: [{ q: "Kelleks Toomas ülikoolis õppis?", qi: "Per che professione ha studiato Toomas?", o: ["Inseneriks", "Kokaks", "Arstiks"] }, { q: "Kus Toomas suvel töötas?", qi: "Dove ha lavorato Toomas d'estate?", o: ["Kohvikus", "Koolis", "Pangas"] }, { q: "Mis kell tööpäev algab?", qi: "A che ora comincia la giornata di lavoro?", o: ["Kell üheksa", "Kell kaheksa", "Kell kümme"] }],
    tf: [["Toomas töötas suvel kokana.", true], ["Toomas on nüüd kurb.", false]]
  }
},
{
  id: 27, sec: 5, c: 3, t: "Helistame ja kutsume", ti: "Telefonate e inviti", gname: "Tingiv kõneviis -ks- ja rajav -ni",
  words: [
    ["helistama", "telefonare", "📞", "Ma helistan sulle õhtul."],
    ["kutsuma", "invitare", "💌", "Ma kutsun sind sünnipäevale."],
    ["kohtuma", "incontrarsi", "", "Kohtume kell kuus!"],
    ["sõnum", "messaggio", "💬", "Saada mulle sõnum!"],
    ["telefoninumber", "numero di telefono", "🔢", "Mis su telefoninumber on?"],
    ["vaba", "libero", "", "Kas sa oled homme vaba?"],
    ["hõivatud", "occupato", "", "Ma olen homme hõivatud."],
    ["külla", "in visita (da qualcuno)", "", "Tule meile külla!"],
    ["hea meelega", "volentieri", "", "Tulen hea meelega!"],
    ["kahjuks", "purtroppo", "", "Kahjuks ma ei saa tulla."],
    ["kuni", "fino a", "", "Ma töötan kuni kella viieni."],
    ["tagasi helistama", "richiamare", "", "Ma helistan sulle tagasi."]
  ],
  gl: { "tahaksin": "vorrei", "tahaksid": "vorresti", "tahaks": "vorrebbe", "tuleksin": "verrei", "saaksin": "potrei", "saaksid": "potresti", "saaksite": "potreste / potrebbe (Lei)", "sooviksin": "desidererei", "oleks": "sarebbe", "oleksin": "sarei", "läheksin": "andrei", "võiksin": "potrei", "võiksime": "potremmo", "teeksid": "faresti", "magaksin": "dormirei", "viieni": "fino alle cinque", "kaheni": "fino alle due", "kaheksani": "fino alle otto", "reedeni": "fino a venerdì", "kella": "ora (genitivo)", "kellani": "fino a che ora", "helistan": "telefono", "helista": "telefona", "helistada": "telefonare", "kutsun": "invito", "sünnipäevale": "al compleanno", "peole": "alla festa", "saada": "manda", "meile": "da noi, a noi", "sulle": "a te", "kaasa": "con sé", "tuua": "portare", "tuju": "umore", "siiski": "comunque", "heliseb": "squilla", "avatud": "aperto", "pole viga": "non fa niente", "aega": "tempo (partitivo)", "kui": "se" },
  note: {
    et: `<h4>Viisakas ja «kui»-vorm: -ks-</h4><div class="tabw"><table><tr><th></th><th>tahtma</th><th>olema</th></tr><tr><td>ma</td><td>taha<b>ksin</b></td><td>ole<b>ksin</b></td></tr><tr><td>sa</td><td>taha<b>ksid</b></td><td>ole<b>ksid</b></td></tr><tr><td>ta</td><td>taha<b>ks</b></td><td>ole<b>ks</b></td></tr><tr><td>me</td><td>taha<b>ksime</b></td><td>ole<b>ksime</b></td></tr><tr><td>te</td><td>taha<b>ksite</b></td><td>ole<b>ksite</b></td></tr><tr><td>nad</td><td>taha<b>ksid</b></td><td>ole<b>ksid</b></td></tr></table></div>
<div class="ex">Kas sa <b>tahaksid</b> kinno tulla? · Ma <b>tuleksin</b> hea meelega. · See <b>oleks</b> tore!</div>
<h4>Kuni millal? → -ni</h4><div class="ex">Ma töötan kella viie<b>ni</b>. · Ootame reede<b>ni</b>. · Tallinnast Tartu<b>ni</b>.</div>
<h4>Kutse</h4><div class="ex">😊 Hea meelega! · 😕 Kahjuks ma ei saa.</div>`,
    it: `<h4>Il condizionale: -ks-</h4><p>Radice del presente + <b>-ks-</b> + desinenze: taha<b>ksin</b> (vorrei), taha<b>ksid</b>, taha<b>ks</b>, taha<b>ksime</b>, taha<b>ksite</b>, taha<b>ksid</b>. Serve per richieste gentili (Kas te <b>saaksite</b> mind aidata? = potrebbe aiutarmi?), per gli inviti (Kas sa <b>tahaksid</b> kinno tulla?) e per le ipotesi con <b>kui</b>: Kui mul <b>oleks</b> aega, ma <b>läheksin</b> kinno = se avessi tempo, andrei al cinema. Nota: in estone il condizionale si usa in entrambe le parti della frase ipotetica.</p>
<h4>Terminativo -ni: «fino a»</h4><p>Genitivo + <b>-ni</b>: kella viie<b>ni</b> = fino alle cinque, reede<b>ni</b> = fino a venerdì, Tartu<b>ni</b> = fino a Tartu. Spesso con <b>kuni</b>: kuni kella viieni.</p>
<h4>Accettare e rifiutare</h4><p><b>Hea meelega!</b> = volentieri! · <b>Kahjuks ma ei saa.</b> = purtroppo non posso · <b>Pole viga.</b> = non fa niente.</p>`
  },
  gram: [
    { q: "Kas sa ___ kinno tulla?", h: "tahtma · viisakalt", a: "tahaksid", v: "tahtma|ksid", o: ["tahaksid", "tahaksin", "tahtsid"], why: "sa → -ksid", it: "Vorresti venire al cinema?" },
    { q: "Ma ___ hea meelega.", h: "tulema · tingiv", a: "tuleksin", v: "tulema|ksin", o: ["tuleksin", "tulin", "tuleks"], why: "ma → -ksin", it: "Verrei volentieri." },
    { q: "Kas te ___ mind aidata?", h: "saama · teie", a: "saaksite", v: "saama|ksite", o: ["saaksite", "saaksid", "saate olla"], why: "te → -ksite", it: "Potrebbe aiutarmi?" },
    { q: "See ___ tore!", h: "olema · tingiv", a: "oleks", v: "olema|ks", o: ["oleks", "oli", "oleksin"], why: "see → -ks", it: "Sarebbe bello!" },
    { q: "Ma töötan kella ___.", h: "viis · Kuni millal?", a: "viieni", v: "viis|sg ter", o: ["viieni", "viiest", "viiel"], why: "viie + ni", it: "Lavoro fino alle cinque." },
    { q: "Ootame ___.", h: "reede · Kuni millal?", a: "reedeni", v: "reede|sg ter", o: ["reedeni", "reedel", "reedeks"], why: "-ni", it: "Aspettiamo fino a venerdì." },
    { q: "Pood on avatud kella ___.", h: "kaheksa", a: "kaheksani", v: "kaheksa|sg ter", why: "-ni", it: "Il negozio è aperto fino alle otto." },
    { q: "Kui mul oleks aega, ma ___ kinno.", h: "minema · tingiv", a: "läheksin", v: "minema|ksin", o: ["läheksin", "lähen", "läksin"], why: "minema → läheksin", it: "Se avessi tempo, andrei al cinema." },
    { q: "Buss sõidab Tallinnast ___.", h: "Tartu · Kuhu maani?", a: "Tartuni", v: "Tartu|sg ter", why: "-ni", it: "L'autobus va da Tallinn fino a Tartu." },
    { q: "Me ___ koos süüa teha.", h: "võima · tingiv", a: "võiksime", v: "võima|ksime", why: "me → -ksime", it: "Potremmo cucinare insieme." },
    { q: "Ma ___ tassi kohvi.", h: "soovima · tingiv", a: "sooviksin", v: "soovima|ksin", why: "ma → -ksin", it: "Vorrei una tazza di caffè." }
  ],
  tr: [
    { q: "Kas sa tahad kinno tulla?", task: "cond", a: ["Kas sa tahaksid kinno tulla?"], why: "tahad → tahaksid" },
    { q: "Kas te saate mind aidata?", task: "cond", a: ["Kas te saaksite mind aidata?"], why: "saate → saaksite" },
    { q: "Ma töötan. (kell viis)", task: null, ti: "Ütle, mis kellani", tii: "Di' fino a che ora", a: ["Ma töötan kella viieni.", "Ma töötan kuni kella viieni."], why: "kella viieni" }
  ],
  sent: [
    { e: "Kas sa tahaksid kinno tulla?", i: "Vorresti venire al cinema?", ia: ["Ti andrebbe di venire al cinema?"] },
    { e: "Tulen hea meelega!", i: "Vengo volentieri!" },
    { e: "Kahjuks ma ei saa tulla.", i: "Purtroppo non posso venire." },
    { e: "Kas sa oled homme vaba?", i: "Sei libero domani?", ia: ["Sei libera domani?"] },
    { e: "Ma helistan sulle tagasi.", i: "Ti richiamo." },
    { e: "Kohtume kell kuus!", i: "Ci vediamo alle sei!" },
    { e: "Ma töötan kella viieni.", i: "Lavoro fino alle cinque." },
    { e: "Tule meile külla!", i: "Vieni a trovarci!" },
    { e: "Mis su telefoninumber on?", i: "Qual è il tuo numero di telefono?" },
    { e: "See oleks tore!", i: "Sarebbe bello!" }
  ],
  qa: [
    { q: "Kas sa tahaksid laupäeval kinno tulla?", qi: "Vorresti venire al cinema sabato?", a: ["Jah, hea meelega!"], k: ["jah|ei|kahjuks|meelega"] },
    { q: "Mis kellani sa täna töötad?", qi: "Fino a che ora lavori oggi?", a: ["Ma töötan kella viieni."], k: ["-ni"] },
    { q: "Mida sa teeksid, kui sul oleks vaba päev?", qi: "Che cosa faresti se avessi un giorno libero?", a: ["Ma magaksin kaua."], k: ["-ksin"] },
    { q: "Kas ma võin sulle õhtul helistada?", qi: "Posso telefonarti stasera?", a: ["Jah, muidugi."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Sa tahad sõpra laupäeval kinno kutsuda.", line: null, o: ["Kas sa tahaksid laupäeval kinno tulla?", "Kas sa tahaksid laupäeval kinno tulema?", "Kas sa tahad laupäevani kinos?"] },
    { ctx: "Sõber kutsub sind peole, aga sa oled haige.", line: ["Sõber", "Tule reedel minu peole!"], o: ["Aitäh, aga kahjuks ma ei saa tulla.", "Aitäh, hea meelega ma ei tule.", "Kahjuks ma tulen."] },
    { ctx: "Sa helistad, aga sõber on koosolekul ja ei saa rääkida.", line: ["Sõber", "Vabandust, ma olen koosolekul."], o: ["Pole viga, helista mulle hiljem tagasi.", "Pole viga, helistaksin sind eile.", "Tule kohe külla!"] },
    { ctx: "Juuksuri juures. Sa tahad aega reedeks.", line: ["Juuksur", "Tere! Millal te soovite tulla?"], o: ["Kas teil on reedel vaba aega?", "Kas teil on reedeni vaba?", "Ma tulin eile."] }
  ],
  story: {
    t: "Kutse",
    lines: [["", "Neljapäeva õhtul heliseb Marco telefon."], ["Kati", "Tere, Marco! Kas sa oled laupäeval vaba?"], ["Marco", "Laupäeval? Ma töötan kella kaheni. Miks sa küsid?"], ["Kati", "Mul on laupäeval sünnipäev. Kas sa tahaksid peole tulla?"], ["Marco", "Hea meelega! Mis kell pidu algab?"], ["Kati", "Kell seitse minu juures. Toomas ja Kersti tulevad ka."], ["Marco", "Kas ma võiksin midagi kaasa tuua?"], ["Kati", "Too ainult hea tuju!"], ["", "Marco ostab siiski lilled ja šokolaadi."]],
    q: [{ q: "Millal on Kati sünnipäev?", qi: "Quando è il compleanno di Kati?", o: ["Laupäeval", "Neljapäeval", "Pühapäeval"] }, { q: "Mis kellani Marco laupäeval töötab?", qi: "Fino a che ora lavora Marco sabato?", o: ["Kella kaheni", "Kella seitsmeni", "Kella viieni"] }, { q: "Mida Marco ostab?", qi: "Che cosa compra Marco?", o: ["Lilled ja šokolaadi", "Koogi ja veini", "Raamatu"] }],
    tf: [["Pidu on Kati juures.", true], ["Marco ei saa peole tulla.", false]]
  }
},
{
  id: 28, sec: 5, c: 4, t: "Kas sa oled käinud…?", ti: "Sei mai stato…?", gname: "Täisminevik: olen käinud",
  words: [
    ["saar", "isola", "🏝️", "Saaremaa on Eesti suurim saar."],
    ["raba", "torbiera", "svg:bog", "Kas sa oled rabas käinud?"],
    ["välismaa", "estero", "🌍", "Ta on palju välismaal käinud."],
    ["tuletorn", "faro", "svg:lighthouse", "Hiiumaal on vana tuletorn."],
    ["praam", "traghetto", "⛴️", "Saarele saab praamiga."],
    ["kunagi", "mai, una volta", "", "Kas sa oled kunagi Eestis käinud?"],
    ["mitte kunagi", "mai (negazione)", "", "Ma ei ole mitte kunagi rabas käinud."],
    ["keegi", "qualcuno", "", "Keegi on mu koogi ära söönud!"],
    ["mitte keegi", "nessuno", "", "Mitte keegi ei tulnud."],
    ["midagi", "qualcosa, niente", "", "Kas sa oled midagi kuulnud?"],
    ["juba", "già", "", "Ma olen seda filmi juba näinud."],
    ["veel", "ancora", "", "Ma ei ole veel söönud."],
    ["kord", "volta", "", "Ma olen seal kaks korda käinud."]
  ],
  gl: { "käinud": "stato, andato", "näinud": "visto", "söönud": "mangiato", "elanud": "vissuto", "lugenud": "letto", "kuulnud": "sentito", "sõitnud": "viaggiato", "lõpetanud": "finito", "tellinud": "ordinato", "helistanud": "telefonato", "olen": "ho / sono (ausiliare)", "oled": "hai / sei", "on": "ha / è", "oleme": "abbiamo / siamo", "olete": "avete / siete", "pole": "non ho / non sono", "rabas": "nella torbiera", "välismaal": "all'estero", "saarele": "sull'isola (moto)", "saartel": "sulle isole", "praamiga": "in traghetto", "korda": "volte", "suurim": "il più grande", "ära": "(completamente)", "koogi": "torta (oggetto totale)", "seda": "questo (partitivo)", "loss": "castello", "tuuleveskid": "mulini a vento", "kadakad": "ginepri", "igal pool": "dappertutto", "küll": "sì, certo (rafforzativo)", "sada": "cento", "külmkapp": "frigorifero", "tühi": "vuoto", "soovitab": "consiglia" },
  note: {
    et: `<h4>Täisminevik</h4><p><b>olema</b> (olevik) + <b>-nud</b></p><div class="tabw"><table><tr><td>ma <b>olen</b> käi<b>nud</b></td><td>ma <b>ei ole</b> / <b>pole</b> käinud</td></tr><tr><td>sa <b>oled</b> käinud</td><td>sa ei ole käinud</td></tr><tr><td>ta <b>on</b> käinud</td><td>ta ei ole käinud</td></tr></table></div>
<h4>Millal?</h4><div class="ex">Ma <b>käisin</b> eile Tartus. (millal? eile)<br>Ma <b>olen</b> Tartus <b>käinud</b>. (kogemus: millal — ei ole tähtis)</div>
<h4>Juba, veel, kunagi</h4><div class="ex">Kas sa oled <b>kunagi</b>…? · Ma olen <b>juba</b> söönud. · Ma ei ole <b>veel</b> söönud. · Ma ei ole <b>mitte kunagi</b>…</div>
<h4>Keegi, miski</h4><div class="tabw"><table><tr><td>keegi</td><td>mitte keegi</td></tr><tr><td>midagi</td><td>mitte midagi</td></tr><tr><td>kunagi</td><td>mitte kunagi</td></tr></table></div>`,
    it: `<h4>Il perfetto (passato prossimo)</h4><p>Presente di <b>olema</b> + participio in <b>-nud</b>: ma <b>olen käinud</b> = sono stato. C'è un solo ausiliare (olema) e il participio non cambia mai. Negazione: <b>ei ole</b> / <b>pole</b> + -nud.</p>
<h4>Quando usarlo</h4><p>Il passato semplice (käisin) racconta un fatto in un momento preciso: Ma <b>käisin</b> eile Tartus. Il perfetto parla di esperienza o di un risultato che conta ora: Ma <b>olen</b> Tartus <b>käinud</b> = sono stato a Tartu (almeno una volta). Come in inglese, e a differenza dell'italiano parlato, con «ieri», «l'anno scorso» si usa il passato semplice.</p>
<h4>Parole tipiche</h4><p><b>kunagi</b> = mai (nelle domande) · <b>juba</b> = già · <b>veel</b> = ancora · <b>mitu korda</b> = più volte.</p>
<h4>Pronomi indefiniti e negazione</h4><p>keegi = qualcuno → <b>mitte keegi</b> = nessuno; midagi = qualcosa → <b>mitte midagi</b> = niente; kunagi → <b>mitte kunagi</b> = mai. Il verbo resta comunque negativo: Mitte keegi <b>ei tulnud</b>.</p>`
  },
  gram: [
    { q: "Ma ___ Saaremaal käinud.", h: "olema", a: "olen", o: ["olen", "olin", "oli"], why: "täisminevik: olen + -nud", it: "Sono stato a Saaremaa." },
    { q: "Kas sa oled seda filmi ___?", h: "nägema", a: "näinud", v: "nägema|nud", o: ["näinud", "nägid", "näha"], why: "nägema → näinud", it: "Hai visto questo film?" },
    { q: "Ta on juba ___.", h: "sööma", a: "söönud", v: "sööma|nud", o: ["söönud", "sõi", "süüa"], why: "sööma → söönud", it: "Ha già mangiato." },
    { q: "Me ei ole veel ___.", h: "lõpetama", a: "lõpetanud", v: "lõpetama|nud", why: "-nud", it: "Non abbiamo ancora finito." },
    { q: "Ma ___ kunagi rabas käinud.", h: "eitus", a: "ei ole", aa: ["pole"], o: ["ei ole", "olen", "olin"], why: "eitus: ei ole / pole + -nud", it: "Non sono mai stato in una torbiera." },
    { q: "Kas sa oled ___ Itaalias käinud?", a: "kunagi", o: ["kunagi", "keegi", "midagi"], why: "kunagi = mai", it: "Sei mai stato in Italia?" },
    { q: "___ on mu koogi ära söönud!", a: "Keegi", o: ["Keegi", "Kunagi", "Midagi"], why: "keegi = qualcuno", it: "Qualcuno ha mangiato la mia torta!" },
    { q: "Mitte ___ ei tulnud peole.", a: "keegi", o: ["keegi", "kunagi", "midagi"], why: "mitte keegi = nessuno", it: "Nessuno è venuto alla festa." },
    { q: "Nad on Eestis kaks aastat ___.", h: "elama", a: "elanud", v: "elama|nud", why: "-nud", it: "Vivono in Estonia da due anni." },
    { q: "Ma olen selle raamatu läbi ___.", h: "lugema", a: "lugenud", v: "lugema|nud", why: "lugema → lugenud", it: "Ho letto tutto questo libro." },
    { q: "Kas te olete juba ___?", h: "tellima", a: "tellinud", v: "tellima|nud", why: "-nud", it: "Avete già ordinato?" },
    { q: "Ta ei ole mulle ___.", h: "helistama", a: "helistanud", v: "helistama|nud", why: "-nud", it: "Non mi ha telefonato." }
  ],
  tr: [
    { q: "Ma käisin Tartus.", task: "perf", a: ["Ma olen Tartus käinud.", "Ma olen käinud Tartus."], why: "olen + käinud" },
    { q: "Ta sõi.", task: "perf", a: ["Ta on söönud."], why: "on + söönud" },
    { q: "Ma olen rabas käinud.", task: "neg", a: ["Ma ei ole rabas käinud.", "Ma pole rabas käinud.", "Ma ei ole kunagi rabas käinud."], why: "ei ole + -nud" }
  ],
  sent: [
    { e: "Kas sa oled kunagi Saaremaal käinud?", i: "Sei mai stato a Saaremaa?", ia: ["Sei mai stata a Saaremaa?"], ea: ["Kas sa oled Saaremaal kunagi käinud?"] },
    { e: "Ma olen seal kaks korda käinud.", i: "Ci sono stato due volte.", ia: ["Ci sono stata due volte."], ea: ["Ma olen käinud seal kaks korda."] },
    { e: "Ma ei ole veel söönud.", i: "Non ho ancora mangiato.", ea: ["Ma pole veel söönud."] },
    { e: "Ma olen seda filmi juba näinud.", i: "Ho già visto questo film.", ea: ["Ma olen juba seda filmi näinud."] },
    { e: "Keegi on mu koogi ära söönud!", i: "Qualcuno ha mangiato la mia torta!" },
    { e: "Mitte keegi ei tulnud.", i: "Non è venuto nessuno." },
    { e: "Ta on palju välismaal käinud.", i: "È stato molto all'estero.", ia: ["Ha viaggiato molto all'estero."] },
    { e: "Saarele saab praamiga.", i: "Sull'isola si arriva in traghetto." },
    { e: "Me oleme siin kolm aastat elanud.", i: "Viviamo qui da tre anni.", ia: ["Abbiamo vissuto qui tre anni."] }
  ],
  qa: [
    { q: "Kas sa oled kunagi rabas käinud?", qi: "Sei mai stato in una torbiera?", a: ["Ei, ma ei ole kunagi rabas käinud."], k: ["jah|ei|olen|pole"] },
    { q: "Kas sa oled Saaremaal käinud?", qi: "Sei stato a Saaremaa?", a: ["Jah, olen küll."], k: ["jah|ei|olen|pole"] },
    { q: "Mitu korda sa oled Tartus käinud?", qi: "Quante volte sei stato a Tartu?", a: ["Ma olen seal kaks korda käinud."], k: ["korda|kord|kunagi|ei|pole"] },
    { q: "Kas sa oled täna juba söönud?", qi: "Hai già mangiato oggi?", a: ["Jah, ma olen juba söönud."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Sõber soovitab filmi, aga sa oled seda juba näinud.", line: ["Sõber", "Lähme vaatame seda uut filmi!"], o: ["Ma olen seda juba näinud.", "Ma olen seda juba nägin.", "Ma näen seda eile."] },
    { ctx: "Eestlane küsib, kas sa oled saunas käinud. Sa oled käinud palju kordi.", line: ["Jaan", "Kas sa oled Eestis saunas käinud?"], o: ["Jah, mitu korda!", "Jah, mitte kunagi!", "Ei, mitu korda."] },
    { ctx: "Sa tuled koju. Külmkapp on tühi.", line: null, o: ["Kes on kõik ära söönud?", "Kes on kõik ära sööma?", "Keegi ei ole kõik."] }
  ],
  story: {
    t: "Saaremaa",
    lines: [["Kati", "Marco, kas sa oled kunagi Saaremaal käinud?"], ["Marco", "Ei ole. Ma olen käinud Tartus ja Pärnus, aga saartel ma ei ole veel käinud."], ["Kati", "Siis sõidame suvel! Ma olen seal sada korda käinud."], ["Marco", "Kuidas sinna saab?"], ["Kati", "Praamiga. Kas sa oled praamiga sõitnud?"], ["Marco", "Jah, Itaalias olen küll."], ["Kati", "Saaremaal on vana loss, tuuleveskid ja kadakad."], ["Marco", "Ja saun?"], ["Kati", "Muidugi! Eestis on saun igal pool."]],
    q: [{ q: "Kus Marco ei ole veel käinud?", qi: "Dove non è ancora stato Marco?", o: ["Saartel", "Tartus", "Pärnus"] }, { q: "Kuidas Saaremaale saab?", qi: "Come si arriva a Saaremaa?", o: ["Praamiga", "Rongiga", "Jalgsi"] }],
    tf: [["Kati on Saaremaal palju käinud.", true], ["Marco ei ole kunagi praamiga sõitnud.", false], ["Saaremaal on vana loss.", true]]
  }
},
{
  id: 29, sec: 5, c: 5, t: "Pidupäevad", ti: "Feste e ricorrenze", gname: "Mitmes? Järgarvud ja kuupäevad",
  words: [
    ["sünnipäev", "compleanno", "🎂", "Palju õnne sünnipäevaks!"],
    ["jõulud", "Natale", "🎄", "Häid jõule!"],
    ["uusaasta", "Capodanno", "🎆", "Head uut aastat!"],
    ["jaanipäev", "festa di San Giovanni", "", "Jaanipäev on kahekümne neljandal juunil."],
    ["pidu", "festa", "🎉", "Laupäeval on suur pidu."],
    ["külaline", "ospite", "", "Külalised tulevad kell seitse."],
    ["tähistama", "festeggiare", "🥂", "Me tähistame sünnipäeva kodus."],
    ["õnnitlema", "fare gli auguri", "", "Ma õnnitlen sind!"],
    ["esimene", "primo", "🥇", "Täna on esimene mai."],
    ["teine", "secondo", "🥈", "Homme on teine mai."],
    ["kolmas", "terzo", "🥉", "Minu sünnipäev on kolmandal mail."],
    ["mitmes", "quale (numero d'ordine)", "", "Mitmes täna on?"],
    ["püha", "festa, festività", "", "Homme on püha."]
  ],
  gl: { "sünnipäevaks": "per il compleanno", "sünnipäeva": "compleanno (oggetto)", "jõule": "Natale (partitivo)", "häid": "buoni (partitivo pl.)", "head": "buono (partitivo)", "uut": "nuovo (partitivo)", "aastat": "anno (partitivo)", "õnne": "felicità, auguri (partitivo)", "kahekümne": "venti (genitivo)", "kolmekümne": "trenta (genitivo)", "esimesel": "il primo (data)", "teisel": "il due (data)", "kolmandal": "il tre (data)", "neljandal": "il quattro (data)", "viiendal": "il cinque (data)", "kümnendal": "il dieci (data)", "neljas": "quarto", "viies": "quinto", "kümnes": "decimo", "neljateistkümnes": "quattordicesimo", "mail": "di maggio (data)", "juunil": "di giugno (data)", "jaanuaril": "di gennaio (data)", "veebruaril": "di febbraio (data)", "märtsil": "di marzo (data)", "detsembril": "di dicembre (data)", "külalised": "ospiti", "tähistame": "festeggiamo", "tähistan": "festeggio", "tähistavad": "festeggiano", "õnnitlen": "faccio gli auguri", "peole": "alla festa", "vabariigi": "della Repubblica", "aastapäev": "anniversario", "võidupüha": "Giorno della Vittoria", "jaaniõhtu": "sera di San Giovanni", "jõululaupäev": "vigilia di Natale", "verivorsti": "sanguinaccio (partitivo)", "hapukapsast": "crauti (partitivo)", "vana-aasta": "ultimo dell'anno", "lõket": "falò (partitivo)", "pühi": "feste (partitivo pl.)", "kõigil": "tutti hanno", "maale": "in campagna", "lemmikpüha": "festa preferita", "kuupäev": "data" },
  note: {
    et: `<h4>Mitmes?</h4><div class="tabw"><table><tr><td>1.</td><td>esimene</td><td>6.</td><td>kuues</td></tr><tr><td>2.</td><td>teine</td><td>7.</td><td>seitsmes</td></tr><tr><td>3.</td><td>kolmas</td><td>8.</td><td>kaheksas</td></tr><tr><td>4.</td><td>neljas</td><td>9.</td><td>üheksas</td></tr><tr><td>5.</td><td>viies</td><td>10.</td><td>kümnes</td></tr></table></div><p>20. kahekümnes · 24. kahekümne neljas · 31. kolmekümne esimene</p>
<h4>Mitmes täna on? / Millal?</h4><div class="ex">Täna on <b>kolmas mai</b>.<br>Sünnipäev on <b>kolmandal mail</b>.</div><div class="ex">esimene → esimese<b>l</b> · teine → teise<b>l</b> · kolmas → kolmanda<b>l</b> · neljas → neljanda<b>l</b></div>
<h4>Head soovid</h4><div class="ex">Palju õnne sünnipäevaks! · Häid jõule! · Head uut aastat!</div>`,
    it: `<h4>I numeri ordinali</h4><p>esimene (1º), teine (2º), kolmas (3º), poi numero al genitivo + <b>-s</b>: neljas, viies, kuues, seitsmes, kaheksas, üheksas, kümnes. Nei composti solo l'ultimo elemento è ordinale e il resto va al genitivo: <b>kahekümne neljas</b> = 24º.</p>
<h4>Le date</h4><p>«Che giorno è?» = <b>Mitmes täna on?</b> — Täna on <b>kolmas mai</b> (nominativo). «Quando?» → ordinale e mese all'adessivo <b>-l</b>: <b>kolmandal mail</b> = il tre maggio. Attenzione: da solo il mese vuole -s (mais = a maggio), ma nella data vuole -l (kolmandal mail). Per iscritto: 3. mai, 24. veebruaril.</p>
<h4>Auguri</h4><p><b>Palju õnne sünnipäevaks!</b> = buon compleanno! (lett. «molta felicità per il compleanno») · <b>Häid jõule!</b> = buon Natale! · <b>Head uut aastat!</b> = buon anno! Gli auguri sono al partitivo perché sottintendono «ti auguro…».</p>`
  },
  gram: [
    { q: "Minu sünnipäev on ___ mail.", h: "kolmas · Millal?", a: "kolmandal", v: "kolmas|sg ad", o: ["kolmandal", "kolmas", "kolmel"], why: "Millal? → kolmandal", it: "Il mio compleanno è il tre maggio." },
    { q: "Uusaasta on ___ jaanuaril.", h: "esimene · Millal?", a: "esimesel", v: "esimene|sg ad", o: ["esimesel", "esimene", "ühel"], why: "esimene → esimesel", it: "Capodanno è il primo gennaio." },
    { q: "Jõululaupäev on kahekümne ___ detsembril.", h: "neljas", a: "neljandal", v: "neljas|sg ad", why: "neljas → neljandal", it: "La vigilia di Natale è il 24 dicembre." },
    { q: "___ täna on? — Viies.", a: "Mitmes", o: ["Mitmes", "Mitu", "Millal"], why: "Mitmes? = che giorno (numero)?", it: "Quanti ne abbiamo oggi? — Il cinque." },
    { q: "Täna on ___ november. (5.)", a: "viies", o: ["viies", "viis", "viiendal"], why: "Mitmes? → viies", it: "Oggi è il cinque novembre." },
    { q: "Me kohtume ___ märtsil.", h: "teine · Millal?", a: "teisel", v: "teine|sg ad", o: ["teisel", "teine", "kahel"], why: "teine → teisel", it: "Ci vediamo il due marzo." },
    { q: "Palju õnne ___!", h: "sünnipäev · Milleks?", a: "sünnipäevaks", v: "sünnipäev|sg tr", o: ["sünnipäevaks", "sünnipäeval", "sünnipäev"], why: "milleks? → -ks", it: "Buon compleanno!" },
    { q: "Head uut ___!", h: "aasta", a: "aastat", v: "aasta|sg p", o: ["aastat", "aasta", "aastal"], why: "soov → osastav", it: "Buon anno!" },
    { q: "Vabariigi aastapäev on kahekümne neljandal ___.", h: "veebruar", a: "veebruaril", v: "veebruar|sg ad", o: ["veebruaril", "veebruaris", "veebruar"], why: "kuupäev → -l", it: "La festa della Repubblica è il 24 febbraio." },
    { q: "3. = ___", a: "kolmas", o: ["kolmas", "kolm", "kolmeks"], why: "kolm → kolmas", it: "terzo" },
    { q: "Külalised tulevad ___.", h: "pidu · Kuhu?", a: "peole", v: "pidu|sg all", o: ["peole", "peol", "pidu"], why: "pidu → peo + le", it: "Gli ospiti vengono alla festa." },
    { q: "Pidu on ___ juunil.", h: "kümnes · Millal?", a: "kümnendal", v: "kümnes|sg ad", why: "kümnes → kümnendal", it: "La festa è il dieci giugno." }
  ],
  tr: [
    { q: "Kolmas mai.", task: null, ti: "Vasta: Millal on sünnipäev?", tii: "Rispondi: quando è il compleanno?", a: ["Kolmandal mail.", "Sünnipäev on kolmandal mail."], why: "kolmandal mail" },
    { q: "Esimene jaanuar.", task: null, ti: "Vasta: Millal on uusaasta?", tii: "Rispondi: quando è Capodanno?", a: ["Esimesel jaanuaril.", "Uusaasta on esimesel jaanuaril."], why: "esimesel jaanuaril" }
  ],
  sent: [
    { e: "Palju õnne sünnipäevaks!", i: "Buon compleanno!", ia: ["Tanti auguri di buon compleanno!"] },
    { e: "Häid jõule!", i: "Buon Natale!" },
    { e: "Head uut aastat!", i: "Buon anno!" },
    { e: "Mitmes täna on?", i: "Quanti ne abbiamo oggi?", ia: ["Che giorno è oggi?"] },
    { e: "Minu sünnipäev on kolmandal mail.", i: "Il mio compleanno è il tre maggio." },
    { e: "Me tähistame sünnipäeva kodus.", i: "Festeggiamo il compleanno a casa." },
    { e: "Külalised tulevad kell seitse.", i: "Gli ospiti arrivano alle sette." },
    { e: "Jaanipäev on kahekümne neljandal juunil.", i: "San Giovanni è il ventiquattro giugno." },
    { e: "Homme on püha.", i: "Domani è festa." }
  ],
  qa: [
    { q: "Millal on sinu sünnipäev?", qi: "Quando è il tuo compleanno?", a: ["Minu sünnipäev on kolmandal mail."], k: ["-l"] },
    { q: "Mitmes täna on?", qi: "Quanti ne abbiamo oggi?", a: ["Täna on neljateistkümnes november."], k: ["on|-s"] },
    { q: "Kuidas sa oma sünnipäeva tähistad?", qi: "Come festeggi il tuo compleanno?", a: ["Ma tähistan sõpradega."], k: ["tähistan|pidu|ei"] },
    { q: "Mida sa ütled sõbrale sünnipäeval?", qi: "Che cosa dici a un amico per il compleanno?", a: ["Palju õnne!"], k: ["õnne"] }
  ],
  sit: [
    { ctx: "Sõbral on täna sünnipäev.", line: null, o: ["Palju õnne sünnipäevaks!", "Häid jõule!", "Head uut aastat!"] },
    { ctx: "On kolmekümne esimene detsember, kell on kaksteist öösel.", line: null, o: ["Head uut aastat!", "Palju õnne sünnipäevaks!", "Head ööd!"] },
    { ctx: "Kolleeg küsib kuupäeva. Täna on 2. mai.", line: ["Kolleeg", "Mitmes täna on?"], o: ["Täna on teine mai.", "Täna on kaks mai.", "Täna on teisel mai."] },
    { ctx: "Sa kutsud külalisi. Pidu on 10. juunil.", line: null, o: ["Tulge kümnendal juunil meile peole!", "Tulge kümme juuni meile peole!", "Tulge kümnes juunis peole!"] }
  ],
  story: {
    t: "Eesti pühad",
    lines: [["", "Eestis on palju toredaid pühi."], ["", "Kahekümne neljandal veebruaril on Eesti Vabariigi aastapäev. Siis on kõigil vaba päev."], ["", "Kahekümne kolmandal juunil on võidupüha ja õhtul algab jaaniõhtu."], ["", "Inimesed sõidavad maale, teevad lõket ja laulavad."], ["", "Jõulud on detsembris. Kahekümne neljandal detsembril on jõululaupäev."], ["", "Pered söövad koos verivorsti ja hapukapsast."], ["", "Kolmekümne esimesel detsembril tähistavad kõik vana-aasta õhtut."], ["Marco", "Minu lemmikpüha on jaanipäev, sest öö on valge!"]],
    q: [{ q: "Millal on Eesti Vabariigi aastapäev?", qi: "Quando è la festa della Repubblica estone?", o: ["24. veebruaril", "24. juunil", "24. detsembril"] }, { q: "Mida inimesed jaaniõhtul teevad?", qi: "Che cosa fa la gente la sera di San Giovanni?", o: ["Teevad lõket ja laulavad.", "Söövad verivorsti.", "Lähevad tööle."] }],
    tf: [["Jõululaupäev on kahekümne neljandal detsembril.", true], ["Marco lemmikpüha on uusaasta.", false], ["Jõulud on detsembris.", true]]
  }
},
{
  id: 30, sec: 5, c: 6, t: "Jaaniõhtu", ti: "La sera di San Giovanni (ripasso)", gname: "Kordamine: peatükid 25–29",
  words: [
    ["lõke", "falò", "🔥", "Jaaniõhtul me teeme lõket."],
    ["kiik", "altalena", "", "Lapsed kiiguvad kiigel."],
    ["maakodu", "casa di campagna", "", "Suvel me elame maakodus."],
    ["grillima", "grigliare", "🍢", "Isa grillib liha."],
    ["tants", "ballo, danza", "", "Pärast sööki on tants."],
    ["laul", "canzone", "🎶", "See on ilus eesti laul."],
    ["sääsk", "zanzara", "🦟", "Suvel on palju sääski."],
    ["valge öö", "notte bianca", "", "Juunis on valged ööd."],
    ["kestma", "durare", "", "Pidu kestab hommikuni."],
    ["kaasa võtma", "portare con sé", "", "Võta soe kampsun kaasa!"]
  ],
  gl: { "lõket": "falò (partitivo)", "lõkke": "falò (genitivo)", "kiigel": "sull'altalena", "kiiguvad": "si dondolano", "maakodus": "nella casa di campagna", "grillib": "griglia", "grillimas": "a grigliare", "sööki": "pasto (partitivo)", "sääski": "zanzare (partitivo pl.)", "valged": "bianche", "ööd": "notti", "kestab": "dura", "hommikuni": "fino al mattino", "võta": "prendi", "kampsun": "maglione", "kampsunid": "maglioni", "jaaniõhtul": "la sera di San Giovanni", "jaaniõhtule": "alla sera di San Giovanni", "hüpanud": "saltato", "hüppama": "saltare", "hüppab": "salta", "üle": "sopra, oltre", "laulame": "cantiamo", "tantsime": "balliamo", "laule": "canzoni (partitivo pl.)", "lauljaks": "(diventare) cantante", "õues": "fuori, all'aperto", "sääsetõrje": "repellente per zanzare", "saadik": "da (tempo)", "naabrid": "i vicini", "toob": "porta", "õnne": "fortuna (partitivo)", "plaksutavad": "applaudono", "hele": "chiaro", "taevas": "cielo", "meiega": "con noi", "nii": "così" },
  note: {
    et: `<h4>Kordame</h4><div class="tabw"><table><tr><th>teema</th><th>näide</th></tr><tr><td>-ma / -da</td><td>pean minema · tahan minna</td></tr><tr><td>-na / -ks</td><td>töötan õpetajana · saan arstiks</td></tr><tr><td>-mas</td><td>ta on söömas</td></tr><tr><td>tingiv</td><td>tahaksin, oleks, saaksite</td></tr><tr><td>-ni</td><td>kella viieni, hommikuni</td></tr><tr><td>täisminevik</td><td>olen käinud, ei ole näinud</td></tr><tr><td>kuupäev</td><td>kolmandal mail</td></tr></table></div>`,
    it: `<h4>Ripasso delle unità 25–29</h4><div class="tabw"><table><tr><th>argomento</th><th>esempio</th></tr><tr><td>infiniti -ma / -da</td><td>pean minema · tahan minna</td></tr><tr><td>essivo / traslativo</td><td>töötan õpetajana · saan arstiks</td></tr><tr><td>-mas</td><td>ta on söömas</td></tr><tr><td>condizionale</td><td>tahaksin, oleks, saaksite</td></tr><tr><td>terminativo -ni</td><td>kella viieni, hommikuni</td></tr><tr><td>perfetto</td><td>olen käinud, ei ole näinud</td></tr><tr><td>date</td><td>kolmandal mail</td></tr></table></div><p><b>Jaaniõhtu</b> (23 giugno) è la festa più amata in Estonia: falò, canti, altalene e la notte più chiara dell'anno.</p>`
  },
  gram: [
    { q: "Ma pean homme vara ___.", h: "ärkama", a: "ärkama", v: "ärkama|ma", o: ["ärkama", "ärgata", "ärkan"], why: "pidama + -ma", it: "Domani devo svegliarmi presto." },
    { q: "Kas sa tahad jaaniõhtule ___?", h: "tulema", a: "tulla", v: "tulema|da", o: ["tulla", "tulema", "tuled"], why: "tahtma + -da", it: "Vuoi venire alla sera di San Giovanni?" },
    { q: "Toomas töötab nüüd ___.", h: "insener · Kellena?", a: "insenerina", v: "insener|sg es", why: "-na", it: "Ora Toomas lavora come ingegnere." },
    { q: "Kas sa ___ meile külla tulla?", h: "tahtma · viisakalt", a: "tahaksid", v: "tahtma|ksid", why: "sa → -ksid", it: "Vorresti venire a trovarci?" },
    { q: "Pidu kestab ___.", h: "hommik · Kuni millal?", a: "hommikuni", v: "hommik|sg ter", o: ["hommikuni", "hommikul", "hommikuks"], why: "-ni", it: "La festa dura fino al mattino." },
    { q: "Ma ei ole kunagi nii suurt lõket ___.", h: "nägema", a: "näinud", v: "nägema|nud", why: "ei ole + -nud", it: "Non ho mai visto un falò così grande." },
    { q: "Jaanipäev on kahekümne ___ juunil.", h: "neljas", a: "neljandal", v: "neljas|sg ad", why: "kuupäev → -l", it: "San Giovanni è il 24 giugno." },
    { q: "Isa on õues liha ___.", h: "grillima · Kus?", a: "grillimas", v: "grillima|mas", o: ["grillimas", "grillima", "grillida"], why: "Kus? → -mas", it: "Il papà è fuori a grigliare la carne." },
    { q: "Ta tahab lauljaks ___.", h: "saama", a: "saada", v: "saama|da", why: "tahtma + -da", it: "Vuole diventare cantante." },
    { q: "Lapsed on juba magama ___.", h: "minema", a: "läinud", v: "minema|nud", o: ["läinud", "läksid", "minna"], why: "on + läinud", it: "I bambini sono già andati a dormire." }
  ],
  tr: [
    { q: "Me teeme lõket.", task: "perf", a: ["Me oleme lõket teinud.", "Me oleme teinud lõket."], why: "oleme + teinud" },
    { q: "Ma tulen peole.", task: null, ti: "Ütle «Ma tahaksin …»", tii: "Di' «Vorrei …»", a: ["Ma tahaksin peole tulla.", "Ma tahaksin tulla peole."], why: "tahaksin + tulla" }
  ],
  sent: [
    { e: "Jaaniõhtul me teeme lõket.", i: "La sera di San Giovanni facciamo un falò.", ea: ["Me teeme jaaniõhtul lõket."] },
    { e: "Pidu kestab hommikuni.", i: "La festa dura fino al mattino." },
    { e: "Võta soe kampsun kaasa!", i: "Portati un maglione caldo!" },
    { e: "Isa grillib liha.", i: "Il papà griglia la carne." },
    { e: "Juunis on valged ööd.", i: "A giugno ci sono le notti bianche." },
    { e: "Suvel on palju sääski.", i: "D'estate ci sono molte zanzare." },
    { e: "Kas sa oled kunagi üle lõkke hüpanud?", i: "Hai mai saltato sopra un falò?" },
    { e: "Me laulame ja tantsime koos.", i: "Cantiamo e balliamo insieme." }
  ],
  qa: [
    { q: "Mida sa jaaniõhtul teed?", qi: "Che cosa fai la sera di San Giovanni?", a: ["Ma lähen sõpradega maale."], k: ["ma|mina|me"] },
    { q: "Kas sa oskad eesti laule laulda?", qi: "Sai cantare canzoni estoni?", a: ["Ei, veel mitte."], k: ["jah|ei"] },
    { q: "Kas sa oled kunagi lõket teinud?", qi: "Hai mai fatto un falò?", a: ["Jah, olen küll."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Sõber kutsub sind jaaniõhtule maale.", line: ["Kati", "Kas sa tahaksid meiega jaaniõhtule tulla?"], o: ["Hea meelega! Mida ma kaasa võtan?", "Hea meelega! Ma ei saa tulema.", "Kahjuks tulen hea meelega."] },
    { ctx: "Õhtul on õues külm ja palju sääski.", line: null, o: ["Võtame kampsunid ja sääsetõrje kaasa.", "Võtame kelgu kaasa.", "Paneme kindad kätte ja lähme uisutama."] },
    { ctx: "Kell on kolm öösel. Sa oled väsinud, aga pidu kestab.", line: ["Toomas", "Tantsime veel!"], o: ["Ma olen väsinud. Ma tahan magama minna.", "Ma olen väsinud. Ma tahan magama minema.", "Ma pean tantsida hommikuni."] }
  ],
  story: {
    t: "Jaaniõhtu",
    lines: [["", "Kahekümne kolmandal juunil sõidavad Marco, Kati ja Toomas maale Kati vanaema juurde."], ["", "Vanaema on juba hommikust saadik süüa teinud."], ["", "Toomas teeb suure lõkke ja Kati isa grillib liha."], ["Vanaema", "Marco, kas sa oled kunagi jaaniõhtul käinud?"], ["Marco", "Ei ole. Itaalias me ei tähista jaanipäeva nii."], ["", "Õhtul tulevad naabrid. Kõik laulavad ja tantsivad."], ["Kati", "Marco, sa pead üle lõkke hüppama! See toob õnne."], ["Marco", "Kas ma tõesti pean?"], ["", "Marco hüppab. Kõik plaksutavad."], ["", "Kell kolm öösel on taevas veel hele. Marco ei taha magama minna."]],
    q: [{ q: "Kuhu nad sõidavad?", qi: "Dove vanno?", o: ["Maale vanaema juurde", "Saaremaale", "Tartusse"] }, { q: "Kes teeb lõkke?", qi: "Chi fa il falò?", o: ["Toomas", "Marco", "Vanaema"] }, { q: "Miks peab Marco üle lõkke hüppama?", qi: "Perché Marco deve saltare sopra il falò?", o: ["See toob õnne.", "Tal on külm.", "Ta on väsinud."] }],
    tf: [["Marco on varem jaaniõhtul käinud.", false], ["Kell kolm öösel on taevas hele.", true]]
  }
}
);
