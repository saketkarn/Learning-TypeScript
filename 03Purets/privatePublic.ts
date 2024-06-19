class newUser{
    public email:string
    name:string
    private readonly city:string="Patna"
    constructor(email:string, name:string){
        this.email=email
        this.name=name
    }
}

const karn = new newUser("saket","sak@sa.com")
// karn.city //currently accessible before declaring the city as private
// karn.city   //after declaring it as private it won't no longer be accessible