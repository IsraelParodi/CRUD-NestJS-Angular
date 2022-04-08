import {Document} from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly img: string;
    readonly created_at: Date;
}
