import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/system/board/bulletin-board/advert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss'],
  providers: [AdvertService]
})
export class BulletinBoardComponent implements OnInit {

  public allItems;

  public viewListBulletin: any[] = [];

  private edvertSubscription: Subscription = new Subscription();
  private viewSubscription: Subscription = new Subscription();

  constructor(private cdRef: ChangeDetectorRef, private advertService: AdvertService) {
  }

  ngOnInit() {
    this.edvertSubscription = this.advertService.getAllAdverts().subscribe((adverts) => {
      this.viewSubscription = this.advertService.getAllView().subscribe((view) => {
        this.allItems = adverts.map((advert) => {
          //TODO : temporarily
          const viewAdvert = view.find(v => v.count && v.advert_Id === advert.objectId);
          const count = viewAdvert && viewAdvert.count ? viewAdvert.count : 0;
          return {...advert, count};
        });
        this.allItems.sort((a, b) => Number(b.created) - Number(a.created));
      });
    });
  }

  public changeViewList(value): void {
    this.viewListBulletin = value;
    this.cdRef.detectChanges();
  }
}
