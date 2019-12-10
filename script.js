function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, radius, 0, 2 * Math.PI);
ctx.stroke();

  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


function clear(){
var c = document.getElementById("myCanvas");
var ctx = c.clientWidth("2d");
ctx.clearRect(0, 0, c.width,c.height);
}




