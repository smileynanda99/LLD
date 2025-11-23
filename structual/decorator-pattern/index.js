/*
Decorator Design Pattern is a structural pattern that lets you dynamically add behavior to individual objects without
changing other objects of the same class. It uses decorator classes to wrap concrete components, making functionality
more flexible and reusable.

https://www.geeksforgeeks.org/system-design/decorator-pattern/
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
var ToppingDecorator = /** @class */ (function () {
    function ToppingDecorator(pizza) {
        this.basePizza = pizza;
    }
    ToppingDecorator.prototype.getDescription = function () {
        return this.basePizza.getDescription();
    };
    ToppingDecorator.prototype.getCost = function () {
        return this.basePizza.getCost();
    };
    return ToppingDecorator;
}());
var PlainPizza = /** @class */ (function () {
    function PlainPizza() {
    }
    PlainPizza.prototype.getDescription = function () {
        return "Plain Pizza";
    };
    PlainPizza.prototype.getCost = function () {
        return 100;
    };
    return PlainPizza;
}());
var MargheritaPizza = /** @class */ (function () {
    function MargheritaPizza() {
    }
    MargheritaPizza.prototype.getDescription = function () {
        return "Margherita Pizza";
    };
    MargheritaPizza.prototype.getCost = function () {
        return 120;
    };
    return MargheritaPizza;
}());
var CheeseTopping = /** @class */ (function (_super) {
    __extends(CheeseTopping, _super);
    function CheeseTopping(basePizza) {
        return _super.call(this, basePizza) || this;
    }
    CheeseTopping.prototype.getDescription = function () {
        return this.basePizza.getDescription() + " + Cheese";
    };
    CheeseTopping.prototype.getCost = function () {
        return this.basePizza.getCost() + 30;
    };
    return CheeseTopping;
}(ToppingDecorator));
var MushroomTopping = /** @class */ (function (_super) {
    __extends(MushroomTopping, _super);
    function MushroomTopping(basePizza) {
        return _super.call(this, basePizza) || this;
    }
    MushroomTopping.prototype.getDescription = function () {
        return this.basePizza.getDescription() + " + Mushroom";
    };
    MushroomTopping.prototype.getCost = function () {
        return this.basePizza.getCost() + 20;
    };
    return MushroomTopping;
}(ToppingDecorator));
var DecoratorPattern = /** @class */ (function () {
    function DecoratorPattern() {
    }
    DecoratorPattern.test = function () {
        // Order: 1 => Plain Pizza + Cheese;
        var order1 = new CheeseTopping(new PlainPizza());
        console.log("Order No. 1 => Description: ".concat(order1.getDescription(), " & Cost(RS): ").concat(order1.getCost()));
        // Order: 2 => Plain Pizza + Cheese + Mushroom;
        var order2 = new MushroomTopping(new CheeseTopping(new PlainPizza()));
        console.log("Order No. 2 => Description: ".concat(order2.getDescription(), " & Cost(RS): ").concat(order2.getCost()));
        // Order: 3 => Margherita Pizza + Cheese;
        var order3 = new CheeseTopping(new MargheritaPizza());
        console.log("Order No. 3 => Description: ".concat(order3.getDescription(), " & Cost(RS): ").concat(order3.getCost()));
    };
    return DecoratorPattern;
}());
DecoratorPattern.test();
