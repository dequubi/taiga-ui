"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[56292],{

/***/ 56292:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiSum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-legend-item-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLegendItemExample1 {\n    activeItemIndex = NaN;\n\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = tuiSum(...this.value);\n    readonly labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `Other`];\n\n    isItemActive(index: number): boolean {\n        return this.activeItemIndex === index;\n    }\n\n    onHover(index: number, hovered: boolean): void {\n        this.activeItemIndex = hovered ? index : 0;\n    }\n\n    getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n}\n";

/***/ })

}]);