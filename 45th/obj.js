function myCar(Manufacturer, Model, Color, Year, Transmission) {
    this.Manufacturer = Manufacturer;
    this.Model = Model;
    this.Color = Color;
    this.Year = Year;
    this.Transmission = Transmission;
}
var car = new myCar("KIA", "Spotage", "Black", 2023, "Automatic");
console.log(car);
