"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[92736],{

/***/ 92736:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiSelectComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-select-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample4 {\n    readonly pythons = [\n        `de la Concordia «Gabo» García Márquez`,\n        `John Cleese`,\n        `Eric Idle`,\n        `Michael Palin`,\n        `Terry Gilliam`,\n        `Terry Jones`,\n        `Graham Chapman`,\n    ];\n\n    value = this.pythons[0];\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    addMore(select: TuiSelectComponent<unknown>): void {\n        select.handleOption(select.value);\n        this.alertService.open(`Add more is clicked`).subscribe();\n    }\n}\n";

/***/ })

}]);