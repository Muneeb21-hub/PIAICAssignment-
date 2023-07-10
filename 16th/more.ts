let guest = ["Baqir", "Haseeb", "Baber"]
console.log(`Guests before change: ${guest}`);
guest[1] = `Yasir`;
console.log(`Guests after change ${guest}`)
let newGuest1 = "Basit"
let newGuest2 = "Usama"
console.log(`We found a bigger dinner table!`)
guest.unshift(newGuest1)
guest.splice(Math.floor(guest.length / 2), 0, newGuest2);
guest.push("Ali")
for(let i = 0; i < guest.length; i++){
console.log(`Dear ${guest[i]}, please join us for dinner on Friday!`);
}
