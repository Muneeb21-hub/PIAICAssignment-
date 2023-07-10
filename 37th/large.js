function makeShirt(size, message) {
    if (size === void 0) { size = ["Large"]; }
    if (message === void 0) { message = ["I love T-Shirts"]; }
    console.log("A ".concat(size, " shirt with the message \"").concat(message, "\" has been created."));
}
makeShirt();
makeShirt("medium", "I love T-Shirts");
makeShirt("small", "I love T-Shirts");
