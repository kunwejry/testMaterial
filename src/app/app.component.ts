import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listQuestion: any[] = [1, 2];
  currentQues: any;

  constructor(private dragulaService: DragulaService) {
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
    this.dragulaService.setOptions('bag', {
      moves: function (el, container, handle) {
        return handle.className.indexOf('handle-question') >= 0;
      }
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    this.dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }
  chooseQuestion(question) {
    if (question !== this.currentQues) {
      this.currentQues = question;
    }
  }
}
