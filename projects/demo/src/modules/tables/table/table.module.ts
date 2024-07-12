import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiReorderModule,
    TuiTableModule,
    TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import {TuiLetModule, TuiValidatorModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiFormatNumberPipeModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAppearanceModule,
    TuiAutoColorModule,
    TuiAvatarModule,
    TuiCellModule,
    TuiCheckboxModule,
    TuiIconModule,
    TuiInitialsModule,
    TuiStatusModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';
import {
    TuiAccordionModule,
    TuiArrowModule,
    TuiBadgeModule,
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiItemsWithMoreModule,
    TuiProgressModule,
    TuiRadioListModule,
    TuiSelectModule,
    TuiTagModule,
    TuiTextareaModule,
} from '@taiga-ui/kit';

import {TuiTableExample1} from './examples/1';
import {TuiTableExample2} from './examples/2';
import {TuiTableExample3} from './examples/3';
import {TuiTableExample4} from './examples/4';
import {TuiTableExample5} from './examples/5';
import {TuiTableExample6} from './examples/6';
import {ExampleTuiTableComponent} from './table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        IntersectionObserverModule,
        TuiRadioListModule,
        TuiAvatarModule,
        TuiDropdownModule,
        TuiBadgeModule,
        TuiItemsWithMoreModule,
        TuiNotificationModule,
        TuiScrollbarModule,
        TuiTableModule,
        TuiInputModule,
        TuiTextareaModule,
        TuiInputNumberModule,
        TuiInputCountModule,
        TuiSelectModule,
        TuiInputDateModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiFormatNumberPipeModule,
        TuiValidatorModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiTagModule,
        TuiAccordionModule,
        TuiLoaderModule,
        TuiLetModule,
        TuiTablePaginationModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiArrowModule,
        TuiReorderModule,
        TuiCellModule,
        TuiIconModule,
        TuiInitialsModule,
        TuiAutoColorModule,
        TuiProgressModule,
        TuiCheckboxModule,
        TuiTitleModule,
        TuiStatusModule,
        TuiAppearanceModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTableComponent)),
    ],
    declarations: [
        ExampleTuiTableComponent,
        TuiTableExample1,
        TuiTableExample2,
        TuiTableExample3,
        TuiTableExample4,
        TuiTableExample5,
        TuiTableExample6,
    ],
    exports: [ExampleTuiTableComponent],
})
export class ExampleTuiTableModule {}
