/*
The Strategy Design Pattern is a behavioral design pattern that allows you to define a family of algorithms or behaviors,
put each of them in a separate class, and make them interchangeable at runtime. This pattern is useful when you want to
dynamically change the behavior of a class without modifying its code.

https://www.geeksforgeeks.org/system-design/strategy-pattern-set-1/
*/
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (numbers) {
        console.log("🫧 Performing Bubble sort...");
        numbers.sort();
    };
    return BubbleSortStrategy;
}());
var MergeSortStrategy = /** @class */ (function () {
    function MergeSortStrategy() {
    }
    MergeSortStrategy.prototype.sort = function (numbers) {
        console.log("🧬 Performing Merge sort...");
        numbers.sort();
    };
    return MergeSortStrategy;
}());
var SortingContext = /** @class */ (function () {
    function SortingContext(strategy) {
        this.sortingStrategy = strategy;
    }
    SortingContext.prototype.setSortingStrategy = function (strategy) {
        this.sortingStrategy = strategy;
    };
    SortingContext.prototype.sort = function (numbers) {
        this.sortingStrategy.sort(numbers);
        console.log('✅ Numbers:', numbers);
    };
    return SortingContext;
}());
var StrategyPattern = /** @class */ (function () {
    function StrategyPattern() {
    }
    StrategyPattern.test = function () {
        console.log('🧪 Testing Merge Sort...');
        var sortingContext = new SortingContext(new MergeSortStrategy());
        sortingContext.sort([8, 2, 3, 5, 1]);
        console.log('\n🔄 Changing strategy to Bubble Sort...');
        sortingContext.setSortingStrategy(new BubbleSortStrategy());
        sortingContext.sort([6, 2, 3, 5, 1]);
    };
    return StrategyPattern;
}());
StrategyPattern.test();
