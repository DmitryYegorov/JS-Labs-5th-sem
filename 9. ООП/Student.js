class Student{

    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getCourse(){
        const currentYear = new Date().getFullYear();
        const year = String(currentYear).slice(0,2) + this.id.slice(2,4);
        return (+currentYear) - (+year) + 1;
    }

    static getDev(arr){
        let count  = 0;
        arr.forEach((item) => {
            if (item.id[1] === 3)
                count++;
        });
        return count;
    }
}

module.exports = Student;