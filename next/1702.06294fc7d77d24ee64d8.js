"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1702],{

/***/ 1702:
/***/ ((module) => {

module.exports = "<p>In this sample, tags with digits are invalid</p>\n\n<tui-input-tag\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [tagValidator]=\"tagValidator\"\n    [(search)]=\"search\"\n>\n    Try it\n    <ng-container *ngIf=\"filtered.length\">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor=\"let item of filtered\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-tag>\n\n<tui-error\n    [formControl]=\"control\"\n    [error]=\"[] | tuiFieldError | async\"\n></tui-error>\n";

/***/ })

}]);