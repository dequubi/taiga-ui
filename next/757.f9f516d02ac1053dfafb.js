"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[757],{

/***/ 757:
/***/ ((module) => {

module.exports = "<ng-container *tuiLet=\"timer$ | async as time\">\n    <p>Timer value: {{ time }}</p>\n    <p>\n        It can be used many times:\n        <tui-badge [value]=\"time\"></tui-badge>\n    </p>\n    <p>It subsribed once and async pipe unsubsribes it after component destroy</p>\n</ng-container>\n";

/***/ })

}]);