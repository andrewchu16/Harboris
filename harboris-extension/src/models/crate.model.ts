import Item from "./item.model";

export default interface Crate {
    id: string;
    ownerId: string;
    name: string;
    companyId: string;
    items: Item[];
    fulfilled: boolean;
}