// While you can allow a few different types, you should try to 
// keep things as strict as you can and limit to one type.
// In the one off cases where you have to add in
// more types, go ahead and do so. 
let score: number | string = 33;


// Creating types and using them alternatively
type User = {
    name: String;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}


let hitesh: User | Admin = {
    name: "hitesh",
    id: 334
}

hitesh = {
    username: "hc",
    id: 334
}

// Manipulating data of different types
function getDbID(id: number | string){
    // making some API calls
    console.log(`DB id is: ${id}`);

    if(typeof id === 'string'){
        id.toLowerCase()
    }
}


// A small discussion on arrays
const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']

const data3: string[] | number[] = ["1", "2", "3"]

const data4: (string | number | boolean)[] = ["1", 2, true]
// Don't use "any" for the above situation (a lot of ppl do)




// Done with arrays, something interesting

let pi:3.14 = 3.14;
// pi = 3.24  // does not work

// A more real-life scenario would be
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle";
// seatAllotment = "crew"; // this is now allowed

