/*
The Composite Design Pattern is a structural pattern that organizes objects into tree structures, allowing clients to
treat individual objects and groups of objects uniformly.

Like calculator, File System;

https://www.geeksforgeeks.org/java/composite-design-pattern-in-java/
*/
var Operation;
(function (Operation) {
    Operation["ADD"] = "ADD";
    Operation["SUBTRACTION"] = "SUBTRACTION";
    Operation["MULTIPLY"] = "MULTIPLY";
    Operation["DIVIDE"] = "DIVIDE";
})(Operation || (Operation = {}));
var Numbers = /** @class */ (function () {
    function Numbers(number) {
        this.num = number;
    }
    Numbers.prototype.evalute = function () {
        return this.num;
    };
    return Numbers;
}());
var Expression = /** @class */ (function () {
    function Expression(left, right, operation) {
        this.leftExp = left;
        this.rightExp = right;
        this.operation = operation;
    }
    Expression.prototype.evalute = function () {
        switch (this.operation) {
            case Operation.ADD:
                return this.leftExp.evalute() + this.rightExp.evalute();
            case Operation.SUBTRACTION:
                return this.leftExp.evalute() - this.rightExp.evalute();
            case Operation.MULTIPLY:
                return this.leftExp.evalute() * this.rightExp.evalute();
            case Operation.DIVIDE:
                return this.leftExp.evalute() / this.rightExp.evalute();
        }
    };
    return Expression;
}());
var CompositePattern = /** @class */ (function () {
    function CompositePattern() {
    }
    CompositePattern.test = function () {
        // 2 * ( 1 + 7 ) = 16
        /*
            *
            / \
            2   +
               / \
              1   7
        */
        // Building above express
        var one = new Numbers(1);
        var seven = new Numbers(7);
        var two = new Numbers(2);
        var express = new Expression(one, seven, Operation.ADD);
        var final = new Expression(two, express, Operation.MULTIPLY);
        //Evalute Ans
        console.log(final.evalute());
    };
    return CompositePattern;
}());
CompositePattern.test();
