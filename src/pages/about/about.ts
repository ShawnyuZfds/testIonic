import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

const HEROES = [
  'Excellent',
  'Good',
  'Okay',
  'Bad',
  'Terrible'
]

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  answers = HEROES;
  selectedAnswer: '';
  currentPage = 1;
  totalPage = 4;
  question = "How would you rate your chicken shawama sandwich?";

  onSelect(answer): void {
    this.selectedAnswer = answer;
  }

}
