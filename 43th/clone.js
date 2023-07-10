function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function clone_array(arr) {
    return arr.map(function (item) { return Object.assign({}, item); });
}
var magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
var magicians_copy = clone_array(magicians);
var great_magicians = make_great(magicians);
console.log(magicians);
console.log(great_magicians);
