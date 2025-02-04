//functions
var arr = [1,2,3,4];

var newarr = arr.map( (value) => {
    return value*2;
})

console.log(newarr);

//filter
var newarr2 = arr.filter((val) => {
    return val <= 3;
})

console.log(newarr2);

//find
const ans = arr.find(function(val) {
    if(val === 2) return val;
});

console.log(ans);

//indexOf
const ans2 = arr.indexOf(2);
console.log(ans2);

//async functions

async function abcd() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();
    console.log(ans.results[0].name);
}

abcd();