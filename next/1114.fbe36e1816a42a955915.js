"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1114],{

/***/ 1114:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-slider-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample2 {\n    readonly control = new FormControl(40);\n    readonly segments = 5;\n    readonly max = 100;\n    readonly min = 0;\n\n    increase(): void {\n        this.control.patchValue(Math.min((this.control?.value ?? 0) + 20, this.max));\n    }\n\n    decrease(): void {\n        this.control.patchValue(Math.max((this.control?.value ?? 0) - 20, this.min));\n    }\n}\n";

/***/ })

}]);