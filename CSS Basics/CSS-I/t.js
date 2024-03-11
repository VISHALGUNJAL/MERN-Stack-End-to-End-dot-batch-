// Example array of student marks
const studentMarks = [85, 92, 88, 78, 95, 89, 91, 87, 93, 80];

// Use the filter method to get marks of students scoring 90+
const highScorers = studentMarks.filter(mark => mark >= 90);

console.log("Marks of students scoring 90 or above:", highScorers);
