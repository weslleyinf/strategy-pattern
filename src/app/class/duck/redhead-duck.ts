import { Duck } from '../../abstract/duck';
import { Quack } from '../quack/quack';
import { FlyNoWay } from '../fly/fly-no-way';

export class RedheadDuck extends Duck {
    constructor() {
        super();
        this.FlyBehavior = new FlyNoWay();
        this.QuackBehavior = new Quack();
    }

    display(): void {
        console.log('I\'m a redhead duck');
    }
}
