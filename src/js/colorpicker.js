function getMousePos(cpCanvas, evt) {
    var rect = cpCanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function drawColor(color) {

    if(brush){
        brushColor.style.backgroundColor = color;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
    }

    if(background){
        canvas.style.backgroundColor = color;
        backgroundSaveColor = color;
    }

}
function init(imageObj) {
    var cpCanvas = document.getElementById('colorpicker');
    var cpCtx = cpCanvas.getContext('2d');
    var mouseDown = false;
    cpCanvas.addEventListener('mouseout', function () {
        cvs.style.display = 'none';
    });

    cpCtx.strokeStyle = '#444';
    cpCtx.lineWidth = 2;

    cpCanvas.addEventListener('mousedown', function(evt) {
        mouseDown = true;

        var mousePos = getMousePos(cpCanvas, evt);
        color = undefined;

        if (mousePos !== null && mousePos.x > mousePos.x < imageObj.width && mousePos.y > mousePos.y < imageObj.height) {

            var x = mousePos.x;
            var y = mousePos.y;
            var imgData = cpCtx.getImageData(x, y, 1, 1);
            var data = imgData.data;
            var color = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';

            drawColor(color);
        }

    }, false);

    cpCanvas.addEventListener('mouseup', function() {
        mouseDown = false;
    }, false);

    cpCanvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(cpCanvas, evt);
        color = undefined;

        if(mouseDown && mousePos !== null && mousePos.x > mousePos.x < imageObj.width && mousePos.y > mousePos.y < imageObj.height) {

            var x = mousePos.x;
            var y = mousePos.y;
            var imgData = cpCtx.getImageData(x, y, 1, 1);
            var data = imgData.data;
            var color = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';

            drawColor(color);
        }
    }, false);


    cpCtx.drawImage(imageObj, 0, 0);

    drawColor('black');
}

var brushColor = document.getElementsByClassName('swatch')[0];
brushColor.style.backgroundColor = 'black';

var brush = false;
var background = false;


var cvs = document.querySelector('#colorpicker');

var brushButton = document.getElementById('brush-color');

brushButton.addEventListener('mousedown', function () {
    cvs.style.display = 'none';
    setTimeout(function () {
        cvs.style.display = 'block';
    }, 50);
    brush = true;
    background = false;
});

var backgroundButton = document.getElementById('background-color');
var backgroundSaveColor;

backgroundButton.addEventListener('mousedown', function () {
    cvs.style.display = 'none';
    setTimeout(function () {
        cvs.style.display = 'block';
    }, 50);
    background = true;
    brush = false;
});

var imageObj = new Image();
imageObj.onload = function() {
    init(this);
};

imageObj.crossOrigin = '';
imageObj.src = 'images/colorpicker.png';

