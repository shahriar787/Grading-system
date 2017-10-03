var marks = Number(prompt("Please enter your marks"));
if (marks >= 80 && marks <= 100) {
    document.write("You have got A+.");
} else if (marks >= 70 && marks <= 79) {
    document.write("You have got A.");
} else if (marks >= 60 && marks <= 69) {
    document.write("You have got A-.");
} else if (marks >= 50 && marks <= 59) {
    document.write("You have got B.");
} else if (marks >= 0 && marks <= 49) {
    document.write("You have got F.");
} else {
    document.write("Invalid input. Please try again");
}