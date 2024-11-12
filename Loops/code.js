let canvas_element = document.getElementById("c");
let painter = canvas_element.getContext('2d');
let canvas_elementk = document.getElementById("k")
let painter2 = canvas_elementk.getContext('2d')

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
painter.fillStyle = "#FF0000";
let c = 0;
while (c < 13) {
    painter.fillRect(10+c*60, 10, 20, 20);
    painter.fillRect(40+c*60, 40, 20, 20);
    painter.fillRect(10+c*60, 70, 20, 20);
    painter.fillRect(40+c*60, 100, 20, 20);
    painter.fillRect(10+c*60, 130, 20, 20);
    painter.fillRect(40+c*60, 160, 20, 20);
    painter.fillRect(10+c*60, 190, 20, 20);
    painter.fillRect(40+c*60, 220, 20, 20);
    painter.fillRect(10+c*60, 250, 20, 20);
    painter.fillRect(40+c*60, 280, 20, 20);
    painter.fillRect(10+c*60, 310, 20, 20);
    painter.fillRect(40+c*60, 340, 20, 20);
    painter.fillRect(10+c*60, 370, 20, 20);
    ++c; // c = c + 1 // c += 1 // c++
}
painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400);
painter2.fillStyle = "#FF0000"
let k = 0;
while (k < 13) {
    painter2.fillRect(10, 370, 20, 20);
    painter2.fillRect(40, 340+k*30, 20, 20);
    painter2.fillRect(70, 310+k*30, 20, 20);
    painter2.fillRect(100, 280+k*30, 20, 20);
    painter2.fillRect(130, 250+k*30, 20, 20);
    painter2.fillRect(160, 220+k*30, 20, 20);
    painter2.fillRect(190, 190+k*30, 20, 20);
    painter2.fillRect(220, 220+k*30, 20, 20);
    painter2.fillRect(250, 250+k*30, 20, 20);
    painter2.fillRect(280, 280+k*30, 20, 20);
    painter2.fillRect(310, 310+k*30, 20, 20);
    painter2.fillRect(340, 340+k*30, 20, 20);
    painter2.fillRect(370, 370, 20, 20);

    ++k; // k= k + 1 // k+= 1 // k++
}

