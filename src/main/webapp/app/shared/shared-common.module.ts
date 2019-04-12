import { NgModule } from '@angular/core';

import { ClairesappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ClairesappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ClairesappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ClairesappSharedCommonModule {}
