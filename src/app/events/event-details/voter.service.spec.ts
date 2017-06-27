import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs/Rx';

describe('Voter Service', () => {
    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {

        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ["joe", "john"]};
            mockHttp.delete.and.returnValue(Observable.of(false));
            // force cast so you don't need all the properties
            voterService.deleteVoter(3, <ISession>session, "joe");
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        });

        it('should call http.delete wit hthe right URL', () => {
            var session = { id: 6, voters: ["joe", "john"]};
            mockHttp.delete.and.returnValue(Observable.of(false));
            // force cast so you don't need all the properties
            voterService.deleteVoter(3, <ISession>session, "joe");

            expect(mockHttp.delete).toHaveBeenCalledWith('http://localhost:8808/api/events/3/sessions/6/voters/joe')
        })
    });

    describe('add voter', () => {
        it('should call http.post with the right URL', () => {
            var session = { id: 6, voters: [ "john"]};
            mockHttp.post.and.returnValue(Observable.of(false));
            // force cast so you don't need all the properties
            voterService.addVoter(3, <ISession>session, "joe");
            //jasmin.any(<T>) creates an object of a type!
            expect(mockHttp.post).toHaveBeenCalledWith('http://localhost:8808/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
        })
    })
});