import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedPage } from './logged';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoggedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LoggedPage),
  ],
})
export class LoggedPageModule {}
