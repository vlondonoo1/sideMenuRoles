import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { CommonproviderProvider } from '../providers/commonprovider/commonprovider';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module'
import { SharedModule } from '../shared/shared.module';
import { LaguerthaProvider } from '../providers/laguertha/laguertha';
import { FelixProvider } from '../providers/felix/felix';
import { ConsoleProvider } from '../providers/console/console';
import { ChooseProvider } from '../providers/choose_provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CommonproviderProvider,
    // LaguerthaProvider,
    // FelixProvider
    { provide: ConsoleProvider, useFactory: ChooseProvider() },
  ]
})
export class AppModule {}
