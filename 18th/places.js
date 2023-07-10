var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var I_likePlaces = ["Greek", "Egypt", "NewYork", "Muree"];
console.log("Unalphabetical Order");
console.log(I_likePlaces);
console.log("Alphabetical Order");
console.log(__spreadArray([], I_likePlaces, true).sort());
console.log("Unalphabetical Order again");
console.log(I_likePlaces);
console.log("Reverse alphabetical Order");
console.log(__spreadArray([], I_likePlaces, true).sort().reverse());
console.log("Unalphabetical Order again");
console.log(I_likePlaces);
I_likePlaces.reverse();
console.log("Reversed order:");
console.log(I_likePlaces);
I_likePlaces.reverse();
console.log("Unalphabetical Order again");
console.log(I_likePlaces);
I_likePlaces.sort();
console.log("Alphabetical Order");
console.log(I_likePlaces);
I_likePlaces.sort().reverse();
console.log("Reverse alphabetical Order");
console.log(I_likePlaces);
