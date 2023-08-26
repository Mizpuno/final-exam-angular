
import { Injectable} from "@angular/core";
import { TheaterRestSource } from "./rest.datasource";
import { Theater, Movie } from "./schema.model";
import { Showtime } from "./showtime.model";

@Injectable()
export class TheaterRepository {
    public theaters: Theater[] = []
    public showtimes: Showtime[] = []
    
    constructor(private theaterService: TheaterRestSource) {
        this.theaterService.getTheaters().subscribe(
            theaters => this.theaters = theaters
        );

        this.theaterService.getShowtimes().subscribe(
            showtimes => this.showtimes = showtimes
        )
    }

    get getTheaters(): Theater[] {
        return this.theaters
    }

    get getShowTimes(): Showtime[] {
        return this.showtimes
    }
}