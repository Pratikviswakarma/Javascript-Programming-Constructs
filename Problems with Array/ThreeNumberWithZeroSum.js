function findTriplets(arr) {
    let triplets = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

let array = [-1, 0, 1, 2, -1, -4];
console.log("Triplets that sum to zero:", findTriplets(array));
