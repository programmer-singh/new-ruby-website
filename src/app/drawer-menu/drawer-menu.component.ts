import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {
  @Output() closeDrawer: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  closeTheDrawer() {
    this.closeDrawer.emit();
  }
}
