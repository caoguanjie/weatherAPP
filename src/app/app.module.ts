import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule, JsonpModule } from '@angular/http';
import { BusinessService } from '../providers/business.service';
import { CommonService } from '../providers/CommonService';
import { HttpService } from '../providers/HttpService';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../providers/token-service';
import { JPush } from 'ionic3-jpush';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      backButtonIcon:'arrow-back',
      iconMode:'md',
      mode:"md",
      tabsHideOnSubPages:'true',
      swipeBackEnabled:false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    JPush,
    BusinessService,
    CommonService,
    TokenService,
    HttpService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
