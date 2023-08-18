class User {

    protected _courseCount = 1 

    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string,
        ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    // Getter methods
    get getAppleEmail(): string{
        return `apple${this.email}`;
    }
    get courseCount(): number{
        return this._courseCount;
    }
   
    // Setter methods
    // Setters cannot have return types
    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
        // Accessing course count would have thrown error if the 
        // variable was "private" in the main class, but not
        // if the variable is "protected"
    }
}

const ritesh = new User("ritesh@gmail.com", "Ritesh");

// We cannot access the following as that is a private method and can be used
// only inside the class and can be exposed using getter and setter methods
// ritesh.deleteToken()

export {}