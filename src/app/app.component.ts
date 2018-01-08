import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencies = [
    { name: 'Ethereum', code: 'ETH', amount: '0.81' },
    { name: 'Ripple', code: 'XRP', amount: '2100.0' },
    { name: 'Iotacoin', code: 'IOT', amount: '79.5' },
    { name: 'Black coin', code: 'BLK', amount: '172.047155' },
    { name: 'Crown', code: 'CRW', amount: '28.382321' },
    { name: 'Dash', code: 'DASH', amount: '0.078587' },
    { name: 'Emercoin', code: 'EMC', amount: '54.609596' },
    { name: 'Expanse', code: 'EXP', amount: '29.371854' },
    { name: 'Feathercion', code: 'FTC', amount: '155.82489' },
    { name: 'Lisk', code: 'LSK', amount: '6.868896' },
    { name: 'Myriadcoin', code: 'XMY', amount: '10135.552884' },
    { name: 'Peercoin', code: 'PPC', amount: '30.920981' },
    { name: 'PIVX', code: 'PIVX', amount: '23.602608' },
    { name: 'Vertcoin', code: 'VTC', amount: '6.774756' },
    { name: 'Viacoin', code: 'VIA', amount: '22.75054' },
    { name: 'Voxels', code: 'VOX', amount: '250.218942' },
    { name: 'Stealthcoin', code: 'XST', amount: '316.527816' },
    { name: 'ReddCoin', code: 'RDD', amount: '69765.657158' },
    { name: 'Particl', code: 'PART', amount: '11.46162' },
    { name: 'Zcoin', code: 'XZC', amount: '2.572989' },
  ];
}
