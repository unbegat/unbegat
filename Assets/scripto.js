/////////////////////Things to edit/////////////////////////////////
const Issue = ["#1. The Undersea Experience","#2. The Angel and the Owl"];

const Descriptions = ["This one's just about cruising in the sea"]
////////////////////////////////////////////////////////////////////////

function RandoInt() {
  ///the number in *() should be replaced with number of issues-1////
  return Math.floor(Math.random() * (2) ) + 1;
}
function randomSite(){
  i = RandoInt();
  location.href= i + ".htm";}   



///main canvas function
window.onload = function(){
  // Get the image
  const image = new Image()
  image.src = 'Comics/' + no +'.png'

  // Wait Till the Image is loaded
  image.onload = function() {
    drawCanvas(image)
  }

  function drawCanvas(image) {
    // Create canvas context
    const canvas = document.getElementById('floornet')
    const context = canvas.getContext("2d")

    canvas.width = image.width 
    canvas.height = image.height 

    // Draw image to the canvas
    context.drawImage(image, 0, 0) 
  }
}