import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent implements OnInit {
  constructor() {}

  @Output() selectedWord = new EventEmitter<string>();

  word: string = '';

  ngOnInit() {}

  selectWord() {
    let sendWord = this.word.replace('#', '%23');
    this.selectedWord.emit(sendWord);
  }
}
