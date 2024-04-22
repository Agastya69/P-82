canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
color=document.getElementById("color").value;
mouseEvent="";

addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    radius=document.getElementById("radius").value;
    width=document.getElementById("width").value;
    color=document.getElementById("color").value;
mouseEvent="my_mousedown";
}
addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
color=document.getElementById("color").value;
mouseEvent="my_mouseup";
}
addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
color=document.getElementById("color").value;
mouseEvent="my_mouseleave";
}
addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
color=document.getElementById("color").value;
current_postion_of_mouse_x=e.clientX - canvas.offSetLeft;
current_postion_of_mouse_y=e.clienY - canvas.offSetTop;
mouseEvent="my_mouseleave";
}
