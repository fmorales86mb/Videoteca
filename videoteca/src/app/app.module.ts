import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PrimeNG
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/components/header/header.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { MovieFormComponent } from './layout/components/movie-form/movie-form.component';
import { MoviesListComponent } from './layout/components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieFormComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
