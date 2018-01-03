import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Camera } from '../../../../plugins/cordova-plugin-camera';
import {Camera} from '@ionic-native/camera';

@Component({
    selector:'page-take-photos',
    templateUrl:'take-photos.html',
})
export class TakePhotosPage{
    public base64Image: string;
    public camera;
    constructor(camera:Camera) {
        this.camera=camera;
    }
  
    takePicture(){
        this.camera.getPicture({
          destinationType: this.camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });
    }
}