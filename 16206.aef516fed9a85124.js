(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16206],{16206:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';\n\n@Component({\n    selector: 'tui-input-time-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            icon: 'tuiIconCheckCircleLarge',\n            mode: 'HH:MM:SS',\n            itemSize: 's',\n        }),\n    ],\n})\nexport class TuiInputTimeExample3 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n    });\n\n    protected items1 = tuiCreateTimePeriods();\n}\n"}}]);