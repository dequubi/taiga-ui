(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{"IKn+":function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';\nimport {TuiDay, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';\nimport {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {map, startWith, withLatestFrom} from 'rxjs/operators';\n\n// @dynamic\n@Component({\n    selector: 'tui-mobile-calendar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMobileCalendarExample1 {\n    private readonly control = new FormControl(new TuiDay(2020, 9, 3));\n\n    private readonly dialog$: Observable<TuiDay>;\n\n    readonly date$ = this.control.valueChanges.pipe(\n        startWith(this.control.value),\n        withLatestFrom(this.months),\n        map(([value, months]) => this.getParsed(value, months)),\n    );\n\n    constructor(\n        @Inject(TuiDialogService) dialogService: TuiDialogService,\n        @Inject(Injector) injector: Injector,\n        @Inject(TUI_MONTHS) private readonly months: Observable<string[]>,\n    ) {\n        const dataStream = tuiReplayedValueChangesFrom(this.control);\n        const computedInjector = Injector.create({\n            providers: [\n                {\n                    provide: TUI_CALENDAR_DATA_STREAM,\n                    useValue: dataStream,\n                },\n            ],\n            parent: injector,\n        });\n        const content = new PolymorpheusComponent(\n            TuiMobileCalendarDialogComponent,\n            computedInjector,\n        );\n\n        this.dialog$ = dialogService.open(content, {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                min: TuiDay.currentLocal(),\n            },\n        });\n    }\n\n    get empty(): boolean {\n        return !this.control.value;\n    }\n\n    getParsed(value: TuiDay, months: string[]): string {\n        if (!value) {\n            return 'Choose a date';\n        }\n\n        const {month, day, year} = value;\n\n        return `${months[month]} ${day}, ${year}`;\n    }\n\n    onClick(): void {\n        this.dialog$.subscribe(value => {\n            this.control.setValue(value);\n        });\n    }\n}\n"}}]);