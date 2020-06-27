import { slideInRight } from './animations';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInRight]
})
export class AppComponent {
  opened = false;
  events: string[] = [];
  title = 'new-ruby-website';

  @ViewChild('drawer') drawer: ElementRef;

  onToggleDrawer(event) {
    this.opened = !this.opened;
  }
}
