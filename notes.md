# Notes

Template Variables in angular 

    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log foo</button>

    Can call any public method on a component

    Can also bind to properties too

    ngSwitch for more advanced ngIfs type things


Class styles bind to specific class <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">

ngClass can do multiple styles <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">

can also use a function that returns an object