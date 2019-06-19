import { IFlyBehavior } from '../../interface/fly-behavior';

export class FlyWithWings implements IFlyBehavior {
    constructor() { }

    fly(): void {
        console.log('I\'am flying ^-^');
    }
}
