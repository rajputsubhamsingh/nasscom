export class students{
    constructor(id, fname, lname, cls, fee, attendcls){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.cls = cls;
        this.fee = fee;
        this.attendcls = attendcls;
    }

    get rollNo() {
        return `${this.id}`;
    }

    get student_name() {
        return `${this.fname} ${this.lname}`;
    }

    get fullYrsFees() {
        return this.fee * 12;
    }

    get attendance() {
        if(this.attendcls % 100 >= 75 || this.attendcls % 100 == 0){
            return `Your attendance count is ${this.attendcls}%. you can take exam.`;
        }
        else {
            return `Your attendance count is ${this.attendcls}%. you are not eligible for exam.`;
        }
    }

    get stu_detail() {
        return `roll no : ${this.rollNo} name : ${this.student_name} class : ${this.cls} totalFees : ${this.fullYrsFees} attendance : ${this.attendance}`;
    }
}