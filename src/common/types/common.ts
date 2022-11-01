export class ResultWithError {
    constructor(err, rst) {
        this.error = err;
        this.data = rst;
    }
    error: string = '';
    data: object = {};
}

export class NftAttribute {
    trait_type: string
    value: string
}