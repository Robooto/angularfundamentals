import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService){}

    resolve(route: ActivatedRouteSnapshot) {
        // return events short hand
        // because this is in a resolver return obserable instead of data in a subscription
        return this.eventService.getEvent(+route.params['id']);
    }
}