"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    // Getter methods
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // Setter methods
    // Setters cannot have return types
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
        // Accessing course count would have thrown error if the 
        // variable was "private" in the main class, but not
        // if the variable is "protected"
    }
}
const ritesh = new User("ritesh@gmail.com", "Ritesh");
