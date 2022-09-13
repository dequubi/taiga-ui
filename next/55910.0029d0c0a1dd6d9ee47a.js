"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[55910],{

/***/ 55910:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\n\nclass Card {\n    constructor(readonly cardName: string, readonly cardNumber: string) {}\n}\n\nclass Account {\n    constructor(\n        readonly id: string,\n        readonly name: string,\n        readonly amount: number,\n        readonly currency: TuiCurrency,\n    ) {}\n}\n\n@Component({\n    selector: `tui-select-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample2 {\n    cards = [\n        new Card(`Bitcoin`, `*6713`),\n        new Card(`Money`, `*4562`),\n        new Card(`Charity`, `*6788`),\n        new Card(`Subscriptions`, `*1231`),\n    ];\n\n    accounts = [\n        new Account(`1`, `RUB`, 24876.55, TuiCurrency.Ruble),\n        new Account(`2`, `USD`, 335, TuiCurrency.Dollar),\n        new Account(`3`, `EUR`, 10000, TuiCurrency.Euro),\n        new Account(`4`, `PND`, 100, TuiCurrency.Pound),\n    ];\n\n    testForm = new FormGroup({\n        testValue: new FormControl(this.cards[0]),\n        accounts: new FormControl(this.accounts[0]),\n    });\n}\n";

/***/ })

}]);