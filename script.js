const canvas = document.getElementById('cnv1');
const ctx = canvas.getContext('2d');
let color = "";
ctx.rect(0, 0, canvas.width, canvas.height);

const getColor = document.querySelector('#color');


getColor.addEventListener("click", function () {
    document.getElementById('color').oninput = function() {
        var img = new Image();
        img.src = 'testImg.png';
        color = this.value;
        console.log(`in ${color}`)
        ctx.fillStyle = color;
        ctx.fill();
        ctx.globalCompositeOperation='destination-in';  
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    }
});