
import { ProfileComponent } from "./profile.component";
import { NgModule }            from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}