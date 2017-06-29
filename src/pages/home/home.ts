import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  start_barcodescanner() {

    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.navCtrl.setRoot(AboutPage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      // An error occurred
    });
  }
}
