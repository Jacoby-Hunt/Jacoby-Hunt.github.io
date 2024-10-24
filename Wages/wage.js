document.getElementById("btn").addEventListener("click",onclick);
function onclick () {
    let h = document.getElementById("Normal_hours").valueAsNumber;
    let r = document.getElementById("Normal_rate").valueAsNumber;
    let o = document.getElementById("Overtime_rate").valueAsNumber;
    let w = document.getElementById("Hours_worked").valueAsNumber;
    let earned;
    if (w <= h) {
        earned= w * r
    } else {
        let normal_earned = h * r;
        let overtime_earned = (w - h) * o;
        earned = normal_earned + overtime_earned;
    }
    
    document.getElementById("result").innerHTML = "Your wage is $" + earned + ".";

}