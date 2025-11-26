/*
Adapter Design Pattern is a structural pattern that acts as a bridge between two incompatible interfaces,
allowing them to work together. It is especially useful for integrating legacy code or third-party libraries into a new system.

https://www.geeksforgeeks.org/system-design/adapter-pattern/
*/
var AdultWeightMachine = /** @class */ (function () {
    function AdultWeightMachine() {
    }
    AdultWeightMachine.prototype.getWeightInPound = function () {
        return 154.324;
    };
    return AdultWeightMachine;
}());
var PoundToKgConvertor = /** @class */ (function () {
    function PoundToKgConvertor(machine) {
        this.weightMachine = machine;
    }
    PoundToKgConvertor.prototype.convert = function () {
        return this.weightMachine.getWeightInPound() * 0.45;
    };
    return PoundToKgConvertor;
}());
//Client
var AdapterPattern = /** @class */ (function () {
    function AdapterPattern() {
    }
    AdapterPattern.test = function () {
        var adapter = new PoundToKgConvertor(new AdultWeightMachine());
        console.log("Wieght in KG: ".concat(adapter.convert()));
    };
    return AdapterPattern;
}());
AdapterPattern.test();
