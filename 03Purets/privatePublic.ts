// class newUser{
//     public email:string
//     name:string
//     private readonly city:string="Patna"
//     constructor(email:string, name:string){
//         this.email=email
//         this.name=name
//     }
// }

class newUser{

    private _courseCount=1

    readonly city:string="Patna"
    constructor(
        public email:string,
        public name:string,
        // private userId:string
    ){
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("course count must be greater than 1")
        }
        else{
            this.courseCount=courseNum
        }
    }

}

const karn = new newUser("saket","sak@sa.com")
// karn.city //currently accessible before declaring the city as private
// karn.city   //after declaring it as private it won't no longer be accessible

// karn.deleteToken() //can't be accessed as it's a private function