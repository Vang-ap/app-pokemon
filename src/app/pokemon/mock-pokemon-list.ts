import { Pokemon } from "./pokemon";

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poison"],
    description: "Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. Ce dernier lui sert également d'organe de stockage, puisqu'on rapporte notamment qu'en période de sécheresse, il peut survivre plusieurs jours sans manger grâce à l'énergie qui y est accumulée.",
    created: new Date(),
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    description: "Salamèche est un Pokémon bipède et reptilien avec un corps principalement orange, à l'exception de son ventre et de ses plantes de pieds qui sont beiges. Ses bras et ses jambes sont courts, avec respectivement quatre doigts et trois griffes chacune.",
    created: new Date(),
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
    description: "Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace brune au pourtour blanc, beige au niveau du ventre. Ses yeux sont grands et violacés. Il a une queue enroulée sur elle-même formant une spirale.",
    created: new Date(),
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: ["Insecte", "Poison"],
    description: "L'odorat d'Aspicot est extrêmement développé. Il lui suffit de renifler ses feuilles préférées avec son gros appendice nasal pour les reconnaître entre mille. Il mange chaque jour l'équivalent de son poids en feuilles et il utilise l'aiguillon sur sa tête pour repousser les attaques de ses ennemis.",
    created: new Date(),
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: ["Normal", "Vol"],
    description: "Roucool est un petit Pokémon aviaire au corps dodu. Il est principalement marron avec un visage, un ventre et quelques plumes de couleur crème. Ses serres et son bec sont gris rosâtre. Il a des marquages noirs angulaires autour des yeux et une petite crête aux plumes marron et crème sur le dessus de la tête.",
    created: new Date(),
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    types: ["Normal"],
    description: "Il peut ronger n'importe quoi avec ses deux dents. Quand on en voit un, il y en a certainement 40 dans le coin. Ses vibrisses lui confèrent un odorat très développé. Il peut ainsi détecter et localiser d'un coup de museau la nourriture cachée.",
    created: new Date(),
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
    types: ["Normal", "Vol"],
    description: "Piafabec crie tellement fort qu'il peut être entendu à 1km de distance. Ces Pokémon se préviennent d'un danger en entonnant une mélopée très aiguë, qu'ils se renvoient les uns les autres, comme un écho.",
    created: new Date(),
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: ["Poison"],
    description: "Abo est un Pokémon serpent au corps violet. Son ventre est complètement jaune, tout comme l'anneau qu'il possède autour du cou. Ses yeux sont aussi jaunes et il est muni d'une sonnette de la même couleur au bout de sa queue. Ce Pokémon est très peureux en temps normal, mais peut être agressif pendant les combats.",
    created: new Date(),
  },
  {
    id: 9,
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: ["Electrik"],
    description: "Pikachu est un petit Pokémon joufflu qui ressemble à un rongeur, au corps recouvert d'un pelage jaune avec deux bandes horizontales brunes dans le dos. Il a une petite bouche, de longues oreilles pointues aux extrémités noires et des yeux noir et blanc. Il a sur chacune de ses joues un marquage rouge qui est en réalité une poche contenant de l'électricité.",
    created: new Date(),
  },
  {
    id: 10,
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Normal"],
    description: "Il vit dans les monts enneigés d'une île tropicale. Lorsque le blizzard souffle, il s'enfonce dans la neige pour ne pas se faire emporter. À force de vivre au milieu des sommets enneigés, ce Pokémon a développé une carapace de glace dure comme l'acier.",
    created: new Date(),
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: ["Fée"],
    description: "Mélofée est un petit Pokémon bipède. Il a la fourrure rase et rose, avec deux oreilles dressées se terminant par une pointe brune. Entre elles, on trouve une grande mèche bouclée de fourrure rose.",
    created: new Date(),
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: ["Feu"],
    description: "Goupix est un petit Pokémon quadrupède à l'allure vulpine. Son pelage est rouge tomette avec un ventre de couleur crème. Il a de grands yeux noisette, des oreilles pointues à l'intérieur brun et un petit museau brun.",
    created: new Date(),
  },
];
