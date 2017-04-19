import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      FCMPlugin.getToken(
        (t) => {
          console.log(t);
        },
        (e) => {
          console.log(e);
        }
      );

      FCMPlugin.onNotification(
        (data) => {
          console.log(data);
        },
        (e) => {
          console.log(e);
        }
      );
    });
  }
}
