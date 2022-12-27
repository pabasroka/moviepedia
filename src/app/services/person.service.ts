import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as urlPaths from '../constants/urlPaths';
import {Movie} from "../interfaces/movie";
import {Observable} from "rxjs";
import {PersonList} from "../interfaces/person-list";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPopularPeoples(id: number): Observable<PersonList> {
    return this.http.get<PersonList>(urlPaths.getPopularPeople(id));
  }
}
