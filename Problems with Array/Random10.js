function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(100 + Math.random() * 900)); // 3-digit numbers (100-999)
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log("Array:", arr);
    console.log("2nd Smallest:", secondSmallest);
    console.log("2nd Largest:", secondLargest);
}

let randomNumbers = generateRandomNumbers();
findSecondLargestAndSmallest(randomNumbers);
