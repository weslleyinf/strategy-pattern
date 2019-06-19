import { Duck } from '../../abstract/duck';
import { FlyNoWay } from '../fly/fly-no-way';
import { Squeak } from '../quack/squeak';

export class RubberDuck extends Duck {
    constructor() {
        super();
        this.FlyBehavior = new FlyNoWay();
        this.QuackBehavior = new Squeak();
    }

    display(): void {
        console.log('I\'m a rubber duck');
    }
}
