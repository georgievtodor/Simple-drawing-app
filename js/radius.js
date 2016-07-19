// function SetRadius(newRadius) {
//     if(newRadius < minRad) {
//         newRadius = minRad;
//     }
//     else if(newRadius > maxRad) {
//         newRadius = maxRad;
//     }
//     radius = newRadius;
//     ctx.lineWidth = radius * 2;
//     radSpan.innerText = radius;
// }
//
// var minRad = 1;
// var defaultRad = 5;
// var maxRad = 40;
// var interval = 1;
//
// var radSpan = document.getElementById('radvalue');
// var decRad = document.getElementById('decradius');
// var incRad = document.getElementById('incradius');
//
// radSpan.innerText = radius;
//
//
//
// decRad.addEventListener('mousedown', function () {
//     SetRadius(radius - interval);
// });
//
// incRad.addEventListener('mousedown', function () {
//     SetRadius(radius + interval);
// });
//
// SetRadius(defaultRad);

var radSize = document.querySelector('#radius input');
radSize.addEventListener('mousemove', setRadius, false);
var radValue = document.getElementById('radvalue');
radValue.innerText = radius;

function setRadius() {
    radius = radSize.value;
    radValue.innerText = radius;
    ctx.lineWidth = radius * 2;
}