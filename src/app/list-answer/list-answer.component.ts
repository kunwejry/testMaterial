import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {

  listAnswer: any[] = [
    {
      id: 0,
      value: 1
    },
    {
      id: 1,
      value: 2
    },
    {
      id: 2,
      value: 3
    },
    {
      id: 3,
      value: 4
    }
  ];
  currentAnswer: Number;

  constructor() { }

  ngOnInit() {
  }

  chooseAnswer(answer) {
    this.currentAnswer = answer;
  }

  addOption() {
    const newAnswer = {
      id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      value: this.listAnswer.length + 1
    };

    this.listAnswer.push(newAnswer);
    setTimeout(() => {
      this.chooseAnswer(this.listAnswer[this.listAnswer.length - 1]);
    }, 100);
  }

  removeAnswer(answer) {
    const index = this.listAnswer.indexOf(answer);
    this.listAnswer.splice(index, 1);
  }
}
