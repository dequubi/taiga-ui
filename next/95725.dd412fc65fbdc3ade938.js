"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[95725],{

/***/ 95725:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample3 {\n    open = false;\n\n    readonly items = [\n        [`By interest`, `By genre`, `By release year`, `By subject`],\n        [`Ascending`, `Descending`],\n    ];\n\n    primary = `By genre`;\n\n    ascending = false;\n\n    onClick(item: string): void {\n        if (this.items[0].includes(item)) {\n            this.primary = item;\n\n            return;\n        }\n\n        this.ascending = item === this.items[1][0];\n    }\n\n    itemIsActive(item: string): boolean {\n        return (\n            item === this.primary ||\n            (this.ascending && item === this.items[1][0]) ||\n            (!this.ascending && item === this.items[1][1])\n        );\n    }\n}\n";

/***/ })

}]);