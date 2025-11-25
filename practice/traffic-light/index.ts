interface TrafficLightState {
    action(signal: TrafficLight): void;
}

class RedState implements TrafficLightState {
    action(signal: TrafficLight) {
        // Red Light behavior
        console.log('RED => GREEN');
        // Make signal GREEN
        signal.setState(new GreenState());
    }
}

class GreenState implements TrafficLightState {
    action(signal: TrafficLight) {
        // Green Light behavior
        console.log('GREEN => YELLOW');
        // Make signal YELLOW
        signal.setState(new YellowState());
    }
}

class YellowState implements TrafficLightState {
    async action(signal: TrafficLight) {
        // Yellow Light behavior
        console.log('YELLOW => RED');
        // Make signal RED
        signal.setState(new RedState());
    }
}

class TrafficLight {
    state: TrafficLightState;

    constructor(initialState: TrafficLightState) {
        this.state = initialState;
    }

    setState(nextState: TrafficLightState) {
        this.state = nextState;
    }

    change() {
        this.state.action(this);
    }
}


class TrafficLightTest {
    static test() {
        const signal = new TrafficLight(new RedState());
        signal.change() // RED => GREEN
        signal.change() // GREEN => YELLOW
        signal.change() // YELLOW => RED
    }
}

TrafficLightTest.test();