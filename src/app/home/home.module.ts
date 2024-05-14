import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonInfiniteScrollContent, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardjobComponent } from './components/cardjob/cardjob.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardjobComponent]
})
export class HomePageModule {}
