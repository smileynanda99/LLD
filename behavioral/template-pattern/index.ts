/*
Template Method Design Pattern is a behavioral pattern that defines the skeleton of an algorithm in a base method 
while allowing subclasses to override specific steps without altering its overall structure. It’s like a recipe: 
the main steps remain fixed, but details can be customized for variation.

https://www.geeksforgeeks.org/system-design/template-method-design-pattern/
*/


abstract class PaymentFlow {
    abstract validate(): void;
    abstract calculateCharges(amount: number): void;
    abstract debitAmount(amount: number): void;
    abstract creditAmount(amount: number): void;

    public sendMoney(amount: number) {
        // step: 1
        this.validate();

        // step: 2
        this.calculateCharges(amount);

        // step: 3
        this.debitAmount(amount);

        // step: 4
        this.creditAmount(amount);
    }
}
// In TypeScript there is no built-in final or sealed keyword, so you cannot completely prevent method overriding at the language level.
// Achieving same by Freeze the method at runtime
Object.defineProperty(PaymentFlow.prototype, 'sendMoney', { writable: false });

class PaymentToFriend extends PaymentFlow {
    charge: number;

    validate(): void {
        console.log("Validating...");
    }

    calculateCharges(amount: number): void {
        console.log("0% charge for friend payments.");
        this.charge = 0;
    }

    debitAmount(amount: number): void {
        console.log(`Debiting required amount: ${amount + this.charge} from your bank account`);
    }

    creditAmount(amount: number): void {
        console.log(`Crediting amount: ${amount} to your friend bank account`);
    }
}

class PaymentToMerchant extends PaymentFlow {
     charge: number;

    validate(): void {
        console.log("Validating...");
    }

    calculateCharges(amount: number): void {
        console.log("2% charge for merchant payments.");
        this.charge = Math.floor((amount/100)*2);
    }

    debitAmount(amount: number): void {
        console.log(`Debiting required amount: ${amount + this.charge} (actual amount + 2% tax) from your bank account`);
    }

    creditAmount(amount: number): void {
        console.log(`Crediting amount: ${amount} to your merchant bank account`);
    }
}

class TemplatePattern {
    static text() {
        const friend = new PaymentToFriend();
        friend.sendMoney(100);

        console.log();
        const merchant = new PaymentToMerchant();
        merchant.sendMoney(100000);
    }
}

TemplatePattern.text();