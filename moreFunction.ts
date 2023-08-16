// If functions return the wrong type, it can crash the 
// whole application. For example :

function addTwo(num: number) : number {
    return num + 2;
    // return "hello"
    // If the function was not casted, the code would have run
    // and returned a string instead of fulfilling its purpose. 
}

// The same thing can be done in arrow functions as follows
const getHello = (s: string) : string => {
    return ""
}

// At times you would need to return two or more different datatypes
// and multiple casting can be done as follows : 
function getValue(myVal : number) : string | boolean {
    if (myVal > 5) {
        return true;
    }
    else {
        return "200 OK"
    }
}

// Consider a simple array of strings 
const heroes = ["thor", "spiderman", "ironman"];
// If you hover over this inside of VSCode then you can see
// that heroes has been put under the string-array type. You
// need not actually define it as (nothing WRONG here btw) 

// heroes.mamp((hero: string) => {
//      return ""
// }

heroes.map(hero => {
    return `hero is ${hero}`
})

// But we can add in typesafety for what we are returning with
// this function
const hero = ['superman', 'batman']
hero.map((hero): string => {
    // As we have set the return type to string, we cannot return
    // any incorrect datatype here. 
    // return 1;
    return "Hello";
})

