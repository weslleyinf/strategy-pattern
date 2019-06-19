import { IFlyBehavior } from '../interface/fly-behavior';
import { IQuackBehavior } from '../interface/quack-behavior';

export abstract class Duck {
    FlyBehavior: IFlyBehavior;
    QuackBehavior: IQuackBehavior;

    constructor() { }

    abstract display(): void;

    performFly(): void {
        this.FlyBehavior.fly();
    }

    performQuack(): void {
        this.QuackBehavior.quack();
    }

    swim(): void {
        console.log('All ducks float, even decoys!');
    }

    setFlyBehavior(fb: IFlyBehavior): void {
        this.FlyBehavior = fb;
    }

    setQuackBehavior(qb: IQuackBehavior): void {
        this.QuackBehavior = qb;
    }
}
