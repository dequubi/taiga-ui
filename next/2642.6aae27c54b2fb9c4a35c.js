"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[2642],{

/***/ 2642:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-input-range-example-2`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {\n                decimalSeparator: `.`,\n                thousandSeparator: `,`,\n                zeroPadding: true,\n            },\n        },\n    ],\n})\nexport class TuiInputRangeExample2 {\n    readonly max = 50_000_001;\n    readonly min = 5_001;\n\n    readonly control = new FormControl([this.min, this.max / 2]);\n}\n";

/***/ })

}]);