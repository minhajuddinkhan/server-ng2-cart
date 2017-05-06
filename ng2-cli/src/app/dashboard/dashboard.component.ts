import { Component, ElementRef } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
import { DashboardService } from './dashboard.service'
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../login/login.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms'


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.component.css'
  ],



})
export class DashboardComponent {

  cart: FormData
  state: string
  imageExists: boolean;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private http: Http,
    private authService: AuthService,
    private element: ElementRef
  ) {
    this.state = 'list'
    this.imageExists = false;
    this.cart = new FormData();
  }

cartForm = new FormGroup({
        name: new FormControl(),
        description: new FormControl()
    })

  createCart(cart) {
    this.cart.append('cart', JSON.stringify(cart));
    
    this.dashboardService.addCart(this.cart)
      .subscribe(data => {
        this.imageExists = false;
        this.cartForm.reset();
        this.cart = new FormData();
        this.element.nativeElement.querySelector('.image').src = '';
      },err => {
        alert(err);
      })

  }
  
  changeState() {
    this.state = 'create'  
  }

  logout(){
      this.authService.logout();
      this.router.navigate(['login']);
  }


  

  fileChange(event) {

    let reader = new FileReader();
    let image = this.element.nativeElement.querySelector('.image');

    reader.onload = (e) => {
      let src = e.target['result'];
      image.src = src;
      this.imageExists = true;
    };

    reader.readAsDataURL(event.target.files[0]);

    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.cart.append('imageFile', fileList[0], fileList[0].name);
    }
  }
}