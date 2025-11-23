/*
Proxy Design Pattern is a structural design pattern where a proxy object acts as a placeholder to control access to
the real object. The client communicates with the proxy, which forwards requests to the real object. The proxy can
also provide extra functionality such as access control, lazy initialization, logging, and caching.

https://www.geeksforgeeks.org/system-design/proxy-design-pattern/
*/
var RealImage = /** @class */ (function () {
    function RealImage(fileName) {
        this.loadFromDB(fileName);
    }
    RealImage.prototype.loadFromDB = function (fileName) {
        console.log('Loading image from DB, please wait...');
    };
    RealImage.prototype.display = function () {
        console.log('Displaying image...');
    };
    return RealImage;
}());
var CacheProxy = /** @class */ (function () {
    function CacheProxy(fileName) {
        if (!this.cache)
            this.cache = new RealImage(fileName);
    }
    CacheProxy.prototype.display = function () {
        this.cache.display();
    };
    return CacheProxy;
}());
var ProxyPattern = /** @class */ (function () {
    function ProxyPattern() {
    }
    ProxyPattern.test = function () {
        var image = new CacheProxy('rk.png');
        image.display(); // displaying first time
        image.display(); // displaying secind time (direct from cache proxy)
    };
    return ProxyPattern;
}());
ProxyPattern.test();
