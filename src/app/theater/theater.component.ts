import { Component } from '@angular/core';
import { Theater } from '../model/schema.model';
import { TheaterRepository } from '../model/theatherRepository';
import { Showtime } from '../model/showtime.model';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent {
  public catelog: string[][] = [] 
  public selectedTheater = 1
  public selectedTime: string | undefined
  public filteredTheater: Theater | undefined = this.getFilteredTheater() 
  alphabet = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']

  constructor(private repo: TheaterRepository) {
    for (let n = 0; n < 10; n++) {
      let tmp: string[] = []

      for (let i = 0; i < 15; i++) {
        tmp.push(`${this.alphabet[n]}${i}`)
      }
      this.catelog.push(tmp)
    }

    console.log (this.catelog)
  }

  get getTheaters(): Theater[] {
    return this.repo.getTheaters
  }

  get getShowTimes(): Showtime[] {
    return this.repo.getShowTimes
  }

  getFilteredTheater(): Theater | undefined {
    console.log(this.repo.getTheaters.find((elm) => elm.id == this.selectedTheater))
    return this.repo.getTheaters.find((elm) => elm.id == this.selectedTheater) 
  }

  get getFilteredShowTimes(): Showtime[] {
    return this.repo.getShowTimes.filter((elm) => elm.theater == this.selectedTheater)
  }

  changeTheater(newTheater?: number) {
    this.selectedTheater = newTheater || 1
    this.filteredTheater = this.getFilteredTheater()

    // test log.
    console.log(this.selectedTheater)
  }

  changeTime(time?: string) {
    this.selectedTime = time
  }

  fetchTable() {

  }
} 
