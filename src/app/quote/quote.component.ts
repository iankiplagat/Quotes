import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  upVote: number;
  downVote: number;
  quotes: Quote[] = [
    new Quote(
      'Kasparov',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
      'Nelson Mandela',
      new Date(2021, 1, 26), 0, 0,
    ),
    new Quote(
      'Anna',
      "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
      'Oprah Winfrey',
      new Date(2019, 4, 27), 0, 0,
    ),
    new Quote(
      'Meyo',
      '"It is during our darkest moments that we must focus to see the light."',
      'Aristotle',
      new Date(2015, 4, 27), 0, 0,
    ),
    new Quote(
      'Jaguar',
      '"The future belongs to those who believe in the beauty of their dreams."',
      'Eleanor Roosevelt',
      new Date(2018, 4, 27), 0, 0,
    ),
    new Quote(
      'Eve',
      '"Life is really simple, but we insist on making it complicated."',
      'Confucius',
      new Date(2018, 4, 27), 0, 0,
    ),
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postTime = new Date(quote.postTime);
    this.quotes.push(quote);
  }

  preNum: number;
  lastNum: number;
  counter: number;

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upVote;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }

  constructor() {}

  ngOnInit() {}
}
