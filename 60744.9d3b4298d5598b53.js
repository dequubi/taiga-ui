(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60744],{60744:e=>{e.exports="import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';\nimport {TuiCompassComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [TuiCompassComponent],\n    template: '<tui-compass [degrees]=\"degrees\"></tui-compass>',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    @ViewChild(TuiCompassComponent, {read: ElementRef})\n    private readonly compass?: ElementRef<HTMLElement>;\n\n    protected degrees = 0;\n\n    @HostListener('document:mousemove', ['$event'])\n    protected calculate(event: MouseEvent): void {\n        const rect =\n            this.compass?.nativeElement.getBoundingClientRect() ?? EMPTY_CLIENT_RECT;\n        const x = Math.ceil(event.clientX - (rect.left + rect.width / 2));\n        const y = Math.ceil(event.clientY - (rect.top + rect.height / 2));\n\n        this.degrees = 180 - Math.atan2(x, y) * (180 / Math.PI);\n    }\n}\n"}}]);