import { Component } from '@angular/core'; 
import { NavController, NavParams } from 'ionic-angular'
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
    selector:'page-getfile-upload',
    templateUrl:'getfile-upload.html',
})
export class GetfileUploadPage{
    fileChooser;
    item;
    constructor(private FileChooser: FileChooser,private params:NavParams) {
        this.fileChooser=FileChooser;
        this.item=params;
        this.fileChooser.open()
            .then(uri => console.log(uri))
            .catch(e => console.log(e));
     }



}