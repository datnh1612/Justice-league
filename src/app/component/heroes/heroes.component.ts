import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // This code is delete hero in UI for user view
    this.heroes = this.heroes.filter(h => h !== hero);
    // This code is delete hero in backend by send a request to serve
    this.heroService.deleteHero(hero).subscribe();
  }
}
