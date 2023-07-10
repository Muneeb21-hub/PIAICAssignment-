function make_great(magicians: string[]): string[]{ 
    return magicians.map((magician) => `the Great ${magician}`);
}
function clone_array(arr: any[]): any[]{
    return arr.map(item => Object.assign({}, item)); 
}
const magicians = ["Derren Brown", "Lance Burton", "Teller", "Penn"];
const magicians_copy = clone_array(magicians);
const great_magicians = make_great(magicians);
console.log(magicians)
console.log(great_magicians)



