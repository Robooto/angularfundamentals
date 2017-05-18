import { Component, OnInit } from '@angular/core'

import { EventService } from './shared/event.service'
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./index";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute){ 

  }

  // handleThumbnailClick(eventName) {
  //   this.toastr.info(eventName);
  // }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events
    // });
    // getting something from resolver
    this.events = this.route.snapshot.data['events'];
  }

}