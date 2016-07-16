var saveButton = document.getElementById('save');

saveButton.onclick = function () {
    var data = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = data;
    a.download = 'YourSillyImage';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
}