import { Routes } from '@angular/router';

import {
    activateRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute
} from './';

const ACCOUNT_ROUTES = [
    activateRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute
];

export const accountState: Routes = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];
