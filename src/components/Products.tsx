import { useState, forwardRef } from 'react';
import ProductModal from './ProductModal';

const products = [
  {
    image: '/images/Armadio-Classico-Francese.jpg',
    name: 'Armadio Classico Francese',
    description: 'Armadio in legno massello, dallo stile classico con eleganti pannellature sagomate e dettagli intagliati. La finitura calda mette in risalto le venature naturali del legno, rendendolo un complemento d\'arredo raffinato e senza tempo, perfetto per camera da letto o ingresso.',
    category: 'Armadi',
    price: '€ 2.500,00',
    gallery: ['/images/Armadio-Classico-Francese.jpg.webp'],
    specifications: {
      altezza: '207 cm',
      larghezza: '156 cm',
      profondita: '64 cm',
      materiale: 'Ciliegio',
      colore: 'Tinta ciliegio'
    }
  },
  {
    image: '/images/Armadio-Classico-1.jpg',
    name: 'Armadio Classico 1',
    description: 'Questo straordinario armadio antico in legno massello è un pezzo di grande pregio, caratterizzato da un design imponente e armonioso tipico della tradizione artigianale italiana. La struttura presenta una splendida lavorazione a cornici sagomate, con pannelli centrali in legno più scuro che creano un elegante contrasto visivo. Le due ante principali, affiancate da comodi cassetti centrali, offrono ampio spazio contenitivo e grande funzionalità.',
    category: 'Armadi',
    price: '€ 1.550,00',
    gallery: ['/images/Armadio-Classico-1.jpg'],
    specifications: {
      altezza: '185 cm',
      larghezza: '160 cm',
      profondita: '45 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Armadio-Classico-2.jpg',
    name: 'Armadio Classico 2',
    description: 'Questo elegante armadio è realizzato in legno massello di noce, con splendide venature naturali e una finitura calda e profonda. Le ante sagomate e le decorazioni intagliate a stella valorizzano il carattere artigianale del pezzo, rendendolo un mobile di grande pregio e fascino classico.',
    category: 'Armadi',
    price: '€ 1.700,00',
    gallery: ['/images/Armadio-Classico-2.jpg'],
    specifications: {
      altezza: '215 cm',
      larghezza: '160 cm',
      profondita: '52 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Coppia-di-Divani-Rossi.jpg',
    name: 'Coppia di Divani Rossi',
    description: 'Elegante coppia di divani rossi completamente sfoderabili con autentica lavorazione artigianale, caratterizzati da una seduta solida con cinghie e molle, ricca imbottitura in piume d\'oca e finiture tradizionali che conferiscono comfort e fascino senza tempo.',
    category: 'Divani',
    price: '€ 1.750,00',
    gallery: ['/images/Coppia-di-Divani-Rossi.jpg'],
    specifications: {
      altezza: '80 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Tessuto',
      colore: 'Rosso'
    }
  },
  {
    image: '/images/Divano-Queen.jpg',
    name: 'Divano Queen',
    description: 'Elegante divano imbottito con autentica lavorazione artigianale, NON sfoderabile, caratterizzati da una seduta solida con cinghie e molle, ricca imbottitura in piume d\'oca e finiture tradizionali che conferiscono comfort e fascino.',
    category: 'Divani',
    price: '€ 1.000,00',
    gallery: ['/images/Divano-Queen.jpg'],
    specifications: {
      altezza: '90 cm',
      larghezza: '190 cm',
      profondita: '102 cm',
      materiale: 'Struttura in legno massello, imbottitura in piuma',
      colore: 'Beige, bordo in pelle'
    }
  },
  {
    image: '/images/Credenza-2-Ante-in-Noce.jpg',
    name: 'Credenza 2 Ante in Noce',
    description: 'Credenza in legno massello, dal design elegante e arricchita da una raffinata lavorazione geometrica sul frontale. Dotata di due cassetti superiori e ampie ante inferiori, offre un\'ottima capacità di contenimento per la zona giorno o la sala da pranzo. La finitura calda e le linee classiche la rendono un complemento d\'arredo versatile e di grande pregio.',
    category: 'Credenze',
    price: '€ 1.600,00',
    gallery: ['/images/Credenza-2-Ante-in-Noce.jpg'],
    specifications: {
      altezza: '110 cm',
      larghezza: '214 cm',
      profondita: '58 cm',
      materiale: 'Legno di noce massello',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Credenza-a-Tre-Ante.jpg',
    name: 'Credenza a Tre Ante',
    description: 'Credenza in legno massello dallo stile classico ed elegante, caratterizzata da tre ante inferiori con ampio spazio contenitivo e tre cassetti superiori ideali per posate o piccoli oggetti. Le cornici lavorate e la finitura calda esaltano la qualità del legno, rendendola un pezzo prestigioso per soggiorno, sala da pranzo o ingresso. Solida, capiente e di grande presenza scenica.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: ['/images/Credenza-a-Tre-Ante.jpg'],
    specifications: {
      altezza: '112 cm',
      larghezza: '205 cm',
      profondita: '50 cm',
      materiale: 'Legno di noce massello',
      colore: 'Noce medio'
    }
  },
  {
    image: '/images/Libreria-a-2-Vani.jpg',
    name: 'Libreria a 2 Vani',
    description: 'Libreria in legno massello, caratterizzata da un design classico ed elegante. Dotata di ampie mensole regolabili e di due scomparti con serratura, offre grande capacità di contenimento per libri, oggetti decorativi o collezioni. La finitura calda valorizza le venature naturali del legno, rendendola un complemento d\'arredo raffinato e ideale per studio, soggiorno o ufficio.',
    category: 'Librerie',
    price: '€ 1.800,00',
    gallery: ['/images/Libreria-a-2-Vani.jpg'],
    specifications: {
      altezza: '210 cm',
      larghezza: '180 cm',
      profondita: '40 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio naturale'
    }
  },
  {
    image: '/images/Tavolo-Ottagonale-Bicolore.jpg',
    name: 'Tavolo Ottagonale Bicolore',
    description: 'Tavolo ottagonale in legno, caratterizzato da un elegante contrasto tra il piano in legno naturale e la struttura laccata bianca. Le gambe tornite donano uno stile classico e ricercato, perfetto per ambienti rustici, shabby chic o tradizionali. Solido, decorativo e ideale come tavolo da cucina o soggiorno.',
    category: 'Tavoli',
    price: '€ 900,00',
    gallery: [
      '/images/Tavolo-Ottagonale-Bicolore.jpg',
      '/images/Tavolo-Ottagonale-Bicolore-1.jpg',
      '/images/Tavolo-Ottagonale-Bicolore-2.jpg'
    ],
    specifications: {
      altezza: '80 cm',
      larghezza: '126 cm',
      profondita: '126 cm',
      materiale: 'Rovere vecchio e legno laccato',
      colore: 'Bicolore (bianco e rovere)'
    }
  },
  {
    image: '/images/Tavolo-Consolle-Allungabile.jpg',
    name: 'Tavolo Consolle Allungabile',
    description: 'Tavolo consolle in legno massello, dal design classico ed elegante. Dotato di struttura solida con gambe affusolate e piano ampio, è perfetto come punto d\'appoggio in ingresso, soggiorno o sala da pranzo. La finitura in legno scuro valorizza le venature naturali, rendendolo un pezzo raffinato e senza tempo.',
    category: 'Tavoli',
    price: '€ 900,00',
    gallery: [
      '/images/Tavolo-Consolle-Allungabile.jpg',
      '/images/Tavolo-Consolle-Allungabile-1.jpg',
      '/images/Tavolo-Consolle-Allungabile-2.jpg'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '140 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Tinta ciliegio'
    }
  },
  {
    image: '/images/Tavolino-da-Salotto.jpg',
    name: 'Tavolino da Salotto',
    description: 'Tavolino da soggiorno in legno massello di ciliegio, caratterizzato da un design classico con bordi sagomati e piano in legno rifinito. Dotato di un pratico cassetto centrale passante, è ideale come tavolino da salotto o complemento d\'arredo. Struttura solida, gambe tornite e finitura calda che si adatta a diversi stili d\'arredo. Perfetto per chi cerca un pezzo elegante e funzionale.',
    category: 'Tavoli',
    price: '€ 750,00',
    gallery: ['/images/Tavolino-da-Salotto.jpg'],
    specifications: {
      altezza: '39 cm',
      larghezza: '140 cm',
      profondita: '80 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio massello'
    }
  },
  {
    image: '/images/Coppia-Poltroncine-Pelle-Blu-Scamosciata.jpg',
    name: 'Coppia Poltroncine Pelle Blu Scamosciata',
    description: 'Coppia di poltroncine in legno, dal design classico ed elegante. Presentano seduta e schienale imbottiti rivestiti in tessuto vellutato color blu/grigio, rifiniti con borchie decorative. La struttura in legno massello mostra intagli e lavorazioni artigianali, come visibile nel dettaglio dei braccioli e delle giunzioni. Solide e raffinate, sono perfette per soggiorno, studio o come sedute di rappresentanza.',
    category: 'Poltrone',
    price: '€ 700,00 cad.',
    gallery: [
      '/images/Coppia-Poltroncine-Pelle-Blu-Scamosciata.jpg',
      '/images/Coppia-Poltroncine-Pelle-Blu-Scamosciata-1.jpg'
    ],
    specifications: {
      altezza: '97 cm',
      larghezza: '59 cm',
      profondita: '50 cm',
      materiale: 'Noce / Pelle scamosciata',
      colore: 'Noce scuro / Blu'
    }
  },
  {
    image: '/images/Consolle-Provenzale.jpg',
    name: 'Consolle Provenzale',
    description: 'Consolle in legno massello dallo stile elegante e classico. Il fronte è impreziosito da ricchi intagli floreali e una conchiglia centrale, eseguiti artigianalmente. Le gambe curve conferiscono leggerezza e raffinatezza alla struttura. Perfetta per ingresso, soggiorno o come complemento decorativo in ambienti tradizionali e di pregio.',
    category: 'Consolle',
    price: '€ 800,00',
    gallery: ['/images/Consolle-Provenzale.jpg'],
    specifications: {
      altezza: '77 cm',
      larghezza: '180 cm',
      profondita: '42 cm',
      materiale: 'Legno rovere massello',
      colore: 'Rovere chiaro'
    }
  },
  {
    image: '/images/Secretaire-Neoclassico.jpg',
    name: 'Secretaire Neoclassico',
    description: 'Mobile scrittoio in legno massello, elegante e compatto. Dotato di ribalta superiore con serratura e vano contenitivo, ideale come piccolo angolo studio o postazione per scrivere. La parte inferiore offre ulteriore spazio grazie all\'anta con serratura. Le linee classiche e la finitura calda valorizzano le venature del legno, rendendolo un pezzo raffinato per soggiorno, studio o ingresso.',
    category: 'Scrittoio',
    price: '€ 1.100,00',
    gallery: [
      '/images/Secretaire-Neoclassico.jpg',
      '/images/Secretaire-Neoclassico-1.jpg'
    ],
    specifications: {
      altezza: '130 cm',
      larghezza: '74 cm',
      profondita: '37 cm',
      materiale: 'Legno massello',
      colore: 'Noce'
    }
  },
  {
    image: '/images/Consolle-TV.jpg',
    name: 'Consolle TV',
    description: 'Consolle in legno massello, elegante e ricca di dettagli. Dotata di tre cassetti frontali con maniglie decorative in metallo e di un ripiano inferiore per appoggio aggiuntivo. Le gambe mosse e le applicazioni intagliate donano un carattere classico e raffinato. Perfetta per ingressi, soggiorni o ambienti dallo stile tradizionale.',
    category: 'Consolle',
    price: '€ 700,00',
    gallery: [
      '/images/Consolle-TV.jpg',
      '/images/Consolle-TV-1.jpg'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '160 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Como-a-Ribalta.jpg',
    name: 'Comò a Ribalta',
    description: 'Comò a ribalta in legno massello, caratterizzato da una finitura anticata e da ricchi dettagli decorativi in metallo in stile classico. Dotato di ribalta superiore con serratura e di quattro cassetti capienti, offre un pratico spazio per riporre documenti e oggetti personali. Le scanalature verticali e gli intagli frontali ne arricchiscono l\'estetica, rendendolo un complemento d\'arredo elegante, ideale per studio, soggiorno o ingresso.',
    category: 'Comò',
    price: '€ 1.900,00',
    gallery: [
      '/images/Como-a-Ribalta.jpg',
      '/images/Como-a-Ribalta-1.jpg',
      '/images/Como-a-Ribalta-2.jpg'
    ],
    specifications: {
      altezza: '104 cm',
      larghezza: '126 cm',
      profondita: '50 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio chiaro'
    }
  },
  {
    image: '/images/Como-a-Due-Cassetti.jpg',
    name: 'Comò a Due Cassetti',
    description: 'Comò decorativo in legno, dal design artistico e ricercato. Caratterizzato da una struttura bombata con motivi intagliati e laccati in rosso su fondo nero lucido, è un pezzo di forte impatto visivo. Dotato di 2 cassetti capienti, unisce funzionalità ed estetica contemporanea. Perfetto come elemento protagonista in soggiorno, ingresso o camera da letto.',
    category: 'Comò',
    price: '€ 900,00',
    gallery: ['/images/Como-a-Due-Cassetti.jpg'], 
    specifications: {
      altezza: '85 cm',
      larghezza: '114 cm',
      profondita: '51 cm',
      materiale: 'Legno laccato',
      colore: 'Rosso/Nero'
    }
  },
  {
    image: '/images/Vetrinetta-in-Ciliegio.jpg',
    name: 'Vetrinetta in Ciliegio',
    description: 'Vetrina in legno massello, dallo stile classico ed elegante. Dotata di un cassetto a scomparsa nella parte superiore, due ante in vetro e mensole interne, offre ampio spazio espositivo per oggetti, ceramiche, cristalli o libri. La finitura calda evidenzia le venature naturali del legno, mentre le linee pulite e armoniose la rendono un complemento raffinato per soggiorno, sala da pranzo o studio.',
    category: 'Vetrinette',
    price: '€ 900,00',
    gallery: ['/images/Vetrinetta-in-Ciliegio.jpg'],
    specifications: {
      altezza: '142 cm',
      larghezza: '115 cm',
      profondita: '36 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Tavolo-a-Spicchi-Apribile-1.jpg',
    name: 'Tavolo a Spicchi Apribile',
    description: 'Tavolo in legno allungabile, con piano chiaro effetto decapato e struttura in legno scuro. Dotato di prolunghe integrate che permettono di estenderne facilmente la superficie, è ideale per cucina o sala da pranzo.',
    category: 'Tavoli',
    price: '€ 400,00',
    gallery: [
     '/images/Tavolo-a-Spicchi-Apribile-1.jpg',
      '/images/Tavolo-a-Spicchi-Apribile-2.jpg',
      '/images/Tavolo-a-Spicchi-Apribile-3.jpg'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '100/140 cm',
      profondita: '100/140 cm',
      materiale: 'Legno di faggio',
      colore: 'Struttura faggio scuro, piano bianco'
    }
  },
  {
    image: '/images/Sedia-in-Rovere.jpg',
    name: 'Sedia in Rovere',
    description: 'Sedie in legno, con finitura chiara decapata e seduta in paglia intrecciata. Il design semplice e rustico richiama lo stile country/shabby chic, rendendole perfette per cucina, taverna o ambienti dallo stile tradizionale. Solide, comode e versatili, si adattano facilmente a diversi tipi di arredamento.',
    category: 'Sedie',
    price: '€ 590,00 (gruppo)',
    gallery: ['/images/Sedia-in-Rovere.jpg'],
    specifications: {
      quantita: '6 sedie',
      materiale: 'Rovere decapato',
      colore: 'Grigio sporco'
    }
  },
  {
    image: '/images/Sedie-in-Teak.jpg',
    name: 'Sedie in Teak',
    description: 'Sedia moderna con rivestimento intrecciato, caratterizzata da seduta e schienale a intreccio ed eleganti gambe in legno scuro. Il design pulito e contemporaneo la rende ideale per cucina, sala da pranzo o ambienti dallo stile naturale e minimal. Leggera, resistente e facile da abbinare.',
    category: 'Sedie',
    price: '€ 900,00 (gruppo)',
    gallery: ['/images/Sedie-in-Teak.jpg'],
    specifications: {
      quantita: '6 sedie',
      materiale: 'Fibra naturale e legno',
      colore: 'Beige/Marrone scuro'
    }
  },
  {
    image: '/images/Credenza-Doppio-Corpo-in-Noce.jpg',
    name: 'Credenza Doppio Corpo in Noce',
    description: 'Credenza in legno massello, dallo stile classico ed elegante. La parte superiore presenta due ante in vetro con ripiani interni, ideale per esporre servizi, libri o oggetti decorativi. Al centro è presente un pratico ripiano con 3 cassetti, mentre la parte inferiore offre ulteriore spazio grazie a due ante capienti. Le cornici lavorate e la finitura calda valorizzano la qualità del legno, rendendola un mobile raffinato e funzionale per soggiorno, studio o sala da pranzo.',
    category: 'Credenze',
    price: '€ 1.800,00',
    gallery: [
     '/images/Credenza-Doppio-Corpo-in-Noce.jpg',
      '/images/Credenza-Doppio-Corpo-in-Noce-1.jpg'
    ],
    specifications: {
      altezza: '224 cm',
      larghezza: '123 cm',
      profondita: '58 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Tavolo-in-Ferro-con-Piano-in-Teak.jpg',
    name: 'Tavolo in Ferro con Piano in Teak',
    description: 'Tavolo rotondo con piano in legno e base in ferro battuto, dal carattere elegante e artigianale. Il piano presenta una lavorazione decorativa, mentre la struttura in ferro sagomato offre stabilità e un tocco classico-rustico. Perfetto per cucina, veranda, taverna o ambienti dallo stile country, industrial o tradizionale.',
    category: 'Tavoli',
    price: '€ 750,00',
    gallery: ['/images/Tavolo-in-Ferro-con-Piano-in-Teak.jpg'],
    specifications: {
      altezza: '76 cm',
      diametro: '120 cm',
      materiale: 'Legno/Ferro',
      colore: 'Nero/Marrone'
    }
  },
  {
    image: '/images/Credenza-Impero-in-Ciliegio.jpg',
    name: 'Credenza Impero in Ciliegio',
    description: 'Elegante credenza in stile Impero italiano, realizzata in ciliegio massello con finitura lucidata che valorizza la venatura calda e profonda del legno. Il mobile si distingue per le sue linee pulite e simmetriche, tipiche dell\'Ottocento, arricchite da lesene laterali, piedini a dado e ferramenta originale in ottone. La struttura comprende tre grandi ante con pannelli riquadrati e tre cassetti superiori, ideali per riporre stoviglie, tessuti o oggetti di pregio. Capiente e solida, questa credenza unisce funzionalità e estetica classica, perfetta sia per ambienti tradizionali che per spazi moderni che vogliono un tocco di eleganza.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: ['/images/Credenza-Impero-in-Ciliegio.jpg'],
    specifications: {
      altezza: '106 cm',
      larghezza: '227 cm',
      profondita: '55 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Credenza-Piattaia-Shabby-Chic.jpg',
    name: 'Credenza Piattaia Shabby Chic',
    description: 'Splendida credenza realizzata in legno massello e rifinita con vernice bianco anticato che dona un look vissuto e romantico, perfetto per cucine rustiche, case di campagna, ambienti provenzali o arredi country chic. La parte superiore è dotata di due ante con griglia traforata, ideali per mantenere arieggiati piatti e stoviglie. Sotto di esse si trovano ampie mensole con reggipiatti, molto funzionali per esporre piatti, ceramiche e oggetti decorativi.',
    category: 'Credenze',
    price: '€ 1.300,00',
    gallery: ['/images/Credenza-Piattaia-Shabby-Chic.jpg'],
    specifications: {
      altezza: '194 cm',
      larghezza: '143 cm',
      profondita: '43 cm',
      materiale: 'Massello',
      colore: 'Bianco antico'
    }
  },
  {
    image: '/images/Libreria-Classica-in-Bordeaux.jpg',
    name: 'Libreria Classica in Bordeaux',
    description: 'Elegante libreria in legno massello finemente rifinita, caratterizzata da una struttura solida e da un design classico con delicate influenze francesi. Il mobile presenta una splendida combinazione di noce caldo e profili rosso bordeaux, che donano carattere e unicità al pezzo. La libreria è composta da ampie mensole regolabili, ideali per libri, oggetti decorativi o collezioni, e da un pratico cassetto centrale tripartito con maniglie in metallo lavorato.',
    category: 'Librerie',
    price: '€ 1.000,00',
    gallery: ['/images/Libreria-Classica-in-Bordeaux.jpg'],
    specifications: {
      altezza: '200 cm',
      larghezza: '134 cm',
      profondita: '35 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Bordeaux'
    }
  },
  {
    image: '/images/Consolle-in-Legno-Massello-e-Ripiano-in-Vetro.jpg',
    name: 'Consolle in Legno Massello e Ripiano in Vetro',
    description: 'Elegante consolle in legno massello, arricchita da una raffinata fascia frontale in ferro battuto con motivo a ricciolo e un intarsio centrale decorativo. La linea slanciata delle gambe affusolate richiama lo stile classico–neoclassico, mentre il ripiano inferiore in vetro dona leggerezza e luminosità alla struttura. Solida, armoniosa e di grande pregio artigianale, questa consolle è perfetta per valorizzare ingressi, soggiorni o corridoi con un tocco di eleganza senza tempo.',
    category: 'Consolle',
    price: '€ 600,00',
    gallery: ['/images/Consolle-in-Legno-Massello-e-Ripiano-in-Vetro.jpg'],
    specifications: {
      altezza: '80 cm',
      larghezza: '100 cm',
      profondita: '40 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Tavolino-Rotondo.jpg',
    name: 'Tavolino Rotondo',
    description: 'Tavolino elegante in legno massello, caratterizzato da una linea classica e slanciata con piano rotondo e gambe sottili a sezione quadrata. La base triangolare con rotelle integrate lo rende pratico e facilmente spostabile, mentre la calda finitura naturale esalta la venatura del legno. Un complemento raffinato e versatile, ideale per arricchire soggiorni, ingressi o angoli lettura.',
    category: 'Tavolini',
    price: '€ 450,00',
    gallery: [
      '/images/Tavolino-Rotondo.jpg',
      '/images/Tavolino-Rotondo-1.jpg'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '70 cm',
      materiale: 'Noce massello',
      colore: 'Noce chiaro'
    }
  },
  {
    image: '/images/Como-a-3-Cassetti-Nero.jpg',
    name: 'Comò a 3 Cassetti Nero',
    description: 'Comò in legno laccato nero, dal design moderno con dettagli decorativi in stile stellato. Dotato di tre ampi cassetti, presenta frontali arricchiti da motivi geometrici e maniglie metalliche a forma di stella. Un pezzo originale e di grande impatto visivo, ideale per camere da letto, ingressi o spazi dal carattere contemporaneo.',
    category: 'Cassettiere',
    price: '€ 800,00',
    gallery: ['/images/Como-a-3-Cassetti-Nero.jpg'],
    specifications: {
      altezza: '82 cm',
      larghezza: '84 cm',
      profondita: '40 cm',
      materiale: 'Legno massello',
      colore: 'Nero/Argento'
    }
  },
  {
    image: '/images/Libreria-in-Ciliegio.jpg',
    name: 'Libreria in Ciliegio',
    description: 'Libreria in legno massello, dal design classico e raffinato. Dotata di ampie mensole per libri o oggetti decorativi e di un cassetto centrale con serratura, perfetta per mantenere ordine e funzionalità. Le venature naturali del legno e le cornici lavorate le conferiscono un\'eleganza senza tempo, ideale per studio, soggiorno o ufficio.',
    category: 'Librerie',
    price: '€ 1.100,00',
    gallery: ['/images/Libreria-in-Ciliegio.jpg'],
    specifications: {
      altezza: '210 cm',
      larghezza: '100 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio medio'
    }
  },
  {
    image: '/images/Tavolo-Gioco-Apribile.jpg',
    name: 'Tavolo Gioco Apribile',
    description: 'Tavolo da gioco in legno massello, caratterizzato da linee eleganti e gambe sagomate in stile classico. Dotato di cassetto centrale, è perfetto come tavolino da ingresso, soggiorno o come complemento decorativo. La finitura calda mette in risalto le venature naturali del legno, rendendolo un pezzo raffinato e senza tempo.',
    category: 'Tavoli',
    price: '€ 700,00',
    gallery: [
      '/images/Tavolo-Gioco-Apribile.jpg',
      '/images/Tavolo-Gioco-Apribile-2.jpg',
      '/images/Tavolo-Gioco-Apribile-3.jpg',
    ],
    specifications: {
      altezza: '76 cm',
      larghezza: '80 cm',
      profondita: '40/80 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
    image: '/images/Tavolo-da-Gioco.jpg',
    name: 'Tavolo da Gioco',
    description: 'Tavolino da gioco in legno, dal design classico con eleganti gambe sagomate. Il piano è rivestito in panno verde, ideale per carte o altri giochi da tavolo, e presenta quattro incavi porta-bicchieri negli angoli. La fascia sottopiano è arricchita da dettagli intagliati. Perfetto per salotti, sale hobby o ambienti dallo stile tradizionale.',
    category: 'Tavoli',
    price: '€ 900,00',
    gallery: [
      '/images/Tavolo-da-Gioco.jpg',
      '/images/Tavolo-da-Gioco-1.jpg'
    ],
    specifications: {
      altezza: '80 cm',
      larghezza: '80 cm',
      profondita: '40 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
    image: '/images/Consolle-Bacheca.jpg',
    name: 'Consolle Bacheca',
    description: 'Consolle espositiva in legno massello, dotata di due vetrinette laterali con apertura verso il basso, ideali per esporre piccoli oggetti, collezioni o articoli decorativi. Al centro è presente un pratico cassetto. Le linee eleganti, le gambe affusolate e la finitura classica rendono questo mobile raffinato e versatile, perfetto per ingresso, soggiorno o studio.',
    category: 'Consolle',
    price: '€ 750,00',
    gallery: [
      '/images/Consolle-Bacheca.jpg',
      '/images/Consolle-Bacheca-1.jpg'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '120 cm',
      profondita: '40 cm',
      materiale: 'Noce',
      colore: 'Noce medio'
    }
  },
  {
    image: '/images/Credenza-2-Porte-Finti-Cassetti.jpg',
    name: 'Credenza 2 Porte Finti Cassetti',
    description: 'Mobile schedario in legno massello, ispirato ai classici arredi da archivio. Dotato di una grande quantità di cassetti con portanome e di due capienti ante centrali, permette di organizzare e catalogare facilmente documenti, collezioni o piccoli oggetti. La finitura calda e le cornici lavorate gli conferiscono un fascino vintage-industriale elegante. Ideale per studi, librerie, negozi o ambienti arredati con carattere.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: ['/images/Credenza-2-Porte-Finti-Cassetti.jpg'],
    specifications: {
      altezza: '100 cm',
      larghezza: '180 cm',
      profondita: '54 cm',
      materiale: 'Legno rovere',
      colore: 'Rovere chiaro'
    }
  },
  {
    image: '/images/Credenza-Rustica.jpg',
    name: 'Credenza Rustica',
    description: 'Affascinante credenza in legno massello dal carattere rustico, realizzata con pannelli lavorati e decorazioni geometriche intagliate a mano. La finitura naturale mette in risalto le venature autentiche del legno, conferendo un aspetto caldo e genuino. Dotata di due ante capienti, è perfetta per arredare ambienti di montagna, case di campagna o spazi dallo stile tradizionale e accogliente.',
    category: 'Credenze',
    price: '€ 600,00',
    gallery: ['/images/Credenza-Rustica.jpg'],
    specifications: {
      altezza: '110 cm',
      larghezza: '115 cm',
      profondita: '42 cm',
      materiale: 'Rovere',
      colore: 'Rovere medio'
    }
  },
  {
    image: '/images/Cassapanca-Rustica.jpg',
    name: 'Cassapanca Rustica',
    description: 'Cassapanca in legno massello dallo stile rustico, caratterizzata da linee semplici e da una calda finitura naturale che valorizza le venature originali del legno. Robusta e capiente, è ideale come contenitore per biancheria, cuscini o accessori, perfetta per ingressi, camere o ambienti in stile country e di montagna. Un pezzo autentico che unisce funzionalità e fascino tradizionale.',
    category: 'Cassapanche',
    price: '€ 400,00',
    gallery: ['/images/Cassapanca-Rustica.jpg'],
    specifications: {
      altezza: '64 cm',
      larghezza: '160 cm',
      profondita: '50 cm',
      materiale: 'Rovere',
      colore: 'Rovere chiaro'
    }
  },
  {
    image: '/images/Set-Como-Comodini.jpg',
    name: 'Set Comò/Comodini',
    description: 'Elegante trittico composto da comò e due comodini in legno massello finemente lavorato. Le superfici presentano una ricca intagliatura artigianale che valorizza il design classico e dona un carattere prestigioso all\'arredo. Dotati di ampi cassetti con pomelli in metallo decorato, offrono grande capienza e praticità. Perfetti per una camera da letto dallo stile tradizionale e raffinato.',
    category: 'Comò',
    price: '€ 900,00',
    gallery: ['/images/Set-Como-Comodini.jpg'],
    specifications: {
      altezza: '95/77 cm',
      larghezza: '123/55 cm',
      profondita: '52/34 cm',
      materiale: 'Castagno',
      colore: 'Castagno scuro'
    }
  },
  {
    image: '/images/Tavolino-Salotto.jpg',
    name: 'Tavolino Salotto',
    description: 'Tavolino angolo divano in legno. La struttura è solida, con gambe tornite e ripiano inferiore in paglia intrecciata, che aggiunge un tocco artigianale. Perfetto per ingressi, salotti o ambienti arredati in stile classico.',
    category: 'Tavoli',
    price: '€ 550,00',
    gallery: ['/images/Tavolino-Salotto.jpg'],
    specifications: {
      altezza: '62 cm',
      larghezza: '67 cm',
      profondita: '67 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Tavolo-con-Base-in-Ferro-Battuto.jpg',
    name: 'Tavolo con Base in Ferro Battuto',
    description: 'Elegante tavolo con piano in legno di rovere massello e struttura in ferro battuto, caratterizzato da un raffinato motivo a doghe sottili che conferisce leggerezza e stile alla superficie. Le gambe in ferro forgiato a mano presentano linee sinuose e un incrocio centrale che assicura solidità e un tocco artigianale. I due lati ribaltabili rendono il tavolo estremamente pratico e versatile, ideale per ambienti rustici, classici o industrial chic. Un pezzo unico che unisce robustezza, funzionalità ed estetica ricercata.',
    category: 'Tavoli',
    gallery: [
      '/images/Tavolo-con-Base-in-Ferro-Battuto.jpg',
      '/images/Tavolo-con-Base-in-Ferro-Battuto-1.jpg'
    ],
    specifications: {
      altezza: '96 cm',
      larghezza: '136 cm',
      profondita: '45 cm',
      materiale: 'Rovere',
      colore: 'Rovere chiaro / Nero'
    }
  },
  {
    image: '/images/Sedie-in-Paglia.jpg',
    name: 'Sedie in Paglia',
    description: 'Sedie classiche in legno massello, caratterizzate dallo schienale con elegante motivo a incrocio (X) e seduta in paglia intrecciata artigianale. Le linee mosse delle gambe e la finitura calda le rendono ideali per cucine rustiche, taverne, ambienti country o arredamenti tradizionali. Robustezza, comodità ed estetica senza tempo.',
    category: 'Sedie',
    price: '€ 1.200,00',
    gallery: ['/images/Sedie-in-Paglia.jpg'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Legno/Paglia',
      colore: 'Ciliegio antiquariato'
    }
  },
  {
    image: '/images/Sedie-in-Ciliegio-Laccato-Nero.jpg',
    name: 'Sedie in Ciliegio Laccato Nero',
    description: 'Caratterizzate da uno schienale con tre listelli orizzontali e gambe leggermente ricurve che donano eleganza e stabilità. La seduta è imbottita e rivestita in pelle rossa, comoda e facile da pulire. Ideali per cucina, sala da pranzo, locali o ambienti dallo stile retrò.',
    category: 'Sedie',
    price: '€ 1.500,00 (gruppo)',
    gallery: ['/images/Sedie-in-Ciliegio-Laccato-Nero.jpg'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Ciliegio',
      colore: 'Nero/Rosso'
    }
  },
  {
    image: '/images/Sedia-a-Righe.jpg',
    name: 'Sedia a Righe',
    description: 'Sedia classica in legno massello, con schienale sagomato impreziosito da un elegante intaglio centrale. La seduta è imbottita e rivestita con un vivace tessuto a righe multicolore, che aggiunge un tocco di originalità mantenendo uno stile raffinato. Le gambe leggermente ricurve donano slancio e stabilità. Ideale per sala da pranzo, camere o ambienti dallo stile tradizionale con una nota decorativa.',
    category: 'Sedie',
    price: '€ 300,00',
    gallery: ['/images/Sedia-a-Righe.jpg'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Legno/Tessuto',
      colore: 'Ciliegio chiaro'
    }
  },
  {
    image: '/images/Consolle-mezza-Luna-Fiore.jpg',
    name: 'Consolle 1/2 Luna Fiore',
    description: 'Raffinata consolle mezzaluna in legno massello, caratterizzata da un design classico ed estremamente armonioso. Il top semicircolare, sostenuto da tre gambe slanciate in stile Luigi XV, conferisce leggerezza e pregio all\'arredo. Le piccole volute scolpite sotto il piano aggiungono un tocco decorativo ricercato. Perfetta come punto d\'ingresso, angolo decorativo o complemento elegante in qualsiasi ambiente della casa. Un pezzo senza tempo, capace di impreziosire ogni spazio.',
    category: 'Consolle',
    price: '€ 400,00',
    gallery: ['/images/Consolle-mezza-Luna-Fiore.jpg'],
    specifications: {
      altezza: '90 cm',
      larghezza: '110 cm',
      profondita: '44 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Tavolo-Direttorio.jpg',
    name: 'Tavolo Direttorio',
    description: 'Elegante tavolo da pranzo in legno massello di ciliegio, caratterizzato da un piano ampio con raffinata lavorazione a spina di pesce, che mette in risalto le venature naturali del legno. Le gambe dritte e rastremate donano al tavolo una linea classica e senza tempo, facile da inserire in ambienti sia tradizionali che contemporanei. Solido, stabile e finemente rifinito, è ideale per chi cerca un complemento d\'arredo di qualità, capace di unire estetica e funzionalità. Perfetto come tavolo da soggiorno o sala da pranzo.',
    category: 'Tavoli',
    price: '€ 1.200,00',
    gallery: ['/images/Tavolo-Direttorio.jpg'],
    specifications: {
      altezza: '78 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/Cassapanca-in-Noce.jpg',
    name: 'Cassapanca in Noce',
    description: 'Elegante cassapanca in legno massello di noce, caratterizzata da linee classiche e da una splendida patina calda e uniforme. Il fronte presenta due pannelli incorniciati con lavorazioni artigianali, mentre il bordo superiore è arricchito da un raffinato intaglio decorativo. Robusta e capiente, è perfetta come contenitore per biancheria, coperte o oggetti da tenere in ordine, oltre a essere un ottimo complemento d\'arredo per ingresso, camera o zona giorno. Un pezzo solido, autentico e di grande fascino.',
    category: 'Cassapanche',
    price: '€ 400,00',
    gallery: [
      '/images/Cassapanca-in-Noce.jpg',
      '/images/Cassapanca-in-Noce-1.jpg'
    ],
    specifications: {
      altezza: '60 cm',
      larghezza: '120 cm',
      profondita: '55 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
    image: '/images/Tavolo-Rotondo-Bianco-e-Azzurro.jpg',
    name: 'Tavolo Rotondo Bianco e Azzurro',
    description: 'Elegante set da pranzo in stile classico, composto da tavolo rotondo allungabile e sei sedie coordinate, due delle quali con braccioli. L\'intero gruppo è realizzato in legno massello e rifinito con una laccatura bianca anticata, arricchita da delicati profili azzurri che conferiscono un tocco raffinato e luminoso all\'ambiente. Le sedute presentano un\'imbottitura comoda con rivestimento a righe blu e bianche, perfettamente abbinato allo stile fresco e marinaro del set. Le spalliere sono impreziosite da una lavorazione intagliata di grande pregio artigianale. Ideale per cucine, sale da pranzo o case al mare, questo set unisce charme, funzionalità e qualità costruttiva, rendendo ogni ambiente accogliente e ricercato.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.980,00',
    gallery: ['/images/Tavolo-Rotondo-Bianco-e-Azzurro.jpg'],
    specifications: {
      altezza: '75 cm',
      larghezza: '120 cm',
      allunghi: '45 cm cad.',
      quantita_sedie: '6',
      materiale: 'Massello verniciato',
      colore: 'Bianco antico'
    }
  },
  {
    image: '/images/Tavolo-con-Sedute-Gialle.jpg',
    name: 'Tavolo con Sedute Gialle',
    description: 'Elegante sala da pranzo in stile classico, composta da tavolo rettangolare allungabile e sei sedie coordinate, due delle quali con braccioli. Realizzato in legno massello con una splendida finitura ciliegio, il tavolo presenta linee pulite e proporzioni armoniose, ideali per ambienti raffinati e senza tempo. Le 6 sedie, anch\'esse in legno massello, sono caratterizzate da schienali intagliati e da sedute imbottite rivestite in tessuto color panna, comodo e facilmente abbinabile a qualsiasi arredo.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.850,00',
    gallery: ['/images/Tavolo-con-Sedute-Gialle.jpg'],
    specifications: {
      altezza: '78 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Panna'
    }
  },
  {
    image: '/images/Tavolo-Provenzale.jpg',
    name: 'Tavolo Provenzale',
    description: 'Elegante sala da pranzo in stile classico, composta da un tavolo rettangolare e sei sedie coordinate. La struttura in legno chiaro presenta finiture morbide e linee sinuose, mentre le 6 sedie, di cui 2 con i braccioli sono impreziosite da schienali in paglia di Vienna e sedute rivestite in tessuto rigato. Un insieme raffinato e luminoso, perfetto per ambienti tradizionali o country chic.',
    category: 'Set Tavoli/Sedie',
    price: '€ 3.400,00',
    gallery: ['/images/Tavolo-Provenzale.jpg'],
    specifications: {
      altezza: '77 cm',
      larghezza: '160 cm',
      profondita: '110 cm',
      materiale: 'Rovere/Paglia',
      colore: 'Rovere chiaro/Rosso'
    }
  },
  {
    image: '/images/Tavolo-Classico-Bordeaux.png',
    name: 'Tavolo Classico Bordeaux',
    description: 'Tavolo da pranzo in legno massello, caratterizzato da una solida struttura e da un piano spesso con finitura calda e naturale. Il basamento laccato rosso aggiunge un tocco distintivo e moderno, creando un elegante contrasto con il top in essenza scura. Perfetto per cucine e sale da pranzo, offre ampia superficie e grande stabilità. Un pezzo robusto, di qualità e dal design unico.',
    category: 'Tavoli',
    price: '€ 1.100,00',
    gallery: ['/images/Tavolo-Classico-Bordeaux.png'],
    specifications: {
      altezza: '79 cm',
      larghezza: '180 cm',
      profondita: '85 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Bordeaux'
    }
  },
  {
    image: '/images/Tavolo-Ovale-Allungabile.jpg',
    name: 'Tavolo Ovale Allungabile',
    description: 'Elegante sala da pranzo composta da tavolo ovale e 4 sedie coordinate, realizzati in legno massello con finitura calda e naturale. Il tavolo presenta un raffinato bordo sagomato e robuste gambe tornite, mentre le sedie sono caratterizzate da schienale curvo e seduta in paglia di Vienna che aggiunge leggerezza e comfort. Un insieme armonioso, ideale per ambienti classici o contemporanei dal gusto ricercato.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.600,00',
    gallery: [
       '/images/Tavolo-Ovale-Allungabile.jpg',
      '/images/Tavolo-Ovale-Allungabile-1.jpg'
    ],
    specifications: {
      altezza: '76 cm',
      larghezza: '145 cm',
      profondita: '100 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Scrivania-Classica-Laccata-con-Ripiano-in-Vetro.png',
    name: 'Scrivania Classica Laccata con Ripiano in Vetro',
    description: 'Elegante scrivania in stile classico, realizzata in legno massello con finitura avorio anticata. Il piano sagomato con vetro protettivo richiama le linee morbide e raffinate della struttura, ricca di dettagli intagliati a mano. Dotata di due comodi cassetti laterali, è perfetta per arredare studi, salotti o ambienti ricercati, aggiungendo un tocco di pregio e artigianalità.',
    category: 'Scrittoio',
    price: '€ 800,00',
    gallery: ['/images/Scrivania-Classica-Laccata-con-Ripiano-in-Vetro.png'],
    specifications: {
      altezza: '82 cm',
      larghezza: '145 cm',
      profondita: '75 cm',
      materiale: 'Legno laccato/Vetro',
      colore: 'Bianco'
    }
  },
  {
    image: '/images/Consolle-Marina.png',
    name: 'Consolle Marina',
    description: 'Elegante credenza in stile classico con gambe sinuose e linee morbide, proposta in una vivace finitura turchese spazzolata. Dotata di doppia anta con maniglie in metallo lavorato, offre uno spazio contenitivo pratico e raffinato. Un pezzo unico che dona carattere e colore a ingressi, soggiorni o ambienti moderni con richiami vintage.',
    category: 'Consolle',
    price: '€ 600,00',
    gallery: [
      '/images/Consolle-Marina.png',
      '/images/Consolle-Marina-1.png'
    ],
    specifications: {
      altezza: '85 cm',
      larghezza: '100 cm',
      profondita: '40 cm',
      materiale: 'Legno massello',
      colore: 'Azzurro'
    }
  },
  {
    image: '/images/Vetrinetta-in-Ciliegio.jpg',
    name: 'Vetrinetta in Ciliegio',
    description: 'Elegante vetrina in legno massello con finitura calda e naturale, dotata di anta in vetro trasparente e ripiani interni ideali per esporre servizi, collezioni o oggetti decorativi. Le linee pulite e la struttura solida la rendono perfetta per soggiorni, ingressi o sale da pranzo in stile classico e tradizionale. Un complemento raffinato che valorizza qualsiasi ambiente.',
    category: 'Vetrinette',
    price: '€ 950,00',
    gallery: ['/images/Vetrinetta-in-Ciliegio.jpg'],  
    specifications: {
      altezza: '145 cm',
      larghezza: '69 cm',
      profondita: '40 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio chiaro'
    }
  },
  {
    image: '/images/Bergere-Blu.png',
    name: 'Bergere Blu',
    description: 'Elegante poltrona in stile classico con struttura in legno massello finemente curvato e imbottitura confortevole. Il rivestimento blu a quadri dona un tocco raffinato e senza tempo, ideale per salotti, studi o camere da lettura. Un complemento d\'arredo che unisce comodità e stile, perfetto per ambienti tradizionali e ricercati.',
    category: 'Poltrone',
    price: '€ 600,00',
    gallery: ['/images/Bergere-Blu.png'],
    specifications: {
      altezza: '112 cm',
      larghezza: '62 cm',
      profondita: '80 cm',
      materiale: 'Tessuto/Legno',
      colore: 'Blu/Legno'
    }
  },
  {
    image: '/images/Scrittoio-in-Noce.png',
    name: 'Scrittoio in Noce',
    description: 'Elegante scrittoio in stile classico realizzato in legno massello, arricchito da pannelli frontali laccati in rosso e maniglie in metallo dorato. Dotato di ampio piano di lavoro, due cassetti superiori e tre cassetti frontali, offre spazio funzionale per studi, ingressi o camere. Un mobile raffinato che unisce praticità e carattere, ideale per ambienti tradizionali e di pregio.',
    category: 'Scrittoio',
    price: '€ 750,00',
    gallery: ['/images/Scrittoio-in-Noce.png'],
    specifications: {
      altezza: '95 cm',
      larghezza: '122 cm',
      profondita: '70 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
    image: '/images/Vetrinetta-Laccata-Grigia.png',
    name: 'Vetrinetta Laccata Grigia',
    description: 'Elegante vetrina da esposizione in stile vintage, realizzata in legno con finitura anticata e ampie superfici in vetro. Dotata di due ripiani interni e ante scorrevoli, è perfetta per mostrare collezioni, oggetti preziosi o articoli da negozio. Le linee semplici e il carattere retrò la rendono un complemento ideale per ambienti classici, boutique o studi dal gusto raffinato.',
    category: 'Vetrinette',
    price: '€ 950,00',
    gallery: ['/images/Vetrinetta-Laccata-Grigia.png'],
    specifications: {
      altezza: '75 cm',
      larghezza: '130 cm',
      profondita: '42 cm',
      materiale: 'Massello laccato',
      colore: 'Grigio'
    }
  },
  {
    image: '/images/Puff-con-Ruote.png',
    name: 'Puff con Ruote',
    description: 'Elegante panchetta in stile classico con solide gambe in legno tornito e rivestimento in tessuto rosso. Il cuscino superiore, decorato con motivi geometrici nei toni del rosso e del grigio, dona un tocco distintivo e raffinato. Perfetta per ingressi, camere da letto o zone living, unisce praticità e stile con un carattere unico.',
    category: 'Poltrone',
    price: '€ 300,00',
    gallery: ['/images/Puff-con-Ruote.png'],
    specifications: {
      altezza: '46 cm',
      larghezza: '85 cm',
      profondita: '42 cm',
      materiale: 'Tessuto',
      colore: 'Rosso'
    }
  },
  {
    image: '/images/Coppia-di-Divani-Boston.png',
    name: 'Coppia di Divani Boston',
    description: 'Elegante coppia di divani a due posti con struttura solida e rivestimento in tessuto beige di alta qualità. I braccioli presentano una raffinata lavorazione capitonné moderna, mentre le cuciture a contrasto aggiungono carattere e ricercatezza. Morbido e confortevole, è perfetto per salotti, studi o ambienti dallo stile classico e contemporaneo.',
    category: 'Divani',
    price: '€ 2.000,00',
    gallery: ['/images/Coppia-di-Divani-Boston.png'],
    specifications: {
      altezza: '85 cm',
      larghezza: '190 cm',
      profondita: '90 cm',
      materiale: 'Tessuto',
      colore: 'Bianco/Beige'
    }
  },
  {
    image: '/images/Consolle-in-Rovere.png',
    name: 'Consolle in Rovere',
    description: 'Elegante consolle in legno massello con finitura calda e venature naturali. Il fregio frontale intagliato e le linee sottili delle gambe donano un carattere raffinato e senza tempo. Dotata di un pratico ripiano inferiore, è perfetta per ingressi, salotti o corridoi, ideale per esporre decorazioni o per aggiungere un tocco di stile classico all\'ambiente.',
    category: 'Tavolini',
    price: '€ 650,00',
    gallery: ['/images/Consolle-in-Rovere.png'],
    specifications: {
      altezza: '80 cm',
      larghezza: '80 cm',
      profondita: '40 cm',
      materiale: 'Rovere',
      colore: 'Rovere medio'
    }
  },
  {
    image: '/images/Tavolo-Ottagonale-Bicolore.jpg',
    name: 'Tavolo in Rovere Bicolore',
    description: 'Elegante tavolino da salotto in stile classico, caratterizzato da gambe sagomate e struttura color avorio con finitura anticata. Il piano in legno bicolore, rifinito con cornice chiara, aggiunge un tocco raffinato e armonioso. Dotato di pratico cassetto frontale, è ideale per completare soggiorni o ambienti dallo stile tradizionale con un elemento funzionale e di grande charme.',
    category: 'Tavoli',
    price: '€ 600,00',
    gallery: ['/images/Tavolo-Ottagonale-Bicolore.jpg'],
    specifications: {
      altezza: '38 cm',
      larghezza: '132 cm',
      profondita: '70 cm',
      materiale: 'Ciliegio',
      colore: 'Marrone/Beige'
    }
  },
  {
    image: '/images/Coppia-Poltrone-Dona-Wenge-Rivestimento-Animalier.png',
    name: 'Coppia Poltrone Dona Wenge Rivestimento Animalier',
    description: 'Poltrone di pregio in stile classico, caratterizzata da una struttura in legno laccato nero e seduta rivestita in tessuto animalier effetto zebra. Lo schienale rotondo con borchie decorative aggiunge un tocco sofisticato e ricercato. Ideale per salotti, studi o ambienti dal carattere deciso, è un pezzo distintivo che unisce comfort e forte personalità.',
    category: 'Poltrone',
    price: '€ 1.500,00',
    gallery: ['/images/Coppia-Poltrone-Dona-Wenge-Rivestimento-Animalier.png'],
    specifications: {
      altezza: '65 cm',
      larghezza: '70 cm',
      profondita: '70 cm',
      materiale: 'Legno/Tessuto',
      colore: 'Nero/Marrone/Beige'
    }
  },
  {
    image: '/images/Consolle-in-Legno.png',
    name: 'Consolle in Legno',
    description: 'Elegante consolle in legno massello con finitura calda e naturale, dotata di un pratico cassetto frontale con maniglie in metallo decorato. La linea sottile delle gambe e il ripiano inferiore la rendono ideale per ingressi, corridoi o zone living. Un complemento d\'arredo raffinato, funzionale e dal fascino senza tempo.',
    category: 'Consolle',
    price: '€ 450,00',
    gallery: ['/images/Consolle-in-Legno.png'],
    specifications: {
      altezza: '76 cm',
      larghezza: '70 cm',
      profondita: '35 cm',
      materiale: 'Ciliegio e Noce',
      colore: 'Ciliegio e Noce Chiaro'
    }
  },
  {
    image: '/images/Tavolo-Sellaro-1987.png',
    name: 'Tavolo Sellaro 1987',
    description: 'Collezione "Le piazze" Tavolo rettangolare a bordo rastremato del designer Luca Scacchetti. Tavolo dal design moderno ed essenziale, caratterizzato da un ampio piano in legno massello e due solide basi geometriche incrociate. La struttura robusta e la finitura calda lo rendono ideale per sale da pranzo, uffici o ambienti contemporanei. Un complemento elegante e raffinato che unisce stile e funzionalità.',
    category: 'Tavoli',
    price: '€ 1.800,00',
    gallery: ['/images/Tavolo-Sellaro-1987.png'],
    specifications: {
      altezza: '72 cm',
      larghezza: '210 cm',
      profondita: '90 cm',
      materiale: 'Massello',
      colore: 'Noce Chiaro'
    }
  },
  {
    image: '/images/Credenza-Sellaro.png',
    name: 'Credenza Sellaro',
    description: 'Credenza Classica in Legno di Luca Scacchetti. Maestosa credenza in stile classico realizzata in legno massello, caratterizzata da tre pannelli frontali con lavorazione geometrica e venature evidenti. La finitura calda e lucida valorizza le linee tradizionali e conferisce grande pregio al mobile. Ideale per soggiorni, sale da pranzo o studi, offre un\'eleganza senza tempo e una presenza scenica raffinata.',
    category: 'Credenze',
    price: '€ 2.200,00',
    gallery: ['/images/Credenza-Sellaro.png'],
    specifications: {
      altezza: '78 cm',
      larghezza: '187 cm',
      profondita: '78 cm',
      materiale: 'Massello',
      colore: 'Ciliegio'
    }
  }
];

interface ProductsProps {
  selectedCategory: string;
}

const Products = forwardRef<HTMLDivElement, ProductsProps>(({ selectedCategory }, ref) => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === 'Tutti'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    <section id="collezione" ref={ref} className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-100 mb-4 px-4">
            {selectedCategory === 'Tutti'
              ? 'Scopri la Nostra Collezione di Mobili Artigianali'
              : selectedCategory}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed px-4">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'prodotto disponibile' : 'prodotti disponibili'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden bg-stone-900 aspect-square mb-4 border border-stone-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-serif text-amber-100 group-hover:text-amber-400 duration-300 text-center sm:text-left">
                  {product.name}
                </h3>
                {product.price && (
                  <div className="text-base sm:text-lg font-semibold text-amber-600">
                    {product.price}
                  </div>
                )}
              </div>
              <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
});

Products.displayName = 'Products';

export default Products;
