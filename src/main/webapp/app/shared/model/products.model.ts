export interface IProducts {
    id?: number;
    productName?: string;
    productDesc?: string;
    productPrice?: number;
    productImg?: string;
}

export class Products implements IProducts {
    constructor(
        public id?: number,
        public productName?: string,
        public productDesc?: string,
        public productPrice?: number,
        public productImg?: string
    ) {}
}
