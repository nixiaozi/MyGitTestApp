import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DemoPage} from '../pages/demo/demo';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfiniteScrollPage } from '../pages/infinite-scroll/infinite-scroll';
import { TakePhotosPage } from '../pages/testpages/take-photos/take-photos'
import { MockProvider } from '../pages/infinite-scroll/provider';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    InfiniteScrollPage, //所有在 entryComponents 中的页面都需要在这里加入引用
    TakePhotosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    InfiniteScrollPage,  //所有的页面都需要在 entryComponents 中加入
    TakePhotosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MockProvider, //需要在app级别加上引用
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
