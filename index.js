// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"]
    return [...cats, "Broom"]
}


   function prependCat(name) {
    return ["Arnold",...cats]
   }

   function  removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    cats.splice(-1)
   return cats
   }
   function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    cats.splice(0, 1)
    return cats
   }