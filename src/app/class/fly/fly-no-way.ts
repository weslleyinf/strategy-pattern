import { IFlyBehavior } from '../../interface/fly-behavior';

export class FlyNoWay implements IFlyBehavior {
    constructor() { }

    fly(): void {
        console.log('I can\'t fly T-T');
    }
}
