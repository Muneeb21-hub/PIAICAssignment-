var usernames = ["admin", "Majid", "Asif", "Sajid", "Irfan"]
for(var i = 0; i < usernames.length; i++){
    if(usernames[i] == "admin"){
        console.log("Hello admin, can you complete this task till night?")
    }else{
        console.log(`Hello ${usernames[i]}, thank you for your response.`)
    }
}