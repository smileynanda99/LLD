/*
The Mediator Design Pattern simplifies communication between multiple objects in a system by centralizing their interactions
through a mediator. Instead of objects interacting directly, they communicate via a mediator, reducing dependencies and
making the system easier to manage.

https://www.geeksforgeeks.org/system-design/mediator-design-pattern/
*/
var Bidder = /** @class */ (function () {
    function Bidder(name, mediator) {
        this.name = name;
        this.auctionMediator = mediator;
        this.auctionMediator.addBidder(this);
    }
    Bidder.prototype.getName = function () {
        return this.name;
    };
    Bidder.prototype.placeBid = function (amount) {
        this.auctionMediator.placeBid(this, amount);
    };
    Bidder.prototype.recieveNotification = function (amount) {
        console.log("Hello ".concat(this.name, ", some have place bid on amount: ").concat(amount));
    };
    return Bidder;
}());
var Auction = /** @class */ (function () {
    function Auction() {
        this.bidderList = [];
    }
    Auction.prototype.addBidder = function (bidder) {
        this.bidderList.push(bidder);
    };
    Auction.prototype.placeBid = function (bidder, amount) {
        this.bidderList.forEach(function (ele) {
            if (bidder.getName() != ele.getName()) {
                ele.recieveNotification(amount);
            }
        });
    };
    return Auction;
}());
var MediatorPattern = /** @class */ (function () {
    function MediatorPattern() {
    }
    MediatorPattern.test = function () {
        // First create mediator
        var mediator = new Auction();
        // Create bidder
        var bidder1 = new Bidder('Rohit', mediator);
        var bidder2 = new Bidder('Mohit', mediator);
        // Place bidding
        bidder1.placeBid(100);
        bidder2.placeBid(90);
    };
    return MediatorPattern;
}());
MediatorPattern.test();
