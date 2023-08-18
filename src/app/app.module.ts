import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './shared/shared.module';
import { from } from 'rxjs';

//FIREBASE
//Nos conectamos con la base de datos; Nos trae modulos necesarios
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //CLOUD FIRESTORE
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //AUTENTIFICACION
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //IMAGENES

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
