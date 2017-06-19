import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  options: any = {
    removeOnSpill: false
  };
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

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('bag-one', {
      moves: function (el, container, handle) {
        return handle.className.indexOf('handle') >= 0 ;
      }
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    const [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    const [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    const [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    const [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

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
