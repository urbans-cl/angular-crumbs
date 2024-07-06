import { EventEmitter } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Breadcrumb } from './breadcrumb';
import * as i0 from "@angular/core";
export declare class BreadcrumbService {
    private router;
    breadcrumbChanged: EventEmitter<Breadcrumb[]>;
    private breadcrumbs;
    constructor(router: Router);
    changeBreadcrumb(route: ActivatedRouteSnapshot, name: string): void;
    private onRouteEvent;
    private createBreadcrumb;
    private isTerminal;
    private createUrl;
    private createRootUrl;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDef<BreadcrumbService>;
}
