export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  description: string;
  created: Date;

  constructor(
    name: string = 'AjoutNom',
    hp: number = 100,
    cp: number = 10,
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
    types: string[] = ['Normal'],
    description: string = 'AjoutDéscription',
    created: Date = new Date,
  ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.description = description;
    this.created = created;
  }
}

export const PokemonType = [
  'Feu',
  'Eau',
  'Plante',
  'Insecte',
  'Normal',
  'Vol',
  'Poison',
  'Fée',
  'Psy',
  'Electrik',
  'Combat',
]