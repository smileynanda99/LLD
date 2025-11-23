/*
Proxy Design Pattern is a structural design pattern where a proxy object acts as a placeholder to control access to 
the real object. The client communicates with the proxy, which forwards requests to the real object. The proxy can 
also provide extra functionality such as access control, lazy initialization, logging, and caching.

https://www.geeksforgeeks.org/system-design/proxy-design-pattern/
*/


interface Image {
    display(): void;
}

class RealImage implements Image {
    constructor(fileName: string) {
        this.loadFromDB(fileName);
    }

    loadFromDB(fileName: string) {
        console.log('Loading image from DB, please wait...')
    }

    display(): void {
        console.log('Displaying image...')
    }
}

class CacheProxy implements Image {
    cache: RealImage;

    constructor(fileName: string) {
        if(!this.cache) this.cache = new RealImage(fileName);
    }

    display(): void {
        this.cache.display();
    }
}


class ProxyPattern {
    static test() {
        const image = new CacheProxy('rk.png');
        image.display(); // displaying first time

        image.display(); // displaying secind time (direct from cache proxy)
    }
}

ProxyPattern.test();





