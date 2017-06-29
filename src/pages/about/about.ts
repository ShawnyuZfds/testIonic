import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

const questions = [
  {
    question: "How would you rate your chicken shawama sandwich?",
    answers: ['Excellent',
      'Good',
      'Okay',
      'Bad',
      'Terrible']
  },
  {
    question: "2How would you rate your chicken shawama sandwich?",
    answers: ['Excellent',
      'Good',
      'Okay',
      'Bad',
      'Terrible',
      'Excellen1t',
      'Go2od',
      'Ok3ay',
      'B2ad',
      'Ter1rible']
  },
  {
    question: "blah blah?",
    answers: ['Excellent',
      'baba',
      'lala',
      'oo',
      'aweawe',
      'meowmeow'
    ]
  }

]

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  totalPage = questions.length;
  currentQues = 0;
  answers = questions[0].answers;
  question = questions[0].question;
  selectedAnswer = '';
  userAnswers = [];


  // onSelect(answer): void {
  //   this.selectedAnswer = answer;
  // }

  nextQuestion(): void {
    if (this.currentQues + 1 < questions.length && this.selectedAnswer) {
      this.userAnswers[this.currentQues] = this.selectedAnswer;
      this.currentQues++;
      this.answers = questions[this.currentQues].answers;
      this.question = questions[this.currentQues].question;
      this.selectedAnswer = this.userAnswers[this.currentQues];
    }
  }

  prevQuestion(): void {
    this.userAnswers[this.currentQues] = this.selectedAnswer;
    this.currentQues--;
    this.answers = questions[this.currentQues].answers;
    this.question = questions[this.currentQues].question;
    this.selectedAnswer = this.userAnswers[this.currentQues];
  }
}
