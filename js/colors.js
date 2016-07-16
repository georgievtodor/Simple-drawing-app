var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(var i = 0, len = colors.length; i < len; i += 1) {
    var swatch = document.createElement('div');
    swatch.className = i === 0 ? 'swatch active' : 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if(active){
        active.className = 'swatch';
    }
}

function setSwatch(e) {
    var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className = 'swatch active';
}
