import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // heroes list is equel
  heroes = HEROES;
  // selected hero type of Hero 
  selectedHero: Hero;
  // function onSelect 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }
  
  ngOnInit(): void {
    console.log()
  }

}