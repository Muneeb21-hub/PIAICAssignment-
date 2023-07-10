function describe_city(city, country, string) {
    if (city === void 0) { city = [""]; }
    if (string === void 0) { string = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("Lahore", "Pakistan");
