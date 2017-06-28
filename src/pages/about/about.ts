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

  selectedAnswer = '';
  totalPage = questions.length;
  currentQues = 0;
  currentPage = 1;
  answers = questions[0].answers;
  question = questions[0].question;
  userAnswers = [];

  onSelect(answer): void {
    this.selectedAnswer = answer;
    this.userAnswers[this.currentQues] = this.selectedAnswer;
  }

  nextQuestion(): void {
    if (this.currentPage < questions.length && this.selectedAnswer) {
      this.currentQues++;
      this.currentPage++;
      this.answers = questions[this.currentQues].answers;
      this.question = questions[this.currentQues].question;
      this.selectedAnswer = this.userAnswers[this.currentQues];
    }
  }

  prevQuestion(): void {
    this.currentQues--;
    this.currentPage--;
    this.answers = questions[this.currentQues].answers;
    this.question = questions[this.currentQues].question;
    this.selectedAnswer = this.userAnswers[this.currentQues];
  }
}
