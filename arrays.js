/** Filter */

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
var newArr = arr.filter(function(item){
    return item.name === "pear";
});

console.log("Filter results:",newArr);

/** forEach */

var arr = [1,2,3,4,5,6,7,8];

// Uses the usual "for" loop to iterate
for(var i= 0, l = arr.length; i< l; i++){
	console.log(arr[i]);
}

console.log("========================");

//Uses forEach to iterate
arr.forEach(function(item,index){
	console.log(item);
});
