import { Component, Input, OnInit } from '@angular/core';
import { Advert } from 'src/app/system/board/bulletin-board/advert.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  @Input() advert: Advert;

  ngOnInit() {
    console.log(this.advert);
  }
}
