(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{"Bl+R":function(n,t,e){"use strict";e.r(t),t.default='<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="showDialog()"\n>\n    Show\n</button>\n\x3c!-- TODO: 3.0 need remove $any later --\x3e\n<ng-template\n    let-observer\n    [tuiDialogOptions]="$any({label: \'Declarative directive\', size: \'s\'})"\n    [(tuiDialog)]="open"\n>\n    <form\n        [formGroup]="exampleForm"\n        (ngSubmit)="observer.complete()"\n    >\n        <p>This abstracts away service and subscription</p>\n        <tui-input\n            tuiAutoFocus\n            formControlName="exampleControl"\n        >\n            Some value\n        </tui-input>\n        <p>\n            <button\n                tuiButton\n                type="submit"\n            >\n                Ok\n            </button>\n        </p>\n    </form>\n</ng-template>\n'}}]);