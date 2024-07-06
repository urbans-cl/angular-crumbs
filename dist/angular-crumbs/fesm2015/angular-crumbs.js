import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵɵreference, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf, NgClass, CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLinkWithHref, RouterModule } from '@angular/router';

class Breadcrumb {
}

class BreadcrumbService {
    constructor(router) {
        this.router = router;
        this.breadcrumbChanged = new EventEmitter(false);
        this.breadcrumbs = new Array();
        this.router.events.subscribe((routeEvent) => { this.onRouteEvent(routeEvent); });
    }
    changeBreadcrumb(route, name) {
        const rootUrl = this.createRootUrl(route);
        const breadcrumb = this.breadcrumbs.find(function (bc) { return bc.url === rootUrl; });
        if (!breadcrumb) {
            return;
        }
        breadcrumb.displayName = name;
        this.breadcrumbChanged.emit(this.breadcrumbs);
    }
    onRouteEvent(routeEvent) {
        if (!(routeEvent instanceof NavigationEnd)) {
            return;
        }
        let route = this.router.routerState.root.snapshot;
        let url = '';
        var breadCrumbIndex = 0;
        var newCrumbs = [];
        while (route.firstChild != null) {
            route = route.firstChild;
            if (route.routeConfig === null) {
                continue;
            }
            if (!route.routeConfig.path) {
                continue;
            }
            url += `/${this.createUrl(route)}`;
            if (!route.data['breadcrumb']) {
                continue;
            }
            var newCrumb = this.createBreadcrumb(route, url);
            if (breadCrumbIndex < this.breadcrumbs.length) {
                var existing = this.breadcrumbs[breadCrumbIndex++];
                if (existing && existing.route == route.routeConfig) {
                    newCrumb.displayName = existing.displayName;
                }
            }
            newCrumbs.push(newCrumb);
        }
        this.breadcrumbs = newCrumbs;
        this.breadcrumbChanged.emit(this.breadcrumbs);
    }
    createBreadcrumb(route, url) {
        return {
            displayName: route.data['breadcrumb'],
            terminal: this.isTerminal(route),
            url: url,
            route: route.routeConfig
        };
    }
    isTerminal(route) {
        return route.firstChild === null
            || route.firstChild.routeConfig === null
            || !route.firstChild.routeConfig.path;
    }
    createUrl(route) {
        return route.url.map(function (s) { return s.toString(); }).join('/');
    }
    createRootUrl(route) {
        let url = '';
        let next = route.root;
        while (next.firstChild !== null) {
            next = next.firstChild;
            if (next.routeConfig === null) {
                continue;
            }
            if (!next.routeConfig.path) {
                continue;
            }
            url += `/${this.createUrl(next)}`;
            if (next === route) {
                break;
            }
        }
        return url;
    }
}
BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) { return new (t || BreadcrumbService)(ɵɵinject(Router)); };
BreadcrumbService.ɵprov = ɵɵdefineInjectable({ token: BreadcrumbService, factory: BreadcrumbService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbService, [{
        type: Injectable
    }], function () { return [{ type: Router }]; }, null); })();

const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_div_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0, route_r3.url));
    ɵɵadvance(1);
    ɵɵtextInterpolate(route_r3.displayName);
} }
function BreadcrumbComponent_div_3_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(route_r3.displayName);
} }
const _c1 = function (a0) { return { "last": a0 }; };
function BreadcrumbComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, BreadcrumbComponent_div_3_div_2_a_1_Template, 2, 4, "a", 6);
    ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_span_2_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c1, route_r3.terminal));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !route_r3.terminal);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", route_r3.terminal);
} }
function BreadcrumbComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_Template, 3, 5, "div", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.breadcrumbs);
} }
const _c2 = ["*"];
class BreadcrumbComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        breadcrumbService.breadcrumbChanged.subscribe((crumbs) => { this.onBreadcrumbChange(crumbs); });
    }
    onBreadcrumbChange(crumbs) {
        this.breadcrumbs = crumbs;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(ɵɵdirectiveInject(BreadcrumbService)); };
BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["breadcrumb"]], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["template", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "nav-wrapper"], ["class", "breadcrumb", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb", 3, "ngClass"], ["href", "", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["href", "", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", null, 0);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, BreadcrumbComponent_div_3_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", _r0.children.length == 0);
    } }, directives: [NgIf, NgForOf, NgClass, RouterLinkWithHref], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'breadcrumb',
                template: `<div #template>
    <ng-content></ng-content>
</div>
<div class="container" *ngIf="template.children.length == 0">
    <div class="nav-wrapper">
        <div class="breadcrumb" *ngFor="let route of breadcrumbs" [ngClass]="{'last': route.terminal}">
            <!-- disable link of last item -->
            <a href="" *ngIf="!route.terminal" [routerLink]="[route.url]">{{ route.displayName }}</a>
            <span *ngIf="route.terminal">{{ route.displayName }}</span>
        </div>
    </div>
</div>`
            }]
    }], function () { return [{ type: BreadcrumbService }]; }, null); })();

function breadcrumbServiceFactory(router) {
    return new BreadcrumbService(router);
}
class BreadcrumbModule {
}
BreadcrumbModule.ɵmod = ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, providers: [
        { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
    ], imports: [[CommonModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: [BreadcrumbComponent], imports: [CommonModule, RouterModule], exports: [BreadcrumbComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                providers: [
                    { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
                ],
                declarations: [BreadcrumbComponent],
                exports: [BreadcrumbComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-crumbs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Breadcrumb, BreadcrumbComponent, BreadcrumbModule, BreadcrumbService };
//# sourceMappingURL=angular-crumbs.js.map
