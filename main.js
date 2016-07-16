var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function () {
    var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.putImageData(image, 0, 0);
}

var radius = 5;
ctx.lineWidth = radius * 2;
var dragging = false;

function putPoint(e) {
    if(dragging) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
}

function engage(e) {
    if(e.which == 1) {
        dragging = true;
        putPoint(e);
    }
}

function disengage() {
    dragging = false;
    ctx.beginPath();
}
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

function clearCanvas(canvas) {
    canvas.width = canvas.width;
}