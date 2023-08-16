"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
// A good usecase for the function
function signUpUser(name, email, isPaid) {
}
// Providing default values (in case arguments are not provided)
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
getUpper("Hello World");
// signUpUser(1, 2, 3) --> Acceptable in .js not .ts
signUpUser("ritesh", "ritesh@co", false);
loginUser('h', 'h.com');
