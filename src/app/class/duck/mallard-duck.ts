import { Duck } from '../../abstract/duck';
import { FlyWithWings } from '../fly/fly-with-wings';
import { Quack } from '../quack/quack';

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.FlyBehavior = new FlyWithWings();
        this.QuackBehavior = new Quack();
    }

    display(): void {
        console.log('I\'m a mallard duck');
    }
}
