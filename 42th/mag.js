function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
var great_magicians = make_great(magicians);
console.log(great_magicians);
//let magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
//make_great(magicians);
