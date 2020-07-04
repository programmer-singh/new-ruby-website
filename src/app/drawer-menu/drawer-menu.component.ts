import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {
  @Output() closeDrawer: EventEmitter<any> = new EventEmitter<any>();
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'coding',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/computer.svg'));
  }

  ngOnInit(): void {
  }

  closeTheDrawer() {
    this.closeDrawer.emit();
  }
}
