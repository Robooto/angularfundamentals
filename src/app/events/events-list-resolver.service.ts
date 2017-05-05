import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService){}

    resolve() {
        // return events short hand
        // because this is in a resolver return obserable instead of data in a subscription
        return this.eventService.getEvents().map(events => events);
    }
}