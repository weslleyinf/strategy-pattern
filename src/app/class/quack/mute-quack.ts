import { IQuackBehavior } from '../../interface/quack-behavior';

export class MuteQuack implements IQuackBehavior {
    constructor() { }

    quack(): void {
        console.log('......(silence)');
    }
}
