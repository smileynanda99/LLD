/*
The Strategy Design Pattern is a behavioral design pattern that allows you to define a family of algorithms or behaviors, 
put each of them in a separate class, and make them interchangeable at runtime. This pattern is useful when you want to 
dynamically change the behavior of a class without modifying its code.

https://www.geeksforgeeks.org/system-design/strategy-pattern-set-1/
*/

interface SortingStrategy {
	sort(numbers: number[]): void
}

class BubbleSortStrategy implements SortingStrategy {
	public sort(numbers: number[]): void {
		console.log("🫧 Performing Bubble sort...");
		numbers.sort();
	}
}

class MergeSortStrategy implements SortingStrategy {
	public sort(numbers: number[]): void {
		console.log("🧬 Performing Merge sort...");
		numbers.sort();
	}
}

class SortingContext {
	private sortingStrategy: SortingStrategy;

	constructor(strategy: SortingStrategy) {
		this.sortingStrategy = strategy;
	}

	setSortingStrategy(strategy: SortingStrategy) {
		this.sortingStrategy = strategy;
	}

	sort(numbers: number[]) {
		this.sortingStrategy.sort(numbers);
		console.log('✅ Numbers:', numbers);
	}
}

class StrategyPattern {
	static test() {
		console.log('🧪 Testing Merge Sort...');
		const sortingContext = new SortingContext(new MergeSortStrategy());
		sortingContext.sort([8, 2, 3, 5, 1]);

		console.log('\n🔄 Changing strategy to Bubble Sort...');
		sortingContext.setSortingStrategy(new BubbleSortStrategy());
		sortingContext.sort([6, 2, 3, 5, 1]);
	}
}

StrategyPattern.test()
