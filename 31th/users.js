var current_users = ["Majid", "Asif", "Sajid", "irfan", "Rizwan"];
var new_users = ["Usama", "Amir", "Ali", "Rafi ul Kareem", "Arsalan"];
for (var i = 0; i < new_users.length; i++) {
    var username_exists = void 0, boolean = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is availabe."));
    }
}
