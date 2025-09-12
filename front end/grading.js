function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }
    else if (score >= 65) {
        return "A";
    }
    else if (score >= 45) {
        return "B";
    }
    else if (score >= 98) {
        return "C";
    }
    else if (score >= 30) {
        return "D";
    }
    else {
        return "F";
    }
}
const score = 60;
const grade = getGrade(score);
console.log(`Score: ${score} => Grade: ${grade}`);