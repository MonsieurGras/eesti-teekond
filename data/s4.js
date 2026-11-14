/* Osa 4 · Inimesed ja minevik · A2.1 — units 19–24. */
(window.UNITS = window.UNITS || []).push(
{
  id: 19, sec: 4, c: 1, t: "Eile", ti: "Ieri", gname: "Lihtminevik: -sin, -s / -si-",
  words: [
    ["eile", "ieri", "", "Eile ma olin kodus."],
    ["möödunud", "scorso", "", "Möödunud nädalal ma käisin Pärnus."],
    ["ujumine", "nuoto", "🏊", "Mulle meeldib ujumine."],
    ["matkamine", "escursionismo", "🥾", "Matkamine on tore hobi."],
    ["kalastamine", "pesca", "🎣", "Isa hobi on kalastamine."],
    ["jalgrattasõit", "giro in bicicletta", "🚴", "Pühapäeval oli pikk jalgrattasõit."],
    ["kontsert", "concerto", "🎵", "Eile õhtul ma käisin kontserdil."],
    ["film", "film", "🎬", "Me vaatasime huvitavat filmi."],
    ["mets", "bosco", "🌲", "Laupäeval me matkasime metsas."],
    ["hobi", "hobby", "", "Mis on sinu hobi?"],
    ["käima", "andare (e tornare), frequentare", "", "Ma käisin poes."],
    ["vaba aeg", "tempo libero", "", "Mida sa vabal ajal teed?"]
  ],
  gl: { "olin": "ero", "oli": "era", "olid": "eri / erano", "olime": "eravamo", "käisin": "sono andato", "käis": "è andato", "käisime": "siamo andati", "käisid": "sei andato / sono andati", "elasin": "vivevo", "elas": "viveva", "töötasin": "lavoravo", "lugesin": "ho letto", "luges": "ha letto", "tegin": "ho fatto", "tegi": "ha fatto", "tegid": "hai fatto / hanno fatto", "läksin": "sono andato", "läks": "è andato", "läksime": "siamo andati", "tulin": "sono venuto", "tuli": "è venuto", "sõin": "ho mangiato", "sõi": "ha mangiato", "jõin": "ho bevuto", "nägin": "ho visto", "ostsin": "ho comprato", "ostis": "ha comprato", "ujusin": "ho nuotato", "magasin": "ho dormito", "vaatasime": "abbiamo guardato", "matkasime": "abbiamo fatto un'escursione", "sõitsime": "siamo andati (con un mezzo)", "läinud": "andato (dopo ei)", "teinud": "fatto (dopo ei)", "olnud": "stato (dopo ei)", "käinud": "andato (dopo ei)", "tulnud": "venuto (dopo ei)", "söönud": "mangiato (dopo ei)", "näinud": "visto (dopo ei)", "ostnud": "comprato (dopo ei)", "nädalal": "la settimana", "nädalavahetusel": "nel fine settimana", "kontserdil": "al concerto", "metsas": "nel bosco", "filmi": "film (partitivo)", "vabal": "libero (il)", "ajal": "tempo (nel)", "pikk": "lungo", "kogu": "tutto, intero", "päev": "giorno", "möödunud": "scorso", "eelmisel": "scorso", "aasta": "anno", "aastal": "nell'anno", "kunagi": "una volta", "üleeile": "l'altro ieri" },
  note: {
    et: `<h4>Mis juhtus eile?</h4><div class="tabw"><table><tr><th></th><th>elama</th><th>õppima</th></tr><tr><td>ma</td><td>ela<b>sin</b></td><td>õppi<b>sin</b></td></tr><tr><td>sa</td><td>ela<b>sid</b></td><td>õppi<b>sid</b></td></tr><tr><td>ta</td><td>ela<b>s</b></td><td>õppi<b>s</b></td></tr><tr><td>me</td><td>ela<b>sime</b></td><td>õppi<b>sime</b></td></tr><tr><td>te</td><td>ela<b>site</b></td><td>õppi<b>site</b></td></tr><tr><td>nad</td><td>ela<b>sid</b></td><td>õppi<b>sid</b></td></tr></table></div>
<h4>Erandid</h4><div class="ex">olema → <b>olin</b>, oli · minema → <b>läksin</b>, läks · tulema → <b>tulin</b>, tuli · tegema → <b>tegin</b>, tegi · sööma → <b>sõin</b> · jooma → <b>jõin</b> · nägema → <b>nägin</b></div>
<h4>Ei + -nud</h4><div class="ex">Ma ei <b>läinud</b>. Ta ei <b>olnud</b> kodus. Me ei <b>teinud</b> midagi.</div>
<h4>Hobid: -mine</h4><div class="ex">ujuma → uju<b>mine</b> · matkama → matka<b>mine</b></div>`,
    it: `<h4>Il passato semplice (imperfekt)</h4><p>È il passato più usato: vale sia per «ho fatto» sia per «facevo». Si forma dalla radice dell'infinito + <b>-si-</b> e le desinenze personali: ela<b>sin</b>, ela<b>sid</b>, ela<b>s</b>, ela<b>sime</b>, ela<b>site</b>, ela<b>sid</b>. La 3ª persona singolare termina in <b>-s</b>. Molti verbi monosillabici fanno -sin / -is: ostma → ost<b>sin</b>, ost<b>is</b>.</p>
<h4>Irregolari da imparare</h4><p>olema → olin, oli · minema → läksin, läks · tulema → tulin, tuli · tegema → tegin, tegi · sööma → sõin, sõi · jooma → jõin, jõi · nägema → nägin, nägi.</p>
<h4>Negazione al passato</h4><p><b>ei</b> + participio in <b>-nud</b>, uguale per tutti: ma ei läinud, sa ei läinud, nad ei läinud. Forme utili: olnud, teinud, läinud, tulnud, käinud, söönud, näinud.</p>
<h4>Nomi in -mine</h4><p>Dalla radice del verbo + <b>-mine</b> si ottiene il nome dell'attività: ujuma → ujumine (il nuoto), matkama → matkamine.</p>`
  },
  gram: [
    { q: "Eile ma ___ kodus.", h: "olema", a: "olin", v: "olema|sin", o: ["olin", "olen", "olid"], why: "olema → olin", it: "Ieri ero a casa." },
    { q: "Ta ___ poodi.", h: "minema · eile", a: "läks", v: "minema|s", o: ["läks", "läheb", "läksin"], why: "minema → läks", it: "È andato al negozio." },
    { q: "Me ___ huvitavat filmi.", h: "vaatama · eile", a: "vaatasime", v: "vaatama|sime", o: ["vaatasime", "vaatame", "vaatasid"], why: "me → -sime", it: "Abbiamo guardato un film interessante." },
    { q: "Mida sa eile ___?", h: "tegema", a: "tegid", v: "tegema|sid", o: ["tegid", "teed", "tegi"], why: "tegema → tegid", it: "Che cosa hai fatto ieri?" },
    { q: "Ma ___ uue raamatu.", h: "ostma · eile", a: "ostsin", v: "ostma|sin", o: ["ostsin", "ostan", "ostis"], why: "ostma → ostsin", it: "Ho comprato un libro nuovo." },
    { q: "Nad ___ Itaalias.", h: "elama · varem", a: "elasid", v: "elama|sid", why: "nad → -sid", it: "Vivevano in Italia." },
    { q: "Ma ei ___ eile tööl.", h: "olema", a: "olnud", v: "olema|nud", o: ["olnud", "olin", "ole"], why: "ei + -nud", it: "Ieri non ero al lavoro." },
    { q: "Ta ei ___ kinno.", h: "minema · eile", a: "läinud", v: "minema|nud", o: ["läinud", "läks", "lähe"], why: "ei + läinud", it: "Non è andato al cinema." },
    { q: "Ma ___ hommikul putru.", h: "sööma · eile", a: "sõin", v: "sööma|sin", o: ["sõin", "söön", "söösin"], why: "sööma → sõin", it: "Stamattina ho mangiato il porridge." },
    { q: "Laupäeval me ___ metsas.", h: "matkama", a: "matkasime", v: "matkama|sime", why: "me → -sime", it: "Sabato abbiamo fatto un'escursione nel bosco." },
    { q: "Mulle meeldib ___. 🏊", a: "ujumine", o: ["ujumine", "ujuma", "ujun"], why: "ujuma → ujumine", it: "Mi piace il nuoto." },
    { q: "Möödunud nädalal ma ___ Pärnus.", h: "käima", a: "käisin", v: "käima|sin", why: "käima → käisin", it: "La settimana scorsa sono stato a Pärnu." }
  ],
  tr: [
    { q: "Ma lähen kinno.", task: "past", a: ["Ma läksin kinno.", "Mina läksin kinno."], why: "minema → läksin" },
    { q: "Ta on kodus.", task: "past", a: ["Ta oli kodus.", "Tema oli kodus."], why: "olema → oli" },
    { q: "Me sõime kala.", task: "neg", a: ["Me ei söönud kala.", "Meie ei söönud kala.", "Me ei söönud kalu."], why: "ei + söönud" },
    { q: "Nad tulid eile.", task: "neg", a: ["Nad ei tulnud eile.", "Nemad ei tulnud eile."], why: "ei + tulnud" }
  ],
  sent: [
    { e: "Eile ma olin kodus.", i: "Ieri ero a casa.", ea: ["Ma olin eile kodus."] },
    { e: "Mida sa nädalavahetusel tegid?", i: "Che cosa hai fatto nel fine settimana?" },
    { e: "Me vaatasime huvitavat filmi.", i: "Abbiamo guardato un film interessante." },
    { e: "Laupäeval me matkasime metsas.", i: "Sabato abbiamo fatto un'escursione nel bosco.", ea: ["Me matkasime laupäeval metsas."] },
    { e: "Ta ei tulnud eile tööle.", i: "Ieri non è venuto al lavoro.", ea: ["Eile ta ei tulnud tööle."] },
    { e: "Ma käisin kontserdil.", i: "Sono stato a un concerto.", ia: ["Sono andato a un concerto."] },
    { e: "Mulle meeldib ujumine.", i: "Mi piace il nuoto.", ia: ["Mi piace nuotare."] },
    { e: "Möödunud nädalal ma käisin Pärnus.", i: "La settimana scorsa sono stato a Pärnu.", ea: ["Ma käisin möödunud nädalal Pärnus."] },
    { e: "Me ei teinud midagi.", i: "Non abbiamo fatto niente." }
  ],
  qa: [
    { q: "Mida sa eile tegid?", qi: "Che cosa hai fatto ieri?", a: ["Eile ma töötasin."], k: ["-sin|olin|tegin|läksin|käisin|ei"] },
    { q: "Kus sa nädalavahetusel käisid?", qi: "Dove sei stato nel fine settimana?", a: ["Ma käisin Tartus."], k: ["käisin|olin|ei"] },
    { q: "Mis on sinu hobi?", qi: "Qual è il tuo hobby?", a: ["Minu hobi on ujumine."], k: ["hobi|meeldib|-mine"] },
    { q: "Kas sa vaatasid eile telekat?", qi: "Hai guardato la tv ieri?", a: ["Ei, ma ei vaadanud."], k: ["jah|ei"] }
  ],
  sit: [
    { ctx: "Esmaspäeva hommik. Kolleeg küsib, kuidas nädalavahetus läks.", line: ["Kolleeg", "Mida sa nädalavahetusel tegid?"], o: ["Ma käisin metsas matkamas. Oli väga tore!", "Ma lähen metsa matkama.", "Ma käin metsas matkamine."] },
    { ctx: "Sõber küsib, kas sa nägid uut filmi. Sa ei näinud.", line: ["Sõber", "Kas sa nägid uut filmi?"], o: ["Ei, ma ei näinud seda veel.", "Ei, ma ei nägin.", "Ei, ma ei näe eile."] },
    { ctx: "Õpetaja küsib, miks sa eile tunnis ei olnud. Sa olid haige.", line: ["Õpetaja", "Kus sa eile olid?"], o: ["Ma olin haige.", "Ma olen haige eile.", "Ma oli haige."] }
  ],
  story: {
    t: "Pikk nädalavahetus",
    lines: [["", "Esmaspäeval küsib Kersti Marcolt, mida ta nädalavahetusel tegi."], ["Marco", "Reedel ma käisin sõpradega kontserdil. See oli suurepärane!"], ["Marco", "Laupäeval me sõitsime Lahemaale ja matkasime terve päeva metsas."], ["Kersti", "Kas te nägite loomi?"], ["Marco", "Jah, me nägime põtra! Aga karu me ei näinud."], ["Marco", "Pühapäeval ma ei teinud midagi. Ma magasin kaua ja lugesin raamatut."], ["Kersti", "Väga hea nädalavahetus!"]],
    q: [{ q: "Kuhu Marco reedel läks?", qi: "Dove è andato Marco venerdì?", o: ["Kontserdile", "Kinno", "Metsa"] }, { q: "Mis looma nad nägid?", qi: "Che animale hanno visto?", o: ["Põtra", "Karu", "Kassi"] }, { q: "Mida Marco pühapäeval tegi?", qi: "Che cosa ha fatto Marco domenica?", o: ["Magas kaua ja luges", "Matkas metsas", "Käis kontserdil"] }],
    tf: [["Laupäeval nad sõitsid Lahemaale.", true], ["Nad nägid karu.", false]]
  }
},
{
  id: 20, sec: 4, c: 2, t: "Pere ja sõbrad", ti: "Famiglia e amici", gname: "Mitmus -d ja omadussõna",
  words: [
    ["pikk", "alto, lungo", "🦒", "Minu vend on pikk."],
    ["lühike", "basso, corto", "", "Vanaema on lühike."],
    ["juuksed", "capelli", "💇", "Tal on pikad juuksed."],
    ["silmad", "occhi", "👀", "Tal on sinised silmad."],
    ["habe", "barba", "🧔", "Isal on habe."],
    ["rõõmus", "allegro", "😄", "Laps on rõõmus."],
    ["kurb", "triste", "😢", "Miks sa kurb oled?"],
    ["vihane", "arrabbiato", "😠", "Õpetaja on vihane."],
    ["närviline", "nervoso", "😬", "Enne eksamit ma olen närviline."],
    ["tark", "intelligente", "🦉", "Sinu õde on väga tark."],
    ["naljakas", "divertente, buffo", "🤪", "Onu on väga naljakas."],
    ["tädi", "zia", "", "Minu tädi elab Pärnus."],
    ["onu", "zio", "", "Onu on naljakas."]
  ],
  gl: { "pikad": "lunghi", "lühikesed": "corti", "sinised": "azzurri", "pruunid": "castani", "heledad": "chiari", "tumedad": "scuri", "suured": "grandi", "väikesed": "piccoli", "lapsed": "bambini", "sõbrad": "amici", "inimesed": "persone", "õed": "sorelle", "vennad": "fratelli", "mehed": "uomini", "naised": "donne", "rõõmsad": "allegri", "isal": "il papà ha", "tal": "ha", "suures": "grande (in)", "majas": "in casa", "väikese": "piccolo (genitivo)", "lapsega": "con il bambino", "uues": "nuovo (in)", "korteris": "nell'appartamento", "vanale": "vecchio (a)", "sõbrale": "all'amico", "eksamit": "esame (partitivo)", "enne": "prima di", "miks": "perché", "sellepärast": "perciò", "sest": "perché", "välja": "fuori, (aspetto)", "näeb": "vede / sembra", "välja näeb": "ha l'aspetto", "iseloom": "carattere", "kõik": "tutti" },
  note: {
    et: `<h4>Mitmus: -d</h4><div class="ex">sõber → sõbra<b>d</b> · laps → lapse<b>d</b> · mees → mehe<b>d</b> · õde → õe<b>d</b></div><p>Ainsuse omastav + <b>d</b>.</p>
<h4>Omadussõna ja nimisõna</h4><p>Omadussõna muutub koos nimisõnaga.</p><div class="tabw"><table><tr><td>suur maja</td><td>suure<b>s</b> maja<b>s</b></td></tr><tr><td>väike laps</td><td>väikese lapse<b>ga</b></td></tr><tr><td>pikk juus</td><td>pika<b>d</b> juukse<b>d</b></td></tr></table></div>
<h4>Milline ta on?</h4><div class="ex">Ta on pikk. Tal on lühikesed juuksed ja sinised silmad. Ta on rõõmus ja tark.</div>`,
    it: `<h4>Il plurale nominativo: -d</h4><p>Si forma dal <b>genitivo singolare</b> + <b>-d</b>: sõber → gen. sõbra → sõbra<b>d</b>; laps → lapse → lapse<b>d</b>; mees → mehe → mehe<b>d</b>. Ancora una volta il genitivo è la chiave.</p>
<h4>Accordo dell'aggettivo</h4><p>L'aggettivo prende lo stesso caso e numero del nome: suur maja → suure<b>s</b> maja<b>s</b> (nella casa grande); väike laps → väikese lapse<b>ga</b> (con il bambino piccolo); pikad juuksed (capelli lunghi). Eccezione: con <b>-ga</b>, <b>-ni</b>, <b>-na</b>, <b>-ta</b> la desinenza va solo sul nome (väikese lapse<b>ga</b>, non *väikesega lapsega).</p>
<h4>Descrivere una persona</h4><p>Ta on pikk / lühike · Tal on pikad juuksed (= ha i capelli lunghi: il possesso con <b>tal on</b>) · Ta on rõõmus, kurb, vihane, närviline, tark, naljakas.</p>`
  },
  gram: [
    { q: "Minu ___ elavad Tartus.", h: "sõber · mitmus", a: "sõbrad", v: "sõber|pl n", o: ["sõbrad", "sõbrat", "sõbra"], why: "sõbra + d", it: "I miei amici vivono a Tartu." },
    { q: "___ mängivad pargis.", h: "laps · mitmus", a: "Lapsed", v: "laps|pl n", o: ["Lapsed", "Lapsid", "Lapsad"], why: "lapse + d", it: "I bambini giocano nel parco." },
    { q: "Need ___ on minu vennad.", h: "mees · mitmus", a: "mehed", v: "mees|pl n", o: ["mehed", "meesid", "meesed"], why: "mehe + d", it: "Questi uomini sono i miei fratelli." },
    { q: "Mul on kaks õde. Minu ___ on noored.", h: "õde · mitmus", a: "õed", v: "õde|pl n", o: ["õed", "õded", "õdet"], why: "õe + d", it: "Le mie sorelle sono giovani." },
    { q: "Tal on ___ juuksed.", h: "pikk · mitmus", a: "pikad", v: "pikk|pl n", o: ["pikad", "pikk", "pikkad"], why: "pika + d", it: "Ha i capelli lunghi." },
    { q: "Tal on ___ silmad.", h: "sinine · mitmus", a: "sinised", v: "sinine|pl n", why: "sinise + d", it: "Ha gli occhi azzurri." },
    { q: "Nad elavad ___ majas.", h: "suur", a: "suures", v: "suur|sg in", o: ["suures", "suur", "suure"], why: "suur maja → suures majas", it: "Vivono in una casa grande." },
    { q: "Ema jalutab väikese ___.", h: "laps · -ga", a: "lapsega", v: "laps|sg kom", o: ["lapsega", "lapsed", "lapsel"], why: "-ga ainult nimisõnal", it: "La mamma passeggia con il bambino piccolo." },
    { q: "Miks sa ___ oled?", h: "kurb", a: "kurb", o: ["kurb", "kurva", "kurvad"], why: "olema + nimetav", it: "Perché sei triste?" },
    { q: "___ on habe.", h: "isa", a: "Isal", v: "isa|sg ad", o: ["Isal", "Isa", "Isale"], why: "kellel on? → -l", it: "Il papà ha la barba." },
    { q: "Minu ___ on väga sõbralikud.", h: "naaber · mitmus", a: "naabrid", v: "naaber|pl n", why: "naabri + d", it: "I miei vicini sono molto gentili." }
  ],
  tr: [
    { q: "Minu sõber on rõõmus.", task: "pl", a: ["Minu sõbrad on rõõmsad.", "Mu sõbrad on rõõmsad."], why: "sõbrad + rõõmsad" },
    { q: "Laps on väike.", task: "pl", a: ["Lapsed on väikesed."], why: "lapsed + väikesed" }
  ],
  sent: [
    { e: "Minu vend on pikk.", i: "Mio fratello è alto." },
    { e: "Tal on pikad juuksed.", i: "Ha i capelli lunghi.", ia: ["Lei ha i capelli lunghi.", "Lui ha i capelli lunghi."] },
    { e: "Tal on sinised silmad.", i: "Ha gli occhi azzurri." },
    { e: "Isal on habe.", i: "Il papà ha la barba.", ia: ["Papà ha la barba."] },
    { e: "Lapsed on rõõmsad.", i: "I bambini sono allegri." },
    { e: "Miks sa kurb oled?", i: "Perché sei triste?" },
    { e: "Nad elavad suures majas.", i: "Vivono in una casa grande." },
    { e: "Minu sõbrad on väga naljakad.", i: "I miei amici sono molto divertenti." },
    { e: "Enne eksamit ma olen närviline.", i: "Prima dell'esame sono nervoso.", ia: ["Prima dell'esame sono nervosa."] }
  ],
  qa: [
    { q: "Milline on sinu parim sõber?", qi: "Com'è il tuo migliore amico?", a: ["Ta on pikk ja naljakas."], k: ["ta|tal|on"] },
    { q: "Mis värvi silmad sul on?", qi: "Di che colore hai gli occhi?", a: ["Mul on pruunid silmad."], k: ["silmad"] },
    { q: "Kuidas sa end täna tunned?", qi: "Come ti senti oggi?", a: ["Ma olen rõõmus."], k: ["olen|tunnen|hästi"] }
  ],
  sit: [
    { ctx: "Sõber on kurb. Sa tahad teada, miks.", line: null, o: ["Miks sa kurb oled?", "Miks sa kurva oled?", "Kus sa kurb oled?"] },
    { ctx: "Politsei küsib, milline varas välja nägi. Ta oli pikk, tal oli habe.", line: ["Politseinik", "Milline ta välja nägi?"], o: ["Ta oli pikk ja tal oli habe.", "Ta oli pikk ja ta oli habe.", "Ta on pikad ja habe."] },
    { ctx: "Sa räägid oma õdedest. Nad on noored.", line: ["Kolleeg", "Kas su õed on noored?"], o: ["Jah, mu õed on noored.", "Jah, mu õded on noorad.", "Jah, mu õde on noored."] }
  ],
  story: {
    t: "Perekonnafoto",
    lines: [["", "Kati näitab Marcole oma perekonna fotot."], ["Kati", "See pikk mees on minu isa. Tal on habe ja ta on väga naljakas."], ["Kati", "Ema on lühike. Tal on pikad heledad juuksed."], ["Marco", "Ja need kaks last?"], ["Kati", "Need on minu vennad. Nad on kaksikud."], ["Marco", "Nad on väga rõõmsad!"], ["Kati", "Jah, aga seal taga on tädi Malle. Ta ei ole rõõmus, ta on vihane."], ["Marco", "Miks?"], ["Kati", "Sest keegi sõi tema koogi ära!"]],
    q: [{ q: "Milline on Kati isa?", qi: "Com'è il papà di Kati?", o: ["Pikk ja naljakas", "Lühike ja vihane", "Väike ja kurb"] }, { q: "Miks on tädi Malle vihane?", qi: "Perché la zia Malle è arrabbiata?", o: ["Keegi sõi tema koogi.", "Ta on haige.", "Ta ei meeldi fotole."] }],
    tf: [["Kati emal on lühikesed juuksed.", false], ["Kati vennad on kaksikud.", true], ["Tädi Malle on rõõmus.", false]]
  }
},
{
  id: 21, sec: 4, c: 3, t: "Keha ja tervis", ti: "Corpo e salute", gname: "Mul valutab… ja ilmaütlev -ta",
  words: [
    ["pea", "testa", "🤕", "Mul valutab pea."],
    ["kõht", "pancia", "🤢", "Lapsel valutab kõht."],
    ["hammas", "dente", "🦷", "Mul valutab hammas."],
    ["kurk", "gola", "😷", "Mul on kurk haige."],
    ["selg", "schiena", "", "Isal valutab selg."],
    ["käsi", "mano, braccio", "✋", "Ta murdis käe."],
    ["jalg", "gamba, piede", "🦵", "Mul valutab jalg."],
    ["palavik", "febbre", "🤒", "Mul on palavik."],
    ["arst", "medico", "👩‍⚕️", "Ma pean minema arsti juurde."],
    ["rohi", "medicina", "💊", "Võtke seda rohtu kolm korda päevas."],
    ["kiirabi", "ambulanza", "🚑", "Helistage kiirabisse!"],
    ["haige", "malato", "", "Ma olen haige."],
    ["appi", "aiuto!", "🆘", "Appi! Helistage 112!"]
  ],
  gl: { "valutab": "fa male", "valutavad": "fanno male", "lapsel": "al bambino", "isal": "al papà", "murdis": "si è rotto", "käe": "mano / braccio (genitivo)", "arsti": "medico (genitivo)", "juurde": "da (verso una persona)", "juures": "da (presso una persona)", "rohtu": "medicina (partitivo)", "korda": "volte", "päevas": "al giorno", "kiirabisse": "all'ambulanza (chiamare)", "helistage": "chiamate / chiami", "viga": "problema, errore", "teil": "voi avete / Lei ha", "retsepti": "ricetta (partitivo)", "retseptita": "senza ricetta", "rohuta": "senza medicina", "palavikku": "febbre (partitivo)", "mõõtke": "misurate / misuri", "kraadi": "gradi", "puhake": "riposate / riposi", "voodis": "a letto", "juua": "bere", "palju": "molto", "tunnen": "mi sento", "end": "se stesso (sé)", "halvasti": "male", "paremini": "meglio", "terviseks": "salute!", "perearsti": "medico di famiglia (genitivo)", "aeg": "appuntamento, tempo", "aega": "appuntamento (partitivo)", "registratuur": "accettazione", "õnnetus": "incidente", "juhtus": "è successo", "kukkus": "è caduto", "trepist": "dalle scale" },
  note: {
    et: `<h4>Mis teil viga on?</h4><div class="ex">Mul valutab <b>pea</b>. · Mul on <b>palavik</b>. · Mul on <b>kurk</b> haige.</div><p><b>Kellel?</b> mul, sul, tal, lapsel, isal + <b>valutab</b> + kehaosa.</p>
<h4>Ilma … → -ta</h4><div class="ex">retsept → retsepti<b>ta</b> · rohi → rohu<b>ta</b> · müts → mütsi<b>ta</b></div><p>Omastav + <b>ta</b> = ilma.</p>
<h4>Arsti juurde</h4><div class="ex">Ma lähen <b>arsti juurde</b>. Ma olen <b>arsti juures</b>.</div>
<h4>Hädaolukord</h4><div class="ex"><b>Appi!</b> · <b>Helistage 112!</b> · Juhtus õnnetus.</div>`,
    it: `<h4>Dal medico</h4><p>«Mi fa male X» = <b>Mul valutab</b> + parte del corpo (soggetto): Mul valutab <b>pea</b> = mi fa male la testa. Chi ha il dolore va all'adessivo: <b>lapsel</b> valutab kõht = il bambino ha mal di pancia. Il medico chiede: <b>Mis teil viga on?</b> = che cos'ha?</p>
<h4>Senza: -ta (abessivo)</h4><p>Genitivo + <b>-ta</b>: retsepti<b>ta</b> = senza ricetta, rohu<b>ta</b> = senza medicina. Il contrario di -ga.</p>
<h4>Andare da una persona</h4><p>Con le persone «da» si dice con <b>juurde</b> (moto) e <b>juures</b> (stato): Ma lähen <b>arsti juurde</b> = vado dal medico.</p>
<h4>Emergenza</h4><p><b>Appi!</b> = aiuto! · <b>Helistage 112!</b> = chiamate il 112 (numero unico di emergenza in Estonia: ambulanza, pompieri, polizia) · Juhtus õnnetus = c'è stato un incidente.</p>`
  },
  gram: [
    { q: "Mul ___ pea.", h: "valutama", a: "valutab", o: ["valutab", "valutan", "valu"], why: "pea valutab", it: "Mi fa male la testa." },
    { q: "___ valutab kõht.", h: "laps", a: "Lapsel", v: "laps|sg ad", o: ["Lapsel", "Laps", "Lapsele"], why: "kellel? → -l", it: "Il bambino ha mal di pancia." },
    { q: "Mis teil ___ on?", a: "viga", o: ["viga", "valu", "haige"], why: "Mis teil viga on? = che cos'ha?", it: "Che cos'ha?" },
    { q: "Seda rohtu saab osta ___.", h: "retsept · ilma", a: "retseptita", v: "retsept|sg ab", o: ["retseptita", "retseptiga", "retseptist"], why: "ilma → -ta", it: "Questa medicina si compra senza ricetta." },
    { q: "Ma lähen arsti ___.", a: "juurde", o: ["juurde", "juures", "juurest"], why: "Kuhu? → juurde", it: "Vado dal medico." },
    { q: "Ma olen praegu arsti ___.", a: "juures", o: ["juures", "juurde", "juurest"], why: "Kus? → juures", it: "Ora sono dal medico." },
    { q: "Helistage ___!", h: "kiirabi · Kuhu?", a: "kiirabisse", v: "kiirabi|sg ill", why: "Kuhu? → -sse", it: "Chiamate l'ambulanza!" },
    { q: "Võtke seda ___ kaks korda päevas.", h: "rohi", a: "rohtu", v: "rohi|sg p", o: ["rohtu", "rohi", "rohu"], why: "osastav", it: "Prenda questa medicina due volte al giorno." },
    { q: "Ta läks välja ___.", h: "müts · ilma", a: "mütsita", v: "müts|sg ab", why: "-ta", it: "È uscito senza berretto." },
    { q: "Mul on ___.", h: "palavik", a: "palavik", o: ["palavik", "palavikku", "palaviku"], why: "mul on + nimetav", it: "Ho la febbre." }
  ],
  tr: [
    { q: "Mul valutab pea.", task: null, ti: "Ütle sama oma lapse kohta", tii: "Dillo del tuo bambino", a: ["Lapsel valutab pea.", "Minu lapsel valutab pea.", "Mu lapsel valutab pea."], why: "laps → lapsel" },
    { q: "Ma ostan rohtu retseptiga.", task: null, ti: "Ütle «ilma retseptita»", tii: "Di' «senza ricetta»", a: ["Ma ostan rohtu retseptita.", "Mina ostan rohtu retseptita."], why: "-ga → -ta" }
  ],
  sent: [
    { e: "Mul valutab pea.", i: "Mi fa male la testa.", ia: ["Ho mal di testa."] },
    { e: "Mul on palavik.", i: "Ho la febbre." },
    { e: "Mis teil viga on?", i: "Che cos'ha?", ia: ["Che cosa c'è che non va?"] },
    { e: "Ma pean minema arsti juurde.", i: "Devo andare dal medico." },
    { e: "Võtke seda rohtu kolm korda päevas.", i: "Prenda questa medicina tre volte al giorno." },
    { e: "Kas seda saab osta retseptita?", i: "Si può comprare senza ricetta?" },
    { e: "Appi! Helistage 112!", i: "Aiuto! Chiamate il 112!" },
    { e: "Lapsel valutab kõht.", i: "Il bambino ha mal di pancia." },
    { e: "Puhake ja jooge palju vett.", i: "Si riposi e beva molta acqua." }
  ],
  qa: [
    { q: "Mis teil viga on?", qi: "Che cos'ha?", a: ["Mul valutab kurk."], k: ["valutab|palavik|haige"] },
    { q: "Kas teil on palavik?", qi: "Ha la febbre?", a: ["Jah, kolmkümmend kaheksa kraadi."], k: ["jah|ei"] },
    { q: "Mida teha, kui juhtub õnnetus?", qi: "Che cosa fare se succede un incidente?", a: ["Tuleb helistada 112."], k: ["112|kiirabi|kiirabisse|helistada|helistan"] }
  ],
  sit: [
    { ctx: "Perearsti registratuur. Sa tahad arsti juurde aega.", line: ["Registratuur", "Tere! Kuidas saan aidata?"], o: ["Tere! Ma sooviksin aega arsti juurde. Mul on palavik.", "Tere! Ma olen arst.", "Tere! Mul valutan pea."] },
    { ctx: "Arst küsib, mis sul viga on. Sul valutab kõht.", line: ["Arst", "Mis teil viga on?"], o: ["Mul valutab kõht.", "Mina valutab kõht.", "Mul valutan kõht."] },
    { ctx: "Tänaval kukkus vana mees. Ta ei saa püsti.", line: null, o: ["Appi! Helistage 112!", "Head aega!", "Mul valutab pea."] }
  ],
  story: {
    t: "Haige hommik",
    lines: [["", "Marco ärkab ja tunneb end halvasti. Tal valutab pea ja kurk."], ["", "Ta mõõdab palavikku: kolmkümmend kaheksa ja pool kraadi."], ["", "Ta helistab perearsti registratuuri."], ["Marco", "Tere! Mul on palavik ja kurk on haige. Kas ma saaksin täna arsti juurde?"], ["Registratuur", "Jah. Kell kaks on vaba aeg."], ["", "Arst vaatab Marco kurku."], ["Arst", "See on gripp. Puhake kolm päeva voodis ja jooge palju teed."], ["Marco", "Kas ma pean rohtu võtma?"], ["Arst", "Palavikurohtu võite osta apteegist retseptita."]],
    q: [{ q: "Mis Marcol viga on?", qi: "Che cos'ha Marco?", o: ["Gripp", "Kõht valutab", "Jalg on katki"] }, { q: "Mis kell on vaba aeg?", qi: "A che ora c'è un appuntamento libero?", o: ["Kell kaks", "Kell kaksteist", "Kell kümme"] }],
    tf: [["Palavikurohu jaoks on vaja retsepti.", false], ["Marco peab kolm päeva voodis puhkama.", true], ["Marcol valutab selg.", false]]
  }
},
{
  id: 22, sec: 4, c: 4, t: "Riided ja värvid", ti: "Vestiti e colori", gname: "Võrdlus: suurem kui…, kõige…",
  words: [
    ["särk", "camicia", "👕", "Mul on uus särk."],
    ["kleit", "vestito (da donna)", "👗", "See kleit on ilus."],
    ["püksid", "pantaloni", "👖", "Need püksid on liiga pikad."],
    ["mantel", "cappotto", "🧥", "Talvel on vaja soojemat mantlit."],
    ["müts", "berretto", "🧢", "Pane müts pähe!"],
    ["kingad", "scarpe", "👟", "Kingad on liiga väikesed."],
    ["punane", "rosso", "🔴", "Mulle meeldib punane kleit."],
    ["sinine", "blu", "🔵", "Tal on sinine mantel."],
    ["roheline", "verde", "🟢", "Roheline müts on odavam."],
    ["must", "nero", "⚫", "Ma ostan mustad püksid."],
    ["valge", "bianco", "⚪", "Valge särk on kallim."],
    ["kollane", "giallo", "🟡", "Kollane on rõõmus värv."],
    ["suurus", "taglia", "", "Mis suurus teil on?"],
    ["proovima", "provare", "", "Kas ma võin seda proovida?"]
  ],
  gl: { "suurem": "più grande", "väiksem": "più piccolo", "pikem": "più lungo", "lühem": "più corto", "odavam": "più economico", "kallim": "più caro", "parem": "migliore", "soojem": "più caldo", "soojemat": "più caldo (partitivo)", "ilusam": "più bello", "kõige": "il più", "parim": "il migliore", "kui": "di (che)", "mantlit": "cappotto (partitivo)", "pähe": "in testa", "mustad": "neri", "punased": "rossi", "valged": "bianchi", "proovida": "provare", "proovikabiin": "camerino", "sobib": "va bene, sta bene", "sobivad": "vanno bene", "värvi": "colore (genitivo/partitivo)", "värv": "colore", "need": "questi", "liiga": "troppo", "allahindlus": "sconto", "soodushind": "prezzo scontato", "kassa": "cassa", "võin": "posso", "võib": "si può / può", "kannab": "indossa", "kannan": "indosso" },
  note: {
    et: `<h4>Võrdlus: -m</h4><div class="ex">suur → suure<b>m</b> · odav → odava<b>m</b> · kallis → kalli<b>m</b> · pikk → pike<b>m</b></div><div class="ex">Punane kleit on <b>odavam kui</b> sinine.</div><p>Erand: hea → <b>parem</b>.</p>
<h4>Kõige …</h4><div class="ex">See on <b>kõige odavam</b> särk. · See on <b>parim</b> kohvik.</div>
<h4>Poes</h4><div class="ex">Kas ma võin seda <b>proovida</b>? · Mis <b>suurus</b> teil on? · See <b>sobib</b> teile!</div>`,
    it: `<h4>Il comparativo: -m</h4><p>Si forma dal genitivo + <b>-m</b>: suur → suure → suure<b>m</b> (più grande); odav → odava<b>m</b>; kallis → kalli<b>m</b>; pikk → pike<b>m</b>; lühike → lühe<b>m</b>. Irregolare: hea → <b>parem</b> (migliore). «Di / che» = <b>kui</b>: Punane kleit on odavam <b>kui</b> sinine.</p>
<h4>Il superlativo</h4><p><b>kõige</b> + comparativo: kõige odavam = il più economico. Esiste anche la forma in <b>-im</b> per alcuni aggettivi: parim (il migliore), suurim (il più grande).</p>
<h4>In negozio</h4><p>Kas ma võin seda proovida? = posso provarlo? · Mis suurus teil on? = che taglia porta? · See sobib teile! = le sta bene!</p>`
  },
  gram: [
    { q: "Punane kleit on ___ kui sinine.", h: "odav", a: "odavam", o: ["odavam", "odavem", "kõige odav"], why: "odav + m", it: "Il vestito rosso è più economico di quello blu." },
    { q: "Minu vend on ___ kui mina.", h: "pikk", a: "pikem", o: ["pikem", "pikkam", "pikkem"], why: "pikk → pikem", it: "Mio fratello è più alto di me." },
    { q: "See kohvik on ___ kui see.", h: "hea", a: "parem", o: ["parem", "heam", "hem"], why: "hea → parem", it: "Questo caffè è migliore di quello." },
    { q: "Valge särk on ___.", h: "kallis · võrdlus", a: "kallim", o: ["kallim", "kallisem", "kallism"], why: "kallis → kallim", it: "La camicia bianca è più cara." },
    { q: "See on ___ odavam müts.", a: "kõige", o: ["kõige", "kui", "väga"], why: "kõige + -m", it: "Questo è il berretto più economico." },
    { q: "Talvel on vaja ___ mantlit.", h: "soe · võrdlus", a: "soojemat", o: ["soojemat", "soojem", "sooja"], why: "osastav: soojemat", it: "In inverno serve un cappotto più caldo." },
    { q: "Kas ma võin seda ___?", h: "proovima", a: "proovida", v: "proovima|da", o: ["proovida", "proovima", "proovin"], why: "võima + -da", it: "Posso provarlo?" },
    { q: "Ma ostan ___ püksid.", h: "must · mitmus", a: "mustad", v: "must|pl n", why: "püksid → mustad püksid", it: "Compro dei pantaloni neri." },
    { q: "Pane müts ___!", a: "pähe", o: ["pähe", "peas", "pea"], why: "Kuhu? → pähe", it: "Mettiti il berretto!" },
    { q: "Need kingad on liiga ___.", h: "väike · mitmus", a: "väikesed", v: "väike|pl n", why: "kingad → väikesed", it: "Queste scarpe sono troppo piccole." }
  ],
  tr: [
    { q: "Punane kleit on odav. Sinine kleit on kallis.", task: null, ti: "Võrdle: punane ja sinine", tii: "Confronta il rosso e il blu", a: ["Punane kleit on odavam kui sinine.", "Punane kleit on odavam kui sinine kleit.", "Sinine kleit on kallim kui punane."], why: "-m + kui" }
  ],
  sent: [
    { e: "Kas ma võin seda proovida?", i: "Posso provarlo?", ia: ["Posso provarla?"] },
    { e: "Mis suurus teil on?", i: "Che taglia porta?", ia: ["Che taglia ha?"] },
    { e: "Need püksid on liiga pikad.", i: "Questi pantaloni sono troppo lunghi." },
    { e: "Punane kleit on odavam kui sinine.", i: "Il vestito rosso è più economico di quello blu." },
    { e: "Talvel on vaja soojemat mantlit.", i: "In inverno serve un cappotto più caldo." },
    { e: "See on kõige odavam müts.", i: "Questo è il berretto più economico." },
    { e: "See sobib teile väga hästi!", i: "Le sta molto bene!" },
    { e: "Mulle meeldib kollane värv.", i: "Mi piace il colore giallo.", ia: ["Mi piace il giallo."] },
    { e: "Minu vend on pikem kui mina.", i: "Mio fratello è più alto di me." }
  ],
  qa: [
    { q: "Mis värv sulle meeldib?", qi: "Che colore ti piace?", a: ["Mulle meeldib sinine."], k: ["meeldib"] },
    { q: "Mida sa täna kannad?", qi: "Che cosa indossi oggi?", a: ["Ma kannan musti pükse ja valget särki."], k: ["kannan"] },
    { q: "Kes on teie peres kõige pikem?", qi: "Chi è il più alto nella vostra famiglia?", a: ["Kõige pikem on minu isa."], k: ["kõige|pikem"] }
  ],
  sit: [
    { ctx: "Riidepoes. Sa tahad mantlit proovida.", line: ["Müüja", "Kas saan aidata?"], o: ["Jah, kas ma võin seda mantlit proovida?", "Jah, kas ma võin seda mantel proovima?", "Ei, ma olen mantel."] },
    { ctx: "Püksid on liiga pikad.", line: ["Müüja", "Kuidas sobivad?"], o: ["Need on liiga pikad. Kas teil on lühemaid?", "Need on liiga pikk.", "Need on pikem kui."] },
    { ctx: "Sõber küsib, kumba kleiti osta. Punane on ilusam.", line: ["Sõber", "Kumb on ilusam, punane või sinine?"], o: ["Punane on ilusam.", "Punane on kõige ilus.", "Punane on ilusam kui."] }
  ],
  story: {
    t: "Talvemantel",
    lines: [["", "On november ja väljas on külm. Marco vajab uut mantlit."], ["", "Ta läheb Kati ja Toomasega kaubamajja."], ["Müüja", "Tere! Mida te otsite?"], ["Marco", "Ma otsin sooja talvemantlit."], ["Müüja", "See must mantel on väga soe. Mis suurus teil on?"], ["Marco", "Suurus M. Kas ma võin seda proovida?"], ["Kati", "See on liiga pikk. Proovi seda sinist! See on lühem ja odavam."], ["Toomas", "Ja ka ilusam!"], ["", "Marco ostab sinise mantli ja punase mütsi."]],
    q: [{ q: "Miks Marco vajab uut mantlit?", qi: "Perché Marco ha bisogno di un cappotto nuovo?", o: ["Väljas on külm.", "Tema mantel on punane.", "Ta läheb pulma."] }, { q: "Mis värvi mantli Marco ostab?", qi: "Di che colore è il cappotto che compra Marco?", o: ["Sinise", "Musta", "Punase"] }],
    tf: [["Must mantel oli liiga lühike.", false], ["Sinine mantel on odavam.", true], ["Marco ostab ka mütsi.", true]]
  }
},
{
  id: 23, sec: 4, c: 5, t: "Ilm ja aastaajad", ti: "Tempo e stagioni", gname: "Sajab vihma, talvel, jaanuaris",
  words: [
    ["ilm", "tempo (meteo)", "🌦️", "Milline ilm täna on?"],
    ["vihm", "pioggia", "🌧️", "Sajab vihma."],
    ["lumi", "neve", "❄️", "Sajab lund."],
    ["päike", "sole", "☀️", "Päike paistab."],
    ["tuul", "vento", "💨", "Tuul puhub tugevalt."],
    ["pilv", "nuvola", "☁️", "Taevas on pilves."],
    ["külm", "freddo", "🥶", "Väljas on külm."],
    ["soe", "caldo, tiepido", "🌡️", "Täna on soe."],
    ["talv", "inverno", "⛄", "Talvel on külm."],
    ["kevad", "primavera", "🌱", "Kevadel on palju lilli."],
    ["suvi", "estate", "🏖️", "Suvel me läheme randa."],
    ["sügis", "autunno", "🍂", "Sügisel sajab palju vihma."],
    ["kraad", "grado", "", "Väljas on kümme kraadi sooja."]
  ],
  gl: { "sajab": "piove / nevica (cade)", "sadas": "pioveva / nevicava", "vihma": "pioggia (partitivo)", "lund": "neve (partitivo)", "paistab": "splende", "paistis": "splendeva", "puhub": "soffia", "tugevalt": "forte", "taevas": "cielo", "pilves": "nuvoloso", "talvel": "d'inverno", "kevadel": "in primavera", "suvel": "d'estate", "sügisel": "in autunno", "jaanuaris": "a gennaio", "veebruaris": "a febbraio", "märtsis": "a marzo", "aprillis": "ad aprile", "mais": "a maggio", "juunis": "a giugno", "juulis": "a luglio", "augustis": "ad agosto", "septembris": "a settembre", "oktoobris": "a ottobre", "novembris": "a novembre", "detsembris": "a dicembre", "kraadi": "gradi (partitivo)", "sooja": "caldo (sopra zero)", "külma": "freddo (sotto zero)", "pakane": "gelo", "lilli": "fiori (partitivo pl.)", "randa": "in spiaggia (moto)", "rannas": "in spiaggia", "ilmateade": "previsioni del tempo", "homme": "domani", "pime": "buio", "valge": "chiaro (luce)", "pikad": "lunghe", "lühikesed": "corte", "päevad": "giornate", "ööd": "notti", "väljas": "fuori", "toas": "in casa" },
  note: {
    et: `<h4>Milline ilm on?</h4><div class="ex">Sajab <b>vihma</b>. · Sajab <b>lund</b>. · Päike paistab. · Tuul puhub. · On külm / soe.</div><p><b>sadama</b> + osastav: vihm → vihma, lumi → lund.</p>
<h4>Millal? → -l / -s</h4><div class="tabw"><table><tr><td>talv → talve<b>l</b></td><td>jaanuar → jaanuari<b>s</b></td></tr><tr><td>kevad → kevade<b>l</b></td><td>mai → mai<b>s</b></td></tr><tr><td>suvi → suve<b>l</b></td><td>juuli → juuli<b>s</b></td></tr><tr><td>sügis → sügise<b>l</b></td><td>november → novembri<b>s</b></td></tr></table></div>
<h4>Kraadid</h4><div class="ex">Kümme kraadi <b>sooja</b> (+10) · viis kraadi <b>külma</b> (−5)</div>`,
    it: `<h4>Che tempo fa?</h4><p>«Piove» = <b>sajab vihma</b>, «nevica» = <b>sajab lund</b>: il verbo sadama (cadere) + partitivo (vihm → vihma, lumi → lund). Päike paistab = c'è il sole · Tuul puhub = tira vento · On külm / soe = fa freddo / caldo.</p>
<h4>Stagioni e mesi</h4><p>Le stagioni usano l'adessivo <b>-l</b>: talve<b>l</b> (d'inverno), kevade<b>l</b>, suve<b>l</b>, sügise<b>l</b>. I mesi usano l'inessivo <b>-s</b>: jaanuari<b>s</b> (a gennaio), mai<b>s</b>, novembri<b>s</b>.</p>
<h4>Temperature</h4><p>Kümme kraadi <b>sooja</b> = +10 °C · viis kraadi <b>külma</b> = −5 °C.</p>`
  },
  gram: [
    { q: "Sajab ___. 🌧️", h: "vihm", a: "vihma", v: "vihm|sg p", o: ["vihma", "vihm", "vihmas"], why: "sadama + osastav", it: "Piove." },
    { q: "Sajab ___. ❄️", h: "lumi", a: "lund", v: "lumi|sg p", o: ["lund", "lumi", "lume"], why: "lumi → lund", it: "Nevica." },
    { q: "___ on külm.", h: "talv · Millal?", a: "Talvel", v: "talv|sg ad", o: ["Talvel", "Talvis", "Talv"], why: "aastaaeg → -l", it: "D'inverno fa freddo." },
    { q: "___ me läheme randa.", h: "suvi · Millal?", a: "Suvel", v: "suvi|sg ad", o: ["Suvel", "Suvil", "Suvis"], why: "suvi → suvel", it: "D'estate andiamo in spiaggia." },
    { q: "Minu sünnipäev on ___.", h: "mai · Millal?", a: "mais", v: "mai|sg in", o: ["mais", "mail", "maisse"], why: "kuu → -s", it: "Il mio compleanno è a maggio." },
    { q: "Väljas on viis kraadi ___. (−5)", a: "külma", o: ["külma", "sooja", "külm"], why: "alla nulli = külma", it: "Fuori ci sono meno cinque gradi." },
    { q: "Päike ___.", h: "paistma", a: "paistab", o: ["paistab", "sajab", "puhub"], why: "päike paistab", it: "Splende il sole." },
    { q: "Eile ___ terve päeva vihma.", h: "sadama · eile", a: "sadas", v: "sadama|s", why: "sadama → sadas", it: "Ieri ha piovuto tutto il giorno." },
    { q: "___ sajab palju vihma.", h: "sügis · Millal?", a: "Sügisel", v: "sügis|sg ad", why: "sügis → sügisel", it: "In autunno piove molto." },
    { q: "Lapsed sõidavad ___ kelguga.", h: "jaanuar · Millal?", a: "jaanuaris", v: "jaanuar|sg in", why: "kuu → -s", it: "A gennaio i bambini vanno in slittino." }
  ],
  tr: [
    { q: "Täna sajab vihma.", task: "past", a: ["Eile sadas vihma.", "Täna sadas vihma."], why: "sadama → sadas" },
    { q: "Talv.", task: null, ti: "Vasta: Millal on lumi?", tii: "Rispondi: quando c'è la neve?", a: ["Talvel.", "Lumi on talvel."], why: "talv → talvel" }
  ],
  sent: [
    { e: "Milline ilm täna on?", i: "Che tempo fa oggi?" },
    { e: "Sajab vihma.", i: "Piove." },
    { e: "Sajab lund.", i: "Nevica." },
    { e: "Päike paistab ja on soe.", i: "C'è il sole e fa caldo." },
    { e: "Talvel on Eestis külm.", i: "D'inverno in Estonia fa freddo.", ea: ["Eestis on talvel külm."] },
    { e: "Suvel on päevad pikad.", i: "D'estate le giornate sono lunghe." },
    { e: "Väljas on kümme kraadi sooja.", i: "Fuori ci sono dieci gradi.", ia: ["Fuori ci sono più dieci gradi."] },
    { e: "Eile sadas terve päeva vihma.", i: "Ieri ha piovuto tutto il giorno." },
    { e: "Sügisel puhub tugev tuul.", i: "In autunno soffia un vento forte." }
  ],
  qa: [
    { q: "Milline ilm täna on?", qi: "Che tempo fa oggi?", a: ["Täna sajab vihma."], k: ["sajab|paistab|puhub|külm|soe|pilves"] },
    { q: "Mis aastaaeg sulle kõige rohkem meeldib?", qi: "Qual è la stagione che ti piace di più?", a: ["Mulle meeldib kõige rohkem suvi."], k: ["talv|kevad|suvi|sügis"] },
    { q: "Millal on sinu sünnipäev?", qi: "Quando è il tuo compleanno?", a: ["Minu sünnipäev on mais."], k: ["-s|-l"] }
  ],
  sit: [
    { ctx: "Sõber tahab jalutama minna, aga väljas sajab.", line: ["Sõber", "Lähme jalutama!"], o: ["Praegu sajab vihma. Lähme hiljem.", "Praegu sajab vihm.", "Praegu sadas vihma homme."] },
    { ctx: "Sinu ema Itaaliast küsib, milline ilm Eestis on. On −10.", line: ["Ema", "Kas seal on külm?"], o: ["Jah, kümme kraadi külma ja sajab lund.", "Jah, kümme kraadi sooja.", "Jah, lumi sajab vihma."] },
    { ctx: "Raadios on ilmateade.", line: ["Raadio", "Homme on päikseline ilm, kuni kakskümmend kraadi sooja."], o: ["Homme on soe ja päikseline.", "Homme sajab lund.", "Homme on väga külm."] }
  ],
  story: {
    t: "Eesti aastaajad",
    lines: [["", "Eestis on neli aastaaega ja need on väga erinevad."], ["", "Talvel on külm ja pime. Detsembris on päevad väga lühikesed."], ["", "Tihti sajab lund ja lapsed sõidavad kelguga."], ["", "Kevadel lumi sulab ja tulevad esimesed lilled."], ["", "Suvel on päevad väga pikad. Juunis on öö peaaegu valge."], ["", "Suvel inimesed käivad rannas ja ujuvad meres."], ["", "Sügisel puhub tugev tuul ja sajab palju vihma."], ["Marco", "Mulle meeldib kõige rohkem suvi, aga lumi on ka ilus!"]],
    q: [{ q: "Millal on päevad väga lühikesed?", qi: "Quando sono molto corte le giornate?", o: ["Detsembris", "Juunis", "Mais"] }, { q: "Millal on öö peaaegu valge?", qi: "Quando la notte è quasi chiara?", o: ["Juunis", "Jaanuaris", "Oktoobris"] }],
    tf: [["Sügisel sajab palju vihma.", true], ["Talvel on päevad pikad.", false], ["Marcole meeldib kõige rohkem talv.", false]]
  }
},
{
  id: 24, sec: 4, c: 6, t: "Talv tuleb", ti: "Arriva l'inverno (ripasso)", gname: "Kordamine: peatükid 19–23",
  words: [
    ["kelk", "slittino", "🛷", "Lapsed sõidavad kelguga."],
    ["suusad", "sci", "🎿", "Pühapäeval me läksime suusatama."],
    ["uisud", "pattini", "⛸️", "Ma ostsin uued uisud."],
    ["kindad", "guanti", "🧤", "Pane kindad kätte!"],
    ["sall", "sciarpa", "🧣", "Mul on soe sall."],
    ["libe", "scivoloso", "", "Tänav on väga libe."],
    ["kukkuma", "cadere", "", "Ta kukkus ja murdis käe."],
    ["pime", "buio", "🌚", "Kell neli on juba pime."],
    ["küünal", "candela", "🕯️", "Õhtul me põletame küünlaid."]
  ],
  gl: { "kelguga": "con lo slittino", "suusatama": "a sciare", "uued": "nuovi", "kätte": "in mano (sulle mani)", "kukkus": "è caduto", "murdis": "ha rotto", "käe": "braccio (genitivo)", "küünlaid": "candele (partitivo pl.)", "põletame": "accendiamo, bruciamo", "uisutama": "pattinare", "uisutamas": "a pattinare", "järvel": "sul lago", "jää": "ghiaccio", "jääl": "sul ghiaccio", "esimene": "primo", "esimest": "primo (partitivo)", "korda": "volta", "elus": "nella vita", "kiiremini": "più velocemente", "aeglasemalt": "più lentamente" },
  note: {
    et: `<h4>Kordame</h4><div class="tabw"><table><tr><th>teema</th><th>näide</th></tr><tr><td>minevik</td><td>läksin, olin, tegin · ei läinud</td></tr><tr><td>mitmus</td><td>lapsed, sõbrad, kindad</td></tr><tr><td>ilma</td><td>mütsita, retseptita</td></tr><tr><td>võrdlus</td><td>soojem kui, kõige külmem</td></tr><tr><td>ilm</td><td>sajab lund, talvel, jaanuaris</td></tr></table></div>`,
    it: `<h4>Ripasso delle unità 19–23</h4><div class="tabw"><table><tr><th>argomento</th><th>esempio</th></tr><tr><td>passato</td><td>läksin, olin, tegin · ei läinud</td></tr><tr><td>plurale</td><td>lapsed, sõbrad, kindad</td></tr><tr><td>senza (-ta)</td><td>mütsita, retseptita</td></tr><tr><td>comparativo</td><td>soojem kui, kõige külmem</td></tr><tr><td>tempo</td><td>sajab lund, talvel, jaanuaris</td></tr></table></div>`
  },
  gram: [
    { q: "Eile ___ palju lund.", h: "sadama", a: "sadas", v: "sadama|s", o: ["sadas", "sajab", "sadasin"], why: "minevik: sadas", it: "Ieri è nevicata molta neve." },
    { q: "Lapsed sõidavad ___.", h: "kelk", a: "kelguga", v: "kelk|sg kom", o: ["kelguga", "kelkga", "kelgul"], why: "kelk → kelgu + ga", it: "I bambini vanno in slittino." },
    { q: "Ära mine välja ___!", h: "müts · ilma", a: "mütsita", v: "müts|sg ab", why: "-ta", it: "Non uscire senza berretto!" },
    { q: "Täna on ___ kui eile.", h: "külm · võrdlus", a: "külmem", o: ["külmem", "külmam", "kõige külm"], why: "külm → külmem", it: "Oggi fa più freddo di ieri." },
    { q: "Pane ___ kätte!", h: "kinnas · mitmus", a: "kindad", v: "kinnas|pl n", o: ["kindad", "kinnad", "kinnased"], why: "kinnas → kindad", it: "Mettiti i guanti!" },
    { q: "Ta ___ ja murdis käe.", h: "kukkuma · eile", a: "kukkus", v: "kukkuma|s", why: "kukkuma → kukkus", it: "È caduto e si è rotto il braccio." },
    { q: "Me ei ___ eile suusatama.", h: "minema", a: "läinud", v: "minema|nud", why: "ei + läinud", it: "Ieri non siamo andati a sciare." },
    { q: "___ on Eestis väga pime.", h: "detsember · Millal?", a: "Detsembris", v: "detsember|sg in", why: "kuu → -s", it: "A dicembre in Estonia è molto buio." },
    { q: "Lapsed on ___.", h: "rõõmus · mitmus", a: "rõõmsad", v: "rõõmus|pl n", why: "rõõmus → rõõmsad", it: "I bambini sono contenti." }
  ],
  tr: [
    { q: "Ma lähen suusatama.", task: "past", a: ["Ma läksin suusatama.", "Mina läksin suusatama."], why: "minema → läksin" },
    { q: "Laps on rõõmus.", task: "pl", a: ["Lapsed on rõõmsad."], why: "mitmus" }
  ],
  sent: [
    { e: "Eile sadas palju lund.", i: "Ieri è nevicato molto." },
    { e: "Lapsed sõidavad kelguga.", i: "I bambini vanno in slittino." },
    { e: "Pane kindad kätte!", i: "Mettiti i guanti!" },
    { e: "Tänav on väga libe.", i: "La strada è molto scivolosa." },
    { e: "Täna on külmem kui eile.", i: "Oggi fa più freddo di ieri." },
    { e: "Kell neli on juba pime.", i: "Alle quattro è già buio." },
    { e: "Õhtul me põletame küünlaid.", i: "La sera accendiamo le candele." },
    { e: "Pühapäeval me läksime suusatama.", i: "Domenica siamo andati a sciare.", ea: ["Me läksime pühapäeval suusatama."] }
  ],
  qa: [
    { q: "Kas sa oskad suusatada?", qi: "Sai sciare?", a: ["Jah, natuke."], k: ["jah|ei|natuke"] },
    { q: "Mida sa talvel selga paned?", qi: "Che cosa ti metti in inverno?", a: ["Ma panen selga sooja mantli."], k: ["mantli|mantel|kampsun|sall|müts|kindad|panen"] },
    { q: "Mis sa eile õhtul tegid?", qi: "Che cosa hai fatto ieri sera?", a: ["Ma lugesin raamatut."], k: ["-sin|olin|tegin|läksin|käisin|ei"] }
  ],
  sit: [
    { ctx: "Sõber kukkus jääl. Tal valutab käsi.", line: ["Sõber", "Ai! Mu käsi valutab!"], o: ["Lähme arsti juurde!", "Lähme arsti juures!", "Käsi on libe."] },
    { ctx: "Laps tahab minna välja ilma mütsita. Väljas on −15.", line: null, o: ["Pane müts pähe! Väljas on väga külm.", "Pane müts peas!", "Väljas on viisteist sooja."] },
    { ctx: "Kolleeg küsib, mida sa nädalavahetusel tegid. Sa käisid uisutamas.", line: ["Kolleeg", "Mida sa nädalavahetusel tegid?"], o: ["Ma käisin uisutamas.", "Ma lähen uisutama.", "Ma käisin uisutama."] }
  ],
  story: {
    t: "Esimene lumi",
    lines: [["", "Novembri lõpus sadas Tallinnas esimest korda lund."], ["Marco", "Vaata, Kati! Lumi!"], ["Kati", "Jah, nüüd tuleb talv. Kas sul on soe mantel?"], ["Marco", "Jah, ma ostsin uue sinise mantli. Aga mul ei ole kindaid."], ["", "Pühapäeval nad läksid järvele uisutama."], ["", "Marco uisutas esimest korda elus. Ta kukkus kolm korda."], ["Kati", "Kas sul on kõik korras?"], ["Marco", "Jah! Aga järgmine kord ma uisutan aeglasemalt."], ["", "Õhtul nad jõid kuuma teed ja põletasid küünlaid."]],
    q: [{ q: "Millal sadas esimest korda lund?", qi: "Quando è nevicato per la prima volta?", o: ["Novembri lõpus", "Detsembri alguses", "Oktoobris"] }, { q: "Mis Marcol puudub?", qi: "Che cosa manca a Marco?", o: ["Kindad", "Mantel", "Müts"] }, { q: "Mitu korda Marco kukkus?", qi: "Quante volte è caduto Marco?", o: ["Kolm", "Üks", "Kümme"] }],
    tf: [["Marco on varem palju uisutanud.", false], ["Õhtul nad jõid teed.", true]]
  }
}
);
