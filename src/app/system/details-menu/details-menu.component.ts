import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.scss']
})
export class DetailsMenuComponent implements OnInit, OnDestroy {

  @ViewChild('profileBtn') profileBtn: ElementRef;
  @Input() public isLoggedUser: boolean;
  @Input() public userName: string;

  public isOpenProfileMenu = false;

  private _outsideClickListener = (event) => this.hideOnClickOutside(event);

  ngOnInit() {
  }

  private hideOnClickOutside(event): void {
    if (this.profileBtn && this.profileBtn.nativeElement === event.target) {
      this.isOpenProfileMenu = !this.isOpenProfileMenu;
    } else if (this.isOpenProfileMenu) {
      this.isOpenProfileMenu = false;
      document.removeEventListener('click', this._outsideClickListener);
    }
  }

  public openProfileMenu(): void {
    document.addEventListener('click', this._outsideClickListener);
  }

  public logout(): void {
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this._outsideClickListener);
  }
}
