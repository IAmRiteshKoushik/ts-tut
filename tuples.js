"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = [1, "hc"]
var tUser;
tUser = ["hc", 131, true];
var rgb = [255, 123, 112];
var newUser = [112, "example@google.com"];
// The values can be changed like this --
// The tuples are mutable in terms of element but
// immutable in terms of size and datatype stored
newUser[1] = "hc.com";
