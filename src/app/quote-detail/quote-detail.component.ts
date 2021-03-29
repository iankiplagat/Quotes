import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  upVote: number;
  downVote: number;

  @Input() quote: Quote;
  @Input() i: number;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  newQuote = new Quote('', '', '', new Date(), 0, 0);
  constructor() {
    this.upVote = 0;
    this.downVote = 0;
  }

  voteUp() {
    this.upVote += 1;
  }

  voteDown() {
    this.downVote += 1;
  }

  // preNum: number;
  // lastNum: number;
  // counter: number;

  // highestUpvote() {
  //   this.preNum = 0;
  //   this.lastNum = 0;

  //   for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quote[this.counter].upVote;
  //     if (this.lastNum > this.preNum) {
  //       this.preNum = this.lastNum;
  //     }
  //   }
  //   return this.preNum;
  // }

  ngOnInit() {}
}
