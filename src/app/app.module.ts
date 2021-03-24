import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SettingsProvider} from '../providers/settings/settings';
import {Pedometer} from '@ionic-native/pedometer';
import {Vibration} from "@ionic-native/vibration";
import {Camera} from "@ionic-native/camera";

@NgModule({
    declarations: [
        MyApp,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SettingsProvider,
        Pedometer,
        Vibration,
        Camera



    ]
})
export class AppModule {
}
