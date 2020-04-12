class Student {
  constructor(name, enrolled, faculty) {
    this.id = 1;
    this.name = name;
    this.enrolled = enrolled;
    this.faculty = faculty;
  }

  addStudent() {
    console.log(`Adding a new student ${this.name} with student identifier ${this.id}`);
  }

  editStudent(name, enrolled, faculty, id) {
    if(name !== undefined) this.name = name
    if(enrolled !== undefined) this.enrolled = enrolled
    if(faculty !== undefined) this.faculty = faculty
    if(id !== undefined) this.id = id
    console.log(`Editted informations: ${this.name} ${this.enrolled} ${this.faculty} ${this.id}`)
  }
}

let student = new Student('Anish Ghimire', 2016, 'BIM');
student.addStudent()
student.editStudent('Saroj Kafle', '2017', 'BBA', 3)