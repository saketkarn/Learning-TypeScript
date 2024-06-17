function addTwo(num:number){
    return num+2
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