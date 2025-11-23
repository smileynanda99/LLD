/*
Decorator Design Pattern is a structural pattern that lets you dynamically add behavior to individual objects without 
changing other objects of the same class. It uses decorator classes to wrap concrete components, making functionality 
more flexible and reusable.

https://www.geeksforgeeks.org/system-design/decorator-pattern/
*/

interface BasePizza {
	getDescription(): string;
	getCost(): number;
}

abstract class ToppingDecorator implements BasePizza {
	public basePizza: BasePizza;

	constructor(pizza: BasePizza) {
		this.basePizza = pizza;
	}

	getDescription(): string {
		return this.basePizza.getDescription();
	}

	getCost(): number {
		return this.basePizza.getCost();
	}
}


class PlainPizza implements BasePizza {
	getDescription(): string {
		return "Plain Pizza";
	}

	getCost(): number {
		return 100;
	}
}

class MargheritaPizza implements BasePizza {
	getDescription(): string {
		return "Margherita Pizza";
	}

	getCost(): number {
		return 120;
	}
}

class CheeseTopping extends ToppingDecorator {
	constructor(basePizza: BasePizza) {
		super(basePizza);
	}

	getDescription(): string {
		return this.basePizza.getDescription() + " + Cheese";
	}

	getCost(): number {
		return this.basePizza.getCost() + 30;
	}
}


class MushroomTopping extends ToppingDecorator {

	constructor(basePizza: BasePizza) {
		super(basePizza);
	}

	getDescription(): string {
		return this.basePizza.getDescription() + " + Mushroom";
	}

	getCost(): number {
		return this.basePizza.getCost() + 20;
	}
}


class DecoratorPattern {
	static test() {
		// Order: 1 => Plain Pizza + Cheese;
		const order1 = new CheeseTopping(new PlainPizza());
		console.log(`Order No. 1 => Description: ${order1.getDescription()} & Cost(RS): ${order1.getCost()}`);

		// Order: 2 => Plain Pizza + Cheese + Mushroom;
		const order2 = new MushroomTopping(new CheeseTopping(new PlainPizza()));
		console.log(`Order No. 2 => Description: ${order2.getDescription()} & Cost(RS): ${order2.getCost()}`);

		// Order: 3 => Margherita Pizza + Cheese;
		const order3 = new CheeseTopping(new MargheritaPizza());
		console.log(`Order No. 3 => Description: ${order3.getDescription()} & Cost(RS): ${order3.getCost()}`);
	}
}

DecoratorPattern.test();
