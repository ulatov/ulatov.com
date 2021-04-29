const elemBody = document.getElementsByTagName("body")[0]

function deleteElemTimeout(el) {
  window.setTimeout(() => el.parentElement.removeChild(el), 3000)
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

elemBody.addEventListener("click", (e) => makeCircle(e.x, e.y))