import { Injectable, EventEmitter } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BreadcrumbService {
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
BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) { return new (t || BreadcrumbService)(i0.ɵɵinject(i1.Router)); };
BreadcrumbService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbService, factory: BreadcrumbService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jcnVtYnMvIiwic291cmNlcyI6WyJsaWIvYnJlYWRjcnVtYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBeUMsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUt2RixNQUFNLE9BQU8saUJBQWlCO0lBSzFCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmxDLHNCQUFpQixHQUFHLElBQUksWUFBWSxDQUFlLEtBQUssQ0FBQyxDQUFDO1FBRWxELGdCQUFXLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztRQUcxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBNkIsRUFBRSxJQUFZO1FBQy9ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksT0FBTyxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFNUIsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFlBQVksQ0FB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Q0FBQyxJQUFJLEVBQUU7Z0JBQUUsU0FBUzthQUFFO1lBRXpDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUVsQyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQUUsTUFBTTthQUFFO1NBQ2pDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOztrRkEzRlEsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIEV2ZW50LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICcuL2JyZWFkY3J1bWInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYlNlcnZpY2Uge1xyXG4gICAgYnJlYWRjcnVtYkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEJyZWFkY3J1bWJbXT4oZmFsc2UpO1xyXG5cclxuICAgIHByaXZhdGUgYnJlYWRjcnVtYnMgPSBuZXcgQXJyYXk8QnJlYWRjcnVtYj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgocm91dGVFdmVudCkgPT4geyB0aGlzLm9uUm91dGVFdmVudChyb3V0ZUV2ZW50KTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUJyZWFkY3J1bWIocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJvb3RVcmwgPSB0aGlzLmNyZWF0ZVJvb3RVcmwocm91dGUpO1xyXG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWIgPSB0aGlzLmJyZWFkY3J1bWJzLmZpbmQoZnVuY3Rpb24gKGJjKSB7IHJldHVybiBiYy51cmwgPT09IHJvb3RVcmw7IH0pO1xyXG5cclxuICAgICAgICBpZiAoIWJyZWFkY3J1bWIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGJyZWFkY3J1bWIuZGlzcGxheU5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWJDaGFuZ2VkLmVtaXQodGhpcy5icmVhZGNydW1icyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdXRlRXZlbnQocm91dGVFdmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoIShyb3V0ZUV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnJvb3Quc25hcHNob3Q7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgICB2YXIgYnJlYWRDcnVtYkluZGV4ID0gMDtcclxuICAgICAgICB2YXIgbmV3Q3J1bWJzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlLnJvdXRlQ29uZmlnID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmICghcm91dGUucm91dGVDb25maWcucGF0aCkgeyBjb250aW51ZTsgfVxyXG5cclxuICAgICAgICAgICAgdXJsICs9IGAvJHt0aGlzLmNyZWF0ZVVybChyb3V0ZSl9YDtcclxuXHJcbiAgICAgICAgICAgIGlmICghcm91dGUuZGF0YVsnYnJlYWRjcnVtYiddKSB7IGNvbnRpbnVlOyB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3Q3J1bWIgPSB0aGlzLmNyZWF0ZUJyZWFkY3J1bWIocm91dGUsIHVybClcclxuXHJcbiAgICAgICAgICAgIGlmIChicmVhZENydW1iSW5kZXggPCB0aGlzLmJyZWFkY3J1bWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IHRoaXMuYnJlYWRjcnVtYnNbYnJlYWRDcnVtYkluZGV4KytdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcgJiYgZXhpc3Rpbmcucm91dGUgPT0gcm91dGUucm91dGVDb25maWcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NydW1iLmRpc3BsYXlOYW1lID0gZXhpc3RpbmcuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXdDcnVtYnMucHVzaChuZXdDcnVtYik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gbmV3Q3J1bWJzO1xyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYkNoYW5nZWQuZW1pdCh0aGlzLmJyZWFkY3J1bWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJyZWFkY3J1bWIocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHVybDogc3RyaW5nKTogQnJlYWRjcnVtYiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHJvdXRlLmRhdGFbJ2JyZWFkY3J1bWInXSxcclxuICAgICAgICAgICAgdGVybWluYWw6IHRoaXMuaXNUZXJtaW5hbChyb3V0ZSksXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICByb3V0ZTogcm91dGUucm91dGVDb25maWdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1Rlcm1pbmFsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlLmZpcnN0Q2hpbGQgPT09IG51bGxcclxuICAgICAgICAgICAgfHwgcm91dGUuZmlyc3RDaGlsZC5yb3V0ZUNvbmZpZyA9PT0gbnVsbFxyXG4gICAgICAgICAgICB8fCAhcm91dGUuZmlyc3RDaGlsZC5yb3V0ZUNvbmZpZy5wYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlVXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlLnVybC5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9TdHJpbmcoKTsgfSkuam9pbignLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm9vdFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBsZXQgbmV4dCA9IHJvdXRlLnJvb3Q7XHJcblxyXG4gICAgICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0LnJvdXRlQ29uZmlnID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmICghbmV4dC5yb3V0ZUNvbmZpZy5wYXRoKSB7IGNvbnRpbnVlOyB9XHJcblxyXG4gICAgICAgICAgICB1cmwgKz0gYC8ke3RoaXMuY3JlYXRlVXJsKG5leHQpfWA7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gcm91dGUpIHsgYnJlYWs7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbn1cclxuIl19