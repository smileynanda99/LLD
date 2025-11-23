/*
The Factory Method is a creational design pattern that defines an interface for creating objects but lets subclasses decide 
which object to instantiate. It promotes loose coupling by delegating object creation to a method, making the system more 
flexible and extensible.

https://www.geeksforgeeks.org/system-design/factory-method-for-designing-pattern/
*/
enum ShapeType {
    CIRCLE = 'CIRCLE',
    SQUARE = 'SQUARE',
}

interface Shape {
    computeArea(): void;
    draw(): void;
}

class Circle implements Shape {
    computeArea(): void {
        console.log('Computing circle area...');
    }

    draw(): void {
        console.log('Drawing circle...');
    }
}

class Square implements Shape {
    computeArea(): void {
        console.log('Computing square area...');
    }

    draw(): void {
        console.log('Drawing square...');
    }
}


interface ShapeFactory {
    createShape(): Shape;
}

class CircleFactory implements ShapeFactory {
    createShape(): Shape {
        // If required any bussiness logic for create circle than define here, without effective any thing else
        // Single Response of change
        return new Circle();
    }
}

class SquareFactory implements ShapeFactory {
    createShape(): Shape {
        return new Square();
    }
}
// If need one more shape just extend here, Open for extent & close for modification


class ShapeFactoryManager {
    static createShape(shape: ShapeType): Shape {
        switch(shape) {
            case ShapeType.CIRCLE:
                const circleFactory = new CircleFactory();
                return circleFactory.createShape();
            case ShapeType.SQUARE:
                const squareFactory = new SquareFactory();
                return squareFactory.createShape();
            // But here violence of OPEN/CLOSE principle, if we need one more share then need to modify this
            default:
                return null; 
        }
    }
}


class FactoryPattern {
    static test() {
        // drawing circle...
        const circle = ShapeFactoryManager.createShape(ShapeType.CIRCLE);
        circle.draw();

        // drawing square...
        const square =  ShapeFactoryManager.createShape(ShapeType.SQUARE);
        square.draw();
    }
}

FactoryPattern.test();