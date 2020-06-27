import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('landing', [
      state('void', style({
        opacity: 0,
      })),
      transition('void <=> *', [
        animate('1s'),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  missionIn = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1500,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplay: true,
    autoplaySpeed: 1500
  };


  constructor() { }

  ngOnInit() {
  }

}
