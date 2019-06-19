import { Duck } from '../../abstract/duck';
import { FlyNoWay } from '../fly/fly-no-way';
import { MuteQuack } from '../quack/mute-quack';

export class DecoyDuck extends Duck {
    constructor() {
        super();
        this.FlyBehavior = new FlyNoWay();
        this.QuackBehavior = new MuteQuack();
    }

    display(): void {
        console.log('I\'m a decoy duck');
    }
}
