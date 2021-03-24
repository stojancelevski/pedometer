import {Component, ChangeDetectorRef} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SettingsProvider} from '../../providers/settings/settings';
import {Pedometer} from '@ionic-native/pedometer';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    steps: number = 0;
    goal: number;
    percentage: number;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private ref: ChangeDetectorRef,
                public pedometer: Pedometer,
                public settings: SettingsProvider,
                public toastCtrl: ToastController,
                private vibration: Vibration,
                private alertCtrl: AlertController
    ) {


    }
    displayToast(msg){
        let toast=this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    presentAlert(msg,msg2) {
        let alert = this.alertCtrl.create({
            title: msg,
            subTitle: msg2,
            buttons: ['Dismiss']
        });
        alert.present();
    }


    start() {
        if(this.settings.getGoal()==1){
            this.displayToast('Please first set your daily goal.');
            this.vibration.vibrate(500);
        }
        else
        {

            this.pedometer.startPedometerUpdates().subscribe((data) => {
                this.steps = data.numberOfSteps;
                this.setPercentage();
                this.ref.detectChanges();
                if(this.settings.getGoal()==this.steps){
                    this.pedometer.stopPedometerUpdates();
                    this.vibration.vibrate(2000);
                    this.presentAlert("Success!","You have succesffully finished your goal");
                }
            },(err)=>{
                console.log(err);
            });

            this.goal = this.settings.getGoal();
            this.setPercentage();
        }

    }

    
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    setPercentage() {
        this.percentage = (this.steps / this.goal) * 100;
        let value = Math.trunc(this.percentage);
        this.percentage=value;
    }


}
