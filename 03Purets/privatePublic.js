var newUser = /** @class */ (function () {
    function newUser(email, name) {
        this.city = "Patna";
        this.email = email;
        this.name = name;
    }
    return newUser;
}());
var karn = new newUser("saket", "sak@sa.com");
// karn.city //currently accessible before declaring the city as private
// karn.city   //after declaring it as private it won't no longer be accessible
