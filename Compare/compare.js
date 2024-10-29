document.getElementById("btn").addEventListener("click", onclick);
function onclick () {
    let F = document.getElementById("First").valueAsNumber;
    let S = document.getElementById("Second").valueAsNumber;
    let T = document.getElementById("Third").valueAsNumber;
    let earned
    if (F > S&T) {earned = F}
    if (S > F&T) {earned = S}
    if (T > F&S) {earned = T}
    
    
    
    document.getElementById("result").innerHTML = "The highest number is " + earned + "."
}