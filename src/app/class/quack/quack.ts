import { IQuackBehavior } from '../../interface/quack-behavior';

export class Quack implements IQuackBehavior {
    constructor() { }

    quack(): void {
        console.log('Quack Quack!');
    }
}
