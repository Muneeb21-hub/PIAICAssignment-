function city_country(city, country, string) {
    if (city === void 0) { city = [""]; }
    if (string === void 0) { string = ""; }
    console.log("".concat(city, ", ").concat(country, "."));
}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("NewYork", "USA");
