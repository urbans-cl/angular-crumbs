import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbComponent } from './breadcrumb.component';
import * as i0 from "@angular/core";
export function breadcrumbServiceFactory(router) {
    return new BreadcrumbService(router);
}
export class BreadcrumbModule {
}
BreadcrumbModule.ɵmod = i0.ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, providers: [
        { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
    ], imports: [[CommonModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: [BreadcrumbComponent], imports: [CommonModule, RouterModule], exports: [BreadcrumbComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNydW1icy8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU3RCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBYztJQUNuRCxPQUFPLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQVVELE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixtQkFOZDtRQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN2RixZQUhRLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzt3RkFPNUIsZ0JBQWdCLG1CQUhWLG1CQUFtQixhQUp4QixZQUFZLEVBQUUsWUFBWSxhQUsxQixtQkFBbUI7a0RBRXBCLGdCQUFnQjtjQVI1QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFDckMsU0FBUyxFQUFFO29CQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdkY7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuL2JyZWFkY3J1bWIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBicmVhZGNydW1iU2VydmljZUZhY3Rvcnkocm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHJldHVybiBuZXcgQnJlYWRjcnVtYlNlcnZpY2Uocm91dGVyKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEJyZWFkY3J1bWJTZXJ2aWNlLCB1c2VGYWN0b3J5OiBicmVhZGNydW1iU2VydmljZUZhY3RvcnksIGRlcHM6IFtSb3V0ZXJdIH1cclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1iQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtCcmVhZGNydW1iQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYk1vZHVsZSB7IH1cclxuIl19