/*
The Factory Method is a creational design pattern that defines an interface for creating objects but lets subclasses decide
which object to instantiate. It promotes loose coupling by delegating object creation to a method, making the system more
flexible and extensible.

https://www.geeksforgeeks.org/system-design/factory-method-for-designing-pattern/
*/
var ShapeType;
(function (ShapeType) {
    ShapeType["CIRCLE"] = "CIRCLE";
    ShapeType["SQUARE"] = "SQUARE";
})(ShapeType || (ShapeType = {}));
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.computeArea = function () {
        console.log('Computing circle area...');
    };
    Circle.prototype.draw = function () {
        console.log('Drawing circle...');
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.computeArea = function () {
        console.log('Computing square area...');
    };
    Square.prototype.draw = function () {
        console.log('Drawing square...');
    };
    return Square;
}());
var CircleFactory = /** @class */ (function () {
    function CircleFactory() {
    }
    CircleFactory.prototype.createShape = function () {
        // If required any bussiness logic for create circle than define here, without effective any thing else
        // Single Response of change
        return new Circle();
    };
    return CircleFactory;
}());
var SquareFactory = /** @class */ (function () {
    function SquareFactory() {
    }
    SquareFactory.prototype.createShape = function () {
        return new Square();
    };
    return SquareFactory;
}());
// If need one more shape just extend here, Open for extent & close for modification
var ShapeFactoryManager = /** @class */ (function () {
    function ShapeFactoryManager() {
    }
    ShapeFactoryManager.createShape = function (shape) {
        switch (shape) {
            case ShapeType.CIRCLE:
                var circleFactory = new CircleFactory();
                return circleFactory.createShape();
            case ShapeType.SQUARE:
                var squareFactory = new SquareFactory();
                return squareFactory.createShape();
            // But here violence of OPEN/CLOSE principle, if we need one more share then need to modify this
            default:
                return null;
        }
    };
    return ShapeFactoryManager;
}());
var FactoryPattern = /** @class */ (function () {
    function FactoryPattern() {
    }
    FactoryPattern.test = function () {
        // drawing circle...
        var circle = ShapeFactoryManager.createShape(ShapeType.CIRCLE);
        circle.draw();
        // drawing square...
        var square = ShapeFactoryManager.createShape(ShapeType.SQUARE);
        square.draw();
    };
    return FactoryPattern;
}());
FactoryPattern.test();
