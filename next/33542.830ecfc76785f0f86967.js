"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[33542],{

/***/ 33542:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {interval} from 'rxjs';\nimport {startWith} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-let-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLetExample1 {\n    timer$ = interval(1000).pipe(startWith(0));\n}\n";

/***/ })

}]);