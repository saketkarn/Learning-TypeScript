let greetings:string="Hello Saket"
greetings.toLowerCase()
console.log(greetings)


//number
let userId : number = 9878

//boolean
let isLoggedIn : boolean = false


//type inference

let rollNo=69
rollNo.toFixed()  //here we haven't defined any datatype with rollNo but still TS takes it as a number as it's smart enough for this.
//So, we don't always need to put the datatype along with the variables we've defined.

export{}