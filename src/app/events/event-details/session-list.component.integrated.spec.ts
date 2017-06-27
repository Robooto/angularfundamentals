import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';
import { VoterService, UpvoteComponent } from "./index";
import { DurationPipe } from "../index";
import { CollapsibleWellComponent } from "../../common/index";

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async() => {
        let mockAuthService = { isAuthenticated: () => true, currentUser: { userName: 'Test'}};
        let mockVoterService = { userHasVoted: () => true };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [SessionListComponent, UpvoteComponent, DurationPipe, CollapsibleWellComponent],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [NO_ERRORS_SCHEMA] // dont throw an error on components that it does not know about
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'begginer', abstract: 'abstract', voters: ['john', 'bob']}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges({});
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })
    });
});