"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34811],{

/***/ 34811:
/***/ ((module) => {

module.exports = "<form\n    class=\"wrapper\"\n    [formGroup]=\"testForm\"\n>\n    <tui-select\n        formControlName=\"email\"\n        class=\"tui-space_bottom-4\"\n    >\n        Choose an address\n        <tui-data-list *tuiDataList>\n            <button\n                *ngIf=\"!signatureVisible\"\n                tuiOption\n                class=\"link\"\n                (click)=\"toggle()\"\n            >\n                <tui-svg\n                    src=\"tuiIconPlusCircleLarge\"\n                    class=\"icon\"\n                ></tui-svg>\n                Add signature\n            </button>\n            <button\n                *ngFor=\"let item of items\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </tui-select>\n    <ng-container *ngIf=\"signatureVisible\">\n        <tui-text-area\n            formControlName=\"signature\"\n            tuiTextfieldSize=\"m\"\n            tuiAutoFocus\n            class=\"tui-space_bottom-4\"\n        >\n            Type a signature\n        </tui-text-area>\n        <button\n            tuiButton\n            type=\"button\"\n            size=\"m\"\n            (click)=\"toggle()\"\n        >\n            Hide signature\n        </button>\n    </ng-container>\n</form>\n";

/***/ })

}]);