# 💎 Minerali e Para-gemme — Atlante Interattivo

Un atlante mineralogico interattivo da usare nel browser: un percorso visivo tra struttura cristallina,
composizione chimica e bellezza naturale, dai silicati classici alle para-gemme più affascinanti.

## Cosa contiene

- **Introduzione**: cosa sono minerali, gemme e para-gemme, con una nota sui mineraloidi (come opale e ossidiana)
  che non hanno una struttura cristallina ordinata.
- **Catalogo con schede fisico-chimiche**: formula, durezza (scala di Mohs), densità, sistema cristallino, colore,
  lucentezza, sfaldatura e frattura di ogni campione. Si può cercare per nome, filtrare per colore e per durezza minima.
- **Elementi nativi e minerali metallici**: oro e argento in una sezione a parte, per non confonderli con le gemme.
- **Tabella comparativa** per confrontare a colpo d'occhio formula, durezza, densità, sistema e colore.
- **Quiz interattivo** con punteggio, per mettersi alla prova sulle proprietà dei minerali.
- **Galleria fotografica** con ingrandimento e **scheda di dettaglio** per ogni campione.
- **Cristallo 3D animato** nella pagina iniziale (Three.js), effetti di inclinazione sulle schede e animazioni allo scorrimento.

Campioni: agata, ametista, argento, diamante, lapislazzuli, malachite, onice, opale, oro, ossidiana, quarzo,
rubino, smeraldo, topazio, turchese e zaffiro.

## Come aprirlo

È un sito statico (HTML, CSS e JavaScript, senza installazioni): basta aprire `index.html` nel browser,
oppure pubblicarlo con GitHub Pages (*Settings → Pages → Deploy from a branch → main*).

## Struttura

```
index.html        pagina e sezioni
styles.css        stile e animazioni
script.js         catalogo dei minerali, filtri, quiz, galleria e scena 3D
assets/images/    foto dei campioni
```

## Tecnologie

HTML5, CSS3, JavaScript senza framework e [Three.js](https://threejs.org/) per il cristallo 3D.

## Nota sulle immagini

Le foto dei campioni sono usate a scopo didattico. Se riusi il progetto, verifica la licenza di ciascuna immagine.
