export interface ItemLinkMap {
    linkName:string;
    linkHref:string;
}

export interface SidebarBodyObject {
    itemTitle:string;
    itemName:string;
    itemLinks:Array<ItemLinkMap>;
    iconName:string;
}
