import { Routes } from '@angular/router';

import {
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    sessionsRoute
} from './';

const ACCOUNT_ROUTES = [
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    sessionsRoute
];

export const accountState: Routes = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];
