"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98599],{

/***/ 76676:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tabs-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample7 {\n    activeItemIndex = 0;\n\n    items = Array.from({length: 5}, (_, i) => `Item #${i}`);\n\n    add(): void {\n        this.items = this.items.concat(`Item #${Date.now()}`);\n    }\n\n    remove(removed: string): void {\n        const index = this.items.indexOf(removed);\n\n        this.items = this.items.filter(item => item !== removed);\n\n        if (index <= this.activeItemIndex) {\n            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);\n        }\n    }\n}\n";

/***/ })

}]);