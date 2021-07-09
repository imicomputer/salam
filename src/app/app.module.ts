import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';

import { BukuComponent } from './components/buku/buku.component';
import { BukuDetailComponent } from './components/buku/buku-detail.component';
import { BukuNewComponent } from './components/buku/buku-new.component';

import { SalamComponent } from './components/salam/salam.component';

import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { PelangganDetailComponent } from 'src/app/components/pelanggan/pelanggan-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    SalamComponent,
    BukuDetailComponent,
    MessagesComponent,
    BukuNewComponent,
    PelangganComponent,
    PelangganDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
