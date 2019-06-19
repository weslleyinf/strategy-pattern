import { IQuackBehavior } from '../../interface/quack-behavior';

export class Squeak implements IQuackBehavior {
    constructor() { }

    quack(): void {
        console.log('Squeak!!');
    }
}
