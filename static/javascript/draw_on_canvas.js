let model;
var canvasWidth = 300;
var canvasHeight = 300;
var canvasStrokeStyle = "white";
var canvasLineJoin = "round";
var canvasLineWidth = 10;
var canvasBackgroundColor = "black";
var canvasId = "canvas";
var clickX = new Array();
var clickY = new Array();
var clickD = new Array();
var drawing;

var x = "black";
// variable for how think the line is
var lineThickness = 3;

// create the canvas
var canvasBox = document.getElementById('canvas_box');
var canvas    = document.createElement("canvas");

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);
canvas.setAttribute("id", canvasId);
canvas.style.backgroundColor = canvasBackgroundColor;
canvasBox.appendChild(canvas);

// checks is browser supports html 
if(typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
}

ctx = canvas.getContext("2d");
    
// function for when a mouse is clicked
$("#canvas").mousedown(function(e) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX- rect.left;;
    var mouseY = e.clientY- rect.top;
    drawing = true;
    addUserGesture(mouseX, mouseY);
    drawOnCanvas();
});


// function for mouse moving
$("#canvas").mousemove(function(e) {
    if(drawing) {
        var rect = canvas.getBoundingClientRect();
        var mouseX = e.clientX- rect.left;;
        var mouseY = e.clientY- rect.top;
        addUserGesture(mouseX, mouseY, true);
        drawOnCanvas();
    }
});

// function for mouse movement upwards
$("#canvas").mouseup(function(e) {
    drawing = false;
});


// function of when the mouse is released and moved outside the canvas
$("#canvas").mouseleave(function(e) {
    drawing = false;
});

// Drawing on a mobile device
canvas.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }

    var rect = canvas.getBoundingClientRect();
    var touch = e.touches[0];

    var mouseX = touch.clientX - rect.left;
    var mouseY = touch.clientY - rect.top;

    drawing = true;
    addUserGesture(mouseX, mouseY);
    drawOnCanvas();

}, false);

canvas.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
    if(drawing) {
        var rect = canvas.getBoundingClientRect();
        var touch = e.touches[0];

        var mouseX = touch.clientX - rect.left;
        var mouseY = touch.clientY - rect.top;

        addUserGesture(mouseX, mouseY, true);
        drawOnCanvas();
    }
}, false);

//---------------------
// TOUCH END function
//---------------------
canvas.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
    drawing = false;
}, false);

//-----------------------
// TOUCH LEAVE function
//-----------------------
canvas.addEventListener("touchleave", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
    drawing = false;
}, false);



//--------------------
// ADD CLICK function
//--------------------
function addUserGesture(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickD.push(dragging);
}

//-------------------
// RE DRAW function
//-------------------
function drawOnCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.strokeStyle = canvasStrokeStyle;
    ctx.lineJoin    = canvasLineJoin;
    ctx.lineWidth   = canvasLineWidth;

    for (var i = 0; i < clickX.length; i++) {
        ctx.beginPath();
        if(clickD[i] && i) {
            ctx.moveTo(clickX[i-1], clickY[i-1]);
        } else {
            ctx.moveTo(clickX[i]-1, clickY[i]);
        }
        ctx.lineTo(clickX[i], clickY[i]);
        ctx.closePath();
        ctx.stroke();
    }
}
