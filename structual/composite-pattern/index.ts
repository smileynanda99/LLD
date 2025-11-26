/*
The Composite Design Pattern is a structural pattern that organizes objects into tree structures, allowing clients to
treat individual objects and groups of objects uniformly.

Like calculator, File System;

https://www.geeksforgeeks.org/java/composite-design-pattern-in-java/
*/

enum Operation {
    ADD = 'ADD',
    SUBTRACTION = 'SUBTRACTION',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
}

interface ArithmeticExpression {
    evalute(): number;
}

class Numbers implements ArithmeticExpression {
    num: number;

    constructor(number: number) {
        this.num = number
    }

    evalute(): number {
        return this.num;
    }
}

class Expression implements ArithmeticExpression {
    operation: Operation;
    leftExp: ArithmeticExpression;
    rightExp: ArithmeticExpression;

    constructor(left: ArithmeticExpression, right: ArithmeticExpression, operation: Operation) {
        this.leftExp = left;
        this.rightExp = right;
        this.operation = operation;
    }

    evalute(): number {
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
    }
}


class CompositePattern {
    static test() {
        // 2 * ( 1 + 7 ) = 16
        /*
              *
             / \
            2   +
               / \
              1   7
        */

        // Building above express
        const one = new Numbers(1);
        const seven = new Numbers(7);
        const two = new Numbers(2);
        const express = new Expression(one, seven, Operation.ADD);
        const final = new Expression(two, express, Operation.MULTIPLY);

        //Evalute Ans
        console.log(final.evalute());
    }
}

CompositePattern.test();