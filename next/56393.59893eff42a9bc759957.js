"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[56393],{

/***/ 56393:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: `tui-sheet-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample2 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        image: `assets/images/avatar.jpg`,\n    };\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n}\n";

/***/ })

}]);