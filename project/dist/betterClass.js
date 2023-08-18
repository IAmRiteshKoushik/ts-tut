"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // A better way to define classes is as follows
        // It is much more cleaner in .ts as compared to .js
        this.city = "Jaipur";
    }
}
const ritesh = new User("ritesh@gmail.com", "Ritesh");
