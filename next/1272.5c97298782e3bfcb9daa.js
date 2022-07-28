(window.webpackJsonp=window.webpackJsonp||[]).push([[1272],{epvX:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\nconst FRAMES = 166;\n\n@Component({\n    selector: `tui-sheet-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample5 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: [`4.5rem`],\n    };\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n\n    getTransform(y: number | null): string {\n        const frame = Math.round((y || 0) / 2);\n        const looped = frame % FRAMES;\n        const percent = (100 / FRAMES) * looped;\n\n        return `translate3d(0, -${percent}%, 0)`;\n    }\n}\n"}}]);