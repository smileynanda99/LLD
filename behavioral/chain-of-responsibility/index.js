/*
The Chain of Responsibility design pattern is a behavioral design pattern that allows an object to pass a request along a chain of handlers. Each handler in the chain decides either to process the request or to pass it along the chain to the next handler.

https://www.geeksforgeeks.org/system-design/chain-responsibility-design-pattern/
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
var ReqHandler = /** @class */ (function () {
    function ReqHandler(next) {
        this.handler = next;
    }
    ReqHandler.prototype.proccess = function (amount) {
        return this.handler.proccess(amount);
    };
    return ReqHandler;
}());
var TenRupeesHandler = /** @class */ (function (_super) {
    __extends(TenRupeesHandler, _super);
    function TenRupeesHandler(next) {
        var _this = this;
        if (next)
            _this = _super.call(this, next) || this;
        return _this;
    }
    TenRupeesHandler.prototype.proccess = function (amount) {
        console.log("🚀 TenRupeesHandler ~ proccess ~ amount:", amount);
        var balanceAmount = amount % 10;
        console.log("🚀 TenRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount);
        if (balanceAmount) {
            if (!this.handler)
                return false;
            return this.handler.proccess(balanceAmount);
        }
        return true;
    };
    return TenRupeesHandler;
}(ReqHandler));
var FiftyRupeesHandler = /** @class */ (function (_super) {
    __extends(FiftyRupeesHandler, _super);
    function FiftyRupeesHandler(next) {
        var _this = this;
        if (next)
            _this = _super.call(this, next) || this;
        return _this;
    }
    FiftyRupeesHandler.prototype.proccess = function (amount) {
        console.log("🚀 FiftyRupeesHandler ~ proccess ~ amount:", amount);
        var balanceAmount = amount % 50;
        console.log("🚀 FiftyRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount);
        if (balanceAmount) {
            if (!this.handler)
                return false;
            return this.handler.proccess(balanceAmount);
        }
        return true;
    };
    return FiftyRupeesHandler;
}(ReqHandler));
var OneHundredRupeesHandler = /** @class */ (function (_super) {
    __extends(OneHundredRupeesHandler, _super);
    function OneHundredRupeesHandler(next) {
        var _this = this;
        if (next)
            _this = _super.call(this, next) || this;
        return _this;
    }
    OneHundredRupeesHandler.prototype.proccess = function (amount) {
        console.log("🚀 OneHundredRupeesHandler ~ proccess ~ amount:", amount);
        var balanceAmount = amount % 100;
        console.log("🚀 OneHundredRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount);
        if (balanceAmount) {
            if (!this.handler)
                return false;
            return this.handler.proccess(balanceAmount);
        }
        return true;
    };
    return OneHundredRupeesHandler;
}(ReqHandler));
var FiveHundredRupeesHandler = /** @class */ (function (_super) {
    __extends(FiveHundredRupeesHandler, _super);
    function FiveHundredRupeesHandler(next) {
        var _this = this;
        if (next)
            _this = _super.call(this, next) || this;
        return _this;
    }
    FiveHundredRupeesHandler.prototype.proccess = function (amount) {
        console.log("🚀 FiveHundredRupeesHandler ~ proccess ~ amount:", amount);
        var balanceAmount = amount % 500;
        console.log("🚀 FiveHundredRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount);
        if (balanceAmount) {
            if (!this.handler)
                return false;
            return this.handler.proccess(balanceAmount);
        }
        return true;
    };
    return FiveHundredRupeesHandler;
}(ReqHandler));
var ChainOfResponsibilityPattern = /** @class */ (function () {
    function ChainOfResponsibilityPattern() {
    }
    ChainOfResponsibilityPattern.test = function () {
        var tenRupeesHandler = new TenRupeesHandler(null);
        var fiftyRupeesHandler = new FiftyRupeesHandler(tenRupeesHandler);
        var oneHundredRupeesHandler = new OneHundredRupeesHandler(fiftyRupeesHandler);
        var finalHandler = new FiveHundredRupeesHandler(oneHundredRupeesHandler);
        console.log(finalHandler.proccess(10270));
    };
    return ChainOfResponsibilityPattern;
}());
ChainOfResponsibilityPattern.test();
