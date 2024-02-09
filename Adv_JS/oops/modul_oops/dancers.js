import { students } from "./studentInfo";
export class dancers extends students {
    constructor(id, fname, lname, cls, fee, attendcls, forms){
        super(id, fname, lname, cls, fee, attendcls);
        this.forms = forms;
    }

    get dancer_detail() {
        console.log(`${super.stu_detail} forms : ${this.forms}`);
    }
}