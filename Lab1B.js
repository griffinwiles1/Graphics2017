/*
 * Computer Graphics - Lab #1
 * Part B - Gamma Correction
 *
 * Modify this example so that...
 *   - the gamma slider value is used to control the gamma correction for the canvas
 *   - use the standard gamma correction algorithm to compute a "corrected" gray
 *     value for each bar, instead of the linear scale that is currently used
 */

function valueToGray(v){
  return "rgb(" + Math.floor(v) + "," + Math.floor(v) + "," + Math.floor(v) + ")";
}

function render(gamma){
  var canvas = document.getElementById("viewport-main");
  var ctx = canvas.getContext('2d');

  RECT_WIDTH = 75;
  value = 0;

  rectIndex = 0;
  while (rectIndex < 17) {
    ctx.fillStyle = valueToGray(value);
    ctx.fillRect(rectIndex * RECT_WIDTH, 0, RECT_WIDTH, canvas.height);
    rectIndex++;
	a = 0
	a_prime = a ^ (1 / gamma) / 255
	value += (a_prime ^ gamma)
	a += 1 / 16
  }

}

window.onload = render;
