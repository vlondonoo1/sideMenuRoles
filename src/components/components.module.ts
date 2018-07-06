import { NgModule,  } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ButtonsitoComponent } from './buttonsito/buttonsito';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [ButtonsitoComponent],
  imports: [IonicModule,DirectivesModule],
  exports: [ButtonsitoComponent]
})
export class ComponentsModule {}
