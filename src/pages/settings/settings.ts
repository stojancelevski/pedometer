import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {SettingsProvider} from '../../providers/settings/settings';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {
    goal: number;
    minutes: number;
    height: number;
    distance:number;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public toastCtrl: ToastController,
                public settings: SettingsProvider,
                ) {
        this.goal = this.settings.getGoal();

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingsPage');
    }

    displayToast(msg){
        let toast=this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    update() {
        this.distance= this.minutes*100;
        this.goal=this.distance/0.762;
        let value = Math.trunc(this.goal);
        this.settings.setGoal(value);
        console.log(value);
        this.displayToast("Your goal is to reach " + value + " for today!");

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
