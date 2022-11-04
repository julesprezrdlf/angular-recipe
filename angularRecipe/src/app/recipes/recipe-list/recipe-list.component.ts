import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
    new Recipe ('A test','another test','https://cdn.shopify.com/s/files/1/0272/0202/7618/t/51/assets/lol-big-logo.svg?v=168172767227458556691663134004')
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
