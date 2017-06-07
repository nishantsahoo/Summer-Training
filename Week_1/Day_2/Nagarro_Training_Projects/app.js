/**
 * Created by Nishant on 6/6/2017.
 */
class Student{

    constructor(name,english,math,science){
        this.name = name
        this.english = english
        this.math = math
        this.science = science
    }

    combine() { return (this.english+this.math+this.science); }
}

var s1 = new Student("Nishant", 100, 100, 100)
console.log(s1.combine()) // call of the function combine