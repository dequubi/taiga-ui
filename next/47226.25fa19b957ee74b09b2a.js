"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47226],{

/***/ 47226:
/***/ ((module) => {

module.exports = ".tui-skeleton {\n    position: relative;\n    color: transparent !important;\n    background: transparent !important;\n    pointer-events: none;\n    user-select: none;\n\n    &:after {\n        .fullsize();\n        content: '';\n        background-color: var(--tui-clear-hover);\n        animation: tuiSkeletonVibe ease-in-out 1s infinite alternate;\n    }\n\n    &_light:after {\n        background-color: fade(#fff, 24%);\n    }\n\n    &_rounded:after {\n        border-radius: inherit;\n    }\n\n    &_short:after {\n        width: 40%;\n    }\n\n    &_center:after {\n        .center-left();\n        width: 40%;\n    }\n\n    &_text:before {\n        content: '\\a0';\n    }\n\n    & * {\n        opacity: 0;\n        visibility: hidden;\n    }\n}\n";

/***/ })

}]);