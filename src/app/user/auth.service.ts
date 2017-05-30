import { Injectable } from '@angular/core';
import { IUser } from "./user.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    currentUser:IUser;

    constructor(private http: Http) {}

    loginUser(userName: string, password: string){
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = { username: userName, password: password };

        // use do for doing things but no side effects (do not change data)
        return this.http.post('http://localhost:8808/api/login', loginInfo, options)
            .do(resp => {
                if (resp) {
                    this.currentUser = <IUser>resp.json().user;
                }
            })
            .catch(error => {
                return Observable.of(false);
            })
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this.http.get('http://localhost:8808/api/currentIdentity')
        .map((response: any) => {
            if(response._body) {
                return response.json();
            } else {
                return {};
            }
        })
        .do(currrentUser => {
            if (!!currrentUser.userName){
                this.currentUser = currrentUser;
            }
        }).subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(`http://localhost:8808/api/${this.currentUser.id}`, this.currentUser, options);
    }

    logout() {
        this.currentUser = undefined;

        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(`http://localhost:8808/api/logout`, {}, options);
    }
}