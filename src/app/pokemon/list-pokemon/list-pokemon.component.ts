import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Pokemon } from "../pokemon";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { BorderCardDirective } from "../border-card.directive";
import { SearchPokemonComponent } from "../search-pokemon/search-pokemon.component";

@Component({
    selector: "app-list-pokemon",
    templateUrl: "./list-pokemon.component.html",
    standalone: true,
    imports: [SearchPokemonComponent, NgFor, BorderCardDirective, NgIf, RouterLink, PokemonTypeColorPipe]
})
export class ListPokemonComponent implements OnInit {
  // title = "Liste de Pokémons";
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  errorPokemonSelected: boolean;
  newDateFormat: any;

  @ViewChild("searchBar") inputSearchBar: ElementRef;

  constructor(
    private dateFormat: DatePipe,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
      .subscribe((pokemonList) =>
        (this.pokemonList = pokemonList)
          .map((pokemon) => {
            this.newDateFormat = this.dateFormat.transform(
              pokemon.created,
              "EEEE dd LLLL YYYY"
            );
          })
      );

    this.errorPokemonSelected = false;

    // Format date
    // this.pokemonList.map((pokemon) => {
    //   if (pokemon) {
    //     this.newDateFormat = this.dateFormat.transform(
    //       pokemon.created,
    //       "EEEE dd LLLL YYYY"
    //     );
    //   }
    // });
  }

  // selectPokemon(pokemonId: any) {
  //   this.clear();

  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)

  //   if (pokemon) {
  //     console.log(`Vous avez demander le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;

  //   } else {
  //     console.log(`Vous avez demander un pokemon qui n'exsite pas`);
  //     this.pokemonSelected = pokemon;
  //     this.errorPokemonSelected = true;
  //     // this.errorPokemonSelected = "Vous avez demander un pokemon qui n'exsite pas"
  //   }
  // };

  // clear() {
  //   this.inputSearchBar.nativeElement.value = '';
  //   this.errorPokemonSelected = false;
  // };

  formatDate(date: any) {
    date.toLocaleDateString("fr");
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
