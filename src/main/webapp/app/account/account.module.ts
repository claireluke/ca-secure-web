import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClairesappSharedModule } from 'app/shared';

import {
    SessionsComponent,
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    accountState
} from './';

@NgModule({
    imports: [ClairesappSharedModule, RouterModule.forChild(accountState)],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SessionsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClairesappAccountModule {}
