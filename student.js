export class Student {
    constructor(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.fullname = this.generateFullname();
    }
    generateFullname() {
        const fullname = this.firstname + " " + this.lastname
        return fullname;
    }
    getFullname() {
        return this.fullname;
    }

    setEmail(email) {
        this.email = email;
    }
}

const student = new Student('Christian','Kirschberg', 'kirs@cphbusiness.dk');
console.log(student.fullname);
student.setEmail('mtnl@cphbusiness.dk');



