// While you can allow a few different types, you should try to 
// keep things as strict as you can and limit to one type.
// In the one off cases where you have to add in
// more types, go ahead and do so. 
var score = 33;
var hitesh = {
    name: "hitesh",
    id: 334
};
hitesh = {
    username: "hc",
    id: 334
};
// Manipulating data of different types
function getDbID(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// A small discussion on arrays
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = ["1", "2", "3"];
var data4 = ["1", 2, true];
// Don't use "any" for the above situation (a lot of ppl do)
// Done with arrays, something interesting
var pi = 3.14;
// pi = 3.24  // does not work
// A more real-life scenario would be
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; // this is now allowed
