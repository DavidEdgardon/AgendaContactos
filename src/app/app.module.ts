import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { FilterTexboxComponent } from './filter-texbox/filter-texbox.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ListarContactosComponent } from './listar-contactos/listar-contactos.component';
import { AgregarContactoComponent } from './agregar-contacto/agregar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    ListarContactosComponent,
    FilterTexboxComponent,
    AgregarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
