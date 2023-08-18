interface TakePhoto {
    cameraMode: string, 
    filter: string,
    burst: number
}

interface Story {
    createStory(): void
}

// A class is inheriting an interface 
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){

    }
} 

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    // You cannot add this in the constructor, it is a function
    createStory(): void {
        console.log("Story was created.")
    }
}