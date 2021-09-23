import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { Menu3DComponent } from '../componentes/menu/menu.component';
import { ImageHoverComponent } from '../componentes/image-hover/image-hover.component';
import { ChefComponent } from './chef/chef.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactoComponent,
    MenuComponent,
    Menu3DComponent,
    ImageHoverComponent,
    ChefComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class PagesModule { }
