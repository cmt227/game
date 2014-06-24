/* Javascript controlling the html canvas element,
   which contains the game map. */


// Get the canvas and make it fit in its container.
var container= document.getElementById('canvas_holder');
var canvas= document.getElementById('canvas');
canvas.width= container.clientWidth;
canvas.height= container.clientHeight;

// Get a map from the server.
$.ajax({
    url: 'maps.php';
    type: 'POST';
    dataType: 'json'; 
    success: function(result) {
        console.log("Successfully recieved map1.");
        console.log(result);
    }
});

// Get the graphics context.
var context= canvas.getContext('2d');
var img= new Image();
img.src= 'images/grass2.png';
img.onload = function() {
    for (var x= 0; x <= canvas.width; x= x+40) {
        for (var y= 0; y <= canvas.height; y= y+40) {
            context.drawImage(img, x, y);
       }
    }
}
