"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[2387],{

/***/ 2387:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-range-example-1`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputRangeExample1 {\n    readonly min = 0;\n    readonly max = 20;\n    readonly sliderStep = 1;\n    readonly steps = (this.max - this.min) / this.sliderStep;\n    readonly quantum = 0.00001;\n\n    readonly control = new FormControl([3.14159, 15]);\n}\n";

/***/ })

}]);