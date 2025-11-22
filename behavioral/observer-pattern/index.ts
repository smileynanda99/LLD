/*
The Observer Design Pattern is a behavioral design pattern that defines a one-to-many dependency between objects. When one 
object (the subject) changes state, all its dependents (observers) are notified and updated automatically. It primarily 
deals with the interaction and communication between objects, specifically focusing on how objects behave in response to 
changes in the state of other objects.

https://www.geeksforgeeks.org/system-design/observer-pattern-set-1-introduction/
*/
interface Observer {
	update(message: string): void;
}

class MobileScreen implements Observer {
	update(message: string): void {
		console.log(`📱 Mobile Screen: Weather is ${message} ☁️`);
	}
}

class TVScreen implements Observer {
	update(message: string): void {
		console.log(`📺 TV Screen: Weather is ${message} ☁️`);
	}
}

interface Subject {
	addObserver(observer: Observer): void;
	removeObserver(observer: Observer): void;
	notifyObservers(): void;
}

class WeatherStation implements Subject {
	private observers: Observer[] = [];
	private weather: string = 'Unknown';

	public addObserver(observer: Observer): void {
		this.observers.push(observer);
		console.log(`➕ [WeatherStation] Observer added. Total: ${this.observers.length} 👀`);
	}

	public removeObserver(observer: Observer): void {
		const before = this.observers.length;
		this.observers = this.observers.filter(obs => obs !== observer);
		const after = this.observers.length;
		console.log(`➖ [WeatherStation] Observer removed. Before: ${before}, After: ${after} 👀`);
	}

	public notifyObservers(): void {
		console.log(`📢 [WeatherStation] Notifying ${this.observers.length} observer(s) about weather: ${this.weather}`);
		this.observers.forEach(observer => observer.update(this.weather));
	}

	public setWeather(weather: string) {
		console.log(`🌦️ [WeatherStation] Weather update received: ${weather}`);
		this.weather = weather;
		this.notifyObservers();
	}
}

class ObserverPattern {
	public static test() {
		console.log('🆕 Create new Weather Station');
		const weatherStation = new WeatherStation();

		console.log('\n🖥️ Create two screens (Mobile & TV), then register them under weather station');
		const mobile = new MobileScreen();
		const tv = new TVScreen();
		weatherStation.addObserver(mobile);
		weatherStation.addObserver(tv);

		console.log('\n🔥 Update Weather... to Hot');
		weatherStation.setWeather('Hot');

		console.log('\n🗑️ Remove TV screen');
		weatherStation.removeObserver(tv);

		console.log('\n❄️ Update Weather... to Cold');
		weatherStation.setWeather('Cold');
	}
}

ObserverPattern.test();