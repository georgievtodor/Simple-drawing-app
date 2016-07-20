var saveButton = document.getElementById('save');

saveButton.onclick = function () {
    var data = canvas.toDataURL();
    var savedImage = new Image();

    savedImage.src = data;

    var curFill = ctx.fillStyle;

    ctx.fillStyle = backgroundSaveColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = curFill;

    ctx.drawImage(savedImage, 0, 0);

    data = canvas.toDataURL();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(savedImage, 0, 0);

    var a = document.createElement('a');

    a.href = data;
    a.download = 'YourSillyImage';
    a.style.display = 'none';

    document.body.appendChild(a);

    a.click();
    a.remove();
};