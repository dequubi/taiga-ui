"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[62125],{

/***/ 62125:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"testForm\">\n    <tui-input-phone-international\n        formControlName=\"testValue\"\n        class=\"input\"\n        [countries]=\"countries\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [(countryIsoCode)]=\"countryIsoCode\"\n    ></tui-input-phone-international>\n</form>\n\n<button\n    tuiButton\n    class=\"tui-space_top-4\"\n    (click)=\"patchValue()\"\n>\n    Patch value\n</button>\n";

/***/ })

}]);