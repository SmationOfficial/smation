    //Create "mouseEvent" variable and set it as “Empty”.
    var mouseEvent="empty";
    var last_position_of_x,last_position_of_y;
    //Create two variables "last_position_of_x" and  "last_position_of_y".


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color="red";
    width_of_line=2
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    //Create the addEventListener() function for mouseup(). 
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }


    

    //Create the addEventListener() function for mouseleave(). 
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent = "mouseleave;"
}




    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        
        //If yes call "beginPath()".
        if (mouseEvent =="mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y)
        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx.stroke();

        //Now we will draw the line using the stroke() function.
        
        
        }
        // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
