import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedPage } from './logged';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    LoggedPage,
  ],
  imports: [
    ComponentsModule,
	DirectivesModule,
    IonicPageModule.forChild(LoggedPage),
  ],
})
export class LoggedPageModule {}
