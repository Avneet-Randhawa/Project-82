var mouse_event = "empty";
var last_x_position, last_y_position;

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var linewidth = 1;
radius = 40;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("width_line").value;
    radius = document.getElementById("radius").value;
    mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        console.log("Current X and Y Position =");
        console.log("X =" + current_x_position + "Y =" + current_y_position);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(current_x_position, current_y_position, radius, 0, 2 * Math.PI);
        ctx.stroke();

    }
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseUp";
}

function CLEARAREA() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
