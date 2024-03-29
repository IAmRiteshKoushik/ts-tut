// Try compiling this into JavaScript
// It generates a lot of extra code which is unnecessary

// enum SeatChoice {
//     AISLE = "aisle",
//     MIDDLE = 3, 
//     WINDOW, 
//     FOURTH 
// }

// A solution to the previous problem is 
const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3, 
    WINDOW = "window",
    FOURTH = "fourth" 
}
const hcSeat = SeatChoice.AISLE;

// While typescript can be abused to generate a lot of js code
// You must try to write typescript code that actually 
// generated elegant js code, so that in case someone has to 
// modify or fix something only in the js code, they can do that
// without too much pain. 