(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{"42mR":function(n,o,t){"use strict";t.r(o),o.default='<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        automation-id="color-picker__button"\n        [style.background]="background"\n        [style.color]="background"\n    >\n        <span class="invert">Color me Kubrick</span>\n    </button>\n</tui-hosted-dropdown>\n<ng-template\n    #picker\n    let-activeZone\n>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n'}}]);