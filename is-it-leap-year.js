let year = parseInt(prompt("Enter a year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
            alert (year + " is not a leap year");
        } else {
            alert (year + " is a leap year");
        }
    } else {
        alert (year + " is NOT a leap year");
}
