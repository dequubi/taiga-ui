"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[6696],{

/***/ 6696:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiNormalizeToIntNumber} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return tuiNormalizeToIntNumber(value ?? 0, min ?? 5, max ?? 42);\n    }\n}\n";

/***/ })

}]);