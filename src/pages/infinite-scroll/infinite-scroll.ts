import { Component } from '@angular/core';
import { InfiniteScroll,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockProvider } from './provider'
// import { InfiniteScroll } from 

/**
 * Generated class for the InfiniteScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {
  item; // 传递参数到前端页面需要自定义参数名
  items; // 滚动加载的数据
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private mockProvider: MockProvider) {
    this.item=navParams.get("item");

    this.items=mockProvider.getData();

  }


  doInfinite(infiniteScroll: InfiniteScroll) {
    this.mockProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push( newData[i] );
      }

      infiniteScroll.complete();

      if (this.items.length > 90) {
        infiniteScroll.enable(false);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfiniteScrollPage');
  }

}
