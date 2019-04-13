import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClairesappSharedModule } from 'app/shared';

import {
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    accountState
} from './';

@NgModule({
    imports: [ClairesappSharedModule, RouterModule.forChild(accountState)],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClairesappAccountModule {}
