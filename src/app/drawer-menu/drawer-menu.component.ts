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

  contacts() {
    this.closeTheDrawer();
    setTimeout(() => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
      window.scrollTo(0, height);
    }, 1000);
  }

  closeTheDrawer() {
    this.closeDrawer.emit();
  }
}
