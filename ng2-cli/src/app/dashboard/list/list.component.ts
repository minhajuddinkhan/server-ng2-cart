import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'
@Component({
    selector: 'cart-list',
    templateUrl : './list.template.html',
    styles: [
        `.image {
      width: 300px;
    height: 300px;
    border-radius: 50%;
    float: right;
    margin: 15px
}    `
    ]
})
export class ListComponent implements OnInit {

    cartList: Array<Object>
    constructor(
        private dashboardService: DashboardService
    ) {
            this.cartList = [];
    }
    ngOnInit(){
            console.log('on init');
            this.dashboardService.getAllCarts()
            .subscribe(data => {
                this.cartList = data as Array<Object>;
            },err => {
                        console.log('err',err);
            });
            
    }
}