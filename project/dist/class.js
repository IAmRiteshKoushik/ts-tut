"use strict";
class User {
    constructor(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
}
const ritesh = new User("ritesh@google.com", "Ritesh");
// You cannot make the following changes as it is READONLY
// ritesh.city = 2
// ritesh.city = "delhi"
