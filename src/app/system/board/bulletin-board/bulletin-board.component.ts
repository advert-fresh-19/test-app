import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss']
})
export class BulletinBoardComponent implements OnInit {

  public allItems: any[] = [
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },
    {
      name: "Item 4"
    },
    {
      name: "Item 5"
    },
    {
      name: "Item 6"
    },
    {
      name: "Item 7"
    },
    {
      name: "Item 8"
    },
    {
      name: "Item 9"
    },
    {
      name: "Item 10"
    },
    {
      name: "Item 11"
    },
    {
      name: "Item 12"
    },
    {
      name: "Item 13"
    },
  ];

  public viewListBulletin: any[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {}

  public changeViewList(value): void {
    this.viewListBulletin = value;
    this.cdRef.detectChanges();
  }
}
