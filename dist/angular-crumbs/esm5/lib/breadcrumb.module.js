import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbComponent } from './breadcrumb.component';
import * as i0 from "@angular/core";
export function breadcrumbServiceFactory(router) {
    return new BreadcrumbService(router);
}
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.ɵmod = i0.ɵɵdefineNgModule({ type: BreadcrumbModule });
    BreadcrumbModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, providers: [
            { provide: BreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
        ], imports: [[CommonModule, RouterModule]] });
    return BreadcrumbModule;
}());
export { BreadcrumbModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNydW1icy8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU3RCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBYztJQUNuRCxPQUFPLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVEO0lBQUE7S0FRaUM7d0RBQXBCLGdCQUFnQjttSEFBaEIsZ0JBQWdCLG1CQU5kO1lBQ1AsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ3ZGLFlBSFEsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDOzJCQVp6QztDQW1CaUMsQUFSakMsSUFRaUM7U0FBcEIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsbUJBSFYsbUJBQW1CLGFBSnhCLFlBQVksRUFBRSxZQUFZLGFBSzFCLG1CQUFtQjtrREFFcEIsZ0JBQWdCO2NBUjVCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1AsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN2RjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJyZWFkY3J1bWJTZXJ2aWNlRmFjdG9yeShyb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgcmV0dXJuIG5ldyBCcmVhZGNydW1iU2VydmljZShyb3V0ZXIpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogQnJlYWRjcnVtYlNlcnZpY2UsIHVzZUZhY3Rvcnk6IGJyZWFkY3J1bWJTZXJ2aWNlRmFjdG9yeSwgZGVwczogW1JvdXRlcl0gfVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0JyZWFkY3J1bWJDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0JyZWFkY3J1bWJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHsgfVxyXG4iXX0=