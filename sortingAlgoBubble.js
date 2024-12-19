// File: sortingAlgoBubble.js

// Initialize an empty array
let numbers = [];
const totalNumbers = 10; // Number of elements to be added

// Populate the array using prompt() and push()
for (let i = 0; i < totalNumbers; i++) {
    const num = parseInt(prompt(Enter number ${i + 1}:), 10);
    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Retry the current iteration
    }
}

console.log("Original Array:", numbers);

// Bubble Sort Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(Comparing ${arr[j]} and ${arr[j + 1]});
            if (arr[j] > arr[j + 1]) {
                // Swap the numbers
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(Swapped: ${arr[j]} and ${arr[j + 1]});
            }
        }
        console.log(Array after iteration ${i + 1}:, arr);
    }
    return arr;
}

// Sort the array using Bubble Sort
const sortedArray = bubbleSort(numbers);

// Log the sorted array
console.log("Sorted Array:", sortedArray);
