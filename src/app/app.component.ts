import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  events: string[] = [];
  title = 'new-ruby-website';

  @ViewChild('drawer') drawer: ElementRef;

  onToggleDrawer(event) {
    console.log(event);
    this.opened = !this.opened;
  }
}
