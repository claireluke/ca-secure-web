import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from 'app/shared';
import { LoginModalService } from 'app/core';
import { Register } from './register.service';
import { PasswordStrengthBarComponent } from '../password/password-strength-bar.component';
import { ConstantPool } from '@angular/compiler';

@Component({
    selector: 'jhi-register',
    providers: [PasswordStrengthBarComponent],
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {
    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    modalRef: NgbModalRef;
    strength: string;
    constructor(
        private loginModalService: LoginModalService,
        private registerService: Register,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private passwordStrength: PasswordStrengthBarComponent
    ) {}

    ngOnInit() {
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    register() {
        const c = this.passwordStrength.getColor(this.passwordStrength.measureStrength(this.registerAccount.password));
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        if (this.passwordStrength.getColor(this.passwordStrength.measureStrength(this.registerAccount.password)).idx != 5) {
            this.strength = 'POOR';
        } else {
            this.doNotMatch = null;
            this.strength = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.registerAccount.langKey = 'en';
            this.registerService.save(this.registerAccount).subscribe(
                () => {
                    this.success = true;
                },
                response => this.processError(response)
            );
        }
    }

    openLogin() {
        this.modalRef = this.loginModalService.open();
    }

    private processError(response: HttpErrorResponse) {
        this.success = null;
        if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = 'ERROR';
        }
    }
}
