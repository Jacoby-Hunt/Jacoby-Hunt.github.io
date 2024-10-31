document.getElementById("btn").addEventListener ("click", onclick);
function onclick () {
    let S = document.getElementById("score").valueAsNumber;
    let grade;
    if (S >= 97 && S <= 100) {grade = "A+"}
    if (S >= 93 && S <= 96) {grade = "A"}
    if (S >= 90 && S <= 92) {grade = "A-"}
    if (S >= 87 && S <= 89) {grade = "B+"}
    if (S >= 83 && S <= 86) {grade = "B"}
    if (S >= 80 && S <= 82) {grade = "B-"}
    if (S >= 77 && S <= 79) {grade = "C+"}
    if (S >= 73 && S <= 76) {grade = "C"}
    if (S >= 70 && S <= 72) {grade = "C-"}
    if (S >= 67 && S <= 69) {grade = "D+"}
    if (S >= 63 && S <= 66) {grade = "D"}
    if (S >= 60 && S <= 62) {grade = "D-"}
    if (S >= 0 && S <= 59) {grade = "F"}
    
    

   
    
    
    
    document.getElementById("result").innerHTML = grade + "."
}