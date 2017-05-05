import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { ProfileComponent } from "./profile.component";
import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [ 
        ProfileComponent,
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        UserRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
})
export class UserModule {}