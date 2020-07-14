var
  door = document.getElementsByClassName('door')[0],
  frame = document.getElementsByClassName('frame')[0],
  handle = document.getElementsByClassName('handle')[0]
var    
  doorIsOpen = false,
  frameIsZoomed = false

function openDoor() {
  door.classList.add('open')
  doorIsOpen = true
  // frame.onclick = zoomFrame
}

function zoomFrame() {
  frame.classList.add('zoomFrame')
}

door.onclick = openDoor
