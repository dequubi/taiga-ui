(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81640],{81640:n=>{n.exports="import {Component} from '@angular/core';\nimport {RouterLink, RouterLinkActive} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {DemoRoute} from '@demo/routes';\nimport {TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {\n    TuiAppearance,\n    TuiButton,\n    TuiDataList,\n    TuiDropdown,\n    TuiExpand,\n    TuiIcon,\n    TuiSurface,\n    TuiTitle,\n} from '@taiga-ui/core';\nimport {\n    TuiAvatar,\n    TuiBadge,\n    TuiBadgeNotification,\n    TuiChevron,\n    TuiFade,\n    TuiTabs,\n} from '@taiga-ui/kit';\nimport {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        TuiNavigation,\n        TuiButton,\n        TuiIcon,\n        TuiChevron,\n        TuiDropdown,\n        TuiFade,\n        TuiDataList,\n        TuiBadgeNotification,\n        TuiAvatar,\n        RouterLink,\n        RouterLinkActive,\n        TuiAppearance,\n        TuiExpand,\n        TuiBadge,\n        TuiTabs,\n        TuiRepeatTimes,\n        TuiCardLarge,\n        TuiHeader,\n        TuiSurface,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected expanded = false;\n    protected submenu = false;\n    protected readonly routes = DemoRoute;\n}\n"}}]);