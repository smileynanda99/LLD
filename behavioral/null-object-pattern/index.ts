/*
The Null Object Design Pattern is a behavioral design pattern that is used to provide a consistent way of handling null 
or non-existing objects. It is particularly useful in situations where you want to avoid explicit null checks and provide 
a default behavior for objects that may not exist.

https://www.geeksforgeeks.org/system-design/factory-method-for-designing-pattern/
*/

enum VehicalType {
    TWO_WHEELER = 'TWO_WHEELER',
    FOUR_WHEELER = 'FOUR_WHEELER',
    THREE_WHEELER = 'THREE_WHEELER',
}

interface Vehical {
    start(): void;
    accelerate(): void;
    stop(): void;
}

class TwoWheelerVehical implements Vehical {
    start(): void {
        console.log('Starting two wheeler vehical.')
    }

    accelerate(): void {
        console.log('accelerating two wheeler vehical.')
    }

    stop(): void {
         console.log('stoping two wheeler vehical.')
    }
}

class FourWheelerVehical implements Vehical {
    start(): void {
        console.log('Starting four wheeler vehical.')
    }

    accelerate(): void {
        console.log('accelerating four wheeler vehical.')
    }

    stop(): void {
         console.log('stoping four wheeler vehical.')
    }
}

class NullVehical implements Vehical {
    start(): void {
        // do nothing
    }

    accelerate(): void {
        // do nothing
    }

    stop(): void {
        // do nothing
    }
}


class VehicalFactory{
    static getVehical(type: VehicalType): Vehical {
        switch(type) {
            case VehicalType.TWO_WHEELER:
                return new TwoWheelerVehical();
            case VehicalType.FOUR_WHEELER:
                return new FourWheelerVehical();
            default:
                return new NullVehical(); 
        }
    }
}


class NullObjectPattern {
    static test() {
        const vehicals: Vehical[] = [];
        
        // add two wheeler vehical
        vehicals.push(VehicalFactory.getVehical(VehicalType.TWO_WHEELER));

        // add four wheeler vehical
        vehicals.push(VehicalFactory.getVehical(VehicalType.FOUR_WHEELER));

        // add three wheeler vehical
        // but we don't have three wheeler vehical class, so it will handled by NullVehical object
        vehicals.push(VehicalFactory.getVehical(VehicalType.THREE_WHEELER)); 

        vehicals.forEach((vehical: Vehical) => vehical.start());
    }
}

NullObjectPattern.test();