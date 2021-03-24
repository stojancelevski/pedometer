import {Injectable} from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
    goal: number = 1;

    constructor() {
        console.log('Hello SettingsProvider Provider');
        console.log(this.getGoal());
    }

    setGoal(goal: number) {
        if (goal && goal > 0) {
            this.goal = goal;
        }
    }

    getGoal() {
        return this.goal;


    }
}
