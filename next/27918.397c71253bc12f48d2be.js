"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[27918],{

/***/ 27918:
/***/ ((module) => {

module.exports = "@import 'taiga-ui-local';\n\n.color() {\n    color: var(--tui-support-01);\n\n    &:first-child {\n        color: var(--tui-support-08);\n    }\n\n    &:last-child {\n        color: var(--tui-support-12);\n    }\n}\n\n.axes {\n    height: 12.5rem;\n}\n\n.controls {\n    display: flex;\n\n    .b-form {\n        flex: 1;\n    }\n}\n\n.legend {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item {\n    .color();\n    display: flex;\n    align-items: center;\n    margin: 0 0.75rem;\n\n    &:before {\n        content: '';\n        border-bottom: 0.125rem solid;\n        width: 1rem;\n        margin-right: 0.5rem;\n    }\n}\n\n.name {\n    color: var(--tui-text-01);\n}\n\n.value {\n    color: var(--tui-text-01-night);\n}\n\n.chart {\n    .color();\n    .fullsize();\n}\n";

/***/ })

}]);