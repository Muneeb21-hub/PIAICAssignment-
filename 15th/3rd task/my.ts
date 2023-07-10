var guest = ["Baqir", "Haseeb", "Baber"]
console.log(`Guests before change: ${guest}`);
guest[1] = `Yasir`;
console.log(`Guests after change ${guest}`)
guest[2] = `Arslan`
console.log(`Guests after replacing Baber with Usama: ${guest}`)
for(let i = 0; i < guest.length; i++){
    console.log(`Dear ${guest[i]}, please join us for dinner on Friday!`);
}