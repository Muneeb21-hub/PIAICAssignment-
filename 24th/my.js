// Tests for equality and inequality with strings
var name1 = "Abid";
var name2 = "Abida";
console.log("Is name1 == name2? I predict False.");
console.log(name1 == name2);
console.log("Is name1 != name2? I predict True.");
console.log(name1 != name2);
// Tests using the lower case function
var str1 = "Hello World!";
var str2 = "hello world!";
console.log("Is str1.toLowerCase() == str2? I predict True.");
console.log(str1.toLowerCase() == str2);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var age = 18;
var gender = "male";
console.log("Is age >= 18 and gender == 'male'? I predict True.");
console.log(age >= 18 && gender == 'male');
console.log("Is age >= 18 or gender == 'female'? I predict True.");
console.log(age >= 18 || gender == 'female');
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange"];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));
// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
