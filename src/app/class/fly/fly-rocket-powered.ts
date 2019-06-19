import { IFlyBehavior } from '../../interface/fly-behavior';

export class FlyRocketPowered implements IFlyBehavior {
    constructor() { }

    fly(): void {
        console.log('I\'am flying with a rocket! >-<');
    }
}
