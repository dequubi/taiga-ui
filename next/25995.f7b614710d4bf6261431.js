"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[25995],{

/***/ 25995:
/***/ ((module) => {

module.exports = "@import 'taiga-ui-local';\n\ntd,\nth {\n    white-space: nowrap;\n    border-color: transparent;\n    border-right-color: var(--tui-base-04);\n\n    &:last-child {\n        border-right-color: transparent;\n    }\n}\n\ntbody {\n    border-color: transparent;\n}\n\ntr:nth-child(even) td {\n    background: var(--tui-base-02);\n}\n\n.alive,\n.deceased {\n    display: flex;\n    align-items: center;\n    text-transform: capitalize;\n\n    &:before {\n        content: '';\n        width: 0.5rem;\n        height: 0.5rem;\n        border-radius: 100%;\n        margin-right: 0.5rem;\n        background: var(--tui-base-04);\n    }\n}\n\n.alive:before {\n    background: var(--tui-success-fill);\n}\n\n.remove {\n    .transition(opacity);\n    opacity: 0;\n\n    tr:hover &,\n    tr:focus-within & {\n        opacity: 1;\n    }\n}\n";

/***/ })

}]);