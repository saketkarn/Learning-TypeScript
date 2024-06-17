"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Saket";
greetings.toLowerCase();
console.log(greetings);
//number
var userId = 9878;
//boolean
var isLoggedIn = false;
//type inference
var rollNo = 69;
rollNo.toFixed(); //here we haven't defined any datatype with rollNo but still TS takes it as a number as it's smart enough for this.
