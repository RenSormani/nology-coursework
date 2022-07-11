// class Book {
//     constructor(title, author, genre, year) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}`;
//     }
// }

// const book1 = new Book("Harry Potter and the Half-Blood Prince", "J. K. Rowling", "Fiction", 2009);
// console.log(book1);

// class Magazine extends Book {
//     constructor(title, author, genre, year, length) {
//             super(title, author, genre, year)
//             this.length = length;
//     }
// }

// const mag1 = new Magazine("Mag One", "Renato Sormani", "Tech", 2022, 100);
// console.log(mag1);
// console.log(mag1.getSummary());


// class Employee {
//     constructor (name, rating, grade, nextGrade) {
//         this.name = name;
//         this.rating = rating;
//         this.grade = grade;
//         this.nextGrade= nextGrade;
//     }

//     employeeAssesment() {
//         if (this.rating >= 7) {
//             return `${this.name} is likely to be promoted from ${this.grade} to ${this.nextGrade}`;
//         } else {
//             return `${this.name} needs to work harder. No promotion.`;
//         }
//     }
// }

// const marianne = new Employee("marianne", 6, "teacher", "head of year");
// const Renato = new Employee("Renato", 9, "Manager", "Owner");
// console.log(marianne);
// console.log(marianne.employeeAssesment());
// console.log(Renato.employeeAssesment());


 