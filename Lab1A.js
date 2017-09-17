/*
 * Computer Graphics - Lab #1
 * Part A - Alpha Compositing
 *
 * Modify this example so that...
 *   - the alpha slider value indicates the opacity of the third rectangle
 *   - the intersections of the initial three rectangles have colors computed
 *     using the standard linear interpolation method for alpha compisiting
 *   - you can achieve this by drawing two new rectangles directly on top of
 *     the intersections of the original three rectangles
 */

function arrayToColor(rgb){
  return "rgb(" + Math.floor(rgb[0]) + "," + Math.floor(rgb[1]) + "," + Math.floor(rgb[2]) + ")";
}

function render(alpha){
  var canvas = document.getElementById("viewport-main");
  var ctx = canvas.getContext('2d');
	
  color1 = [255,0,255]; //Magenta
  color2 = [255,255,0]; //Yellow
  color3 = [0,216,255]; //Cyan
  color4 = [(alpha * color3[0]) + ((1 - alpha) * color1[0]), (alpha * color3[1]) + ((1 - alpha) * color1[1]), (alpha * color3[2]) + ((1 - alpha) * color1[2])]; //Magenta-Cyan
  color5 = [(alpha * color3[0]) + ((1 - alpha) * color2[0]), (alpha * color3[1]) + ((1 - alpha) * color2[1]), (alpha * color3[2]) + ((1 - alpha) * color2[2])]; //Yellow-Cyan

  //ctx.fillRect(x,y,width,height)
  
  //Magenta
  ctx.fillStyle = arrayToColor(color1);
  ctx.fillRect(200, 100, 200, 160);

  //Yellow
  ctx.fillStyle = arrayToColor(color2);
  ctx.fillRect(640, 150, 100, 480);

  //Cyan
  ctx.fillStyle = arrayToColor(color3);
  ctx.fillRect(320, 200, 640, 240);
  
  //Magenta-Cyan
  ctx.fillStyle = arrayToColor(color4);
  ctx.fillRect(320, 200, 80, 60);
  
  //Yellow-Cyan
  ctx.fillStyle = arrayToColor(color5);
  ctx.fillRect(640, 200, 100, 240);
}

window.onload = render;
