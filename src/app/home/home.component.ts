import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  appForm = new FormGroup({});
  formElements = {
    name: false,
    dob: false,
    gender: false,
    phone: false,
    email: false
  };

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


  constructor(private db: DbService) {
    this.initForm();
  }

  ngOnInit() {
  }

  setFocus(elem: string) {
    switch (elem) {
      case 'name':
        this.formElements.name = true;
        break;
      case 'dob':
        this.formElements.dob = true;
        break;
      case 'gender':
        this.formElements.gender = true;
        break;
      case 'phone':
        this.formElements.phone = true;
        break;
      case 'email':
        this.formElements.email = true;
        break;
    }
  }

  setBlur(elem: string) {
    switch (elem) {
      case 'name':
        this.formElements.name = false;
        break;
      case 'dob':
        this.formElements.dob = false;
        break;
      case 'gender':
        this.formElements.gender = false;
        break;
      case 'phone':
        this.formElements.phone = false;
        break;
      case 'email':
        this.formElements.email = false;
        break;
    }
  }

  submitForm() {
    if (this.appForm.valid) {
      const formData = this.appForm.value;
      this.db.updateAt('appointments', {
        name: formData.name,
        dob: formData.dob,
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        regDate: new Date(),
      }).then(res => {
        alert('Thank you for submitting your data. You will be contacted soon.');
        this.initForm();
      }, err => {
        console.log(err);
      }).catch(err => {
        alert('There was a problem submitting this data. Please try again.');
      });
    }
  }

  initForm() {
    this.appForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
    });
  }

}
