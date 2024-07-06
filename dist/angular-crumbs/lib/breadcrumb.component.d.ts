import { Breadcrumb } from './breadcrumb';
import { BreadcrumbService } from './breadcrumb.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent {
    private breadcrumbService;
    breadcrumbs: Breadcrumb[];
    constructor(breadcrumbService: BreadcrumbService);
    private onBreadcrumbChange;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BreadcrumbComponent, "breadcrumb", never, {}, {}, never, ["*"]>;
}
