(window.webpackJsonp=window.webpackJsonp||[]).push([[1284],{OtWp:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-scrollbar-example-6`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample6Component {\n    items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);\n\n    add(): void {\n        this.items = [...this.items, `Item #${this.items.length}`];\n    }\n}\n"}}]);