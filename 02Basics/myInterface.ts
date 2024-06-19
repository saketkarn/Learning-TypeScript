interface inUser{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    startTrial:()=> string,
}


const saket:inUser={dbId:112,email:"saket@s.com",userId:112,
    startTrial:()=>{
        return "Trial started"
    }
}