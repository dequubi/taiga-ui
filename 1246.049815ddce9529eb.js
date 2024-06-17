(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1246],{1246:n=>{n.exports='<div class="tui-space_bottom-2">With all features</div>\n\n<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]="true"\n        (tuiSwipe)="onSwipe($event)"\n    >\n        <tui-preview-title>{{ titles[index] }}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="length"\n            [(index)]="index"\n        />\n\n        <button\n            iconLeft="@tui.trash"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="delete()"\n        >\n            Delete\n        </button>\n        <button\n            iconLeft="@tui.download"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="download()"\n        >\n            Download\n        </button>\n        <button\n            iconLeft="@tui.x"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="preview.complete()"\n        >\n            Close\n        </button>\n\n        <img\n            *polymorpheusOutlet="previewContent as src"\n            alt="preview"\n            [src]="src"\n        />\n    </tui-preview>\n</ng-template>\n\n<ng-template #contentSample>\n    <div class="content">\n        <h1>Important document</h1>\n\n        <p>Hello everyone! This is some important document in A4 format, although it is made using html</p>\n\n        <p>\n            This shows that the component preview can work with absolutely any content: this way you can show any\n            template, image, pdf or even iframe with your favorite site. We will put this content in the center of the\n            portal and provide the user with control over it, and we will provide you with convenient levers to change\n            it and process actions.\n        </p>\n\n        <img\n            alt="logo"\n            src="https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg"\n            class="polymorpheus"\n        />\n    </div>\n</ng-template>\n'}}]);