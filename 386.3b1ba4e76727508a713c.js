(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{ARmG:function(n,i,t){"use strict";t.r(i),i.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-chart-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample4 {\n    readonly value: TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    readonly singleValue: TuiPoint[] = [[200, 150]];\n\n    readonly hint: TuiStringHandler<TuiContextWithImplicit<TuiPoint>> = ({$implicit}) =>\n        `Vertical: ${$implicit[1]}\\nHorizontal: ${$implicit[0]}`;\n}\n"}}]);