"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[18708],{

/***/ 18708:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_STRINGIFY} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-line-chart-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample1 {\n    readonly value: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    readonly stringify = TUI_DEFAULT_STRINGIFY;\n}\n";

/***/ })

}]);