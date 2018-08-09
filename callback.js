//Rewrite the following normal functions into callback functions

// Problem 1: function add(x, y) {
//     var result = x + y; 
//     return result; 
//  } 

function add (x, y, callback) {
    var result = x + y;
    callback(result);
}

add (8, 3, function(result){
    console.log("1) " + result);
})

// Problem 2: function subtract(x, y) { 
//     return x - y; 
//  } 

function subtract (x, y, callback) {
    var result = x - y;
    
    callback(result);
}

subtract (10, 2, function(result){
    console.log("2) " + result);
})

//Bonus - Nest the Two Functions
function add (x, y, callback){
    result = x + y;

    callback(result);
}

function subtract (x, y, callback){
    result = x - y;

    callback(result);
}

function print(result){
    console.log("Practice: Nesting Functions\n Add Function Result: " + result);
    subtract(result, 4, function(sub_result){
        console.log("Subtract Function Result: " + sub_result);
    })
}

add (12, 8, print)



// Problem 3: function greeting(person) { 
//     return 'Hola, ' + person + '!'; 
//  } 

function greeting (person, callback){
    var string = "Hola, " + person + "!";

    callback(string);
}

greeting ("Staci", function(phrase){
    console.log("3) " + phrase);
})

// Problem 4: function product(numbers) { 
//     return numbers.reduce(function(a, b) { 
//        return a * b; 
//     }, 1); 
//  }

var arr = [1, 2, 3, 4, 5]

function product (numbers, callback){
        callback(numbers);
};


product(arr, function(numbers){
    console.log("4) " + numbers.reduce(function(a, b) { 
        return a * b; 
     }, 1));
})

console.log("Function Rewrites with a 1000 ms Delay");
//Add a 1000 millisecond delay to the callback versions of the exercise above.

function add (x, y, callback) {

    setTimeout(function(){
        var result = x + y;
        callback(result);
    }, 1000);  
}

add (13, 4, function(result){
    console.log("5) " + result);
})

// - - - - - - - - - - -

function subtract (x, y, callback) {

    setTimeout(function(){
        var result = x - y;
        callback(result);
    }, 1000) 
}

subtract (19, 11, function(result){
    console.log("6) " + result);
})

// - - - - - - - - - - -

function greeting (person, callback){

    setTimeout(function(){
        var string = "Hola, " + person + "!";
        callback(string);
    }, 1000);
}

greeting ("Staci", function(phrase){
    console.log("7) " + phrase);
})

// - - - - - - - - - - -
var arr = [1, 2, 3, 4, 5]

function product (numbers, callback){
    setTimeout(function(){
        callback(numbers);
    }, 1000)
    
};


product(arr, function(numbers){
console.log("8) " + numbers.reduce(function(a, b) { 
    return a * b; 
 }, 1));
})