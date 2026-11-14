/* Osa 3 · Linnas · A1.3 — units 13–18. Grammar items with v:"lemma|form" are verified against Vabamorf. */
(window.UNITS = window.UNITS || []).push(
{
  id: 13, sec: 3, c: 1, t: "Kus? Kuhu? Kust?", ti: "Dove? Verso dove? Da dove?", gname: "Seesütlev, sisseütlev, seestütlev",
  words: [
    ["kino", "cinema", "🎬", "Õhtul me läheme kinno."],
    ["teater", "teatro", "🎭", "Ma olen teatris."],
    ["muuseum", "museo", "🖼️", "Lapsed tulevad muuseumist."],
    ["park", "parco", "🌳", "Me jalutame pargis."],
    ["kirik", "chiesa", "⛪", "Vanaema läheb kirikusse."],
    ["apteek", "farmacia", "💊", "Ma lähen apteeki."],
    ["pank", "banca", "🏦", "Ta töötab pangas."],
    ["hotell", "hotel", "🏨", "Turistid on hotellis."],
    ["tuba", "stanza", "", "Tule tuppa!"],
    ["köök", "cucina", "🍳", "Ema on köögis."],
    ["saun", "sauna", "🧖", "Laupäeval me läheme sauna."],
    ["kust", "da dove", "", "Kust sa tuled?"]
  ],
  gl: { "kinno": "al cinema", "kinos": "al cinema (stato)", "kinost": "dal cinema", "teatris": "a teatro", "teatrisse": "a teatro (moto)", "teatrist": "dal teatro", "muuseumis": "al museo", "muuseumisse": "al museo (moto)", "muuseumist": "dal museo", "pargis": "nel parco", "parki": "al parco (moto)", "pargist": "dal parco", "kirikus": "in chiesa", "kirikusse": "in chiesa (moto)", "kirikust": "dalla chiesa", "apteegis": "in farmacia", "apteeki": "in farmacia (moto)", "apteegist": "dalla farmacia", "pangas": "in banca", "panka": "in banca (moto)", "pangast": "dalla banca", "hotellis": "in hotel", "hotelli": "in hotel (moto)", "hotellist": "dall'hotel", "toas": "nella stanza", "tuppa": "nella stanza (moto)", "toast": "dalla stanza", "köögis": "in cucina", "kööki": "in cucina (moto)", "köögist": "dalla cucina", "saunas": "in sauna", "sauna": "sauna / in sauna (moto)", "saunast": "dalla sauna", "turistid": "i turisti", "jalutame": "passeggiamo", "koolist": "da scuola", "poest": "dal negozio", "tööl": "al lavoro", "linnast": "dalla città", "tule": "vieni", "pärast": "dopo" },
  note: {
    et: `<h4>Kus? Kuhu? Kust?</h4><div class="tabw"><table><tr><th></th><th>Kus?</th><th>Kuhu?</th><th>Kust?</th></tr><tr><td></td><td><b>-s</b></td><td><b>-sse</b> / lühike</td><td><b>-st</b></td></tr><tr><td>kino</td><td>kinos</td><td>kinno, kinosse</td><td>kinost</td></tr><tr><td>teater</td><td>teatris</td><td>teatrisse</td><td>teatrist</td></tr><tr><td>park</td><td>pargis</td><td>parki</td><td>pargist</td></tr><tr><td>pank</td><td>pangas</td><td>panka, pangasse</td><td>pangast</td></tr><tr><td>tuba</td><td>toas</td><td>tuppa</td><td>toast</td></tr></table></div>
<h4>Võti = omastav</h4><div class="ex">teater → <b>teatri</b> → teatri<b>s</b>, teatri<b>sse</b>, teatri<b>st</b></div><p>Omastav (kelle? mille?) + lõpp.</p>`,
    it: `<h4>I tre casi «interni»</h4><p>Per i luoghi chiusi (edifici, stanze, città, paesi) l'estone usa tre casi:</p><div class="tabw"><table><tr><th>domanda</th><th>caso</th><th>desinenza</th><th>esempio</th></tr><tr><td>Kus? (dove sto)</td><td>inessivo</td><td>-s</td><td>teatri<b>s</b> = a teatro</td></tr><tr><td>Kuhu? (dove vado)</td><td>illativo</td><td>-sse o forma breve</td><td>teatri<b>sse</b> = a teatro</td></tr><tr><td>Kust? (da dove)</td><td>elativo</td><td>-st</td><td>teatri<b>st</b> = dal teatro</td></tr></table></div>
<h4>La chiave è il genitivo</h4><p>Le desinenze si attaccano al <b>genitivo</b>: teater → gen. <b>teatri</b> → teatris, teatrisse, teatrist. park → gen. <b>pargi</b> → pargis, pargist. Ecco perché il genitivo è così importante.</p>
<h4>L'illativo breve</h4><p>Molte parole comuni hanno una forma breve di «moto a luogo», spesso con radice forte: kino → <b>kinno</b>, park → <b>parki</b>, tuba → <b>tuppa</b>, pank → <b>panka</b>, apteek → <b>apteeki</b>. La forma lunga in -sse esiste spesso anch'essa (kinosse, pangasse). Le forme brevi vanno imparate parola per parola.</p>`
  },
  gram: [
    { q: "Ma olen ___.", h: "kino · Kus?", a: "kinos", v: "kino|sg in", o: ["kinos", "kinno", "kinost"], why: "Kus? → -s", it: "Sono al cinema." },
    { q: "Me läheme ___.", h: "kino · Kuhu?", a: "kinno", aa: ["kinosse"], v: "kino|adt,sg ill", o: ["kinno", "kinos", "kinost"], why: "Kuhu? → kinno", it: "Andiamo al cinema." },
    { q: "Ta tuleb ___.", h: "kino · Kust?", a: "kinost", v: "kino|sg el", o: ["kinost", "kinos", "kinno"], why: "Kust? → -st", it: "Viene dal cinema." },
    { q: "Ema on ___.", h: "köök · Kus?", a: "köögis", v: "köök|sg in", o: ["köögis", "köökis", "kööki"], why: "köök → köögi + s", it: "La mamma è in cucina." },
    { q: "Tule ___!", h: "tuba · Kuhu?", a: "tuppa", v: "tuba|adt", o: ["tuppa", "toas", "tubasse"], why: "tuba → tuppa", it: "Vieni dentro (nella stanza)!" },
    { q: "Ta töötab ___.", h: "pank · Kus?", a: "pangas", v: "pank|sg in", o: ["pangas", "pankas", "panka"], why: "pank → panga + s", it: "Lavora in banca." },
    { q: "Ma lähen ___.", h: "apteek · Kuhu?", a: "apteeki", aa: ["apteegisse"], v: "apteek|adt,sg ill", o: ["apteeki", "apteegis", "apteegist"], why: "Kuhu? → apteeki", it: "Vado in farmacia." },
    { q: "Lapsed tulevad ___.", h: "muuseum · Kust?", a: "muuseumist", v: "muuseum|sg el", why: "Kust? → -st", it: "I bambini tornano dal museo." },
    { q: "Me jalutame ___.", h: "park · Kus?", a: "pargis", v: "park|sg in", o: ["pargis", "parkis", "parki"], why: "park → pargi + s", it: "Passeggiamo nel parco." },
    { q: "Vanaema läheb ___.", h: "kirik · Kuhu?", a: "kirikusse", v: "kirik|sg ill", why: "Kuhu? → -sse", it: "La nonna va in chiesa." },
    { q: "___ sa tuled? — Poest.", a: "Kust", o: ["Kust", "Kus", "Kuhu"], why: "kust = da dove", it: "Da dove vieni? — Dal negozio." },
    { q: "Ma olen ___.", h: "teater · Kus?", a: "teatris", v: "teater|sg in", why: "teater → teatri + s", it: "Sono a teatro." }
  ],
  tr: [
    { q: "Ma olen kinos.", task: null, ti: "Ütle, et sa lähed sinna", tii: "Di' che ci vai", a: ["Ma lähen kinno.", "Ma lähen kinosse.", "Mina lähen kinno."], why: "Kuhu? → kinno" },
    { q: "Ta on pangas.", task: null, ti: "Ütle, et ta tuleb sealt", tii: "Di' che viene da lì", a: ["Ta tuleb pangast.", "Tema tuleb pangast."], why: "Kust? → pangast" }
  ],
  sent: [
    { e: "Õhtul me läheme kinno.", i: "Stasera andiamo al cinema.", ia: ["La sera andiamo al cinema."], ea: ["Me läheme õhtul kinno."] },
    { e: "Ema on köögis.", i: "La mamma è in cucina." },
    { e: "Kust sa tuled?", i: "Da dove vieni?" },
    { e: "Ma tulen poest.", i: "Vengo dal negozio.", ia: ["Torno dal negozio."] },
    { e: "Ta töötab pangas.", i: "Lavora in banca.", ia: ["Lui lavora in banca.", "Lei lavora in banca."] },
    { e: "Ma lähen apteeki.", i: "Vado in farmacia." },
    { e: "Tule tuppa!", i: "Vieni dentro!", ia: ["Entra!", "Vieni nella stanza!"] },
    { e: "Laupäeval me läheme sauna.", i: "Sabato andiamo in sauna.", ea: ["Me läheme laupäeval sauna."] },
    { e: "Turistid on hotellis.", i: "I turisti sono in hotel." },
    { e: "Me jalutame pargis.", i: "Passeggiamo nel parco." }
  ],
  qa: [
    { q: "Kus sa praegu oled?", qi: "Dove sei adesso?", a: ["Ma olen kodus."], k: ["olen"] },
    { q: "Kuhu sa õhtul lähed?", qi: "Dove vai stasera?", a: ["Ma lähen kinno."], k: ["lähen"] },
    { q: "Kust sa tuled?", qi: "Da dove vieni?", a: ["Ma tulen töölt."], k: ["tulen|-st|-lt"] },
    { q: "Kas sa käid saunas?", qi: "Vai in sauna?", a: ["Jah, laupäeviti."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Sõber helistab. Sa oled teatris ja ei saa rääkida.", line: ["Sõber", "Kus sa oled?"], o: ["Ma olen teatris. Helistan hiljem!", "Ma olen teatrisse.", "Ma lähen teatrist."] },
    { ctx: "Sul valutab pea. Sa tahad rohtu osta.", line: ["Kolleeg", "Kuhu sa lähed?"], o: ["Ma lähen apteeki.", "Ma lähen apteegis.", "Ma olen apteeki."] },
    { ctx: "Laps tuleb koju. Ta oli muuseumis.", line: ["Ema", "Kust sa tuled?"], o: ["Ma tulen muuseumist.", "Ma tulen muuseumis.", "Ma tulen muuseumisse."] }
  ],
  story: {
    t: "Vihmane laupäev",
    lines: [["", "On laupäev ja sajab vihma. Kati ja Marco on kodus."], ["Kati", "Mida me teeme? Pargis on liiga märg."], ["Marco", "Lähme muuseumisse! Seal on uus näitus."], ["", "Nad lähevad muuseumisse. Muuseumis on palju inimesi."], ["", "Pärast nad lähevad kohvikusse ja joovad kohvi."], ["Kati", "Ja õhtul? Kas läheme kinno?"], ["Marco", "Ei, ma olen väsinud. Lähme koju ja siis sauna."], ["", "Õhtul nad tulevad saunast väga rahulikud."]],
    q: [{ q: "Kuhu nad kõigepealt lähevad?", qi: "Dove vanno prima?", o: ["Muuseumisse", "Kinno", "Parki"] }, { q: "Miks nad parki ei lähe?", qi: "Perché non vanno al parco?", o: ["Sajab vihma.", "Park on kinni.", "Marco on väsinud."] }],
    tf: [["Õhtul nad lähevad kinno.", false], ["Muuseumis on palju inimesi.", true], ["Nad joovad kohvikus kohvi.", true]]
  }
},
{
  id: 14, sec: 3, c: 2, t: "Laual ja mulle", ti: "Sul tavolo e a me", gname: "Alalütlev, alaleütlev, alaltütlev",
  words: [
    ["laud", "tavolo", "svg:table", "Raamat on laual."],
    ["tool", "sedia", "🪑", "Kass istub toolil."],
    ["diivan", "divano", "🛋️", "Isa magab diivanil."],
    ["voodi", "letto", "🛏️", "Pane riided voodile!"],
    ["aken", "finestra", "🪟", "Lill on aknal."],
    ["uks", "porta", "🚪", "Võti on uksel."],
    ["lill", "fiore", "🌷", "Ma annan emale lille."],
    ["kingitus", "regalo", "🎁", "See kingitus on sulle."],
    ["andma", "dare", "", "Anna mulle vett, palun."],
    ["meeldima", "piacere", "❤️", "Mulle meeldib kohv."],
    ["turg", "mercato", "🧺", "Laupäeval ma lähen turule."],
    ["põrand", "pavimento", "", "Kott on põrandal."]
  ],
  gl: { "laual": "sul tavolo", "lauale": "sul tavolo (moto)", "laualt": "dal tavolo", "toolil": "sulla sedia", "toolile": "sulla sedia (moto)", "diivanil": "sul divano", "voodile": "sul letto (moto)", "voodil": "sul letto", "aknal": "sul davanzale", "uksel": "alla porta", "põrandal": "sul pavimento", "põrandalt": "dal pavimento", "turul": "al mercato", "turule": "al mercato (moto)", "turult": "dal mercato", "mulle": "a me", "sulle": "a te", "talle": "a lui, a lei", "meile": "a noi", "teile": "a voi, a Lei", "neile": "a loro", "minult": "da me", "sinult": "da te", "temalt": "da lui, da lei", "emale": "alla mamma", "isale": "al papà", "sõbrale": "all'amico", "kadrile": "a Kadri", "lille": "fiore (genitivo/oggetto)", "anna": "dai", "andke": "date / dia", "annan": "do", "annab": "dà", "meeldib": "piace", "meeldivad": "piacciono", "istub": "siede", "riided": "vestiti", "pane": "metti", "võta": "prendi", "sain": "ho ricevuto", "küsin": "chiedo" },
  note: {
    et: `<h4>Kus? Kuhu? Kust? — pinnal</h4><div class="tabw"><table><tr><th></th><th>Kus? <b>-l</b></th><th>Kuhu? <b>-le</b></th><th>Kust? <b>-lt</b></th></tr><tr><td>laud</td><td>laual</td><td>lauale</td><td>laualt</td></tr><tr><td>tool</td><td>toolil</td><td>toolile</td><td>toolilt</td></tr><tr><td>turg</td><td>turul</td><td>turule</td><td>turult</td></tr></table></div>
<h4>Inimesed</h4><div class="ex">Anna <b>emale</b> lill. · Ma sain <b>sõbralt</b> kingituse.</div><div class="tabw"><table><tr><td>mina</td><td>mul</td><td>mulle</td><td>minult</td></tr><tr><td>sina</td><td>sul</td><td>sulle</td><td>sinult</td></tr><tr><td>tema</td><td>tal</td><td>talle</td><td>temalt</td></tr></table></div>
<h4>Mulle meeldib</h4><div class="ex"><b>Mulle</b> meeldib kohv. <b>Talle</b> meeldib muusika.</div>`,
    it: `<h4>I tre casi «esterni»</h4><p>Per le superfici (tavolo, sedia, pavimento), per alcuni luoghi aperti (mercato, piazza) e per le persone:</p><div class="tabw"><table><tr><th>domanda</th><th>caso</th><th>desinenza</th><th>esempio</th></tr><tr><td>Kus?</td><td>adessivo</td><td>-l</td><td>laua<b>l</b> = sul tavolo</td></tr><tr><td>Kuhu?</td><td>allativo</td><td>-le</td><td>laua<b>le</b> = sul tavolo (moto)</td></tr><tr><td>Kust?</td><td>ablativo</td><td>-lt</td><td>laua<b>lt</b> = dal tavolo</td></tr></table></div><p>Anche qui le desinenze vanno sul genitivo (laud → <b>laua</b>).</p>
<h4>Con le persone</h4><p>L'allativo indica a chi si dà o si dice qualcosa: Anna <b>emale</b> lill = Dai il fiore alla mamma. L'ablativo da chi si riceve: <b>sõbralt</b> = dall'amico. L'adessivo è il «possesso» già visto: <b>mul on</b>.</p>
<h4>Mi piace</h4><p><b>meeldima</b> si costruisce come in italiano: chi prova il piacere va all'allativo. <b>Mulle</b> meeldib kohv = mi piace il caffè. <b>Kas sulle</b> meeldib Tallinn? = Ti piace Tallinn?</p>`
  },
  gram: [
    { q: "Raamat on ___.", h: "laud · Kus?", a: "laual", v: "laud|sg ad", o: ["laual", "lauale", "laualt"], why: "Kus? → -l", it: "Il libro è sul tavolo." },
    { q: "Pane tass ___!", h: "laud · Kuhu?", a: "lauale", v: "laud|sg all", o: ["lauale", "laual", "laualt"], why: "Kuhu? → -le", it: "Metti la tazza sul tavolo!" },
    { q: "Võta võti ___!", h: "laud · Kust?", a: "laualt", v: "laud|sg abl", o: ["laualt", "laual", "lauale"], why: "Kust? → -lt", it: "Prendi la chiave dal tavolo!" },
    { q: "Kass istub ___.", h: "tool · Kus?", a: "toolil", v: "tool|sg ad", why: "Kus? → -l", it: "Il gatto è seduto sulla sedia." },
    { q: "Laupäeval ma lähen ___.", h: "turg · Kuhu?", a: "turule", v: "turg|sg all", o: ["turule", "turgu", "turul"], why: "turg → turu + le", it: "Sabato vado al mercato." },
    { q: "Anna ___ vett, palun.", h: "mina", a: "mulle", o: ["mulle", "mul", "minu"], why: "kellele? → mulle", it: "Dammi dell'acqua, per favore." },
    { q: "___ meeldib kohv.", h: "mina", a: "Mulle", o: ["Mulle", "Mina", "Mul"], why: "meeldima + mulle", it: "Mi piace il caffè." },
    { q: "Kas ___ meeldib Tallinn?", h: "sina", a: "sulle", o: ["sulle", "sul", "sina"], why: "meeldima + sulle", it: "Ti piace Tallinn?" },
    { q: "Ma annan ___ lille.", h: "ema", a: "emale", v: "ema|sg all", o: ["emale", "emal", "emalt"], why: "kellele? → -le", it: "Do un fiore alla mamma." },
    { q: "Ma sain ___ kingituse.", h: "sõber", a: "sõbralt", v: "sõber|sg abl", o: ["sõbralt", "sõbrale", "sõbral"], why: "kellelt? → -lt", it: "Ho ricevuto un regalo dall'amico." },
    { q: "Isa magab ___.", h: "diivan · Kus?", a: "diivanil", v: "diivan|sg ad", why: "Kus? → -l", it: "Il papà dorme sul divano." },
    { q: "___ meeldib muusika.", h: "tema", a: "Talle", o: ["Talle", "Tal", "Temal"], why: "tema → talle", it: "A lui/lei piace la musica." }
  ],
  tr: [
    { q: "Mul on kingitus.", task: null, ti: "Ütle, et kingitus on sinule (sina)", tii: "Di' che il regalo è per te", a: ["Kingitus on sulle.", "See kingitus on sulle.", "Kingitus on sinule."], why: "sina → sulle" },
    { q: "Raamat on laual.", task: null, ti: "Ütle, et sa paned raamatu sinna", tii: "Di' che ci metti il libro", a: ["Ma panen raamatu lauale.", "Panen raamatu lauale."], why: "Kuhu? → lauale" }
  ],
  sent: [
    { e: "Raamat on laual.", i: "Il libro è sul tavolo." },
    { e: "Kass istub toolil.", i: "Il gatto è seduto sulla sedia.", ia: ["Il gatto sta sulla sedia."] },
    { e: "Anna mulle vett, palun.", i: "Dammi dell'acqua, per favore.", ia: ["Dammi l'acqua, per favore."] },
    { e: "Mulle meeldib kohv.", i: "Mi piace il caffè." },
    { e: "Kas sulle meeldib Tallinn?", i: "Ti piace Tallinn?" },
    { e: "Laupäeval ma lähen turule.", i: "Sabato vado al mercato.", ea: ["Ma lähen laupäeval turule."] },
    { e: "See kingitus on sulle.", i: "Questo regalo è per te." },
    { e: "Ma annan emale lille.", i: "Do un fiore alla mamma." },
    { e: "Kott on põrandal.", i: "La borsa è sul pavimento." }
  ],
  qa: [
    { q: "Mis sulle meeldib?", qi: "Che cosa ti piace?", a: ["Mulle meeldib muusika."], k: ["mulle|meeldib"] },
    { q: "Kas sulle meeldib eesti keel?", qi: "Ti piace l'estone?", a: ["Jah, mulle meeldib eesti keel."], k: ["jah|ei"] },
    { q: "Kus on sinu telefon?", qi: "Dov'è il tuo telefono?", a: ["Minu telefon on laual."], k: ["on"] }
  ],
  sit: [
    { ctx: "Sõbral on sünnipäev. Sa annad talle kingituse.", line: null, o: ["Palju õnne! See on sulle.", "Palju õnne! See on sul.", "Palju õnne! See on sinult."] },
    { ctx: "Sa otsid võtit. Võti on laual.", line: ["Kati", "Kus mu võti on?"], o: ["Sinu võti on laual.", "Sinu võti on lauale.", "Sinu võti on laualt."] },
    { ctx: "Kolleeg pakub teed, aga sulle meeldib kohv.", line: ["Kolleeg", "Kas sa tahad teed?"], o: ["Ei, aitäh. Mulle meeldib kohv.", "Ei, aitäh. Mina meeldib kohv.", "Ei, aitäh. Mul meeldib kohv."] }
  ],
  story: {
    t: "Turul",
    lines: [["", "Laupäeva hommikul läheb Kati turule. Marco tuleb ka."], ["Kati", "Mulle meeldib turg. Siin on kõik värske."], ["Müüja", "Tere! Need lilled on väga ilusad. Kas soovite?"], ["Marco", "Jah, palun. Ma annan need lilled Katile."], ["Kati", "Oi, aitäh! Mulle meeldivad lilled."], ["", "Kodus paneb Kati lilled aknale."], ["Marco", "Ja nüüd kohvi! Kohv on juba laual."]],
    q: [{ q: "Kuhu Kati laupäeva hommikul läheb?", qi: "Dove va Kati sabato mattina?", o: ["Turule", "Kinno", "Tööle"] }, { q: "Kellele Marco lilled annab?", qi: "A chi dà i fiori Marco?", o: ["Katile", "Müüjale", "Emale"] }, { q: "Kuhu Kati lilled paneb?", qi: "Dove mette i fiori Kati?", o: ["Aknale", "Lauale", "Põrandale"] }],
    tf: [["Katile ei meeldi turg.", false], ["Kohv on laual.", true]]
  }
},
{
  id: 15, sec: 3, c: 3, t: "Kuidas sinna saab?", ti: "Come ci si arriva?", gname: "Kaasaütlev -ga ja kaassõnad",
  words: [
    ["tramm", "tram", "🚋", "Ma sõidan trammiga."],
    ["takso", "taxi", "🚕", "Me sõidame taksoga."],
    ["jalgratas", "bicicletta", "🚲", "Ta sõidab jalgrattaga tööle."],
    ["auto", "macchina", "🚗", "Isa sõidab autoga."],
    ["rong", "treno", "🚆", "Rong läheb Tartusse."],
    ["peatus", "fermata", "🚏", "Peatus on maja ees."],
    ["otse", "dritto", "⬆️", "Minge otse."],
    ["vasakule", "a sinistra (verso)", "⬅️", "Pöörake vasakule."],
    ["paremale", "a destra (verso)", "➡️", "Siis paremale."],
    ["foor", "semaforo", "🚦", "Foori juures pöörake vasakule."],
    ["jalgsi", "a piedi", "🚶", "Ma lähen jalgsi."],
    ["kaart", "mappa", "🗺️", "Vaata kaarti!"]
  ],
  gl: { "trammiga": "in tram", "taksoga": "in taxi", "jalgrattaga": "in bicicletta", "autoga": "in macchina", "rongiga": "in treno", "bussiga": "in autobus", "sõbraga": "con l'amico", "emaga": "con la mamma", "sõidan": "vado (con un mezzo)", "sõidame": "andiamo (con un mezzo)", "sõidab": "va (con un mezzo)", "ees": "davanti", "taga": "dietro", "kõrval": "accanto", "juures": "presso, vicino a", "vastas": "di fronte", "keskel": "in mezzo", "minge": "andate / vada", "mine": "vai", "pöörake": "girate / giri", "pööra": "gira", "foori": "semaforo (genitivo)", "maja": "casa / della casa", "poe": "del negozio", "kooli": "della scuola", "pargi": "del parco", "panga": "della banca", "kaarti": "mappa (partitivo)", "kaugel": "lontano", "lähedal": "vicino", "kuidas": "come", "sinna": "là (verso)", "saab": "si arriva / si può", "vaata": "guarda", "kesklinna": "in centro (moto)", "jaam": "stazione", "jaama": "alla stazione (moto)" },
  note: {
    et: `<h4>Millega? → -ga</h4><div class="ex">buss → bussi<b>ga</b> · tramm → trammi<b>ga</b> · jalgratas → jalgratta<b>ga</b> · sõber → sõbra<b>ga</b></div><p>Omastav + <b>ga</b>. Aga: <b>jalgsi</b> (ilma -ga).</p>
<h4>Kus täpselt?</h4><div class="tabw"><table><tr><td>maja <b>ees</b></td><td>🏠⬇️</td></tr><tr><td>maja <b>taga</b></td><td>🏠⬆️</td></tr><tr><td>poe <b>kõrval</b></td><td>🏪↔️</td></tr><tr><td>kooli <b>juures</b></td><td>🏫📍</td></tr><tr><td>pargi <b>vastas</b></td><td>🌳↕️</td></tr></table></div><p>Omastav + kaassõna.</p>
<h4>Juhised</h4><div class="ex">Minge otse. Pöörake vasakule / paremale.</div>`,
    it: `<h4>Con che cosa? → -ga (comitativo)</h4><p>Genitivo + <b>-ga</b>: bussi<b>ga</b> = in autobus, sõbra<b>ga</b> = con l'amico. Serve per i mezzi di trasporto e per la compagnia. «A piedi» = <b>jalgsi</b>.</p>
<h4>Posposizioni</h4><p>L'estone mette «davanti, dietro, accanto…» <b>dopo</b> il nome, che va al genitivo: maja <b>ees</b> = davanti alla casa, maja <b>taga</b> = dietro la casa, poe <b>kõrval</b> = accanto al negozio, kooli <b>juures</b> = presso la scuola, pargi <b>vastas</b> = di fronte al parco.</p>
<h4>Indicazioni</h4><p>Minge otse = andate/vada dritto · Pöörake vasakule/paremale = girate/giri a sinistra/destra. Sono imperativi plurali o di cortesia: arrivano nel dettaglio nell'unità 17.</p>`
  },
  gram: [
    { q: "Ma sõidan ___.", h: "tramm", a: "trammiga", v: "tramm|sg kom", o: ["trammiga", "trammis", "trammi"], why: "millega? → -ga", it: "Vado in tram." },
    { q: "Ta sõidab ___ tööle.", h: "jalgratas", a: "jalgrattaga", v: "jalgratas|sg kom", o: ["jalgrattaga", "jalgratasga", "jalgrattas"], why: "jalgratas → jalgratta + ga", it: "Va al lavoro in bicicletta." },
    { q: "Ma lähen kinno ___.", h: "sõber", a: "sõbraga", v: "sõber|sg kom", o: ["sõbraga", "sõberga", "sõbrale"], why: "kellega? → -ga", it: "Vado al cinema con un amico." },
    { q: "Peatus on maja ___.", a: "ees", o: ["ees", "eest", "ette"], why: "maja ees = davanti alla casa", it: "La fermata è davanti alla casa." },
    { q: "Pank on ___ kõrval.", h: "pood", a: "poe", v: "pood|sg g", o: ["poe", "pood", "poes"], why: "omastav + kõrval", it: "La banca è accanto al negozio." },
    { q: "Kohvik on ___ vastas.", h: "park", a: "pargi", v: "park|sg g", o: ["pargi", "park", "pargis"], why: "omastav + vastas", it: "Il caffè è di fronte al parco." },
    { q: "Minge otse ja siis ___.", a: "vasakule", o: ["vasakule", "vasakul", "vasak"], why: "Kuhu? → vasakule", it: "Andate dritto e poi a sinistra." },
    { q: "Pood on ___. (Kus?)", a: "paremal", o: ["paremal", "paremale", "parem"], why: "Kus? → paremal", it: "Il negozio è a destra." },
    { q: "Me sõidame ___.", h: "takso", a: "taksoga", v: "takso|sg kom", why: "-ga", it: "Andiamo in taxi." },
    { q: "Ma ei sõida, ma lähen ___.", a: "jalgsi", o: ["jalgsi", "jalaga", "jalgaga"], why: "a piedi = jalgsi", it: "Non prendo un mezzo, vado a piedi." }
  ],
  tr: [
    { q: "Ma sõidan. (buss)", task: null, ti: "Ütle, millega sa sõidad", tii: "Di' con che cosa viaggi", a: ["Ma sõidan bussiga.", "Mina sõidan bussiga."], why: "buss → bussiga" },
    { q: "Kus on peatus? (maja ees)", task: null, ti: "Vasta täislausega", tii: "Rispondi con una frase completa", a: ["Peatus on maja ees."], why: "omastav + ees" }
  ],
  sent: [
    { e: "Ma sõidan trammiga.", i: "Vado in tram." },
    { e: "Kuidas kesklinna saab?", i: "Come si arriva in centro?" },
    { e: "Minge otse ja siis paremale.", i: "Vada dritto e poi a destra.", ia: ["Andate dritto e poi a destra."] },
    { e: "Peatus on maja ees.", i: "La fermata è davanti alla casa." },
    { e: "Pank on poe kõrval.", i: "La banca è accanto al negozio." },
    { e: "Ma lähen jalgsi.", i: "Vado a piedi." },
    { e: "Ta sõidab jalgrattaga tööle.", i: "Va al lavoro in bicicletta." },
    { e: "Kas jaam on kaugel?", i: "La stazione è lontana?" },
    { e: "Ei, see on väga lähedal.", i: "No, è molto vicina.", ia: ["No, è molto vicino."] }
  ],
  qa: [
    { q: "Kuidas sa tööle sõidad?", qi: "Come vai al lavoro?", a: ["Ma sõidan bussiga."], k: ["-ga|jalgsi"] },
    { q: "Kellega sa kinno lähed?", qi: "Con chi vai al cinema?", a: ["Ma lähen sõbraga."], k: ["-ga|üksi"] },
    { q: "Kas sinu kodu on kesklinnast kaugel?", qi: "Casa tua è lontana dal centro?", a: ["Ei, see on lähedal."], k: ["kaugel|lähedal|jah|ei"] }
  ],
  sit: [
    { ctx: "Turist küsib teed raudteejaama. Jaam on otse ja siis vasakul.", line: ["Turist", "Vabandust, kuidas jaama saab?"], o: ["Minge otse ja siis vasakule.", "Minge otse ja siis vasakul.", "Minge jalgsiga."] },
    { ctx: "Kolleeg küsib, kuidas sa tööle tuled. Sa tuled rattaga.", line: ["Kolleeg", "Kuidas sa tööle tuled?"], o: ["Jalgrattaga.", "Jalgrattas.", "Jalgratast."] },
    { ctx: "Sõber ei leia kohvikut. Kohvik on pargi vastas.", line: ["Sõber", "Kus kohvik on?"], o: ["Kohvik on pargi vastas.", "Kohvik on park vastas.", "Kohvik on pargis vastas."] }
  ],
  story: {
    t: "Tee raamatukokku",
    lines: [["", "Liis on uus õpilane. Ta tahab minna raamatukokku."], ["Liis", "Vabandust, kuidas raamatukokku saab?"], ["Mees", "See ei ole kaugel. Minge otse kuni fooriga ristmikuni."], ["Mees", "Foori juures pöörake paremale."], ["Mees", "Raamatukogu on suure pargi vastas, panga kõrval."], ["Liis", "Kas ma saan bussiga minna?"], ["Mees", "Võib, aga jalgsi on kiirem. Ainult viis minutit."], ["Liis", "Aitäh!"]],
    q: [{ q: "Kus on raamatukogu?", qi: "Dov'è la biblioteca?", o: ["Pargi vastas, panga kõrval", "Panga taga", "Pargi keskel"] }, { q: "Kuidas on kõige kiirem minna?", qi: "Qual è il modo più veloce?", o: ["Jalgsi", "Bussiga", "Taksoga"] }],
    tf: [["Foori juures tuleb pöörata vasakule.", false], ["Raamatukogu on kaugel.", false], ["Jalgsi on viis minutit.", true]]
  }
},
{
  id: 16, sec: 3, c: 4, t: "Poes ja turul", ti: "Al negozio e al mercato", gname: "Osastav (partitiiv) ainsus",
  words: [
    ["kilo", "chilo", "⚖️", "Üks kilo kartuleid, palun."],
    ["kartul", "patata", "🥔", "Kartul on odav."],
    ["tomat", "pomodoro", "🍅", "Ma ostan tomatit."],
    ["kurk", "cetriolo", "🥒", "Üks kurk, palun."],
    ["porgand", "carota", "🥕", "Laps sööb porgandit."],
    ["sibul", "cipolla", "🧅", "Suppi on vaja sibulat."],
    ["banaan", "banana", "🍌", "Kaks banaani, palun."],
    ["maasikas", "fragola", "🍓", "Eesti maasikas on magus."],
    ["muna", "uovo", "🥚", "Mul on vaja kümme muna."],
    ["või", "burro", "🧈", "Ma ostan pakki võid."],
    ["pudel", "bottiglia", "🍾", "Pudel vett, palun."],
    ["maksma", "costare, pagare", "💶", "Kui palju see maksab?"],
    ["odav", "economico", "", "Kartul on odav."],
    ["kallis", "caro", "💎", "Maasikad on kallid."]
  ],
  gl: { "kartuleid": "patate (partitivo pl.)", "tomatit": "pomodoro (partitivo)", "porgandit": "carota (partitivo)", "sibulat": "cipolla (partitivo)", "banaani": "banane (partitivo)", "muna": "uovo / uova (partitivo)", "võid": "burro (partitivo)", "pakki": "pacchetto (partitivo)", "piima": "latte (partitivo)", "juustu": "formaggio (partitivo)", "vett": "acqua (partitivo)", "leiba": "pane (partitivo)", "saia": "pane bianco (partitivo)", "liitrit": "litri (partitivo)", "liiter": "litro", "eurot": "euro (partitivo)", "senti": "centesimi (partitivo)", "ostan": "compro", "ostad": "compri", "ostab": "compra", "maksab": "costa", "maksavad": "costano", "maksan": "pago", "kaardiga": "con la carta", "sularahas": "in contanti", "tahaksin": "vorrei", "sooviksin": "desidererei", "vaja": "bisogno", "magus": "dolce", "kallid": "cari", "midagi": "qualcosa", "veel": "ancora, altro", "kõik": "tutto", "kokku": "in totale", "palun": "prego, per favore" },
  note: {
    et: `<h4>Mida? Mitu? → osastav</h4><div class="ex">Ma ostan <b>piima</b>. · kaks <b>banaani</b> · Mul ei ole <b>leiba</b>.</div>
<h4>Kolm mustrit</h4><div class="tabw"><table><tr><th>muster</th><th>näide</th></tr><tr><td><b>+ vokaal</b> (= omastav)</td><td>kohv → kohvi, piim → piima, banaan → banaani</td></tr><tr><td><b>+ t</b></td><td>tomat → tomatit, porgand → porgandit, maasikas → maasikat</td></tr><tr><td><b>+ d</b></td><td>tee → teed, või → võid</td></tr></table></div>
<h4>Poes</h4><div class="ex">Ma <b>tahaksin</b> kilo tomateid. · <b>Kui palju</b> see maksab? · <b>Kokku</b> viis eurot.</div>`,
    it: `<h4>Il partitivo singolare</h4><p>È il caso più frequente dell'estone. Si usa:</p><p>1) per una quantità indefinita: Ma ostan <b>piima</b> = compro (del) latte; 2) dopo i numeri da 2: kaks <b>banaani</b>; 3) dopo misure: liiter <b>piima</b>, pakk <b>võid</b>; 4) sempre dopo una negazione: Mul ei ole <b>leiba</b>; 5) con molti verbi (armastama, ootama, vaatama…).</p>
<h4>Come si forma: tre schemi</h4><div class="tabw"><table><tr><th>schema</th><th>esempi</th></tr><tr><td>uguale al genitivo (vocale)</td><td>kohv → kohvi, piim → piima, banaan → banaani</td></tr><tr><td>+ <b>t</b></td><td>tomat → tomatit, porgand → porgandit, maasikas → maasikat</td></tr><tr><td>+ <b>d</b> (parole brevi in vocale lunga)</td><td>tee → teed, või → võid</td></tr></table></div><p>Ci sono irregolari da imparare (vesi → vett, leib → leiba, sool → soola). Nei dizionari il partitivo è la terza forma: kohv, kohvi, <b>kohvi</b>.</p>
<h4>Fare la spesa</h4><p><b>Ma tahaksin…</b> = vorrei (condizionale, come blocco per ora) · <b>Kui palju see maksab?</b> = quanto costa? · <b>kokku</b> = in totale. Con «kilo» e verdure contabili si usa spesso il partitivo plurale (kilo <b>kartuleid</b>): lo vedremo nell'unità 32.</p>`
  },
  gram: [
    { q: "Ma ostan ___.", h: "piim", a: "piima", v: "piim|sg p", o: ["piima", "piim", "piimat"], why: "osastav: piim → piima", it: "Compro del latte." },
    { q: "Kaks ___, palun.", h: "banaan", a: "banaani", v: "banaan|sg p", o: ["banaani", "banaan", "banaanit"], why: "2 + osastav", it: "Due banane, per favore." },
    { q: "Laps sööb ___.", h: "porgand", a: "porgandit", v: "porgand|sg p", o: ["porgandit", "porgandi", "porgand"], why: "porgand → porgandit", it: "Il bambino mangia una carota." },
    { q: "Pakk ___, palun.", h: "või", a: "võid", v: "või|sg p", o: ["võid", "või", "võit"], why: "või → võid", it: "Un pacchetto di burro, per favore." },
    { q: "Mul ei ole ___.", h: "leib", a: "leiba", v: "leib|sg p", o: ["leiba", "leib", "leiva"], why: "ei ole + osastav", it: "Non ho pane." },
    { q: "Supi jaoks on vaja ___.", h: "sibul", a: "sibulat", v: "sibul|sg p", why: "sibul → sibulat", it: "Per la zuppa serve una cipolla." },
    { q: "Liiter ___, palun.", h: "vesi", a: "vett", v: "vesi|sg p", o: ["vett", "vesi", "vee"], why: "vesi → vett", it: "Un litro d'acqua, per favore." },
    { q: "Mul on vaja kümme ___.", h: "muna", a: "muna", v: "muna|sg p", o: ["muna", "munat", "munad"], why: "muna → muna", it: "Mi servono dieci uova." },
    { q: "See maksab kolm ___.", h: "euro", a: "eurot", v: "euro|sg p", why: "3 + osastav", it: "Costa tre euro." },
    { q: "Ma ___ kilo tomateid.", a: "tahaksin", o: ["tahaksin", "tahan olen", "tahtma"], why: "tahaksin = vorrei", it: "Vorrei un chilo di pomodori." },
    { q: "Kui palju see ___?", h: "maksma", a: "maksab", o: ["maksab", "maksan", "maksma"], why: "see → -b", it: "Quanto costa?" },
    { q: "Ma ostan ___.", h: "tomat", a: "tomatit", v: "tomat|sg p", why: "tomat → tomatit", it: "Compro un pomodoro." }
  ],
  tr: [
    { q: "Mul on piim.", task: "neg", a: ["Mul ei ole piima.", "Mul pole piima."], why: "ei ole + osastav" },
    { q: "Ma tahan kohvi.", task: "cond", a: ["Ma tahaksin kohvi.", "Mina tahaksin kohvi.", "Ma sooviksin kohvi."], why: "tahan → tahaksin" }
  ],
  sent: [
    { e: "Kui palju see maksab?", i: "Quanto costa?" },
    { e: "Ma tahaksin kilo tomateid.", i: "Vorrei un chilo di pomodori." },
    { e: "Kaks banaani, palun.", i: "Due banane, per favore." },
    { e: "Mul ei ole leiba.", i: "Non ho pane.", ea: ["Mul pole leiba."] },
    { e: "Pudel vett, palun.", i: "Una bottiglia d'acqua, per favore." },
    { e: "Kokku on viis eurot.", i: "In totale sono cinque euro.", ia: ["In tutto fa cinque euro."] },
    { e: "Kas ma saan kaardiga maksta?", i: "Posso pagare con la carta?" },
    { e: "Maasikad on täna kallid.", i: "Oggi le fragole sono care." },
    { e: "Laps sööb porgandit.", i: "Il bambino mangia una carota." }
  ],
  qa: [
    { q: "Mida sa poest ostad?", qi: "Che cosa compri al negozio?", a: ["Ma ostan piima ja leiba."], k: ["ostan"] },
    { q: "Kas kartul on kallis?", qi: "Le patate sono care?", a: ["Ei, kartul on odav."], k: ["odav|kallis"] },
    { q: "Kuidas sa maksad?", qi: "Come paghi?", a: ["Ma maksan kaardiga."], k: ["kaardiga|sularahas"] }
  ],
  sit: [
    { ctx: "Turul. Sa tahad kilo kartuleid.", line: ["Müüja", "Tere! Mida soovite?"], o: ["Ma tahaksin kilo kartuleid.", "Ma tahaksin kilo kartul.", "Ma olen kilo kartuleid."] },
    { ctx: "Sa ei tea hinda.", line: null, o: ["Kui palju see maksab?", "Kui palju see maksad?", "Mitu see maksab euro?"] },
    { ctx: "Kassas. Sul ei ole sularaha.", line: ["Kassapidaja", "Kokku seitse eurot."], o: ["Kas ma saan kaardiga maksta?", "Kas ma saan kaart maksta?", "Ma ei ole raha."] }
  ],
  story: {
    t: "Supp õhtusöögiks",
    lines: [["", "Kati tahab teha suppi. Ta läheb poodi."], ["Kati", "Mul on vaja kartulit, porgandit ja sibulat."], ["", "Poes ei ole porgandit. Kati läheb turule."], ["Kati", "Tere! Ma tahaksin kilo porgandeid ja ühe sibula."], ["Müüja", "Palun. Kas veel midagi?"], ["Kati", "Jah, pakk võid. Kui palju see kokku maksab?"], ["Müüja", "Kokku neli eurot ja viiskümmend senti."], ["Kati", "Palun. Aitäh!"], ["", "Õhtul on laual hea supp."]],
    q: [{ q: "Mida Kati poes ei leia?", qi: "Che cosa non trova Kati al negozio?", o: ["Porgandit", "Kartulit", "Sibulat"] }, { q: "Kui palju Kati maksab?", qi: "Quanto paga Kati?", o: ["4,50 €", "5,40 €", "4,15 €"] }],
    tf: [["Kati teeb salatit.", false], ["Kati ostab turult võid.", true], ["Õhtul on laual supp.", true]]
  }
},
{
  id: 17, sec: 3, c: 5, t: "Kohvikus", ti: "Al caffè", gname: "Käskiv kõneviis: anna! andke!",
  words: [
    ["menüü", "menù", "📋", "Kas ma saaksin menüü?"],
    ["arve", "conto", "🧾", "Arve, palun!"],
    ["kook", "torta", "🍰", "Üks tükk kooki, palun."],
    ["jäätis", "gelato", "🍨", "Lapsed tahavad jäätist."],
    ["salat", "insalata", "🥗", "Ma võtan salatit."],
    ["praad", "piatto principale (carne)", "🍖", "Mis praad täna on?", ["secondo piatto"]],
    ["magustoit", "dolce, dessert", "🍮", "Magustoiduks võtan kooki."],
    ["tass", "tazza", "☕", "Tass kohvi, palun."],
    ["klaas", "bicchiere", "svg:glass", "Klaas vett, palun."],
    ["kahvel", "forchetta", "🍴", "Kas ma saaksin kahvli?"],
    ["istuma", "sedersi, stare seduti", "", "Istuge, palun!"],
    ["ootama", "aspettare", "⏳", "Oodake hetk!"]
  ],
  gl: { "menüü": "menù", "kooki": "torta (partitivo)", "jäätist": "gelato (partitivo)", "salatit": "insalata (partitivo)", "praadi": "piatto principale (partitivo)", "magustoiduks": "come dolce", "kahvli": "forchetta (genitivo)", "anna": "dai", "andke": "date / dia", "too": "porta", "tooge": "portate / porti", "tule": "vieni", "tulge": "venite / venga", "võta": "prendi", "võtke": "prendete / prenda", "istu": "siediti", "istuge": "sedetevi / si sieda", "oota": "aspetta", "oodake": "aspettate / aspetti", "maksa": "paga", "makske": "pagate / paghi", "vabandage": "scusate / scusi", "saaksin": "potrei", "saaks": "potrebbe", "sooviksin": "desidererei", "sooviksite": "desiderereste / desidererebbe", "võtan": "prendo", "hetk": "momento", "hetke": "momento (partitivo)", "kohe": "subito", "tükk": "pezzo", "maitsev": "buono, saporito", "lõunamenüü": "menù del pranzo", "päevapraad": "piatto del giorno", "joogiks": "da bere", "laud": "tavolo", "lauda": "tavolo (partitivo)", "vaba": "libero", "kahele": "per due" },
  note: {
    et: `<h4>Käsk: sina</h4><div class="ex">andma → <b>anna</b>! · tooma → <b>too</b>! · tulema → <b>tule</b>! · istuma → <b>istu</b>!</div><p>Sama vorm nagu «ei ...»: ma ei anna → <b>Anna!</b></p>
<h4>Käsk: teie</h4><div class="ex"><b>Andke!</b> · <b>Tooge!</b> · <b>Tulge!</b> · <b>Istuge!</b> · <b>Oodake!</b></div><div class="tabw"><table><tr><th>-ma</th><th>sina</th><th>teie</th></tr><tr><td>andma</td><td>anna</td><td>andke</td></tr><tr><td>tooma</td><td>too</td><td>tooge</td></tr><tr><td>tulema</td><td>tule</td><td>tulge</td></tr><tr><td>võtma</td><td>võta</td><td>võtke</td></tr><tr><td>istuma</td><td>istu</td><td>istuge</td></tr><tr><td>ootama</td><td>oota</td><td>oodake</td></tr><tr><td>minema</td><td>mine</td><td>minge</td></tr></table></div>
<h4>Viisakalt</h4><div class="ex">Kas ma <b>saaksin</b> menüü? · Ma <b>sooviksin</b> kohvi.</div>`,
    it: `<h4>L'imperativo con «tu»</h4><p>È uguale alla forma dopo <b>ei</b>: ma ei anna → <b>Anna!</b> (dai!), ei too → <b>Too!</b> (porta!), ei tule → <b>Tule!</b> (vieni!). Eccezione: minema → <b>Mine!</b> (vai!).</p>
<h4>L'imperativo con «voi» o «Lei»</h4><p>Desinenza <b>-ge</b> o <b>-ke</b> (dopo k, p, t, s, h): too<b>ge</b>, tul<b>ge</b>, istu<b>ge</b>, and<b>ke</b>, võt<b>ke</b>. A volte la radice cambia: ootama → <b>oodake</b>. Al ristorante il cameriere vi parla con questa forma: <b>Istuge!</b> = si sieda.</p>
<h4>Ordinare con cortesia</h4><p>Il condizionale (dettagli nell'unità 27) rende la richiesta gentile: <b>Kas ma saaksin…?</b> = potrei avere…? · <b>Ma sooviksin…</b> = desidererei… Con il cibo si usa spesso il partitivo: Ma võtan <b>salatit</b>.</p>`
  },
  gram: [
    { q: "___ mulle menüü, palun!", h: "andma · sina", a: "Anna", v: "andma|o", o: ["Anna", "Annad", "Andke"], why: "sina-käsk = anna", it: "Dammi il menù, per favore!" },
    { q: "___ arve, palun!", h: "tooma · teie", a: "Tooge", v: "tooma|ge", o: ["Tooge", "Too", "Toote"], why: "teie-käsk: -ge", it: "Ci porti il conto, per favore!" },
    { q: "___, palun!", h: "istuma · teie", a: "Istuge", v: "istuma|ge", o: ["Istuge", "Istu", "Istute"], why: "teie-käsk: -ge", it: "Si accomodi, prego!" },
    { q: "___ hetk!", h: "ootama · teie", a: "Oodake", v: "ootama|ge", o: ["Oodake", "Ootage", "Oota"], why: "ootama → oodake", it: "Aspetti un momento!" },
    { q: "___ siia!", h: "tulema · sina", a: "Tule", v: "tulema|o", o: ["Tule", "Tulge", "Tuled"], why: "sina-käsk = tule", it: "Vieni qui!" },
    { q: "___ otse!", h: "minema · teie", a: "Minge", v: "minema|ge", o: ["Minge", "Mine", "Lähge"], why: "minema → minge", it: "Andate dritto!" },
    { q: "Kas ma ___ menüü?", a: "saaksin", o: ["saaksin", "saan olen", "saama"], why: "viisakas: saaksin", it: "Potrei avere il menù?" },
    { q: "Ma võtan ___.", h: "salat", a: "salatit", v: "salat|sg p", o: ["salatit", "salat", "salati"], why: "osastav", it: "Prendo l'insalata." },
    { q: "Üks tükk ___, palun.", h: "kook", a: "kooki", v: "kook|sg p", why: "tükk + osastav", it: "Un pezzo di torta, per favore." },
    { q: "___ mulle kahvel!", h: "andma · sina", a: "Anna", v: "andma|o", why: "anna!", it: "Dammi una forchetta!" },
    { q: "___ kaardiga, palun.", h: "maksma · teie", a: "Makske", v: "maksma|ge", why: "teie-käsk: -ke", it: "Paghi con la carta, per favore." }
  ],
  tr: [
    { q: "Sa annad mulle vett.", task: "imp", a: ["Anna mulle vett!", "Anna mulle vett."], why: "sina-käsk: anna" },
    { q: "Te tulete siia.", task: "imp", a: ["Tulge siia!", "Tulge siia."], why: "teie-käsk: tulge" },
    { q: "Ma tahan arvet.", task: "cond", a: ["Ma sooviksin arvet.", "Kas ma saaksin arve?", "Ma tahaksin arvet."], why: "viisakas vorm" }
  ],
  sent: [
    { e: "Kas teil on vaba laud kahele?", i: "Avete un tavolo libero per due?" },
    { e: "Istuge, palun!", i: "Si sieda, prego!", ia: ["Sedetevi, prego!", "Accomodatevi, prego!"] },
    { e: "Kas ma saaksin menüü?", i: "Potrei avere il menù?" },
    { e: "Mis on täna päevapraad?", i: "Qual è oggi il piatto del giorno?" },
    { e: "Ma võtan salatit ja klaasi vett.", i: "Prendo un'insalata e un bicchiere d'acqua." },
    { e: "Magustoiduks võtan kooki.", i: "Come dolce prendo una torta." },
    { e: "Oodake hetk!", i: "Aspetti un momento!", ia: ["Aspettate un momento!"] },
    { e: "Arve, palun!", i: "Il conto, per favore!" },
    { e: "See oli väga maitsev.", i: "Era molto buono." }
  ],
  qa: [
    { q: "Mida soovite?", qi: "Che cosa desidera?", a: ["Ma sooviksin kohvi ja kooki."], k: ["sooviksin|tahaksin|võtan|palun"] },
    { q: "Mida te joogiks võtate?", qi: "Che cosa prende da bere?", a: ["Klaasi vett, palun."], k: ["vett|kohvi|teed|mahla|õlut|veini|palun"] },
    { q: "Kas soovite magustoitu?", qi: "Desidera un dolce?", a: ["Jah, palun. Ma võtan jäätist."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Sa tuled sõbraga restorani.", line: ["Teenindaja", "Tere õhtust!"], o: ["Tere! Kas teil on vaba laud kahele?", "Tere! Anna laud!", "Head ööd, laud kahele!"] },
    { ctx: "Sa oled lõpetanud ja tahad maksta.", line: null, o: ["Arve, palun!", "Too arvet!", "Ma olen arve."] },
    { ctx: "Teenindaja küsib, kas toit maitses.", line: ["Teenindaja", "Kuidas maitses?"], o: ["Väga maitsev, aitäh!", "Väga maitsev, palun!", "Ma ei maitse."] },
    { ctx: "Su laps ootab. Sa ütled talle, et ta istuks.", line: null, o: ["Istu, palun!", "Istuge, palun ise!", "Istub, palun!"] }
  ],
  story: {
    t: "Lõuna kohvikus",
    lines: [["", "Kell on kaksteist. Marco ja tema kolleeg Kersti lähevad kohvikusse."], ["Teenindaja", "Tere! Istuge, palun. Siin on menüü."], ["Kersti", "Mis on täna päevapraad?"], ["Teenindaja", "Täna on kala kartulitega."], ["Marco", "Ma võtan päevapraadi ja klaasi vett."], ["Kersti", "Ma ei söö kala. Ma võtan salatit."], ["Teenindaja", "Kas soovite magustoitu?"], ["Marco", "Jah, palun. Tooge mulle tükk kooki."], ["", "Pärast sööki küsib Kersti arvet. Kõik oli väga maitsev."]],
    q: [{ q: "Mis on päevapraad?", qi: "Qual è il piatto del giorno?", o: ["Kala kartulitega", "Salat", "Kook"] }, { q: "Miks Kersti päevapraadi ei võta?", qi: "Perché Kersti non prende il piatto del giorno?", o: ["Ta ei söö kala.", "See on kallis.", "Tal ei ole raha."] }],
    tf: [["Marco joob kohvi.", false], ["Marco võtab magustoiduks kooki.", true], ["Kersti küsib arvet.", true]]
  }
},
{
  id: 18, sec: 3, c: 6, t: "Laupäev Tartus", ti: "Sabato a Tartu (ripasso)", gname: "Kordamine: peatükid 13–17",
  words: [
    ["raudteejaam", "stazione ferroviaria", "🚉", "Me sõidame rongiga raudteejaamast."],
    ["raekoda", "municipio", "🏛️", "Raekoja plats on ilus."],
    ["plats", "piazza", "", "Raekoja platsil on kohvikud."],
    ["jõgi", "fiume", "🏞️", "Tartus on Emajõgi."],
    ["sild", "ponte", "🌉", "Me jalutame üle silla."],
    ["vanalinn", "città vecchia", "🏰", "Vanalinn on väga ilus."],
    ["giid", "guida", "🧑‍🏫", "Giid räägib inglise keelt."],
    ["pilt", "foto, immagine", "📷", "Ma teen pilti."],
    ["ekskursioon", "visita guidata", "", "Ekskursioon algab kell üksteist."],
    ["tagasi", "indietro, di ritorno", "↩️", "Õhtul me sõidame tagasi."]
  ],
  gl: { "raudteejaamast": "dalla stazione", "raekoja": "del municipio", "platsil": "in piazza", "platsile": "in piazza (moto)", "üle": "sopra, attraverso", "silla": "ponte (genitivo)", "tartus": "a Tartu", "tartusse": "a Tartu (moto)", "tartust": "da Tartu", "ülikooli": "dell'università", "muuseumisse": "al museo (moto)", "emajõgi": "Emajõgi (fiume di Tartu)", "emajõe": "dell'Emajõgi", "ääres": "lungo, sulla riva", "teen": "faccio", "pilti": "foto (partitivo)", "kohvikutes": "nei caffè", "tudengid": "studenti universitari", "tudengilinn": "città universitaria", "kuulus": "famoso", "vana": "vecchio", "hommikul": "di mattina" },
  note: {
    et: `<h4>Kordame</h4><div class="tabw"><table><tr><th>küsimus</th><th>siseruum</th><th>pind / inimene</th></tr><tr><td>Kus?</td><td>linna<b>s</b></td><td>platsi<b>l</b></td></tr><tr><td>Kuhu?</td><td>linna<b>sse</b> / linna</td><td>platsi<b>le</b></td></tr><tr><td>Kust?</td><td>linna<b>st</b></td><td>platsi<b>lt</b></td></tr></table></div><div class="ex">Millega? bussi<b>ga</b> · Mida? kohvi, kooki · Käsk: Tule! Tulge!</div>`,
    it: `<h4>Ripasso delle unità 13–17</h4><div class="tabw"><table><tr><th>domanda</th><th>dentro (-s)</th><th>sopra / persone (-l)</th></tr><tr><td>Kus?</td><td>linna<b>s</b></td><td>platsi<b>l</b></td></tr><tr><td>Kuhu?</td><td>linna<b>sse</b> / linna</td><td>platsi<b>le</b></td></tr><tr><td>Kust?</td><td>linna<b>st</b></td><td>platsi<b>lt</b></td></tr></table></div><p>Ricorda anche: <b>-ga</b> (con), il partitivo (kohvi, kooki), l'imperativo (Tule! Tulge!) e le posposizioni col genitivo (maja ees).</p>`
  },
  gram: [
    { q: "Me sõidame ___.", h: "Tartu · Kuhu?", a: "Tartusse", v: "Tartu|sg ill", o: ["Tartusse", "Tartus", "Tartust"], why: "Kuhu? → -sse", it: "Andiamo a Tartu." },
    { q: "Raekoja ___ on palju kohvikuid.", h: "plats · Kus?", a: "platsil", v: "plats|sg ad", o: ["platsil", "platsis", "platsile"], why: "plats → -l", it: "In piazza del municipio ci sono molti caffè." },
    { q: "Me sõidame ___.", h: "rong", a: "rongiga", v: "rong|sg kom", why: "-ga", it: "Andiamo in treno." },
    { q: "Me jalutame jõe ___.", a: "ääres", o: ["ääres", "äärde", "äärest"], why: "jõe ääres = lungo il fiume", it: "Passeggiamo lungo il fiume." },
    { q: "___ kiiresti, rong läheb!", h: "tulema · teie", a: "Tulge", v: "tulema|ge", o: ["Tulge", "Tule", "Tulete"], why: "teie-käsk", it: "Venite presto, il treno parte!" },
    { q: "Ma tahaksin tassi ___.", h: "tee", a: "teed", v: "tee|sg p", why: "tass + osastav", it: "Vorrei una tazza di tè." },
    { q: "Õhtul me sõidame ___ Tallinnasse.", a: "tagasi", o: ["tagasi", "taga", "tagant"], why: "tagasi = indietro", it: "La sera torniamo a Tallinn." },
    { q: "Ekskursioon algab ülikooli ___.", a: "ees", o: ["ees", "eest", "ette"], why: "omastav + ees", it: "La visita comincia davanti all'università." },
    { q: "Kas ___ meeldib Tartu?", h: "sina", a: "sulle", why: "meeldima + sulle", it: "Ti piace Tartu?" }
  ],
  tr: [
    { q: "Ma olen Tartus.", task: null, ti: "Ütle, et sa tuled sealt", tii: "Di' che vieni da lì", a: ["Ma tulen Tartust.", "Mina tulen Tartust."], why: "Kust? → Tartust" },
    { q: "Te ootate.", task: "imp", a: ["Oodake!", "Oodake."], why: "ootama → oodake" }
  ],
  sent: [
    { e: "Laupäeval me sõidame rongiga Tartusse.", i: "Sabato andiamo a Tartu in treno.", ea: ["Me sõidame laupäeval rongiga Tartusse."] },
    { e: "Raekoja platsil on palju kohvikuid.", i: "In piazza del municipio ci sono molti caffè." },
    { e: "Ekskursioon algab kell üksteist.", i: "La visita guidata comincia alle undici." },
    { e: "Me jalutame jõe ääres.", i: "Passeggiamo lungo il fiume." },
    { e: "Ma teen sillal pilti.", i: "Faccio una foto sul ponte." },
    { e: "Õhtul me sõidame tagasi.", i: "La sera torniamo indietro.", ia: ["Stasera torniamo."] },
    { e: "Tartu on tudengilinn.", i: "Tartu è una città universitaria." },
    { e: "Kas sulle meeldib Tartu?", i: "Ti piace Tartu?" }
  ],
  qa: [
    { q: "Kas sa oled Tartus käinud?", qi: "Sei mai stato a Tartu?", a: ["Jah, mitu korda."], k: ["jah|ei"] },
    { q: "Millega sa Tartusse sõidad?", qi: "Con che cosa vai a Tartu?", a: ["Ma sõidan rongiga."], k: ["-ga"] },
    { q: "Mida sa vanalinnas teed?", qi: "Che cosa fai nella città vecchia?", a: ["Ma jalutan ja teen pilti."], k: ["ma|mina"] }
  ],
  sit: [
    { ctx: "Raudteejaamas. Sa tahad piletit Tartusse.", line: ["Kassapidaja", "Kuhu te sõidate?"], o: ["Tartusse, palun. Üks pilet.", "Tartus, palun.", "Tartust, palun."] },
    { ctx: "Giid räägib liiga kiiresti.", line: ["Giid", "Siin näete ülikooli peahoonet, mis on ehitatud…"], o: ["Vabandust, palun rääkige aeglasemalt.", "Vabandust, räägi aeglasem.", "Ma ei saa aru palun."] },
    { ctx: "Sõber küsib, kus te kohtute. Kohtumine on Raekoja platsil.", line: ["Sõber", "Kus me kohtume?"], o: ["Raekoja platsil.", "Raekoja platsis.", "Raekoja platsile."] }
  ],
  story: {
    t: "Laupäev Tartus",
    lines: [["", "Laupäeva hommikul sõidavad Marco ja Kati rongiga Tartusse."], ["", "Rong väljub Tallinnast kell kaheksa ja jõuab Tartusse kell kümme."], ["", "Raudteejaamast nad lähevad jalgsi vanalinna."], ["", "Kell üksteist algab ekskursioon ülikooli ees. Giid räägib eesti keelt."], ["Kati", "Kas sa saad aru?"], ["Marco", "Natuke! Ülikool on vana ja kuulus."], ["", "Lõunal nad söövad Raekoja platsil kohvikus."], ["", "Pärast nad jalutavad Emajõe ääres ja teevad sillal pilti."], ["", "Õhtul nad sõidavad väsinud, aga rõõmsad tagasi Tallinnasse."]],
    q: [{ q: "Millega nad Tartusse sõidavad?", qi: "Con che cosa vanno a Tartu?", o: ["Rongiga", "Bussiga", "Autoga"] }, { q: "Kus algab ekskursioon?", qi: "Dove comincia la visita?", o: ["Ülikooli ees", "Raekoja platsil", "Silla peal"] }, { q: "Mida nad pärast lõunat teevad?", qi: "Che cosa fanno dopo pranzo?", o: ["Jalutavad jõe ääres.", "Lähevad kinno.", "Sõidavad koju."] }],
    tf: [["Rong jõuab Tartusse kell kümme.", true], ["Giid räägib inglise keelt.", false], ["Nad jäävad ööseks Tartusse.", false]]
  }
}
);
