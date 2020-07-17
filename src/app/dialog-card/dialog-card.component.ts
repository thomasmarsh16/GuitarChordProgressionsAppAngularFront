import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  @Input() cardTitle: string;

  @Input() questions: string[] = [];
  @Input() questionCategory: string[] = [];
  @Input() questionOptionMap: Map<string,string[]> = new Map([]);

  choicesMade: string[];

  @Output() choicesChange = new EventEmitter<any[]>();

  currentQuestion: string;
  currentOptions: string[];
  questionIndex: number;

  constructor() {
  }

  ngOnInit(): void {
    this.questionIndex = 0;

    this.choicesMade = new Array<string>(this.questions.length);

    this.currentQuestion = this.questions[0];
    this.currentOptions = this.questionOptionMap.get("genre");
  }

  nextQuestion(value: string) 
  {

    // save persons choice //
    this.choicesMade[this.questionIndex] = value;

    // go to next question //
    if (this.questionIndex + 1 != this.questions.length) {
      this.questionIndex += 1;
    }

    // update questions
    this.updateQuestionandOptions();


  }

  previousQuestion() 
  { 
    // undo last choice
    this.choicesMade.pop();

    if ( this.questionIndex != 0 ){
      this.questionIndex -= 1;
    }

    // update
    this.updateQuestionandOptions();
  }

  private updateQuestionandOptions () {
    // update question
    this.currentQuestion = this.questions[this.questionIndex];

    // update options
    this.currentOptions = this.questionOptionMap.get(this.questionCategory[this.questionIndex]);

    // output choice changes
    this.choicesChange.emit(this.choicesMade);
  }
}