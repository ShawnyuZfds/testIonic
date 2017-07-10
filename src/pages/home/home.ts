import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {AboutPage} from "../about/about";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  toQuesPage() {
    this.navCtrl.setRoot(AboutPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  start_barcodescanner() {

    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.toQuesPage();
    }, (err) => {
      // An error occurred
    });
  }
}
