function make_great(magicians: string[]): string[]{ 
    return magicians.map((magician) => `the Great ${magician}`);
}
const magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
const great_magicians = make_great(magicians);
console.log(great_magicians)

//let magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
//make_great(magicians);


