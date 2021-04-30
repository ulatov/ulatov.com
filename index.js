//<html lang="en" class="js touch">

const elemBody = document.getElementsByTagName("body")[0]
const elemCounter = document.getElementsByClassName("counter")[0]

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) || 
           ( navigator.msMaxTouchPoints > 0 );
}

function counterString(counter) {
  return `There ${counter === 0 ? "are no":counter === 1 ? "is" : "are"} ${counter === 0 ? "": counter} motley circle${counter === 1 ? "":"s"} on the page.`
}

function updateCounter() {
  let counter = document.getElementsByClassName("circle").length;
  elemCounter.innerHTML=counterString(counter)
}

function deleteElemTimeout(el) {
  window.setTimeout(() => {
    el.parentElement.removeChild(el)
    updateCounter()
  }, 3000)
}

function makeCircle(x,y) {
  const newCircle = document.createElement("div")
  newCircle.setAttribute("class", "circle")
  const R = Math.floor(Math.random() * 256)
  const G = Math.floor(Math.random() * 256)
  const B = Math.floor(Math.random() * 256)
  const A = Math.floor(Math.random() * 50 + 25) / 100
  newCircle.style.top = `${y}px`
  newCircle.style.left = `${x}px`
  newCircle.style.background = `rgba(${R},${G},${B},${A})`
  elemBody.appendChild(newCircle)
  deleteElemTimeout(newCircle)
}



updateCounter()

const toAdd = document.getElementsByClassName("toAdd")[0]

if (is_touch_enabled()) {
  toAdd.innerHTML = "Tap to add"
  elemBody.addEventListener("touchstart", (e) => {
    /*
    for (let i=0; i < e.touches.length; i++) {
      makeCircle(e.touches[i].clientX, e.touches[i].clientY)
    }
    */
    makeCircle(e.touches[e.touches.length-1].clientX, e.touches[e.touches.length-1].clientY)
    updateCounter()
  })
} else {
  toAdd.innerHTML = "Click to add"
  elemBody.addEventListener("click", (e) => {
    makeCircle(e.x, e.y)
    updateCounter()
  })
}