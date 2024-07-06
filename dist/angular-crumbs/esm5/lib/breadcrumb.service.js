import { Injectable, EventEmitter } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService(router) {
        var _this = this;
        this.router = router;
        this.breadcrumbChanged = new EventEmitter(false);
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
        if (!(routeEvent instanceof NavigationEnd)) {
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
    BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) { return new (t || BreadcrumbService)(i0.ɵɵinject(i1.Router)); };
    BreadcrumbService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbService, factory: BreadcrumbService.ɵfac });
    return BreadcrumbService;
}());
export { BreadcrumbService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jcnVtYnMvIiwic291cmNlcyI6WyJsaWIvYnJlYWRjcnVtYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBeUMsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUl2RjtJQU1JLDJCQUFvQixNQUFjO1FBQWxDLGlCQUVDO1FBRm1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLENBQWUsS0FBSyxDQUFDLENBQUM7UUFFbEQsZ0JBQVcsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO1FBRzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQVUsSUFBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVNLDRDQUFnQixHQUF2QixVQUF3QixLQUE2QixFQUFFLElBQVk7UUFDL0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUU1QixVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sd0NBQVksR0FBcEIsVUFB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QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsU0FBUzthQUFFO1lBRXpDLEdBQUcsSUFBSSxNQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUM7WUFFbEMsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUFFLE1BQU07YUFBRTtTQUNqQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztzRkEzRlEsaUJBQWlCOzZEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCOzRCQU45QjtDQWtHQyxBQTdGRCxJQTZGQztTQTVGWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgRXZlbnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iU2VydmljZSB7XHJcbiAgICBicmVhZGNydW1iQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QnJlYWRjcnVtYltdPihmYWxzZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBicmVhZGNydW1icyA9IG5ldyBBcnJheTxCcmVhZGNydW1iPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChyb3V0ZUV2ZW50KSA9PiB7IHRoaXMub25Sb3V0ZUV2ZW50KHJvdXRlRXZlbnQpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlQnJlYWRjcnVtYihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdFVybCA9IHRoaXMuY3JlYXRlUm9vdFVybChyb3V0ZSk7XHJcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYiA9IHRoaXMuYnJlYWRjcnVtYnMuZmluZChmdW5jdGlvbiAoYmMpIHsgcmV0dXJuIGJjLnVybCA9PT0gcm9vdFVybDsgfSk7XHJcblxyXG4gICAgICAgIGlmICghYnJlYWRjcnVtYikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5TmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYkNoYW5nZWQuZW1pdCh0aGlzLmJyZWFkY3J1bWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91dGVFdmVudChyb3V0ZUV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICghKHJvdXRlRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUucm9vdC5zbmFwc2hvdDtcclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICAgIHZhciBicmVhZENydW1iSW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBuZXdDcnVtYnMgPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocm91dGUucm91dGVDb25maWcgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoKSB7IGNvbnRpbnVlOyB9XHJcblxyXG4gICAgICAgICAgICB1cmwgKz0gYC8ke3RoaXMuY3JlYXRlVXJsKHJvdXRlKX1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZS5kYXRhWydicmVhZGNydW1iJ10pIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdDcnVtYiA9IHRoaXMuY3JlYXRlQnJlYWRjcnVtYihyb3V0ZSwgdXJsKVxyXG5cclxuICAgICAgICAgICAgaWYgKGJyZWFkQ3J1bWJJbmRleCA8IHRoaXMuYnJlYWRjcnVtYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5icmVhZGNydW1ic1ticmVhZENydW1iSW5kZXgrK107XHJcblxyXG4gICAgICAgICAgICAgIGlmIChleGlzdGluZyAmJiBleGlzdGluZy5yb3V0ZSA9PSByb3V0ZS5yb3V0ZUNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgbmV3Q3J1bWIuZGlzcGxheU5hbWUgPSBleGlzdGluZy5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ld0NydW1icy5wdXNoKG5ld0NydW1iKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBuZXdDcnVtYnM7XHJcbiAgICAgICAgdGhpcy5icmVhZGNydW1iQ2hhbmdlZC5lbWl0KHRoaXMuYnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnJlYWRjcnVtYihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgdXJsOiBzdHJpbmcpOiBCcmVhZGNydW1iIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogcm91dGUuZGF0YVsnYnJlYWRjcnVtYiddLFxyXG4gICAgICAgICAgICB0ZXJtaW5hbDogdGhpcy5pc1Rlcm1pbmFsKHJvdXRlKSxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZS5yb3V0ZUNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVGVybWluYWwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgICAgICByZXR1cm4gcm91dGUuZmlyc3RDaGlsZCA9PT0gbnVsbFxyXG4gICAgICAgICAgICB8fCByb3V0ZS5maXJzdENoaWxkLnJvdXRlQ29uZmlnID09PSBudWxsXHJcbiAgICAgICAgICAgIHx8ICFyb3V0ZS5maXJzdENoaWxkLnJvdXRlQ29uZmlnLnBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgICAgICByZXR1cm4gcm91dGUudXJsLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy50b1N0cmluZygpOyB9KS5qb2luKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb290VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGxldCBuZXh0ID0gcm91dGUucm9vdDtcclxuXHJcbiAgICAgICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHQucm91dGVDb25maWcgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgaWYgKCFuZXh0LnJvdXRlQ29uZmlnLnBhdGgpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgICAgIHVybCArPSBgLyR7dGhpcy5jcmVhdGVVcmwobmV4dCl9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSByb3V0ZSkgeyBicmVhazsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxufVxyXG4iXX0=