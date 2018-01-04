import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'

@Component({
    selector:'page-social-share',
    templateUrl:'social-share.html',
})
export class SocialSharePage{
    socialsharing;
    constructor(SocialSharing:SocialSharing){
        this.socialsharing=SocialSharing;
    }

    options = {
        message: 'share this', // not supported on some apps (Facebook, Instagram)
        subject: 'the subject', // fi. for email
        files: ['', ''], // an array of filenames either locally or remotely
        url: 'https://www.website.com/foo/#bar?a=b',
        chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
      }
    onSuccess = function(result) {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
      }
    onError = function(msg) {
        console.log("Sharing failed with message: " + msg);
      }

    ShareContext(){
        //this.socialsharing.shareViaWhatsApp(this.options.message,this.options.files[0],this.options.url);
        // this.socialsharing.canShareVia('com.tencent.mm/com.tencent.mm.ui.tools.ShareToTimeLineUI', 
        //     this.options.message, this.options.subject, this.options.files[0], this.options.url)
        //     .then(()=>{
        //         alert("can ves");
        //     }).catch(() => {
        //         alert("can't vct")
        //     });
        //this.socialsharing.shareWithOptions(this.options, this.onSuccess, this.onError);
        // this.socialsharing.shareVia('com.tencent.mm/com.tencent.mm.ui.tools.ShareToTimeLineUI', 
        //     this.options.message, this.options.subject, this.options.files[0], this.options.url)
        //     .then(() => {
        //         alert("share can ves");
        //       }).catch(() => {
        //         alert("share can't vct")
        //       });
        this.socialsharing.share(this.options.message, this.options.subject, this.options.files[0], this.options.url);
        // this.socialsharing.available(function(isAvailable){
        //     if (isAvailable){
                 // use a local image from inside the www folder:
//      window.plugins.socialsharing.share('Some text', 'Some subject', null, 'http://www.nu.nl');
//      window.plugins.socialsharing.share('Some text');

//      window.plugins.socialsharing.share('test', null, 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null, function(e){alert("success: " + e)}, function(e){alert("error: " + e)});
//this.socialsharing.share('My text', 'My subject', 'https://www.google.nl/images/srpr/logo11w.png', null, function(){alert("ok")}, function(e){alert("error: " + e)});
      // alternative usage:

      // 1) a local image from anywhere else (if permitted):
      // window.plugins.socialsharing.share('Some text', 'http://domain.com', '/Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg');

      // 2) an image from the internet:
//      window.plugins.socialsharing.share('Some text', "Some subject', 'http://domain.com', 'http://domain.com/image.jpg');

      // 3) text and link:
//      window.plugins.socialsharing.share('Some text and a link', '', '', 'http://www.nu.nl');
        //     }
        // });


    }


}