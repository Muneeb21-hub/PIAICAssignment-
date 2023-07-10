function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(", "), "."));
}
order_sandwich("lettuce", "tomato", "mayonnaise");
order_sandwich("turkey", "cheese", "mustard", "lettuce");
order_sandwich("peanut butter", "jelly");
