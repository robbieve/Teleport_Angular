import { OnInit, OnDestroy } from "@angular/core";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import { Store } from "@ngrx/store";
import { TeleportCoreState } from "teleport-module-services/services/ngrx/index";
import { APIv1State } from "teleport-module-services/services/v1/ngrx/index";
import { IDeveloper } from "teleport-module-services/services/v1/models/Developer";
import { IApplication } from "teleport-module-services/services/v1/models/Application";
export declare class TeleportDevPortalAppsComponent implements OnInit, OnDestroy {
    private store$;
    Developer: IDeveloper;
    sortBy: ((a: IApplication, b: IApplication) => number)[];
    filterOn: string;
    showNum: number;
    private _applications;
    private _isBusy;
    constructor(store$: Store<TeleportCoreState & APIv1State>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly isBusy: boolean;
    readonly totalApps: number;
    readonly Applications: IApplication[];
    requestAppsRefresh(): void;
    hasSort(funcName: string): boolean;
    toggleSort(param: string): void;
    private sortByNameAsc(a, b);
    private sortByNameDesc(a, b);
    private sortByNotesAsc(a, b);
    private sortByNotesDesc(a, b);
    private sortByCreatedOnAsc(a, b);
    private sortByCreatedOnDesc(a, b);
}
