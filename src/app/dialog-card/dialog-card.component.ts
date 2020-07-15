import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  @Input() cardTitle: string;
  questions: string[];
  questionCategory: string[];
  questionOptionMap: Map<string,string[]>;
  numberTest: string;

  @Output() choicesMade: string[];

  currentQuestion: string;
  currentOptions: string[];
  questionIndex: number;

  constructor() {
    this.questionIndex = 0;
    this.questions = ["Pick a genre", "Pick a key", "Pick a chord progression"];
    this.questionCategory = ["genre","key","progression"]
    this.questionOptionMap = new Map([["genre", ["Jazz","Rock","Latin"]], ["key",["A","B","C"]], ["progression",["I-VI-V","I-IV-V"]]]);

    this.choicesMade = new Array<string>(this.questions.length);

    this.currentQuestion = this.questions[0];
    this.currentOptions = this.questionOptionMap.get("genre");
  }

  ngOnInit(): void {
  }

  nextQuestion(value: string) 
  {

    // save persons choice //
    this.choicesMade[this.questionIndex] = value;

    // go to next question //
    if (this.questionIndex + 1 != this.questions.length) {
      this.questionIndex += 1;
    }

    // update
    this.updateQuestionandOptions();

  }

  previousQuestion() 
  {  
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

    this.numberTest = this.questionCategory[this.questionIndex];
  }
}