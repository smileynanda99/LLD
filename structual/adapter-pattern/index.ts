/*
Adapter Design Pattern is a structural pattern that acts as a bridge between two incompatible interfaces, 
allowing them to work together. It is especially useful for integrating legacy code or third-party libraries into a new system.

https://www.geeksforgeeks.org/system-design/adapter-pattern/
*/

//Adaptee
interface WeightMachine {
    getWeightInPound(): number;
}

class AdultWeightMachine {
    getWeightInPound(): number {
        return 154.324;
    }
}


// Adapter
interface Convertor {
    convert(): number;
}

class PoundToKgConvertor implements Convertor {
    weightMachine: AdultWeightMachine;

    constructor(machine: WeightMachine) {
        this.weightMachine = machine;
    }
    convert(): number {
        return this.weightMachine.getWeightInPound() * 0.45;
    }
}


//Client
class AdapterPattern {
    static test() {
        const adapter = new PoundToKgConvertor(new AdultWeightMachine());
        console.log(`Wieght in KG: ${adapter.convert()}`);
    }
}

AdapterPattern.test()

