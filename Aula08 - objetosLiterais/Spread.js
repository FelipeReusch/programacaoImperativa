var array = [1, 2, 3];
var newArray = [-2, -1, 0, ...array];
console.log(newArray);

var array = [1, 2, 3];
var newArray = [-2, -1, 0, array];
console.log(newArray);

var array = [1, 2, 3, 100];
function max(array){
    return Math.max.apply(null, array)
}
console.log(max(array));

var array = [1, 2, 3, 100];
var max = Math.max(...array);
console.log(max(array));

