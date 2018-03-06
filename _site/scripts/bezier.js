var svgEl = document.querySelector('.animated-lines');

var randomRange = function(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min
};

var numberOfLines = 9,
    lineDataArr = [];

var createPathString = function() {

    var completedPath = '',
        comma = ',',
        ampl = 50;

    for (var i = 0; i < numberOfLines; i++) {

        var path = lineDataArr[i];

        var current = {
            x: ampl * Math.sin(path.counter / path.sin),
            y: ampl * Math.cos(path.counter / path.cos)
        };

        var newPathSection = 'M' +
            // starting point
            path.startX +
            comma +
            path.startY +
            // quadratic control point
            ' Q' +
            path.pointX +
            comma +
            (current.y * 1.5).toFixed(3) + // 1.5 to amp up the bend a little
            // center point intersection
            ' ' +
            ((current.x) / 10 + path.centerX).toFixed(3) +
            comma +
            ((current.y) / 5 + path.centerY).toFixed(3) +
            // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
            ' T' +
            path.endX +
            comma +
            path.endY;
        path.counter++;

        completedPath += newPathSection;

    };

    return completedPath;

};

var createLines = function() {

    var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
        minSpeed = 100,
        maxSpeed = 500;

    for (var i = 0; i < numberOfLines; i++) {

        var lineDataObj = {
            // a broad counter range ensures lines start at different cycles (will look more random)
            counter: randomRange(1, 500), 
            startX: randomRange(-5, -40),
            startY: randomRange(-5, -30),
            endX: randomRange(200, 220),
            endY: randomRange(120, 140),
            sin: randomRange(minSpeed, maxSpeed),
            cos: randomRange(minSpeed, maxSpeed),
            pointX: randomRange(30, 55),
            centerX: randomRange(90, 120),
            centerY: randomRange(60, 70)
        }
        lineDataArr.push(lineDataObj)
    }

    var animLoop = function() {
        newPathEl.setAttribute('d', createPathString());
        requestAnimationFrame(animLoop);
    }

    // once the path elements are created, start the animation loop
    svgEl.appendChild(newPathEl);
    animLoop();

};

createLines();