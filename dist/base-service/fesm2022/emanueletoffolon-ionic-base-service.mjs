import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { Network } from '@capacitor/network';

class BaseService {
    constructor() { }
    async isOffline() {
        const status = await Network.getStatus();
        return !status.connected;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class BaseServiceModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.5", ngImport: i0, type: BaseServiceModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseServiceModule, providers: [BaseService] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: BaseServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [BaseService],
                }]
        }] });

/*
 * Public API Surface of base-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseService, BaseServiceModule };
//# sourceMappingURL=emanueletoffolon-ionic-base-service.mjs.map
