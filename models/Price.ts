export class Price {
    amount: number;
    currencyType: string;

    constructor(amount: number, currencyType: string) {
        this.amount = amount;
        this.currencyType = currencyType;
    }
}