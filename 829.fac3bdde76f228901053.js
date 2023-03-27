(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{U35u:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-inline-example-1`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(`Hello 1`),\n        testValue2: new FormControl(`Hello 2`),\n        testValue3: new FormControl(`Hello 3`),\n        testValue4: new FormControl(``),\n    });\n\n    get toggleContent(): string {\n        return this.testForm.disabled ? `enable (allow editing)` : `disable`;\n    }\n\n    get input4Empty(): boolean {\n        return this.testForm.get(`testValue4`)!.value === ``;\n    }\n\n    onToggleClick(): void {\n        if (this.testForm.disabled) {\n            this.testForm.enable();\n        } else {\n            this.testForm.disable();\n        }\n    }\n}\n"}}]);