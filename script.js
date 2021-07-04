
// Canvas Creator: 
//  function canvasCreator(canvas div Id, color input Id, image source)

var getInput = document.querySelector('#color');
var getColor2 = document.querySelector('#color2');

getInput.addEventListener("click", function () {
    canvasCreator('cnv1', '#color', 'testImg.png');
});

getColor2.addEventListener("click", function () {
    canvasCreator('cnv2', '#color2', 'testImg.png');
});

function canvasCreator(canvasId, colorId, imageSrc) {
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    color = "";
    ctx.rect(0, 0, canvas.width, canvas.height);
    getInput = document.querySelector(colorId);
    img = new Image();
    img.src = imageSrc;

    getInput.oninput = function() {
        color = this.value;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    };

    console.log(canvas);
    console.log(ctx);
    console.log(color);
    console.log(getInput);
    console.log(img);
}
// ----------------------------------------------------
// const canvas = document.getElementById('cnv1');
// const ctx = canvas.getContext('2d');
// let color = "";
// ctx.rect(0, 0, canvas.width, canvas.height);
// const getColor = document.querySelector('#color');
// var img = new Image();
// img.src = 'testImg.png';

// getColor.addEventListener("click", function () {
//      document.getElementById('color').oninput = function() {
//         color = this.value;
//         ctx.fillStyle = color;
//         ctx.fill();
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
//     };
// });

// const canvas2 = document.getElementById('cnv2');
// const ctx2 = canvas2.getContext('2d');
// let color2 = "";
// ctx2.rect(0, 0, canvas2.width, canvas2.height);
// const getColor2 = document.querySelector('#color2');
// var img2 = new Image();
// img2.src = 'testImg.png';


// getColor2.addEventListener("click", function () {
//      document.getElementById('color2').oninput = function() {
//         color2 = this.value;
//         ctx2.fillStyle = color2;
//         ctx2.fill();
//         ctx2.drawImage(img2, 0, 0, canvas2.width, canvas2.height); 
//     };
// });
