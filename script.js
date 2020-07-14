var
  door = document.getElementsByClassName('door')[0],
  frame = document.getElementsByClassName('frame')[0],
  handle = document.getElementsByClassName('handle')[0]
var    
  doorIsOpen = false,
  frameIsZoomed = false,
  state = 0

function tick() {
  const prevState = state
  state++
  checkState(prevState, state)
}

function tickBack() {
  const prevState = state
  state--
  checkState(prevState, state)
}

function checkState(prevState, state) {
  console.log('check state')
  if (state > prevState) {
    console.log('tick forward')
    switch(state) {
      case 1:
        door.classList.add('open')
        break
      case 2:
        frame.classList.add('zoom300')
        break
    }
  } else {
    switch(state) {
      case 0:
        door.classList.remove('open')
      case 1:
        frame.classList.remove('zoom300')
      case 2:
        zoomFrame()
    }
  }
}

function openDoor() {
  if (state == 0) {
    console.log('open door')
    tick()
  }
}



function arrows(e) {
  console.log(e.code)

  if (e.code == 'ArrowRight' | e.code == 'Space') {
    tick()
  } 

  if (e.code == 'ArrowLeft') {
    tickBack()
  }
}

door.addEventListener('click', openDoor)
document.addEventListener('keydown', arrows)
