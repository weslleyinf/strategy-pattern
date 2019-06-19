import { Duck } from '../../abstract/duck';

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.FlyBehavior = null;
        this.QuackBehavior = null;
    }

    display(): void {
        console.log('I\'m a model duck');
    }
}
