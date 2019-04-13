import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModalService, AccountService, Account } from '../core';
//import { LoginModalService, AccountService, Account } from 'app/core';
import {MatButtonModule} from '@angular/material';
import { Product } from '../entities/products/product';
import { ProductsService } from '../entities/products/products.service';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
      BrowserModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule
    ]
  })
  
  @Component({
    selector: 'jhi-home',
   // template: '  <img src="assets/Grooming.jpg">',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})


export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    products: Product[] = [];
    title = 'CM Grooming Services';

    faPaw=faPaw;
    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private productService: ProductsService
    ) {}

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.getProducts();
    }
    
    getProducts(): void {
        this.productService.getProducts()
         .subscribe(products => this.products = products)
    }
    
      registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.accountService.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}