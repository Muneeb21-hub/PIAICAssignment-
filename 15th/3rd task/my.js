var guest = ["Baqir", "Haseeb", "Baber"];
console.log("Guests before change: ".concat(guest));
guest[1] = "Yasir";
console.log("Guests after change ".concat(guest));
guest[2] = "Arslan";
console.log("Guests after replacing Baber with Usama: ".concat(guest));
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ", please join us for dinner on Friday!"));
}
