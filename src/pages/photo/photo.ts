import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-photo',
    templateUrl: 'photo.html',
})
export class PhotoPage {
    public photos: any;
    public base64Image: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PhotoPage');
    }


    takePhoto() {

        const options: CameraOptions = {
            quality: 50, // picture quality
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }

    ngOnInit() {
        this.photos = [];
    }

    deletePhoto(index) {
        let confirm = this.alertCtrl.create({
            title: 'This photo will be deleted!',
            message: 'After this there is no undo!',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Confirm',
                    handler: () => {
                        console.log('Agree clicked');
                        this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

}
