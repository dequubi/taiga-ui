"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7019],{

/***/ 7019:
/***/ ((module) => {

module.exports = "<tui-multi-select\n    *tuiLet=\"items$ | async as items\"\n    #component\n    placeholder=\"Find by ...\"\n    class=\"control\"\n    [formControl]=\"testValue\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [expandable]=\"false\"\n    (searchChange)=\"onSearchChange($event)\"\n>\n    Rock Star Frontend Developers\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiHideSelected\"\n        [itemContent]=\"itemContent\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n\n<ng-template\n    #itemContent\n    let-data\n>\n    <div class=\"template\">\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"data.avatarUrl\"\n            [text]=\"data.toString()\"\n        ></tui-avatar>\n        {{ data }}\n    </div>\n</ng-template>\n";

/***/ })

}]);