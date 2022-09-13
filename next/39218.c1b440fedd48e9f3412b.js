"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[39218],{

/***/ 39218:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"testForm\">\n    <label\n        *ngFor=\"let phone of formData.controls; let i = index\"\n        tuiLabel=\"Phone number {{ i + 1 }}\"\n        formArrayName=\"phones\"\n        class=\"tui-space_bottom-4\"\n    >\n        <span class=\"row\">\n            <tui-input-phone\n                formControlName=\"{{ i }}\"\n                tuiTextfieldSize=\"m\"\n                class=\"input\"\n                [tuiTextfieldLabelOutside]=\"true\"\n            >\n                <input\n                    tuiTextfield\n                    autocomplete=\"off\"\n                />\n            </tui-input-phone>\n            <button\n                tuiIconButton\n                type=\"button\"\n                size=\"m\"\n                title=\"Delete phone number\"\n                appearance=\"icon\"\n                icon=\"tuiIconTrash\"\n                class=\"tui-space_left-2 icon\"\n                (click)=\"removePhone(i)\"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>Invalid phone number length</ng-template>\n        <tui-error\n            formControlName=\"{{ i }}\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <tui-error\n        formArrayName=\"phones\"\n        class=\"form-array-error\"\n        [error]=\"[] | tuiFieldError | async\"\n    ></tui-error>\n\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"s\"\n        class=\"tui-space_top-4\"\n        (click)=\"addPhone()\"\n    >\n        Add a phone number\n    </button>\n</form>\n";

/***/ })

}]);