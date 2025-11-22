var MobileScreen = /** @class */ (function () {
    function MobileScreen() {
    }
    MobileScreen.prototype.update = function (message) {
        console.log("\uD83D\uDCF1 Mobile Screen: Weather is ".concat(message, " \u2601\uFE0F"));
    };
    return MobileScreen;
}());
var TVScreen = /** @class */ (function () {
    function TVScreen() {
    }
    TVScreen.prototype.update = function (message) {
        console.log("\uD83D\uDCFA TV Screen: Weather is ".concat(message, " \u2601\uFE0F"));
    };
    return TVScreen;
}());
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
        this.weather = 'Unknown';
    }
    WeatherStation.prototype.addObserver = function (observer) {
        this.observers.push(observer);
        console.log("\u2795 [WeatherStation] Observer added. Total: ".concat(this.observers.length, " \uD83D\uDC40"));
    };
    WeatherStation.prototype.removeObserver = function (observer) {
        var before = this.observers.length;
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
        var after = this.observers.length;
        console.log("\u2796 [WeatherStation] Observer removed. Before: ".concat(before, ", After: ").concat(after, " \uD83D\uDC40"));
    };
    WeatherStation.prototype.notifyObservers = function () {
        var _this = this;
        console.log("\uD83D\uDCE2 [WeatherStation] Notifying ".concat(this.observers.length, " observer(s) about weather: ").concat(this.weather));
        this.observers.forEach(function (observer) { return observer.update(_this.weather); });
    };
    WeatherStation.prototype.setWeather = function (weather) {
        console.log("\uD83C\uDF26\uFE0F [WeatherStation] Weather update received: ".concat(weather));
        this.weather = weather;
        this.notifyObservers();
    };
    return WeatherStation;
}());
var ObserverPattern = /** @class */ (function () {
    function ObserverPattern() {
    }
    ObserverPattern.test = function () {
        console.log('🆕 Create new Weather Station');
        var weatherStation = new WeatherStation();
        console.log('\n🖥️ Create two screens (Mobile & TV), then register them under weather station');
        var mobile = new MobileScreen();
        var tv = new TVScreen();
        weatherStation.addObserver(mobile);
        weatherStation.addObserver(tv);
        console.log('\n🔥 Update Weather... to Hot');
        weatherStation.setWeather('Hot');
        console.log('\n🗑️ Remove TV screen');
        weatherStation.removeObserver(tv);
        console.log('\n❄️ Update Weather... to Cold');
        weatherStation.setWeather('Cold');
    };
    return ObserverPattern;
}());
ObserverPattern.test();
