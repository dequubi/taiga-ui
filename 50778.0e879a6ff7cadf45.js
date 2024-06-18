(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50778],{50778:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiCard} from '@taiga-ui/addon-commerce';\nimport {\n    tuiCardExpireValidator,\n    tuiCardNumberValidator,\n    TuiInputCardGroup,\n} from '@taiga-ui/addon-commerce';\nimport {TuiError} from '@taiga-ui/core';\nimport {TuiFieldErrorPipe} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiInputCardGroup,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n        ReactiveFormsModule,\n        TuiError,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl<TuiCard | null>(null, [\n        tuiCardNumberValidator,\n        tuiCardExpireValidator,\n    ]);\n\n    protected get card(): string | null {\n        const value = this.control.value?.card || '';\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n}\n"}}]);