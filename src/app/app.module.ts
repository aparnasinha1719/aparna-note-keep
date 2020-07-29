import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleNavBarComponent } from './google-nav-bar/google-nav-bar.component';
import { GoogleSidebarComponent } from './google-sidebar/google-sidebar.component';
import { GoogleNotesComponent } from './google-notes/google-notes.component';
import { GoogleTrashComponent } from './google-trash/google-trash.component';
import { GoogleDemoComponent } from './google-demo/google-demo.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleNavBarComponent,
    GoogleSidebarComponent,
    GoogleNotesComponent,
    GoogleTrashComponent,
    GoogleDemoComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
