import { Component, OnInit } from '@angular/core';
import { Duck } from './abstract/duck';
import { MallardDuck } from './class/duck/mallard-duck';
import { FlyRocketPowered } from './class/fly/fly-rocket-powered';
import { FlyWithWings } from './class/fly/fly-with-wings';
import { Quack } from './class/quack/quack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Quack ducK';

  ngOnInit(): void {
    this.duckSimulator();
  }

  private duckSimulator(): void {
    const mallard: Duck = new MallardDuck();
    mallard.display();

    mallard.setQuackBehavior(new Quack());
    mallard.QuackBehavior.quack();

    mallard.setFlyBehavior(new FlyWithWings());
    mallard.FlyBehavior.fly();

    mallard.setFlyBehavior(new FlyRocketPowered());
    mallard.FlyBehavior.fly();
  }
}
