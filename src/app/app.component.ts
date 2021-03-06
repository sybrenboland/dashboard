import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencies = [
    { name: 'Bitcoin', code: 'BTC', amount: '0.00469137' },
    { name: 'Ethereum', code: 'ETH', amount: '6.0' },
    { name: 'Ripple', code: 'XRP', amount: '2100.0' },
    { name: 'Iotacoin', code: 'MIOTA', amount: '79.5' },
    { name: 'EOS', code: 'EOS', amount: '111.8885' },
    { name: 'Filecoin', code: 'FIL', amount: '11.52165547' },
    { name: 'BasicAttention', code: 'BAT', amount: '805.46423164' },
    { name: 'Cardano', code: 'ADA', amount: '1350' },
    { name: 'Stellar', code: 'XLM', amount: '872.2953364' },
    { name: 'Tezos', code: 'XTZ', amount: '89.522605' },
    { name: 'Shopping.io', code: 'SPI', amount: '12.889' },
    { name: 'Axion', code: 'AXN', amount: '5441286.404' },
    { name: 'Chain games', code: 'CHAIN', amount: '2023.998' },
    { name: 'Trustswap', code: 'SWAP', amount: '290.488' },
    { name: 'Offshift', code: 'XFT', amount: '63.323' },
    { name: 'Litentry', code: 'LIT', amount: '72.083' },
    { name: 'Cyberfi', code: 'CFI', amount: '26.504' },
    { name: 'Litecoin', code: 'LTC', amount: '2.5703484' },
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
    { name: 'CloakCoin ', code: 'CLOAK', amount: '7.956222' },
  ];

  // init2021 = [
  //   { name: 'Ethereum', amount: '1000' },
  //   { name: 'EOS',amount: '400' },
  //   { name: 'Filecoin', amount: '400 -> 600' },
  //   { name: 'BasicAttention', amount: '400 -> 600' },
  //   { name: 'Cardano', amount: '1400' },
  //   { name: 'Stellar', amount: '400' },
  //   { name: 'Tezos', amount: '400' },
  //   { name: 'Shopping.io', amount: '400' },
  //   { name: 'Axion', amount: '1000' },
  //   { name: 'Chain games', amount: '200' },
  //   { name: 'Trustswap', amount: '1000' },
  //   { name: 'Offshift', amount: '200' },
  //   { name: 'Litentry', amount: '500' },
  //   { name: 'Cyberfi', amount: '500' },
  //   { name: 'Litecoin', amount: '400' },
  //   { name: 'KeeperDAO', amount: '225?' },
  //   { name: 'OptionRoom', amount: '225?' },
  //   { name: 'Kira', amount: '225?' },
  //   { name: 'Parsiq', amount: '225?' },
  //   { name: 'Total', amount: '8600' }
  // ];
}
