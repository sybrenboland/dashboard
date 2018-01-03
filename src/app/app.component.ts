import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private priceUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR';
  price: Price;

  constructor(private http: Http) {
    this.getData();
  }

  getData() {
    this.http.get(this.priceUrl).map((x, idx) => x.json() as Price).subscribe(price => this.price = price);
  }
}

export class Price {
  EUR: string;
}
