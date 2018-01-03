import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular'
import { InfiniteScrollPage } from '../infinite-scroll/infinite-scroll';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TakePhotosPage} from '../testpages/take-photos/take-photos';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-demo',
//   templateUrl: 'demo.html',
// })
// export class DemoPage {
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad DemoPage');
//   }

// }
@Component({
  selector:'page-demo',
  templateUrl: 'demo.html',
  // template: `<ion-nav [root]="root"></ion-nav>`,
})
export class DemoPage{
  items = [];
  nav;
  params;
  constructor(nav:NavController, params:NavParams){
    this.nav=nav;
    this.items = [
      {
        'title': '滚动加载',
        'icon': 'angular',
        'description': '大量数据的异步滚动加载.',
        'color': '#E63135',
        'type':NavPageEnum.InfiniteScroll,
      },
      {
        'title': '照相机',
        'icon': 'css3',
        'description': '通过照相机拍照直接上传',
        'color': '#0CA9EA',
        'type':NavPageEnum.Camera,
      },
      {
        'title': '文件管理',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529',
        'type':NavPageEnum.FileManager,
      },
      {
        'title': '消息推送',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439',
        'type':NavPageEnum.NotificationPush,
      },
      {
        'title': '社交分享',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296',
        'type':NavPageEnum.SocailShare,
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }

  openNavDetailsPage(item) {
    switch(item.type){
      case NavPageEnum.InfiniteScroll:
        this.nav.push(InfiniteScrollPage,{item:item});
        break;
      case NavPageEnum.Camera:
        this.nav.push(TakePhotosPage,{item:item});
        break;
      default:
        alert(item.title);
        break;
    }
    
    // this.nav.push(NavigationDetailsPage, { item: item });
  }
  
}

export enum NavPageEnum{
  InfiniteScroll=1, //滚动加载
  Camera=2, //照相机
  FileManager=3, //文件管理
  NotificationPush=4, //消息推送
  SocailShare=5, //社交分享
}
