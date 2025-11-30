/*
The Builder Design Pattern is a creational design pattern that provides a step-by-step approach to constructing complex objects. 
It separates the construction process from the object’s representation, enabling the same method to create different variations 
of an object.

When to Use the Builder Pattern
• When constructing an object is complex and involves many optional steps.
• When you want to separate construction logic from representation.
• When you want to avoid telescoping constructors (constructors with too many parameters).
• When different representations (e.g., gaming computer, office computer) can be built using the same construction process.

https://www.geeksforgeeks.org/system-design/builder-design-pattern/
*/

class Student {
    private rollNumber: string;
    private name: string;
    private age: number
    private subjects: string[];
    constructor(builder: StudentBuilder) {
        this.rollNumber = builder.rollNumber;
        this.name = builder.name;
        this.age = builder.age;
        this.subjects = builder.subjects;
    }

    displayProfile() {
        console.log(`Name: ${this.name}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Age: ${this.age}`);
        console.log(`Subjects: ${this.subjects.join(', ')}`);
    }

}

abstract class StudentBuilder {
    rollNumber: string;
    name: string;
    age: number
    subjects: string[];

    setRollNumber(rollNumber: string): StudentBuilder {
        this.rollNumber = rollNumber;
        return this;
    }

    setName(name: string): StudentBuilder {
        this.name = name;
        return this;
    }

    setAge(age: number): StudentBuilder {
        this.age = age;
        return this;
    }

    abstract setSubjects(): StudentBuilder;

    build(): Student  {
        return new Student(this);
    }

}


class EngineerStudentBuilder extends StudentBuilder {
    setSubjects(): StudentBuilder {
        const subjects = [];
        subjects.push('DSA');
        subjects.push('DBMS');
        subjects.push('System Design');
        this.subjects = subjects;
        return this;
    }
}

class SecondaryStudentBuilder extends StudentBuilder {
    setSubjects(): StudentBuilder {
        const subjects = [];
        subjects.push('English');
        subjects.push('Hindi');
        subjects.push('Science');
        subjects.push('Math');
        this.subjects = subjects;
        return this;
    }
}

class Director {
    bulider: StudentBuilder;

    constructor(bulider: StudentBuilder) {
        this.bulider = bulider;
    }

    createStudent() {
        if(this.bulider instanceof EngineerStudentBuilder)
            return this.createEngineerStudent();
        else if(this.bulider instanceof SecondaryStudentBuilder) 
            return this.createSecondaryStudent();
    }

    private createEngineerStudent(): Student {
        return this.bulider.setName('Er. Rohit').setAge(20).setRollNumber('2018UCP1782').setSubjects().build();
    }

    private createSecondaryStudent(): Student {
        return this.bulider.setName('Rohit').setAge(15).setRollNumber('01').setSubjects().build();
    }
}


class BuilderPattern {
    static test() {
        // creating secondary class student
        console.log('Creating Secondary Class Student...');
        const secondaryStudent = new Director(new SecondaryStudentBuilder()).createStudent();
        secondaryStudent.displayProfile();

        // creating enginner class student
        console.log('\nCreating Engineering Student...');
        const enginnerStudent = new Director(new EngineerStudentBuilder()).createStudent();
        enginnerStudent.displayProfile();
    }
}

BuilderPattern.test();