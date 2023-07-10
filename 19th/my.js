var guest = ["Baqir", "Haseeb", "Baber"];
console.log("Guests before change: ".concat(guest));
guest[1] = "Yasir";
console.log("Guests after change ".concat(guest));
var newGuest1 = "Basit";
var newGuest2 = "Usama";
console.log("We found a bigger dinner table!");
guest.unshift(newGuest1);
guest.splice(Math.floor(guest.length / 2), 0, newGuest2);
guest.push("Ali");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ", please join us for dinner on Friday!"));
}
console.log("Unfotunately, we can only invite two people for dinner.");
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("Dear ".concat(guest[0], " and ").concat(guest[1], ", you are still invited to our dinner party."));
guest.pop();
guest.pop();
console.log(guest);
console.log("We are inviting ".concat(guest.length, " people to dinner."));
