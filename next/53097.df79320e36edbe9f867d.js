"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53097],{

/***/ 53097:
/***/ ((module) => {

module.exports = "<div class=\"flex\">\n    <tui-input [(ngModel)]=\"value\">Changes propagate both ways</tui-input>\n    <label\n        class=\"flex\"\n        [tuiDropdown]=\"dropdownContent\"\n        [tuiDropdownManual]=\"open\"\n    >\n        <tui-toggle [(ngModel)]=\"open\"></tui-toggle>\n        Open dropdown\n    </label>\n</div>\n\n<ng-template\n    #dropdownContent=\"polymorpheus\"\n    [polymorpheus]=\"$any('')\"\n>\n    <div class=\"dropdown\">\n        <tui-input [(ngModel)]=\"value\">Changes propagate both ways</tui-input>\n        <p>\n            Use\n            <code>polymorpheus</code>\n            directive on the template to make changes propagate both ways\n        </p>\n        <p *ngIf=\"showBigText\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa\n            laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae?\n        </p>\n    </div>\n</ng-template>\n";

/***/ })

}]);