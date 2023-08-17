"use strict";
// Interfaces are a very loose form of a class
Object.defineProperty(exports, "__esModule", { value: true });
var ritesh = {
    dbId: 12345,
    email: "ritesh@gmail.com",
    userId: 2211,
    // No args
    startTrail: function () {
        return "trail started";
    },
    // With args
    getCoupon: function (name, value) {
        return 10;
    }
};
ritesh.email = "notritesh@gmail.com";
