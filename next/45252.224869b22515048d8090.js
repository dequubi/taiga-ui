"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[45252],{

/***/ 45252:
/***/ ((module) => {

module.exports = "```ts\nimport {TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_COUNT_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_INPUT_COUNT_OPTIONS,\n      useValue: {\n        ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n        icons: {\n          up: 'tuiIconChevronUp',\n          down: 'tuiIconChevronDown',\n        },\n        appearance: 'secondary',\n        step: 10,\n        min: 10,\n        max: 100,\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n";

/***/ })

}]);