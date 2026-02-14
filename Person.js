// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Class (Inheritance)
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method Overriding
  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
}

// Teacher Class (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

export { Person, Student, Teacher };