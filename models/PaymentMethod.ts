export class PaymentMethod {
    type: string;
    ownerName: string;
    methodNumber: string;
    dueDate: Date;
    securityNumber: number;

    constructor(type: string, ownerName: string, methodNumber: string, dueDate: Date, securityNumber: number) {
        this.type = type;
        this.ownerName = ownerName;
        this.methodNumber = methodNumber;
        this.dueDate = dueDate;
        this.securityNumber = securityNumber;
    }
}