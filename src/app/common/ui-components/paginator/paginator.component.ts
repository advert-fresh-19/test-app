import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import {PagerService} from 'src/app/common/ui-components/paginator/pager.services';

@Component({
  selector: 'c-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [PagerService]
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() listItems: any[];
  @Input() preselectPage = 1;

  @Output() pagedItemsChange: EventEmitter<any[]> = new EventEmitter();

  public pagedItems: any[] = [];
  public pager: any = {};

  constructor(private pagerService: PagerService) {}

  ngOnInit(): void {
    this.setPage(this.preselectPage);
  }



  public setPage(page: number) {
    if (!this.listItems) {
      return
    }
    this.pager = this.pagerService.getPager(this.listItems.length, page);
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pagedItems = this.listItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pagedItemsChange.emit(this.pagedItems);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listItems.previousValue !== changes.listItems.currentValue) {
      this.setPage(this.preselectPage);
    }
  }
}
