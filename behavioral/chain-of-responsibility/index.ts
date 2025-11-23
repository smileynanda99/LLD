/*
The Chain of Responsibility design pattern is a behavioral design pattern that allows an object to pass a request along a chain of handlers. Each handler in the chain decides either to process the request or to pass it along the chain to the next handler.

https://www.geeksforgeeks.org/system-design/chain-responsibility-design-pattern/
*/


interface Handler {
	proccess(amount: number): boolean;
}

class ReqHandler implements Handler {
	handler: Handler;

	constructor(next: Handler) {
		this.handler = next;
	}

	proccess(amount: number): boolean {
		return this.handler.proccess(amount);
	}
}

class TenRupeesHandler extends ReqHandler {

	constructor(next: Handler) {
		if (next) super(next);
	}

	proccess(amount: number): boolean {
		console.log("🚀 TenRupeesHandler ~ proccess ~ amount:", amount)
		const balanceAmount = amount % 10;
		console.log("🚀 TenRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount)
		if (balanceAmount) {
			if (!this.handler) return false;
			return this.handler.proccess(balanceAmount);
		}
		return true;
	}
}

class FiftyRupeesHandler extends ReqHandler {

	constructor(next: Handler) {
		if (next) super(next);
	}

	proccess(amount: number): boolean {
		console.log("🚀 FiftyRupeesHandler ~ proccess ~ amount:", amount)
		const balanceAmount = amount % 50;
		console.log("🚀 FiftyRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount)
		if (balanceAmount) {
			if (!this.handler) return false;
			return this.handler.proccess(balanceAmount);
		}
		return true;
	}
}

class OneHundredRupeesHandler extends ReqHandler {
	constructor(next: Handler) {
		if (next) super(next);
	}

	proccess(amount: number): boolean {
		console.log("🚀 OneHundredRupeesHandler ~ proccess ~ amount:", amount)
		const balanceAmount = amount % 100;
		console.log("🚀 OneHundredRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount)
		if (balanceAmount) {
			if (!this.handler) return false;
			return this.handler.proccess(balanceAmount);
		}
		return true;
	}
}

class FiveHundredRupeesHandler extends ReqHandler {
	constructor(next: Handler) {
		if (next) super(next);
	}

	proccess(amount: number): boolean {
		console.log("🚀 FiveHundredRupeesHandler ~ proccess ~ amount:", amount)
		const balanceAmount = amount % 500;
		console.log("🚀 FiveHundredRupeesHandler ~ proccess ~ balanceAmount:", balanceAmount)
		if (balanceAmount) {
			if (!this.handler) return false;
			return this.handler.proccess(balanceAmount);
		}
		return true;
	}
}



class ChainOfResponsibilityPattern {
	static test() {
		const tenRupeesHandler = new TenRupeesHandler(null);
		const fiftyRupeesHandler = new FiftyRupeesHandler(tenRupeesHandler);
		const oneHundredRupeesHandler = new OneHundredRupeesHandler(fiftyRupeesHandler);
		const finalHandler = new FiveHundredRupeesHandler(oneHundredRupeesHandler);
		console.log(finalHandler.proccess(10270));
	}
}

ChainOfResponsibilityPattern.test();