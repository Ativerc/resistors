let resistorValues = [];

resistorValues.lookup = {
0: {color:'black', hex:'#000000', multiplier:'1'},
1: {color:'brown', hex:'#A52A2A', multiplier:'10'},
2: {color:'red', hex:'#FF0000', multiplier:'100'},
3: {color:'orange', hex:'#FFA500', multiplier:'1K'},
4: {color:'yellow', hex:'#FFFF00', multiplier:'10K'},
5: {color:'green', hex:'#00FF00', multiplier:'100K'},
6: {color:'blue', hex:'#0000FF', multiplier:'1M'},
7: {color:'violet', hex:'#8F00FF', multiplier:'10M'},
8: {color:'grey', hex:'#808080', multiplier:'100000000'},
9: {color:'white', hex:'#FFFFFF', multiplier:'1000000000'},
};


let query = document.body.querySelector('#rQuery');
let result = document.createElement('div');


query.addEventListener('input', onQueryChange);

function onQueryChange(event) {
    location.hash = encodeURIComponent(query.value);
    var currentdate = new Date(); 
    var datetime = " | Last Load: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    let test = resistorValues.lookup[2]["color"];
    result.textContent = event.currentTarget.value + datetime + test;
    document.body.append(result);

}


/* 
Arguments: Raw Input string
For a given raw Input it returns the corresponding numerical value

e.g.: "4.7k" -> 4700, "330" -> 330, "4k7" -> 4700

Calls: sanitizeInput(rawInput)

Returns: number
*/
function getInputValue(rawInput) {
    
}


if (location.hash) {
    query.value = decodeURIComponent(location.hash.substring(1));
}


/*
Arguments: Raw Input String
For a given raw Input it returns the string with some sanitization:
Leading and tailing spaces removed, "ohm/ohms" string removed,
last "." dot removed, u2126(unicode for Ω) removed

e.g.:
*/
function sanitizeInput(rawInput) {

}