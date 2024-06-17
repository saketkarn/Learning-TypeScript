"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"  this won't be allowed
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("saket");
function signUpUser(name, email, password, isPaid) {
}
signUpUser("Saket", "saketkarn38@gmaill.com", "abc@123", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("saket", "s@s.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var consoleError = function (errmsg) {
    console.log(errmsg);
};
var handleError = function (errmsg) {
    throw new Error(errmsg);
};
