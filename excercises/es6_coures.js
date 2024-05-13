let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
//    1-11
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

console.log("\nWhen does the PROG200 course start?")
console.log(courses.find(c=>c.CourseId === "PROG200").StartDate);

console.log("\nWhat is the title of the PROJ500 course?")
console.log(courses.find(c=>c.CourseId === "PROJ500").Title);


console.log("\nWhat are the titles of the courses that cost $50 or less?")
// const isMatch = couse => Number(course.Fee) <=50;
// const matches = courses.filter(isMatch);
// const titles = matches.map(m=>m.Title);
// const prefix = "\n -";
// console.log(prefix + titles.join([prefix]));

courses.filter(c=>Number(c.Fee)<=50).forEach(m => console.log(" - " + m.Title));

console.log(`What classes meet in "Classroom 1?"`);
courses.filter(c=>c.Location=="Classroom 1").forEach(m => console.log(" - " + m.Title));


// recap == vs ===
console.log( 1 == "1"); // true - same value, ignore type //DISCOURAGED
console.log( 1 === "1"); // false -same type and same value //PREFFERED MODERNS JS

