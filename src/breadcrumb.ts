export enum BreadCrumbEnumClassName {
    ACTIVE= "active",
}

export enum BreadCrumbEnumAriaCurrent {
    PAGE="page"
}

export interface BreadCrumbProp {
    itemName: string;
    itemLink?: string;
    className?: BreadCrumbEnumClassName;
    ariaCurrent?: BreadCrumbEnumAriaCurrent;
}

export interface BreadCrumbArray {
    breadCrumbs: Array<BreadCrumbProp>
}
