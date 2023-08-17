class User {

    // A better way to define classes is as follows
    // It is much more cleaner in .ts as compared to .js

    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string,
        // private userId: string,
    ){

    }
}

const ritesh = new User("ritesh@gmail.com", "Ritesh");

export {}