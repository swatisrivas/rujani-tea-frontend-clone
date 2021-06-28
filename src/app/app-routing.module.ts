import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { noop } from 'rxjs';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'all-teas', pathMatch: 'full', component: ListingComponent },
  { path: 'teas/:category', pathMatch: 'full', component: ListingComponent },
  { path: 'tea/:id', pathMatch: 'full', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
