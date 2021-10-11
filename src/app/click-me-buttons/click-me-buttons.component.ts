import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollListenerService } from './scroll-listener.service';

@Component({
  selector: 'app-click-me-buttons',
  templateUrl: './click-me-buttons.component.html',
  styleUrls: ['./click-me-buttons.component.scss']
})

export class ClickMeButtonsComponent {
  buttonList$: Observable<Array<string>>;

  constructor(private scrollListenerService: ScrollListenerService) {
    this.buttonList$ = scrollListenerService.buttonList$;
  }
  onScrolledToBottom() {
    this.scrollListenerService.loadMore();
  }
  onBtnClick(i: Number) {
    switch (i) {
      case 1:
        alert(`${i}st button clicked`);
        break;
      case 2:
        alert(`${i}nd button clicked`);
        break;
      case 3:
        alert(`${i}rd button clicked`);
        break;
      default:
        alert(`${i}th button clicked`);
        break;
    }
  }
}
