import { PaymentMethod } from "../models/PaymentMethod";
import { Price } from "../models/Price";

export abstract class PGateway {

    private price: Price;
    private paymentMethod: PaymentMethod;

    abstract pay();
    abstract reimburse();

    getPrice(): Price {
        return this.price;
    }

    setPrice(price: Price): void {
        this.price = price;
    }

    getPaymentMethod(): PaymentMethod {
        return this.paymentMethod;
    }

    setPaymentMethod(paymentMethod: PaymentMethod): void {
        this.paymentMethod = paymentMethod;
    }
}