import { Component, OnInit } from '@angular/core';
import { HEROES } from './../../data/mock-heroes';
import { Hero } from '../../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any;
  selectedHero: Hero;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
