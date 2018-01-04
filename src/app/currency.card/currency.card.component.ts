import {Component, Input, Output} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency.card.component.html',
  styleUrls: ['./currency.card.component.css']
})
export class CurrencyCardComponent {
  @Input() currencyName: string;
  @Input() currencyCode: string;
  @Output() price: Price;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(`https://min-api.cryptocompare.com/data/price?fsym=${this.currencyCode}&tsyms=EUR`)
      .map((x, idx) => x.json() as Price)
      .subscribe(price => this.price = price);
  }
}

export class Price {
  EUR: string;
}
