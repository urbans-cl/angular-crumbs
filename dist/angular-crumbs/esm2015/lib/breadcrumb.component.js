import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_div_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, route_r3.url));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(route_r3.displayName);
} }
function BreadcrumbComponent_div_3_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(route_r3.displayName);
} }
const _c1 = function (a0) { return { "last": a0 }; };
function BreadcrumbComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BreadcrumbComponent_div_3_div_2_a_1_Template, 2, 4, "a", 6);
    i0.ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_span_2_Template, 2, 1, "span", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const route_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, route_r3.terminal));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !route_r3.terminal);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", route_r3.terminal);
} }
function BreadcrumbComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, BreadcrumbComponent_div_3_div_2_Template, 3, 5, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.breadcrumbs);
} }
const _c2 = ["*"];
export class BreadcrumbComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        breadcrumbService.breadcrumbChanged.subscribe((crumbs) => { this.onBreadcrumbChange(crumbs); });
    }
    onBreadcrumbChange(crumbs) {
        this.breadcrumbs = crumbs;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(i0.ɵɵdirectiveInject(i1.BreadcrumbService)); };
BreadcrumbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["breadcrumb"]], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["template", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "nav-wrapper"], ["class", "breadcrumb", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb", 3, "ngClass"], ["href", "", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["href", "", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, BreadcrumbComponent_div_3_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", _r0.children.length == 0);
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgClass, i3.RouterLinkWithHref], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbComponent, [{
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
    }], function () { return [{ type: i1.BreadcrumbService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNydW1icy8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBZ0J0Qyw0QkFBOEQ7SUFBQSxZQUF1QjtJQUFBLGlCQUFJOzs7SUFBdEQscUVBQTBCO0lBQUMsZUFBdUI7SUFBdkIsMENBQXVCOzs7SUFDckYsNEJBQTZCO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGVBQXVCO0lBQXZCLDBDQUF1Qjs7OztJQUh4RCw4QkFDSTtJQUNBLDRFQUE4RDtJQUM5RCxrRkFBNkI7SUFDakMsaUJBQU07OztJQUpvRCx1RUFBb0M7SUFFL0UsZUFBdUI7SUFBdkIseUNBQXVCO0lBQzVCLGVBQXNCO0lBQXRCLHdDQUFzQjs7O0lBTHhDLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSwwRUFDSTtJQUlSLGlCQUFNO0lBQ1YsaUJBQU07OztJQU4wQixlQUFpQztJQUFqQyw0Q0FBaUM7OztBQVFqRSxNQUFNLE9BQU8sbUJBQW1CO0lBRzVCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxNQUFvQjtRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOztzRkFUUSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7UUFiM0Isb0NBQ0Q7UUFBQSxrQkFBWTtRQUNoQixpQkFBTTtRQUNOLG9FQUNJOzs7UUFEbUIsZUFBcUM7UUFBckMsK0NBQXFDOztrREFVL0MsbUJBQW1CO2NBakIvQixTQUFTO2VBQUM7Z0JBQ1AsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUNSOzs7Ozs7Ozs7OztPQVdHO2FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9icmVhZGNydW1iLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ2JyZWFkY3J1bWInLFxyXG4gICAgdGVtcGxhdGU6XHJcbiAgICBgPGRpdiAjdGVtcGxhdGU+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgKm5nSWY9XCJ0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT0gMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJyZWFkY3J1bWJcIiAqbmdGb3I9XCJsZXQgcm91dGUgb2YgYnJlYWRjcnVtYnNcIiBbbmdDbGFzc109XCJ7J2xhc3QnOiByb3V0ZS50ZXJtaW5hbH1cIj5cclxuICAgICAgICAgICAgPCEtLSBkaXNhYmxlIGxpbmsgb2YgbGFzdCBpdGVtIC0tPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCIgKm5nSWY9XCIhcm91dGUudGVybWluYWxcIiBbcm91dGVyTGlua109XCJbcm91dGUudXJsXVwiPnt7IHJvdXRlLmRpc3BsYXlOYW1lIH19PC9hPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdXRlLnRlcm1pbmFsXCI+e3sgcm91dGUuZGlzcGxheU5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCB7XHJcbiAgICBicmVhZGNydW1iczogQnJlYWRjcnVtYltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWRjcnVtYlNlcnZpY2U6IEJyZWFkY3J1bWJTZXJ2aWNlKSB7XHJcbiAgICAgICAgYnJlYWRjcnVtYlNlcnZpY2UuYnJlYWRjcnVtYkNoYW5nZWQuc3Vic2NyaWJlKChjcnVtYnM6IEJyZWFkY3J1bWJbXSkgPT4geyB0aGlzLm9uQnJlYWRjcnVtYkNoYW5nZShjcnVtYnMpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnJlYWRjcnVtYkNoYW5nZShjcnVtYnM6IEJyZWFkY3J1bWJbXSkge1xyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBjcnVtYnM7XHJcbiAgICB9XHJcbn1cclxuIl19