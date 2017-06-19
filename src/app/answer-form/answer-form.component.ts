import { Component, Input, OnInit, ViewChildren, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @ViewChildren('input') input;
  @Input() answer: Number;
  currentAnswer: Number;
  @Input()
  set cAnswer(currentAnswer) {
    this.currentAnswer = currentAnswer;
    if (this.currentAnswer === this.answer && this.input) {
      this.input.toArray()[0].nativeElement.click();
      this.input.toArray()[0].nativeElement.select();
    }
  };
  get cAnswer() {
    return this.currentAnswer;
  };

  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeItem(answer) {
    this.remove.emit(answer);
  }

}
