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

/** map */
//without map
var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(){
    
    var newArr = [];    
    for(var i= 0, l = oldArr.length; i< l; i++){
        var item = oldArr[i];
        item.full_name = [item.first_name,item.last_name].join(" ");
        newArr[i] = item;
    }    
    return newArr;
}
console.log(getNewArr());

//with map
var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];
function getNewArr(){        
    return oldArr.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        return item;
    });    
}

console.log(getNewArr());

/** reduce */
var arr = ["apple","orange","apple","orange","pear","orange"];

function getWordCnt(){
    return arr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}

console.log(getWordCnt());
