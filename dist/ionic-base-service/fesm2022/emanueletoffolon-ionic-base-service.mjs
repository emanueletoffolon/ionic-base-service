import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { Network } from '@capacitor/network';

class IonicBaseService {
    constructor() { }
    async isOffline() {
        const status = await Network.getStatus();
        return !status.connected;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class IonicBaseServiceModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseServiceModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseServiceModule, providers: [IonicBaseServiceModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.5", ngImport: i0, type: IonicBaseServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [IonicBaseServiceModule],
                }]
        }] });

/*
 * Public API Surface of base-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonicBaseService, IonicBaseServiceModule };
//# sourceMappingURL=emanueletoffolon-ionic-base-service.mjs.map
