import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { QuestionCardComponent } from './question-card/question-card.component';
import { FormInputComponent } from './form-input/form-input.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { ListAnswerComponent } from './list-answer/list-answer.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    FormInputComponent,
    AnswerFormComponent,
    ListAnswerComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
