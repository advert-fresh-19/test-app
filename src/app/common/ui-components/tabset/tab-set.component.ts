import { AfterContentChecked, Component, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[appTabTitle]' })
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: 'ng-template[appTabContent]' })
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'tab'})
export class Tab implements AfterContentChecked {
  @Input() id: string;
  @Input() disabled = false;

  titleTpl: TabTitleDirective | null;
  contentTpl: TabContentDirective | null;

  @ContentChildren( TabTitleDirective) titleTpls: QueryList<TabTitleDirective>;
  @ContentChildren(TabContentDirective) contentTpls: QueryList<TabContentDirective>;

  ngAfterContentChecked() {
    this.titleTpl = this.titleTpls.first;
    this.contentTpl = this.contentTpls.first;
  }
}

@Component({
  selector: 'app-tabset',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss']
})
export class TabSetComponent {
  public activeId: number = null;
  public closeTabs = true;

  @ContentChildren(Tab) tabs !: QueryList<Tab>;

  public openTab(idTab: number) {
    if (!this.activeId || this.activeId !== idTab) {
      this.activeId = idTab;
      this.closeTabs = false;
    } else {
      this.activeId = null;
      this.closeTabs = true;
    }
  }
}
