import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { RouterModule } from "@angular/router";

import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Toastr from 'toastr';
import * as jQuery from 'jquery';
import { CollapsibleWellComponent, TOASTR_TOKEN, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from "./common/index";
import { EventResolver } from "./events/event-resolver.service";
@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    { // register toaster object with the token
      provide: TOASTR_TOKEN, useValue: Toastr 
    },
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventResolver, 
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
    VoterService
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) { 
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}