var
  door = document.getElementsByClassName('door')[0],
  frame = document.getElementsByClassName('frame')[0],
  handle = document.getElementsByClassName('handle')[0]
var    
  doorIsOpen = false,
  frameIsZoomed = false

function openDoor() {
  door.classList.add('open')
}

function zoomFrame() {
  console.log('zoomframe')
  if (doorIsOpen) {
    frame.classList.add('zoomFrame')
  } else {
    doorIsOpen = true
    console.log('doorisopen')
  }
}

door.onclick = openDoor
frame.onclick = zoomFrame
