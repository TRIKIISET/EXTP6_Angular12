import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ErrorComponent } from './components/error/error.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';

const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'livres', component: ListlivresComponent },
  { path: 'livres/:id', component: SelectedLivreComponent },
  { path:'aboutus', component: AboutusComponent},
  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
