(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53097],{53097:n=>{n.exports='<tui-input [(ngModel)]="value">Changes propagate both ways</tui-input>\n<label\n    class="flex"\n    [tuiDropdown]="dropdownContent"\n    [tuiDropdownManual]="open"\n>\n    <input\n        size="s"\n        tuiSwitch\n        type="checkbox"\n        [showIcons]="false"\n        [(ngModel)]="open"\n    />\n    Open dropdown\n</label>\n\n<ng-template\n    #dropdownContent="polymorpheus"\n    [polymorpheus]="$any(\'\')"\n>\n    <div class="dropdown">\n        <tui-input [(ngModel)]="value">Changes propagate both ways</tui-input>\n        <p>\n            Use\n            <code>polymorpheus</code>\n            directive on the template to make changes propagate both ways\n        </p>\n        <p *ngIf="showBigText">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa\n            laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae?\n        </p>\n    </div>\n</ng-template>\n'}}]);