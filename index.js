// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
     cats.push("Yuzu");
}

function destructivelyPrependCat(name){
    cats.unshift("Tofu");
}

function destructivelyRemovesLastCat() {
    cats.pop();
}

function destructivelyRemovesFirstCat(){
    cats.shift();
}

function appendCat(name) {
    return [...cats, "Tofu"];
}

function prependCat(name){
    return ["Yuzu", ...cats];
}

function removeLastCat(){
    cats.slice(-1);
}

function removeFirstCat(){
    cats.slice(1);
}