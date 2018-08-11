// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.

// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0

var arr = [-8, -2, -1, 0, 1, 2, 8];
var pair = [];

for (i = 0; i < arr.length; i++){
    for (x = i + 1; x < arr.length; x++) {
        var sum = arr[i] + arr[x];
        
        if (sum == 0){
            pair.push(i);
        }
        else {

        }
    }
}
console.log(pair);