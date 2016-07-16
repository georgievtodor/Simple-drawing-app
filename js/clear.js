var clearButton = document.getElementById('clear');

clearButton.onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
