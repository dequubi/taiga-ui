"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[13453],{

/***/ 13453:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-carousel-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCarouselExample4 {\n    open = false;\n\n    index = 0;\n\n    get background(): string {\n        switch (this.index) {\n            case 0:\n                return `url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)`;\n            case 1:\n                return `url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)`;\n            default:\n                return `url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)`;\n        }\n    }\n\n    onClick(): void {\n        this.index = 0;\n        this.open = true;\n    }\n\n    navigate(delta: number): void {\n        this.index = (this.index + delta) % 3;\n    }\n}\n";

/***/ })

}]);