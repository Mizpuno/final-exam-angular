import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Theater } from "./schema.model"
import { Observable } from "rxjs"
import { Showtime } from "./showtime.model"

@Injectable()
export class TheaterRestSource {
    baseUrl: string
    
    constructor(private http: HttpClient) {
        this.baseUrl = 'https://cpsu-test-api.herokuapp.com/api/camt2023/'
    }

    getTheaters(): Observable<Theater[]> {
        return this.http.get<Theater[]>(this.baseUrl + "theaters")
    }

    getShowtimes(): Observable<Showtime[]> {
        return this.http.get<Showtime[]>(this.baseUrl + "shows")
    }
}