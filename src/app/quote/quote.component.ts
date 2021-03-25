import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: '\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" -Nelson Mandela' },
    { id: 2, name: '\"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.\" -Oprah Winfrey' },
    { id: 3, name: '\"It is during our darkest moments that we must focus to see the light.\" -Aristotle' },
    { id: 4, name: '\"The future belongs to those who believe in the beauty of their dreams.\" -Eleanor Roosevelt' },
    { id: 5, name: '\"Life is really simple, but we insist on making it complicated.\" -Confucius' },
  ];

  constructor() {}

  ngOnInit() {}
}
