import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { ClairesappSharedLibsModule, ClairesappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { JhMaterialModule } from './jh-material.module';

@NgModule({
    imports: [ClairesappSharedLibsModule, ClairesappSharedCommonModule, JhMaterialModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [ClairesappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, JhMaterialModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClairesappSharedModule {
    static forRoot() {
        return {
            ngModule: ClairesappSharedModule
        };
    }
}
