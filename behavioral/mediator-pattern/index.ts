/*
The Mediator Design Pattern simplifies communication between multiple objects in a system by centralizing their interactions 
through a mediator. Instead of objects interacting directly, they communicate via a mediator, reducing dependencies and 
making the system easier to manage.

https://www.geeksforgeeks.org/system-design/mediator-design-pattern/
*/


interface Colleague {
    getName(): string;
    placeBid(amount: number): void;
    recieveNotification(amount: number): void;
}

interface AuctionMediator {
    addBidder(bidder: Colleague): void;
    placeBid(bidder: Colleague, amount: number): void;
}

class Bidder implements Colleague {
    private name: string;
    auctionMediator: AuctionMediator;

    constructor(name: string, mediator: AuctionMediator) {
        this.name = name;
        this.auctionMediator = mediator;
        this.auctionMediator.addBidder(this);
    }

    getName(): string {
        return this.name;
    }

    placeBid(amount: number): void {
        this.auctionMediator.placeBid(this, amount);
    }

    recieveNotification(amount: number): void {
        console.log(`Hello ${this.name}, some have place bid on amount: ${amount}`);
    }
}

class Auction implements AuctionMediator {
    bidderList: Bidder[];

    constructor() {
        this.bidderList = [];
    }
    
    addBidder(bidder: Bidder): void {
        this.bidderList.push(bidder);
    }
    
    placeBid(bidder: Bidder, amount: number): void {
        this.bidderList.forEach((ele: Bidder) => {
            if(bidder.getName() != ele.getName()) {
                ele.recieveNotification(amount);
            }
        })
    }
}

class MediatorPattern {
    static test() {
        // First create mediator
        const mediator = new Auction();

        // Create bidder
        const bidder1 = new Bidder('Rohit', mediator);
        const bidder2 = new Bidder('Mohit', mediator);

        // Place bidding
        bidder1.placeBid(100);
        bidder2.placeBid(90);
    }
}

MediatorPattern.test();
