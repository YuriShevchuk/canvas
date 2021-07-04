const canvas = document.getElementById('cnv1');
const ctx = canvas.getContext('2d');
let color = "";
ctx.rect(0, 0, canvas.width, canvas.height);
const getColor = document.querySelector('#color');
var img = new Image();
img.src = 'testImg.png';

getColor.addEventListener("click", function () {
     document.getElementById('color').oninput = function() {
        color = this.value;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    };
});

const canvas2 = document.getElementById('cnv2');
const ctx2 = canvas2.getContext('2d');
let color2 = "";
ctx2.rect(0, 0, canvas2.width, canvas2.height);
const getColor2 = document.querySelector('#color2');
var img2 = new Image();
img2.src = 'testImg.png';


getColor2.addEventListener("click", function () {
     document.getElementById('color2').oninput = function() {
        color2 = this.value;
        ctx2.fillStyle = color2;
        ctx2.fill();
        ctx2.drawImage(img2, 0, 0, canvas2.width, canvas2.height); 
    };
});
