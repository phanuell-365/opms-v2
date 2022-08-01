import {SidebarBodyObject} from "~/src/sidebar";

type SidebarItems = Array<SidebarBodyObject>;

interface SidebarItemsState {
    items: SidebarItems;
}

const state: SidebarItemsState = {
    items: [

        {
            itemName: "home",
            itemLinks: [
                {
                    linkName: "Overview",
                    linkHref: "",
                },
                {
                    linkName: "Updates",
                    linkHref: "",
                },
                {
                    linkName: "Reports",
                    linkHref: "",
                }
            ],
            iconName: "home",
            itemTitle: "Home",
        },
        {
            itemName: "users",
            itemLinks: [
                {
                    linkName: "View All Users",
                    linkHref: "/users",
                },
                {
                    linkName: "Create User",
                    linkHref: "/users/create"
                },
                {
                    linkName: "Update User",
                    linkHref: ""
                },
                {
                    linkName: "Delete User",
                    linkHref: ""
                }
            ],
            iconName: "cpu-fill",
            itemTitle: "Users",
        },
        {
            itemName: "drugs",
            itemLinks: [
                {
                    linkName: "View All Drugs",
                    linkHref: "/drugs",
                },
                {
                    linkName: "Create Drug",
                    linkHref: "/drugs/create"
                },
                {
                    linkName: "Update Drug",
                    linkHref: ""
                },
                {
                    linkName: "Delete Drug",
                    linkHref: ""
                }
            ],
            iconName: "grid",
            itemTitle: "Drugs",
        },

        {
            itemName: "patients",
            itemLinks: [
                {
                    linkName: "View All Patients",
                    linkHref: "/patients",
                },
                {
                    linkName: "Create Patient",
                    linkHref: "/patients/create"
                },
                {
                    linkName: "Update Patient",
                    linkHref: ""
                },
                {
                    linkName: "Delete Patient",
                    linkHref: ""
                }
            ],
            iconName: "people-circle",
            itemTitle: "Patients",
        },
        {
            itemName: "suppliers",
            itemLinks: [
                {
                    linkName: "View All Suppliers",
                    linkHref: "/suppliers",
                },
                {
                    linkName: "Create Supplier",
                    linkHref: "/suppliers/create"
                },
                {
                    linkName: "Update Supplier",
                    linkHref: ""
                },
                {
                    linkName: "Delete Supplier",
                    linkHref: ""
                }
            ],
            iconName: "chat-quote-fill",
            itemTitle: "Suppliers",
        },
        {
            itemName: "inventory",
            itemLinks: [
                {
                    linkName: "View All Inventory",
                    linkHref: "/inventory",
                },
                {
                    linkName: "Create Inventory",
                    linkHref: "/inventory/create"
                },
                {
                    linkName: "Update Inventory",
                    linkHref: ""
                },
                {
                    linkName: "Delete Inventory",
                    linkHref: ""
                }
            ],
            iconName: "table",
            itemTitle: "Inventory",
        },
        {
            itemName: "orders",
            itemLinks: [
                {
                    linkName: "View All Orders",
                    linkHref: "/orders",
                },
                {
                    linkName: "Create Order",
                    linkHref: "/orders/create"
                },
                {
                    linkName: "Update Order",
                    linkHref: ""
                },
                {
                    linkName: "Delete Order",
                    linkHref: ""
                }
            ],
            iconName: "calendar3",
            itemTitle: "Orders",
        },
        {
            itemName: "supplies",
            itemLinks: [
                {
                    linkName: "View All Supplies",
                    linkHref: "/supplies",
                },
                {
                    linkName: "Create Supply",
                    linkHref: "/supplies/create"
                },
                {
                    linkName: "Update Supply",
                    linkHref: ""
                },
                {
                    linkName: "Delete Supply",
                    linkHref: ""
                }
            ],
            iconName: "collection",
            itemTitle: "Supplies",
        },
        {
            itemName: "sale",
            itemLinks: [
                {
                    linkName: "View All Sales",
                    linkHref: "/sales",
                },
                {
                    linkName: "Create Sale",
                    linkHref: "/sales/create"
                },
                {
                    linkName: "Update Sale",
                    linkHref: ""
                },
                {
                    linkName: "Delete Sale",
                    linkHref: ""
                }
            ],
            iconName: "speedometer2",
            itemTitle: "Sales",
        }
    ]
}

export default () => {
    return useState('sidebarItems', () => {
        return state;
    })
}
