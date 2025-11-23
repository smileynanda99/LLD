/*
The Null Object Design Pattern is a behavioral design pattern that is used to provide a consistent way of handling null
or non-existing objects. It is particularly useful in situations where you want to avoid explicit null checks and provide
a default behavior for objects that may not exist.

https://www.geeksforgeeks.org/system-design/factory-method-for-designing-pattern/
*/
var VehicalType;
(function (VehicalType) {
    VehicalType["TWO_WHEELER"] = "TWO_WHEELER";
    VehicalType["FOUR_WHEELER"] = "FOUR_WHEELER";
    VehicalType["THREE_WHEELER"] = "THREE_WHEELER";
})(VehicalType || (VehicalType = {}));
var TwoWheelerVehical = /** @class */ (function () {
    function TwoWheelerVehical() {
    }
    TwoWheelerVehical.prototype.start = function () {
        console.log('Starting two wheeler vehical.');
    };
    TwoWheelerVehical.prototype.accelerate = function () {
        console.log('accelerating two wheeler vehical.');
    };
    TwoWheelerVehical.prototype.stop = function () {
        console.log('stoping two wheeler vehical.');
    };
    return TwoWheelerVehical;
}());
var FourWheelerVehical = /** @class */ (function () {
    function FourWheelerVehical() {
    }
    FourWheelerVehical.prototype.start = function () {
        console.log('Starting four wheeler vehical.');
    };
    FourWheelerVehical.prototype.accelerate = function () {
        console.log('accelerating four wheeler vehical.');
    };
    FourWheelerVehical.prototype.stop = function () {
        console.log('stoping four wheeler vehical.');
    };
    return FourWheelerVehical;
}());
var NullVehical = /** @class */ (function () {
    function NullVehical() {
    }
    NullVehical.prototype.start = function () {
        // do nothing
    };
    NullVehical.prototype.accelerate = function () {
        // do nothing
    };
    NullVehical.prototype.stop = function () {
        // do nothing
    };
    return NullVehical;
}());
var VehicalFactory = /** @class */ (function () {
    function VehicalFactory() {
    }
    VehicalFactory.getVehical = function (type) {
        switch (type) {
            case VehicalType.TWO_WHEELER:
                return new TwoWheelerVehical();
            case VehicalType.FOUR_WHEELER:
                return new FourWheelerVehical();
            default:
                return new NullVehical();
        }
    };
    return VehicalFactory;
}());
var NullObjectPattern = /** @class */ (function () {
    function NullObjectPattern() {
    }
    NullObjectPattern.test = function () {
        var vehicals = [];
        // add two wheeler vehical
        vehicals.push(VehicalFactory.getVehical(VehicalType.TWO_WHEELER));
        // add four wheeler vehical
        vehicals.push(VehicalFactory.getVehical(VehicalType.FOUR_WHEELER));
        // add three wheeler vehical
        // but we don't have three wheeler vehical class, so it will handled by NullVehical object
        vehicals.push(VehicalFactory.getVehical(VehicalType.THREE_WHEELER));
        vehicals.forEach(function (vehical) { return vehical.start(); });
    };
    return NullObjectPattern;
}());
NullObjectPattern.test();
