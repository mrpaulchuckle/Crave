import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { AccountHolderComponent } from './account-holder/account-holder.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account-holders', component: AccountHoldersComponent },
  { path: 'account-holder/:id', component: AccountHolderComponent },
  { path: 'account-holder-form', component: AccountHolderFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
