import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { PruebaComponent } from './prueba/prueba.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CambiarColorDirective } from './cambiar-color.directive';
import { ResumirPipe } from './resumir.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    PruebaComponent,
    UsuarioComponent,
    CambiarColorDirective,
    ResumirPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
