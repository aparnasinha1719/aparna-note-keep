import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleNotesComponent } from './google-notes/google-notes.component';
import { GoogleDemoComponent } from './google-demo/google-demo.component';
import { GoogleTrashComponent } from './google-trash/google-trash.component';


const routes: Routes = [
  { path: 'google-notes', component: GoogleNotesComponent },
  { path: 'google-demo', component: GoogleDemoComponent },
  { path: 'google-trash', component: GoogleTrashComponent },
  { path: '',   redirectTo: '/google-notes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
