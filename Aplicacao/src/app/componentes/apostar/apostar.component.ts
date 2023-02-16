import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apostar',
  templateUrl: './apostar.component.html',
  styleUrls: ['./apostar.component.css']
})
export class ApostarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers?: string;
  stars?: string;

  generateNumbers(): void {
    let numbersArray = [];
    while (numbersArray.length < 5) {
      let random = Math.floor(Math.random() * 50) + 1;
      if (numbersArray.indexOf(random) === -1) {
        numbersArray.push(random);
      }
    }
    numbersArray.sort((a, b) => a - b);
    this.numbers = numbersArray.join(', ');

    let starsArray = [];
    while (starsArray.length < 2) {
      let random = Math.floor(Math.random() * 12) + 1;
      if (starsArray.indexOf(random) === -1) {
        starsArray.push(random);
      }
    }
    starsArray.sort((a, b) => a - b);
    this.stars = starsArray.join(', ');
  }

}
