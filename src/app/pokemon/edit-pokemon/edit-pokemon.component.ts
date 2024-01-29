import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-edit-pokemon",
    template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>

    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" />
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
    styles: [],
    standalone: true,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string | null =
      this.activatedRoute.snapshot.paramMap.get("id");

    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
