"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1393],{

/***/ 1393:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"card\">\n    <tui-input-card-grouped\n        #component\n        formControlName=\"meta\"\n    >\n        <tui-data-list\n            *tuiDataList\n            (keydown.escape)=\"onEsc(component)\"\n        >\n            <button\n                tuiOption\n                size=\"l\"\n                (click)=\"onClick(component)\"\n            >\n                <tui-svg\n                    src=\"tuiIconPlus\"\n                    class=\"new\"\n                ></tui-svg>\n                <span class=\"label\">New card</span>\n            </button>\n            <button\n                *ngFor=\"let item of items; let index = index\"\n                tuiOption\n                size=\"l\"\n                [value]=\"item\"\n            >\n                <tui-card\n                    size=\"s\"\n                    class=\"card\"\n                    [cardNumber]=\"item.card.slice(-4)\"\n                ></tui-card>\n                <label\n                    class=\"label\"\n                    [tuiLabel]=\"item.bank\"\n                >\n                    {{ item.name }}\n                </label>\n                <span>{{ item.card.slice(-5) }}</span>\n            </button>\n        </tui-data-list>\n    </tui-input-card-grouped>\n</form>\n";

/***/ })

}]);