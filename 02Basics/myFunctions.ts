function addTwo(num:number):number{  //now function would only return a number and not any other type of value
    return num+2
    // return "hello"  this won't be allowed
}

addTwo(5) 

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("saket")

export{}

function signUpUser(name:string, email:String, password:string, isPaid:boolean){
}

signUpUser("Saket","saketkarn38@gmaill.com","abc@123",true)


let loginUser=(name:string, email:string, isPaid:boolean=false)=>{ //giving the default value to isPaid
}

loginUser("saket","s@s.com")

const getHello=(s:string):string=>{  //arrow function returning only string values
    return ""
}

const heros=["thor","spiderman","ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

let consoleError=(errmsg:string):void=>{  //this function won't return anything
    console.log(errmsg)
}

let handleError=(errmsg:string):never=>{  //it'd never return any value, it's used to handle errors
    throw new Error(errmsg)
}