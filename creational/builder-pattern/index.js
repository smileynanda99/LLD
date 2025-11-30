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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(builder) {
        this.rollNumber = builder.rollNumber;
        this.name = builder.name;
        this.age = builder.age;
        this.subjects = builder.subjects;
    }
    Student.prototype.displayProfile = function () {
        console.log("Name: ".concat(this.name));
        console.log("Roll Number: ".concat(this.rollNumber));
        console.log("Age: ".concat(this.age));
        console.log("Subjects: ".concat(this.subjects.join(', ')));
    };
    return Student;
}());
var StudentBuilder = /** @class */ (function () {
    function StudentBuilder() {
    }
    StudentBuilder.prototype.setRollNumber = function (rollNumber) {
        this.rollNumber = rollNumber;
        return this;
    };
    StudentBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StudentBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    StudentBuilder.prototype.build = function () {
        return new Student(this);
    };
    return StudentBuilder;
}());
var EngineerStudentBuilder = /** @class */ (function (_super) {
    __extends(EngineerStudentBuilder, _super);
    function EngineerStudentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EngineerStudentBuilder.prototype.setSubjects = function () {
        var subjects = [];
        subjects.push('DSA');
        subjects.push('DBMS');
        subjects.push('System Design');
        this.subjects = subjects;
        return this;
    };
    return EngineerStudentBuilder;
}(StudentBuilder));
var SecondaryStudentBuilder = /** @class */ (function (_super) {
    __extends(SecondaryStudentBuilder, _super);
    function SecondaryStudentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondaryStudentBuilder.prototype.setSubjects = function () {
        var subjects = [];
        subjects.push('English');
        subjects.push('Hindi');
        subjects.push('Science');
        subjects.push('Math');
        this.subjects = subjects;
        return this;
    };
    return SecondaryStudentBuilder;
}(StudentBuilder));
var Director = /** @class */ (function () {
    function Director(bulider) {
        this.bulider = bulider;
    }
    Director.prototype.createStudent = function () {
        if (this.bulider instanceof EngineerStudentBuilder)
            return this.createEngineerStudent();
        else if (this.bulider instanceof SecondaryStudentBuilder)
            return this.createSecondaryStudent();
    };
    Director.prototype.createEngineerStudent = function () {
        return this.bulider.setName('Er. Rohit').setAge(20).setRollNumber('2018UCP1782').setSubjects().build();
    };
    Director.prototype.createSecondaryStudent = function () {
        return this.bulider.setName('Rohit').setAge(15).setRollNumber('01').setSubjects().build();
    };
    return Director;
}());
var BuilderPattern = /** @class */ (function () {
    function BuilderPattern() {
    }
    BuilderPattern.test = function () {
        // creating secondary class student
        console.log('Creating Secondary Class Student...');
        var secondaryStudent = new Director(new SecondaryStudentBuilder()).createStudent();
        secondaryStudent.displayProfile();
        // creating enginner class student
        console.log('\nCreating Engineering Student...');
        var enginnerStudent = new Director(new EngineerStudentBuilder()).createStudent();
        enginnerStudent.displayProfile();
    };
    return BuilderPattern;
}());
BuilderPattern.test();
