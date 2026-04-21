// Dataset principale con proprieta fisico-chimiche e informazioni descrittive.
const minerals = [
  {
    id: "quarzo",
    nome: "Quarzo",
    tipo: "Minerale",
    formula: "SiO2",
    composizione: "Silicio (circa 46,7%) e ossigeno (circa 53,3%).",
    classe: "Silicati (tettosilicati)",
    sistema: "Trigonale (famiglia esagonale)",
    colore: "Incolore, bianco, fume, rosa, giallo",
    lucentezza: "Vitrea",
    trasparenza: "Da trasparente a translucida",
    durezza: 7,
    densita: 2.65,
    sfaldatura: "Assente o molto indistinta",
    frattura: "Concoide",
    striscio: "Bianco",
    origine: "Cristallizzazione in ambienti magmatici, idrotermali e metamorfici.",
    ritrovamento: "Brasile, Madagascar, Alpi, USA (Arkansas).",
    usi: "Elettronica, ottica, abrasivi e gemmologia.",
    curiosita:
      "Il quarzo mostra effetto piezoelettrico: se compresso genera differenza di potenziale.",
    breve:
      "Minerale estremamente diffuso nella crosta continentale e base di numerose varieta gemmologiche.",
    colorTag: "Incolore/Bianco",
    image: "assets/images/quartz.jpg",
    alt: "Cristallo di quarzo in matrice rocciosa",
    quizHint:
      "Silicato molto diffuso, formula SiO2, durezza Mohs 7 e marcato comportamento piezoelettrico."
  },
  {
    id: "ametista",
    nome: "Ametista",
    tipo: "Minerale (varieta gemma)",
    formula: "SiO2 (varieta del quarzo)",
    composizione: "Silice con tracce di ferro e irraggiamento naturale.",
    classe: "Silicati (tettosilicati)",
    sistema: "Trigonale",
    colore: "Viola, lilla, porpora",
    lucentezza: "Vitrea",
    trasparenza: "Da trasparente a translucida",
    durezza: 7,
    densita: 2.65,
    sfaldatura: "Assente",
    frattura: "Concoide",
    striscio: "Bianco",
    origine: "Cresce in geodi vulcanici e vene idrotermali.",
    ritrovamento: "Brasile, Uruguay, Zambia, Russia.",
    usi: "Gioielleria, collezionismo, didattica mineralogica.",
    curiosita:
      "A temperature elevate puo perdere il colore e assumere tonalita simili al citrino.",
    breve:
      "Varieta viola del quarzo, apprezzata per trasparenza e intensita cromatica.",
    colorTag: "Viola",
    image: "assets/images/ametista.jpg",
    alt: "Drusa di ametista viola",
    quizHint:
      "Varieta viola del quarzo con durezza 7, tipica di geodi e cavita vulcaniche."
  },
  {
    id: "topazio",
    nome: "Topazio",
    tipo: "Minerale (gemma)",
    formula: "Al2SiO4(F,OH)2",
    composizione: "Alluminio, silicio, ossigeno, fluoro e gruppi ossidrilici.",
    classe: "Silicati (nesosilicati)",
    sistema: "Ortorombico",
    colore: "Incolore, giallo, azzurro, rosa, champagne",
    lucentezza: "Vitrea",
    trasparenza: "Generalmente trasparente",
    durezza: 8,
    densita: 3.5,
    sfaldatura: "Perfetta secondo {001}",
    frattura: "Subconcoide a irregolare",
    striscio: "Bianco",
    origine: "Associato a pegmatiti granitiche e ambienti pneumatolitici.",
    ritrovamento: "Brasile, Pakistan, Russia, Nigeria, Sri Lanka.",
    usi: "Gemmologia di pregio, studio dei fluidi geologici.",
    curiosita:
      "Il topazio azzurro commerciale e spesso ottenuto con trattamenti controllati.",
    breve:
      "Nesosilicato duro e brillante, noto per cristalli ben formati e colori eleganti.",
    colorTag: "Giallo/Azzurro",
    image: "assets/images/topazio.jpg",
    alt: "Cristallo di topazio naturale",
    quizHint:
      "Nesosilicato ortorombico con durezza 8 e sfaldatura perfetta molto marcata."
  },
  {
    id: "diamante",
    nome: "Diamante",
    tipo: "Minerale (gemma)",
    formula: "C",
    composizione: "Carbonio puro in reticolo covalente tridimensionale.",
    classe: "Elementi nativi",
    sistema: "Cubico (isometrico)",
    colore: "Incolore; anche giallo, bruno, blu, rosa",
    lucentezza: "Adamantina",
    trasparenza: "Da trasparente a translucida",
    durezza: 10,
    densita: 3.52,
    sfaldatura: "Perfetta ottaedrica",
    frattura: "Concoide a irregolare",
    striscio: "Incolore",
    origine:
      "Cristallizzazione ad altissime pressioni nel mantello, trasporto in superficie con kimberliti.",
    ritrovamento: "Botswana, Russia, Canada, Sudafrica, Australia.",
    usi: "Alta gioielleria, utensili da taglio, abrasivi industriali.",
    curiosita:
      "E il riferimento massimo della scala Mohs e il miglior conduttore termico naturale.",
    breve:
      "Forma allotropica del carbonio con legami molto forti e durezza Mohs 10.",
    colorTag: "Incolore/Bianco",
    image: "assets/images/diamante.jpg",
    alt: "Cristallo di diamante naturale",
    quizHint:
      "Elemento nativo di carbonio con durezza Mohs 10, lucentezza adamantina e sistema cubico."
  },
  {
    id: "smeraldo",
    nome: "Smeraldo",
    tipo: "Minerale (varieta gemma)",
    formula: "Be3Al2(Si6O18)",
    composizione: "Berillo con tracce cromofore di cromo e/o vanadio.",
    classe: "Silicati (ciclosilicati)",
    sistema: "Esagonale",
    colore: "Verde intenso",
    lucentezza: "Vitrea",
    trasparenza: "Da trasparente a translucida",
    durezza: 7.8,
    densita: 2.72,
    sfaldatura: "Imperfetta",
    frattura: "Concoide a irregolare",
    striscio: "Bianco",
    origine: "Formazione idrotermale e metamorfica in ambienti ricchi di berillio.",
    ritrovamento: "Colombia, Zambia, Brasile, Afghanistan, Etiopia.",
    usi: "Gioielleria di pregio e collezionismo gemmologico.",
    curiosita:
      "Le inclusioni interne, dette spesso 'giardino', sono comuni e utili per la diagnosi.",
    breve:
      "Varieta verde del berillo, apprezzata per tonalita satura e importanza storica.",
    colorTag: "Verde",
    image: "assets/images/smeraldo.jpg",
    alt: "Cristallo di smeraldo verde",
    quizHint:
      "Varieta del berillo, colore verde da cromo/vanadio, durezza intorno a 7,5-8."
  },
  {
    id: "rubino",
    nome: "Rubino",
    tipo: "Minerale (varieta gemma)",
    formula: "Al2O3",
    composizione: "Corindone con tracce di cromo.",
    classe: "Ossidi",
    sistema: "Trigonale",
    colore: "Rosso da rosato a rosso intenso",
    lucentezza: "Vitrea",
    trasparenza: "Da trasparente a translucida",
    durezza: 9,
    densita: 4,
    sfaldatura: "Assente (parting possibile)",
    frattura: "Subconcoide a irregolare",
    striscio: "Bianco",
    origine: "Metamorfismo di rocce alluminose e ambienti magmatici poveri in silice.",
    ritrovamento: "Myanmar, Mozambico, Sri Lanka, Thailandia, Madagascar.",
    usi: "Gemmologia, dispositivi ottici e laser a rubino sintetico.",
    curiosita:
      "Il colore rosso e dovuto a Cr3+ che assorbe selettivamente nello spettro visibile.",
    breve:
      "Varieta rossa del corindone, gemma classica con durezza molto elevata.",
    colorTag: "Rosso",
    image: "assets/images/rubino.jpg",
    alt: "Cristallo di rubino rosso",
    quizHint:
      "Varieta rossa del corindone, formula Al2O3, durezza Mohs 9 e sistema trigonale."
  },
  {
    id: "zaffiro",
    nome: "Zaffiro",
    tipo: "Minerale (varieta gemma)",
    formula: "Al2O3",
    composizione: "Corindone con tracce di ferro, titanio e altri elementi.",
    classe: "Ossidi",
    sistema: "Trigonale",
    colore: "Blu; anche giallo, rosa, arancio, incolore",
    lucentezza: "Vitrea",
    trasparenza: "Da trasparente a translucida",
    durezza: 9,
    densita: 3.99,
    sfaldatura: "Assente (parting possibile)",
    frattura: "Subconcoide a irregolare",
    striscio: "Bianco",
    origine: "Ambienti metamorfici e magmatici ricchi in alluminio.",
    ritrovamento: "Sri Lanka, Madagascar, Australia, Kashmir, Thailandia.",
    usi: "Gemmologia, finestre ottiche, componenti resistenti al graffio.",
    curiosita:
      "Rubino e zaffiro sono la stessa specie mineralogica: cambiano per elementi in traccia.",
    breve:
      "Varieta del corindone nota soprattutto per il blu, con elevata stabilita meccanica.",
    colorTag: "Blu",
    image: "assets/images/zaffiro.jpg",
    alt: "Zaffiro blu levigato",
    quizHint:
      "Varieta del corindone con durezza 9; colore spesso blu per interazione ferro-titanio."
  },
  {
    id: "turchese",
    nome: "Turchese",
    tipo: "Minerale (gemma opaca)",
    formula: "CuAl6(PO4)4(OH)8*4H2O",
    composizione: "Fosfato idrato di rame e alluminio.",
    classe: "Fosfati",
    sistema: "Triclino",
    colore: "Azzurro cielo, verde-azzurro",
    lucentezza: "Da cerea a subvitrea",
    trasparenza: "Prevalentemente opaca",
    durezza: 5.5,
    densita: 2.75,
    sfaldatura: "Assente o poco evidente",
    frattura: "Concoide a irregolare",
    striscio: "Bianco-azzurro pallido",
    origine: "Formazione supergena in zone ossidate di giacimenti cupriferi.",
    ritrovamento: "Iran, USA (Arizona/Nevada), Cina, Tibet, Sinai.",
    usi: "Cabochon, intarsi e oggetti ornamentali.",
    curiosita:
      "La tonalita verso il verde aumenta con presenza di ferro nella struttura.",
    breve:
      "Fosfato idrato iconico per il colore turchese intenso in ambienti aridi.",
    colorTag: "Azzurro/Verde",
    image: "assets/images/turchese.jpg",
    alt: "Campione di turchese azzurro",
    quizHint:
      "Fosfato triclino di rame-alluminio con colore azzurro intenso tipico dei climi aridi."
  },
  {
    id: "opale",
    nome: "Opale",
    tipo: "Para-gemma (mineraloide)",
    formula: "SiO2*nH2O",
    composizione: "Silice amorfa idrata con contenuto variabile d'acqua.",
    classe: "Mineraloide siliceo",
    sistema: "Amorfo (non cristallino)",
    colore: "Bianco, grigio, nero, con iridescenza multicolore",
    lucentezza: "Vitrea-resinosa",
    trasparenza: "Da trasparente a opaca",
    durezza: 5.8,
    densita: 2.1,
    sfaldatura: "Assente",
    frattura: "Concoide, materiale fragile",
    striscio: "Bianco",
    origine: "Precipitazione di silice colloidale in cavita e fratture.",
    ritrovamento: "Australia, Etiopia, Messico, Brasile.",
    usi: "Alta gemmologia e collezionismo.",
    curiosita:
      "Il gioco di colore e dovuto a diffrazione della luce su microsfere di silice.",
    breve:
      "Mineraloide prezioso con effetti ottici spettacolari e struttura amorfa.",
    colorTag: "Iridescente",
    image: "assets/images/opale.jpg",
    alt: "Opale con riflessi iridescenti",
    quizHint:
      "Mineraloide amorfo di silice idrata famoso per il gioco di colore iridescente."
  },
  {
    id: "malachite",
    nome: "Malachite",
    tipo: "Minerale",
    formula: "Cu2CO3(OH)2",
    composizione: "Carbonato basico di rame.",
    classe: "Carbonati",
    sistema: "Monoclino",
    colore: "Verde intenso con bande concentriche",
    lucentezza: "Setosa, vitrea o opaca",
    trasparenza: "Da opaca a translucida sui bordi",
    durezza: 3.8,
    densita: 3.8,
    sfaldatura: "Perfetta in una direzione",
    frattura: "Irregolare o scheggiosa",
    striscio: "Verde chiaro",
    origine: "Minerale secondario nelle zone ossidate di giacimenti di rame.",
    ritrovamento: "R.D. Congo, Namibia, Zambia, Russia, Australia.",
    usi: "Oggettistica ornamentale, pigmenti storici, minerale di rame.",
    curiosita:
      "In passato era macinata per produrre pigmenti verdi usati in pittura.",
    breve:
      "Carbonato rameico dal tipico verde stratificato, molto usato in decorazione.",
    colorTag: "Verde",
    image: "assets/images/malachite.jpg",
    alt: "Sezione levigata di malachite a bande verdi",
    quizHint:
      "Carbonato monoclino di rame con bande verdi concentriche e striscio verde chiaro."
  },
  {
    id: "ossidiana",
    nome: "Ossidiana",
    tipo: "Para-gemma (vetro vulcanico)",
    formula: "Prevalenza SiO2 + ossidi di Fe, Mg, Na, K",
    composizione: "Vetro naturale ricco di silice, non cristallino.",
    classe: "Vetro vulcanico naturale",
    sistema: "Amorfo",
    colore: "Nero, bruno, mogano, talvolta iridescente",
    lucentezza: "Vitrea",
    trasparenza: "Opaca, translucida sui bordi sottili",
    durezza: 5.2,
    densita: 2.45,
    sfaldatura: "Assente",
    frattura: "Concoide, estremamente tagliente",
    striscio: "Bianco-grigiastro",
    origine: "Raffreddamento rapidissimo di lave felsiche.",
    ritrovamento: "Islanda, Italia (Lipari/Sardegna), Messico, USA.",
    usi: "Utensili litici, lame sperimentali, ornamenti.",
    curiosita:
      "Puo produrre margini piu sottili di molte lame metalliche moderne.",
    breve:
      "Vetro vulcanico naturale con frattura concoide e superfici lucide nere.",
    colorTag: "Nero",
    image: "assets/images/ossidiana.jpg",
    alt: "Frammento di ossidiana nera lucida",
    quizHint:
      "Vetro vulcanico amorfo, scuro, nato da rapido raffreddamento della lava."
  },
  {
    id: "lapislazzuli",
    nome: "Lapislazzuli",
    tipo: "Para-gemma (roccia ornamentale)",
    formula: "Componente principale: lazurite (Na,Ca)8(AlSiO4)6(S,SO4,Cl)2",
    composizione: "Lazurite con calcite e pirite disseminata.",
    classe: "Roccia metamorfica a feldspatoidi",
    sistema: "Aggregato policristallino (lazurite cubica)",
    colore: "Blu oltremare con inclusioni dorate",
    lucentezza: "Da vitrea a opaca",
    trasparenza: "Opaca",
    durezza: 5.3,
    densita: 2.8,
    sfaldatura: "Non osservabile come roccia compatta",
    frattura: "Irregolare-concoide",
    striscio: "Azzurro molto chiaro",
    origine: "Metamorfismo di contatto in rocce carbonatiche ricche in sodio.",
    ritrovamento: "Afghanistan (Badakhshan), Cile, Russia.",
    usi: "Gioielli, intarsi, pigmento storico ultramarino.",
    curiosita:
      "E stato tra i materiali piu preziosi per la pittura rinascimentale europea.",
    breve:
      "Roccia blu nobile, non un singolo minerale, legata a storia dell'arte e gioielleria.",
    colorTag: "Blu",
    image: "assets/images/lapislazzuli.jpg",
    alt: "Lapislazzuli blu con inclusioni di pirite dorata",
    quizHint:
      "Roccia ornamentale blu con lazurite e pirite, celebre fonte del pigmento ultramarino."
  },
  {
    id: "onice",
    nome: "Onice",
    tipo: "Para-gemma (varieta di calcedonio)",
    formula: "SiO2",
    composizione: "Quarzo microcristallino a bande parallele.",
    classe: "Silicati (tettosilicati, famiglia calcedonio)",
    sistema: "Trigonale microfibroso",
    colore: "Nero/bianco, bruno, rosso-bruno",
    lucentezza: "Da vitrea a cerosa",
    trasparenza: "Translucida o opaca",
    durezza: 6.8,
    densita: 2.61,
    sfaldatura: "Assente",
    frattura: "Concoide",
    striscio: "Bianco",
    origine: "Deposizione di silice in cavita vulcaniche e sedimentarie.",
    ritrovamento: "India, Brasile, Uruguay, Madagascar.",
    usi: "Cammei, sigilli, gioielleria classica.",
    curiosita:
      "Molti onici neri in commercio derivano da agata colorata artificialmente.",
    breve:
      "Calcedonio bandato apprezzato per contrasto cromatico e incisione fine.",
    colorTag: "Nero/Bianco",
    image: "assets/images/onice.jpg",
    alt: "Onice a bande con contrasto scuro",
    quizHint:
      "Varieta di calcedonio con bande parallele e durezza prossima a 7."
  },
  {
    id: "agata",
    nome: "Agata",
    tipo: "Para-gemma (varieta di calcedonio)",
    formula: "SiO2",
    composizione: "Quarzo microcristallino con bande concentriche.",
    classe: "Silicati (tettosilicati, famiglia calcedonio)",
    sistema: "Trigonale microcristallino",
    colore: "Multicolore a bande",
    lucentezza: "Cerosa-vitrea",
    trasparenza: "Translucida-opaca",
    durezza: 6.9,
    densita: 2.62,
    sfaldatura: "Assente",
    frattura: "Concoide",
    striscio: "Bianco",
    origine: "Riempimento progressivo di cavita nelle rocce vulcaniche.",
    ritrovamento: "Brasile, Uruguay, India, Botswana, Germania.",
    usi: "Gioielleria, oggetti ornamentali e strumenti da laboratorio.",
    curiosita:
      "Le bande registrano sequenze successive di deposizione della silice.",
    breve:
      "Calcedonio zonato, celebre per disegni naturali concentrici e grande variabilita cromatica.",
    colorTag: "Multicolore",
    image: "assets/images/agata.jpg",
    alt: "Sezione di agata con bande concentriche",
    quizHint:
      "Calcedonio bandato con disegni concentrici, durezza quasi 7 e formula SiO2."
  }
];

// Sezione separata per elementi nativi metallici (non para-gemme).
const metallicElements = [
  {
    id: "oro",
    nome: "Oro",
    tipo: "Elemento nativo metallico",
    formula: "Au",
    composizione: "Oro nativo con possibili tracce di argento, rame o palladio.",
    classe: "Elementi nativi",
    sistema: "Cubico (isometrico)",
    colore: "Giallo metallico",
    lucentezza: "Metallica",
    trasparenza: "Opaco",
    durezza: 2.8,
    densita: 19.3,
    sfaldatura: "Assente",
    frattura: "Uncinata (hackly)",
    striscio: "Giallo dorato",
    origine:
      "Deposizione idrotermale in vene quarzifere e concentrazione in placers alluvionali.",
    ritrovamento: "Sudafrica, Australia, Cina, Canada, USA.",
    usi: "Gioielleria, elettronica, contatti ad alta affidabilita, investimenti.",
    curiosita:
      "L'oro e estremamente malleabile: un grammo puo essere ridotto in lamine sottilissime.",
    breve:
      "Elemento nativo prezioso con alta conducibilita e straordinaria resistenza alla corrosione.",
    colorTag: "Giallo",
    image: "assets/images/oro.jpg",
    alt: "Pepite di oro nativo",
    quizHint:
      "Elemento nativo Au, molto denso e malleabile, con lucentezza metallica gialla."
  },
  {
    id: "argento",
    nome: "Argento",
    tipo: "Elemento nativo metallico",
    formula: "Ag",
    composizione: "Argento nativo con possibili tracce di rame, oro o mercurio.",
    classe: "Elementi nativi",
    sistema: "Cubico (isometrico)",
    colore: "Bianco argenteo",
    lucentezza: "Metallica",
    trasparenza: "Opaco",
    durezza: 2.7,
    densita: 10.5,
    sfaldatura: "Assente",
    frattura: "Uncinata (hackly)",
    striscio: "Argenteo-biancastro",
    origine:
      "Precipitazione idrotermale e alterazione supergena in giacimenti polimetallici.",
    ritrovamento: "Messico, Peru, Cina, Australia, Polonia.",
    usi: "Conduzione elettrica, fotografia storica, gioielleria, catalisi.",
    curiosita:
      "E il miglior conduttore elettrico tra i metalli naturali puri.",
    breve:
      "Elemento nativo metallico ad alta conducibilita, comune in associazione con solfuri.",
    colorTag: "Argenteo",
    image: "assets/images/argento.jpg",
    alt: "Cristalli ramificati di argento nativo",
    quizHint:
      "Elemento nativo Ag, colore bianco metallico e conducibilita elettrica elevatissima."
  }
];

const analyzedProperties = [
  "formula",
  "composizione",
  "classe",
  "sistema",
  "colore",
  "lucentezza",
  "trasparenza",
  "durezza",
  "densita",
  "sfaldatura",
  "frattura",
  "striscio",
  "origine",
  "ritrovamento",
  "usi",
  "curiosita"
];

const allSamples = [...minerals, ...metallicElements];
const sampleById = new Map(allSamples.map((sample) => [sample.id, sample]));

const state = {
  query: "",
  color: "all",
  hardnessMin: 0
};

const cardGrid = document.getElementById("cards-grid");
const metalCardGrid = document.getElementById("metal-cards-grid");
const comparisonBody = document.getElementById("comparison-body");
const galleryGrid = document.getElementById("gallery-grid");
const searchInput = document.getElementById("search-input");
const colorFilter = document.getElementById("color-filter");
const hardnessFilter = document.getElementById("hardness-filter");
const hardnessOutput = document.getElementById("hardness-output");
const resetFilters = document.getElementById("reset-filters");
const detailModal = document.getElementById("detail-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const statSamples = document.getElementById("stat-samples");
const statProperties = document.getElementById("stat-properties");
const statClasses = document.getElementById("stat-classes");

const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizProgress = document.getElementById("quiz-progress");
const quizScore = document.getElementById("quiz-score");
const quizNext = document.getElementById("quiz-next");

const quizState = {
  rounds: [],
  index: 0,
  score: 0,
  locked: false
};

function normalize(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function canonicalClassName(value) {
  const text = normalize(value);
  if (text.includes("silicat")) return "Silicati";
  if (text.includes("fosfat")) return "Fosfati";
  if (text.includes("carbonat")) return "Carbonati";
  if (text.includes("ossid")) return "Ossidi";
  if (text.includes("element")) return "Elementi nativi";
  if (text.includes("mineraloide")) return "Mineraloidi";
  if (text.includes("vetro vulcanico")) return "Vetri naturali";
  if (text.includes("roccia")) return "Rocce ornamentali";
  return String(value || "Classe non specificata").split("(")[0].trim();
}

function updateHeroStats() {
  const classCount = new Set(allSamples.map((sample) => canonicalClassName(sample.classe))).size;
  statSamples.textContent = String(allSamples.length);
  statProperties.textContent = String(analyzedProperties.length);
  statClasses.textContent = String(classCount);
}

function getFilteredMinerals() {
  return minerals.filter((mineral) => {
    const nameMatch = normalize(mineral.nome).includes(normalize(state.query));
    const colorMatch = state.color === "all" || mineral.colorTag === state.color;
    const hardnessMatch = mineral.durezza >= state.hardnessMin;
    return nameMatch && colorMatch && hardnessMatch;
  });
}

function buildCard(sample, buttonLabel = "Apri scheda completa") {
  return `
    <article class="mineral-card tilt-card" data-id="${sample.id}">
      <img src="${sample.image}" alt="${sample.alt}" loading="lazy">
      <div class="card-body">
        <div class="card-top">
          <h3>${sample.nome}</h3>
          <span class="chip">${sample.tipo}</span>
        </div>
        <p>${sample.breve}</p>
        <ul class="card-facts">
          <li><strong>Formula:</strong> ${sample.formula}</li>
          <li><strong>Sistema:</strong> ${sample.sistema}</li>
          <li><strong>Mohs:</strong> ${sample.durezza}</li>
          <li><strong>Densita:</strong> ${sample.densita} g/cm³</li>
        </ul>
        <button class="button button-ghost" type="button" data-open="${sample.id}">
          ${buttonLabel}
        </button>
      </div>
    </article>
  `;
}

function renderCards() {
  const filtered = getFilteredMinerals();
  if (!filtered.length) {
    cardGrid.innerHTML = `
      <article class="panel">
        <h3>Nessun risultato</h3>
        <p>Prova ad allentare i filtri: i criteri selezionati possono essere troppo restrittivi.</p>
      </article>
    `;
    return;
  }
  cardGrid.innerHTML = filtered.map((sample) => buildCard(sample)).join("");
  attachTiltEffect();
}

function renderMetalCards() {
  if (!metalCardGrid) return;
  metalCardGrid.innerHTML = metallicElements
    .map((sample) => buildCard(sample, "Apri scheda sintetica"))
    .join("");
  attachTiltEffect();
}

function renderColorOptions() {
  const colors = [...new Set(minerals.map((sample) => sample.colorTag))].sort((a, b) =>
    a.localeCompare(b, "it")
  );
  colorFilter.insertAdjacentHTML(
    "beforeend",
    colors.map((color) => `<option value="${color}">${color}</option>`).join("")
  );
}

function renderComparisonTable() {
  comparisonBody.innerHTML = minerals
    .map(
      (sample) => `
      <tr>
        <td>${sample.nome}</td>
        <td>${sample.formula}</td>
        <td>${sample.durezza}</td>
        <td>${sample.densita}</td>
        <td>${sample.sistema}</td>
        <td>${sample.colore}</td>
      </tr>
    `
    )
    .join("");
}

function openDetailModal(id) {
  const sample = sampleById.get(id);
  if (!sample) return;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <img src="${sample.image}" alt="${sample.alt}">
      <div>
        <h3>${sample.nome}</h3>
        <p style="margin-bottom: 0.8rem; color: var(--text-soft);">${sample.breve}</p>
        <ul>
          <li><strong>Tipo:</strong> ${sample.tipo}</li>
          <li><strong>Formula chimica:</strong> ${sample.formula}</li>
          <li><strong>Composizione:</strong> ${sample.composizione}</li>
          <li><strong>Classe mineralogica:</strong> ${sample.classe}</li>
          <li><strong>Sistema cristallino:</strong> ${sample.sistema}</li>
          <li><strong>Colore:</strong> ${sample.colore}</li>
          <li><strong>Lucentezza:</strong> ${sample.lucentezza}</li>
          <li><strong>Trasparenza:</strong> ${sample.trasparenza}</li>
          <li><strong>Durezza (Mohs):</strong> ${sample.durezza}</li>
          <li><strong>Densita:</strong> ${sample.densita} g/cm³</li>
          <li><strong>Sfaldatura:</strong> ${sample.sfaldatura}</li>
          <li><strong>Frattura:</strong> ${sample.frattura}</li>
          <li><strong>Striscio:</strong> ${sample.striscio}</li>
          <li><strong>Origine/Formazione:</strong> ${sample.origine}</li>
          <li><strong>Luoghi di ritrovamento:</strong> ${sample.ritrovamento}</li>
          <li><strong>Usi:</strong> ${sample.usi}</li>
          <li><strong>Curiosita:</strong> ${sample.curiosita}</li>
        </ul>
      </div>
    </div>
  `;

  detailModal.showModal();
}

function renderGallery() {
  galleryGrid.innerHTML = minerals
    .map(
      (sample) => `
      <figure class="gallery-item" data-lightbox="${sample.id}">
        <img src="${sample.image}" alt="${sample.alt}" loading="lazy">
        <figcaption>${sample.nome}</figcaption>
      </figure>
    `
    )
    .join("");
}

function openLightbox(id) {
  const sample = sampleById.get(id);
  if (!sample) return;
  lightboxImage.src = sample.image;
  lightboxImage.alt = sample.alt;
  lightboxCaption.textContent = `${sample.nome} · ${sample.formula} · Mohs ${sample.durezza} · ${sample.colore}`;
  lightbox.showModal();
}

function randomFrom(list, limit = 1) {
  const copy = [...list];
  const picked = [];
  while (copy.length && picked.length < limit) {
    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(idx, 1)[0]);
  }
  return picked;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuizRounds(total = 8) {
  const base = randomFrom(minerals, Math.min(total, minerals.length));
  return base.map((target) => {
    const distractors = randomFrom(
      minerals.filter((item) => item.id !== target.id),
      3
    ).map((item) => item.nome);

    return {
      answer: target.nome,
      question: `Quale campione corrisponde a questa descrizione? ${target.quizHint}`,
      explanation: `${target.nome} e identificabile per formula ${target.formula}, classe ${canonicalClassName(
        target.classe
      )}, durezza Mohs ${target.durezza} e sistema ${target.sistema}.`,
      options: shuffle([target.nome, ...distractors])
    };
  });
}

function getQuizEvaluation(score, total) {
  const percent = (score / total) * 100;
  if (percent >= 90) return "Ottimo risultato: riconoscimento mineralogico molto solido.";
  if (percent >= 75) return "Buon risultato: basi scientifiche ben consolidate.";
  if (percent >= 55) return "Risultato discreto: conviene ripassare alcune proprieta diagnostiche.";
  return "Risultato iniziale: utile ripetere il quiz per fissare meglio i criteri di riconoscimento.";
}

function renderQuizRound() {
  const round = quizState.rounds[quizState.index];
  if (!round) {
    const total = quizState.rounds.length;
    quizQuestion.textContent = `Quiz completato. Punteggio finale: ${quizState.score}/${total}.`;
    quizOptions.innerHTML = "";
    quizProgress.textContent = `Domanda ${total}/${total}`;
    quizFeedback.className = "quiz-feedback";
    quizFeedback.textContent = getQuizEvaluation(quizState.score, total);
    quizNext.textContent = "Ricomincia";
    quizNext.disabled = false;
    return;
  }

  quizState.locked = false;
  quizQuestion.textContent = round.question;
  quizProgress.textContent = `Domanda ${quizState.index + 1}/${quizState.rounds.length}`;
  quizScore.textContent = `Punteggio: ${quizState.score}`;
  quizFeedback.className = "quiz-feedback";
  quizFeedback.textContent = "Seleziona la risposta corretta e poi continua.";
  quizNext.disabled = true;
  quizNext.textContent = "Prossima domanda";

  quizOptions.innerHTML = round.options
    .map(
      (option) => `
      <button class="button button-ghost" type="button" data-option="${option}">
        ${option}
      </button>
    `
    )
    .join("");
}

function handleQuizAnswer(button) {
  if (quizState.locked) return;
  quizState.locked = true;

  const round = quizState.rounds[quizState.index];
  const selected = button.dataset.option;
  const correct = selected === round.answer;

  if (correct) quizState.score += 1;

  [...quizOptions.querySelectorAll("button")].forEach((btn) => {
    const isCorrect = btn.dataset.option === round.answer;
    btn.classList.toggle("correct", isCorrect);
    btn.classList.toggle("wrong", btn === button && !isCorrect);
    btn.disabled = true;
  });

  quizScore.textContent = `Punteggio: ${quizState.score}`;
  quizFeedback.className = `quiz-feedback ${correct ? "ok" : "ko"}`;
  quizFeedback.textContent = correct
    ? `Risposta corretta. ${round.explanation}`
    : `Risposta non corretta. Soluzione: ${round.answer}. ${round.explanation}`;
  quizNext.disabled = false;
}

function resetQuiz() {
  quizState.rounds = buildQuizRounds(8);
  quizState.index = 0;
  quizState.score = 0;
  quizNext.textContent = "Prossima domanda";
  renderQuizRound();
}

function attachTiltEffect() {
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    if (card.dataset.tiltBound === "1") return;
    card.dataset.tiltBound = "1";

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function activateReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".section-reveal").forEach((section) => observer.observe(section));
}

function addHeroParallax() {
  const hero = document.querySelector(".hero");
  const labels = document.querySelectorAll(".floating-label");
  if (!hero || !labels.length) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    labels.forEach((label, index) => {
      const factor = (index + 1) * 7;
      label.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`;
    });
  });

  hero.addEventListener("mouseleave", () => {
    labels.forEach((label) => {
      label.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

// Scena 3D leggera in hero: cristallo ruotante con materiale fisico traslucido.
function initCrystalScene() {
  if (!window.THREE) return;
  const canvas = document.getElementById("crystal-canvas");
  const container = canvas?.parentElement;
  if (!canvas || !container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.2, 7);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  const crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.1, 1),
    new THREE.MeshPhysicalMaterial({
      color: 0x7ce5ff,
      roughness: 0.22,
      metalness: 0.1,
      transmission: 0.62,
      thickness: 1.4,
      clearcoat: 1,
      clearcoatRoughness: 0.2
    })
  );

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.16, 1),
    new THREE.MeshBasicMaterial({
      color: 0xffd5a5,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    })
  );

  scene.add(crystal, wire);
  scene.add(new THREE.AmbientLight(0xffffff, 0.85));

  const key = new THREE.DirectionalLight(0x9be8ff, 1.3);
  key.position.set(5, 4, 6);
  scene.add(key);

  const fill = new THREE.PointLight(0xffc581, 1.0, 18);
  fill.position.set(-3, -2, 5);
  scene.add(fill);

  const pointer = { x: 0, y: 0 };

  function resize() {
    const rect = container.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function onPointerMove(event) {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  let rafId = null;
  function animate() {
    crystal.rotation.y += 0.004;
    crystal.rotation.x += 0.0014;
    wire.rotation.y -= 0.0026;
    wire.rotation.x += 0.0011;

    const targetY = pointer.x * 0.28;
    const targetX = pointer.y * 0.16;
    crystal.rotation.y += (targetY - crystal.rotation.y) * 0.015;
    crystal.rotation.x += (targetX - crystal.rotation.x) * 0.01;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }

  resize();
  animate();

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
}

function setupEvents() {
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    renderCards();
  });

  colorFilter.addEventListener("change", () => {
    state.color = colorFilter.value;
    renderCards();
  });

  hardnessFilter.addEventListener("input", () => {
    state.hardnessMin = Number(hardnessFilter.value);
    hardnessOutput.textContent = String(state.hardnessMin);
    renderCards();
  });

  resetFilters.addEventListener("click", () => {
    state.query = "";
    state.color = "all";
    state.hardnessMin = 0;
    searchInput.value = "";
    colorFilter.value = "all";
    hardnessFilter.value = "0";
    hardnessOutput.textContent = "0";
    renderCards();
  });

  cardGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open]");
    if (!target) return;
    openDetailModal(target.dataset.open);
  });

  metalCardGrid?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open]");
    if (!target) return;
    openDetailModal(target.dataset.open);
  });

  modalClose.addEventListener("click", () => detailModal.close());
  detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal) detailModal.close();
  });

  galleryGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-lightbox]");
    if (!target) return;
    openLightbox(target.dataset.lightbox);
  });

  lightboxClose.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  quizOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-option]");
    if (!button) return;
    handleQuizAnswer(button);
  });

  quizNext.addEventListener("click", () => {
    if (quizState.index >= quizState.rounds.length) {
      resetQuiz();
      return;
    }
    quizState.index += 1;
    renderQuizRound();
  });
}

function init() {
  updateHeroStats();
  renderColorOptions();
  renderCards();
  renderMetalCards();
  renderComparisonTable();
  renderGallery();
  resetQuiz();
  setupEvents();
  activateReveal();
  addHeroParallax();
  initCrystalScene();
}

init();
