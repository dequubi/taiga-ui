"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7138],{

/***/ 7138:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    defaultEditorExtensions,\n    TUI_EDITOR_CONTENT_PROCESSOR,\n    TUI_EDITOR_EXTENSIONS,\n    tuiLegacyEditorConverter,\n} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: `tui-editor-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_CONTENT_PROCESSOR,\n            useValue: tuiLegacyEditorConverter,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorExample4 {\n    control = new FormControl(\n        // Legacy HTML markup from DB\n        `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.<p><font size=\"6\">Heading</font></p><font size=\"4\">Lorem ipsum dolor sit amet <font color=\"#ff78a7\">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style=\"background-color: rgb(163, 129, 255);\">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style=\"text-align: right;\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,\n        Validators.required,\n    );\n}\n";

/***/ })

}]);