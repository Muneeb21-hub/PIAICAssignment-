const I_likePlaces = ["Greek", "Egypt", "NewYork", "Muree"]
console.log("Unalphabetical Order")
console.log(I_likePlaces)

console.log("Alphabetical Order")
console.log([...I_likePlaces].sort())

console.log("Unalphabetical Order again")
console.log(I_likePlaces)

console.log("Reverse alphabetical Order")
console.log([...I_likePlaces].sort().reverse())

console.log("Unalphabetical Order again")
console.log(I_likePlaces)

I_likePlaces.reverse();
console.log("Reversed order:");
console.log(I_likePlaces);

I_likePlaces.reverse();
console.log("Unalphabetical Order again");
console.log(I_likePlaces);

I_likePlaces.sort();
console.log("Alphabetical Order")
console.log(I_likePlaces)

I_likePlaces.sort().reverse();
console.log("Reverse alphabetical Order")
console.log(I_likePlaces)
