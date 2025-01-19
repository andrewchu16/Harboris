import Crate from "./crate.model";

export default interface Container {
    id: string;
    name: string;
    crates: Crate[];
    maxCrates: number;
    timeCreated: Date;
    timeExpires: Date;
    location: string;
}