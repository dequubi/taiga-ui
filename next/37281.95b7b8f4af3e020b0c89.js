"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37281],{

/***/ 37281:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-group-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiGroupExample1 {\n    readonly items = [`Option 1`, `Option 2`, `Option 3`];\n\n    testForm = new FormGroup({\n        testValue: new FormControl(``, Validators.required),\n        multiSelectControl: new FormControl([], Validators.required),\n        testValue3: new FormControl(``, Validators.required),\n    });\n}\n";

/***/ })

}]);