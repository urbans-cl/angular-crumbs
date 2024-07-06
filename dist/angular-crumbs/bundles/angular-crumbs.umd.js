(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('angular-crumbs', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory(global['angular-crumbs'] = {}, global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var Breadcrumb = /** @class */ (function () {
        function Breadcrumb() {
        }
        return Breadcrumb;
    }());

    var BreadcrumbService = /** @class */ (function () {
        function BreadcrumbService(router) {
            var _this = this;
            this.router = router;
            this.breadcrumbChanged = new core.EventEmitter(false);
            this.breadcrumbs = new Array();
            this.router.events.subscribe(function (routeEvent) { _this.onRouteEvent(routeEvent); });
        }
        BreadcrumbService.prototype.changeBreadcrumb = function (route, name) {
            var rootUrl = this.createRootUrl(route);
            var breadcrumb = this.breadcrumbs.find(function (bc) { return bc.url === rootUrl; });
            if (!breadcrumb) {
                return;
            }
            breadcrumb.displayName = name;
            this.breadcrumbChanged.emit(this.breadcrumbs);
        };
        BreadcrumbService.prototype.onRouteEvent = function (routeEvent) {
            if (!(routeEvent instanceof router.NavigationEnd)) {
                return;
            }
            var route = this.router.routerState.root.snapshot;
            var url = '';
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
                url += "/" + this.createUrl(route);
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
        };
        BreadcrumbService.prototype.createBreadcrumb = function (route, url) {
            return {
                displayName: route.data['breadcrumb'],
                terminal: this.isTerminal(route),
                url: url,
                route: route.routeConfig
            };
        };
        BreadcrumbService.prototype.isTerminal = function (route) {
            return route.firstChild === null
                || route.firstChild.routeConfig === null
                || !route.firstChild.routeConfig.path;
        };
        BreadcrumbService.prototype.createUrl = function (route) {
            return route.url.map(function (s) { return s.toString(); }).join('/');
        };
        BreadcrumbService.prototype.createRootUrl = function (route) {
            var url = '';
            var next = route.root;
            while (next.firstChild !== null) {
                next = next.firstChild;
                if (next.routeConfig === null) {
                    continue;
                }
                if (!next.routeConfig.path) {
                    continue;
                }
                url += "/" + this.createUrl(next);
                if (next === route) {
                    break;
                }
            }
            return url;
        };
        BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) { return new (t || BreadcrumbService)(core.ɵɵinject(router.Router)); };
        BreadcrumbService.ɵprov = core.ɵɵdefineInjectable({ token: BreadcrumbService, factory: BreadcrumbService.ɵfac });
        return BreadcrumbService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbService, [{
            type: core.Injectable
        }], function () { return [{ type: router.Router }]; }, null); })();

    var _c0 = function (a0) { return [a0]; };
    function BreadcrumbComponent_div_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var route_r11 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(2, _c0, route_r11.url));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(route_r11.displayName);
    } }
    function BreadcrumbComponent_div_3_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var route_r11 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(route_r11.displayName);
    } }
    var _c1 = function (a0) { return { "last": a0 }; };
    function BreadcrumbComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵtemplate(1, BreadcrumbComponent_div_3_div_2_a_1_Template, 2, 4, "a", 6);
        core.ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_span_2_Template, 2, 1, "span", 7);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var route_r11 = ctx.$implicit;
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(3, _c1, route_r11.terminal));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !route_r11.terminal);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", route_r11.terminal);
    } }
    function BreadcrumbComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_Template, 3, 5, "div", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r9.breadcrumbs);
    } }
    var _c2 = ["*"];
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(breadcrumbService) {
            var _this = this;
            this.breadcrumbService = breadcrumbService;
            breadcrumbService.breadcrumbChanged.subscribe(function (crumbs) { _this.onBreadcrumbChange(crumbs); });
        }
        BreadcrumbComponent.prototype.onBreadcrumbChange = function (crumbs) {
            this.breadcrumbs = crumbs;
        };
        BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(core.ɵɵdirectiveInject(BreadcrumbService)); };
        BreadcrumbComponent.ɵcmp = core.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["breadcrumb"]], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["template", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "nav-wrapper"], ["class", "breadcrumb", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb", 3, "ngClass"], ["href", "", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["href", "", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", null, 0);
                core.ɵɵprojection(2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(3, BreadcrumbComponent_div_3_Template, 3, 1, "div", 1);
            } if (rf & 2) {
                var _r8 = core.ɵɵreference(1);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", _r8.children.length == 0);
            } }, directives: [common.NgIf, common.NgForOf, common.NgClass, router.RouterLinkWithHref], encapsulation: 2 });
        return BreadcrumbComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbComponent, [{
            type: core.Component,
            args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'breadcrumb',
                    template: "<div #template>\n    <ng-content></ng-content>\n</div>\n<div class=\"container\" *ngIf=\"template.children.length == 0\">\n    <div class=\"nav-wrapper\">\n        <div class=\"breadcrumb\" *ngFor=\"let route of breadcrumbs\" [ngClass]=\"{'last': route.terminal}\">\n            <!-- disable link of last item -->\n            <a href=\"\" *ngIf=\"!route.terminal\" [routerLink]=\"[route.url]\">{{ route.displayName }}</a>\n            <span *ngIf=\"route.terminal\">{{ route.displayName }}</span>\n        </div>\n    </div>\n</div>"
                }]
        }], function () { return [{ type: BreadcrumbService }]; }, null); })();

    function breadcrumbServiceFactory(router) {
        return new BreadcrumbService(router);
    }
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule.ɵmod = core.ɵɵdefineNgModule({ type: BreadcrumbModule });
        BreadcrumbModule.ɵinj = core.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, providers: [
                { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [router.Router] }
            ], imports: [[common.CommonModule, router.RouterModule]] });
        return BreadcrumbModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: [BreadcrumbComponent], imports: [common.CommonModule, router.RouterModule], exports: [BreadcrumbComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, router.RouterModule],
                    providers: [
                        { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [router.Router] }
                    ],
                    declarations: [BreadcrumbComponent],
                    exports: [BreadcrumbComponent]
                }]
        }], null, null); })();

    exports.Breadcrumb = Breadcrumb;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.BreadcrumbService = BreadcrumbService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-crumbs.umd.js.map
