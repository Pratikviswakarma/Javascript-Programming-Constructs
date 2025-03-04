function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    console.log("Sorted Array:", arr);
    console.log("2nd Smallest:", arr[1]);
    console.log("2nd Largest:", arr[arr.length - 2]);
}

findSecondLargestAndSmallestSorted([...randomNumbers]);
