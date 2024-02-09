import { students } from './studentInfo.js'
export class players extends students {
    constructor(id, fname, lname, cls, fee, attendcls, hobby){
        super(id, fname, lname, cls, fee, attendcls);
        this.hobby = hobby;
    }

    get player_detail() {
        console.log(`${super.stu_detail} hobby : ${this.hobby}`);
    }
}