import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
}    


`
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
            this.dashboardService.getAllCarts()
            .subscribe(data => {
                this.cartList = data as Array<Object>;
            },err => {
                        console.log('err',err);
            });
            
    }

    public createProduct(){
        this.change.emit()   
    }
    
    @Output()
     change: EventEmitter<number> = new EventEmitter<number>();





    removeCart(id: string) {
     
        this.dashboardService.removeCart(id)
        .subscribe(data => {
           this.cartList =  this.cartList.filter((item) => {
                return item['_id'] !== id
            })
        }, err => {
                console.log('err',err);
        })
    }
}