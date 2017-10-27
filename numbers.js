//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
function add(one, two, three) {
    return Number(one) + Number(two) + Number(three) //Come back and try to find a way to do without method.

}
//console.log(add(num10, one, string8))
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function divideByThree() {
    var out = ''
    for (var i = 19; i < 100; i++) {
        if (i % 3 == 0) {
            out += i + ' '
        }
    }
    return out
}
//console.log(divideByThree())
//3. find the class average given the following test scores
function averaging(arr){
    var averaged = 0
    for (var i = 0; i < arr.length; i++) {
        averaged += arr[i]
    }
 var out = averaged / arr.length
    return out
}
var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

//console.log(averaging(scores))