/*
Template Method Design Pattern is a behavioral pattern that defines the skeleton of an algorithm in a base method
while allowing subclasses to override specific steps without altering its overall structure. It’s like a recipe:
the main steps remain fixed, but details can be customized for variation.

https://www.geeksforgeeks.org/system-design/template-method-design-pattern/
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PaymentFlow = /** @class */ (function () {
    function PaymentFlow() {
    }
    PaymentFlow.prototype.sendMoney = function (amount) {
        // step: 1
        this.validate();
        // step: 2
        this.calculateCharges(amount);
        // step: 3
        this.debitAmount(amount);
        // step: 4
        this.creditAmount(amount);
    };
    return PaymentFlow;
}());
// In TypeScript there is no built-in final or sealed keyword, so you cannot completely prevent method overriding at the language level.
// Achieving same by Freeze the method at runtime
Object.defineProperty(PaymentFlow.prototype, 'sendMoney', { writable: false });
var PaymentToFriend = /** @class */ (function (_super) {
    __extends(PaymentToFriend, _super);
    function PaymentToFriend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentToFriend.prototype.validate = function () {
        console.log("Validating...");
    };
    PaymentToFriend.prototype.calculateCharges = function (amount) {
        console.log("0% charge for friend payments.");
        this.charge = 0;
    };
    PaymentToFriend.prototype.debitAmount = function (amount) {
        console.log("Debiting required amount: ".concat(amount + this.charge, " from your bank account"));
    };
    PaymentToFriend.prototype.creditAmount = function (amount) {
        console.log("Crediting amount: ".concat(amount, " to your friend bank account"));
    };
    return PaymentToFriend;
}(PaymentFlow));
var PaymentToMerchant = /** @class */ (function (_super) {
    __extends(PaymentToMerchant, _super);
    function PaymentToMerchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentToMerchant.prototype.validate = function () {
        console.log("Validating...");
    };
    PaymentToMerchant.prototype.calculateCharges = function (amount) {
        console.log("2% charge for merchant payments.");
        this.charge = Math.floor((amount / 100) * 2);
    };
    PaymentToMerchant.prototype.debitAmount = function (amount) {
        console.log("Debiting required amount: ".concat(amount + this.charge, " (actual amount + 2% tax) from your bank account"));
    };
    PaymentToMerchant.prototype.creditAmount = function (amount) {
        console.log("Crediting amount: ".concat(amount, " to your merchant bank account"));
    };
    return PaymentToMerchant;
}(PaymentFlow));
var TemplatePattern = /** @class */ (function () {
    function TemplatePattern() {
    }
    TemplatePattern.text = function () {
        var friend = new PaymentToFriend();
        friend.sendMoney(100);
        console.log();
        var merchant = new PaymentToMerchant();
        merchant.sendMoney(100000);
    };
    return TemplatePattern;
}());
TemplatePattern.text();
