// A class is inheriting an interface 
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var YouTube = /** @class */ (function () {
    function YouTube(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // You cannot add this in the constructor, it is a function
    YouTube.prototype.createStory = function () {
        console.log("Story was created.");
    };
    return YouTube;
}());
