function setup() {
var canv = document.getElementById('canvas');
var contx = canv.getContext('2d');


function drawShape(ctx, point_count, radius) {
    var points = []
    for (var i = 0; i <= point_count; i++) {
        angle = i * 2 * Math.PI / point_count - Math.PI / 2;
        points.push({
            'x': radius + radius * Math.cos(angle),
            'y': radius + radius * Math.sin(angle)
        });
    }

    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.beginPath();
    ctx.lineWidth = 1;
    for(var i = 0; i < points.length; i++) {
        for(var j = 0; j < points.length; j++) {
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
        }
    }
    ctx.stroke();
}
}

function draw() {
    drawShape(contx, document.getElementById('points').value, canv.width / 2);
}
draw();
document.getElementById('points').oninput = draw;
