window.onload = function() {

  // Get the image
  const image = new Image()
  image.src = 'stage.png'

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