(window.webpackJsonp=window.webpackJsonp||[]).push([[1519],{"/KxC":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {BehaviorSubject} from 'rxjs';\n\n@Component({\n    selector: `tui-for-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiForExample1 {\n    readonly items$ = new BehaviorSubject<readonly string[] | null>([]);\n\n    refresh(): void {\n        this.items$.next(null);\n\n        const delay = Math.round(Math.random() * 2000);\n\n        setTimeout(() => {\n            this.items$.next(\n                delay % 2\n                    ? []\n                    : [`William \"Bill\" S. Preston Esq.`, `Ted \"Theodore\" Logan`],\n            );\n        }, delay);\n    }\n}\n"}}]);