function makeShirt(size, message) {
    if (size === void 0) { size = ["XL"]; }
    if (message === void 0) { message = ["a great T-Shirt"]; }
    console.log("You odered a ".concat(size, " shirt with message \"").concat(message, "\" printed on it."));
}
makeShirt("Large", "Hello, world!");
