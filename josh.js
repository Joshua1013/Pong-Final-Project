var namespace = "http://www.w3.org/2000/svg"
 makeRect( 150, 70, 5, 5, "white")
 makeRect( 150, 50, 5, 5, "white")
 makeRect( 150, 30, 5, 5, "white")
 makeRect( 150, 10, 5, 5, "white")
 makeRect( 150, 110, 5, 5, "white")
 makeRect( 150, 130, 5, 5, "white")
 makeRect( 150, 150, 5, 5, "white")
 makeRect( 150, 170, 5, 5, "white")
makeRect( 150, 90, 5, 5, "white")
makeLine(0,1,300,1,"white")
makeLine(0,186,300,186,"white")
var point1 = makeLine(1,0,1,186,"white")
var GG2 = makeLine(300,0,300,186,"white")
var paddle1 = makeRect( 20, 70, 5,50,"white")
var paddle2 = makeRect( 280, 70, 5,50,"white")
var ball = makeRect( 150, 90, 5, 5, "white")
var score = 0;
var scoreLabel = makeText(score, 50, 20, 20, "sans-serif", "red")
var score2 = 0;
var scoreLabel2 = makeText(score, 250, 20, 20, "sans-serif", "blue")
// DEFINE A FUNCTION named moveBall here.
var leftright = 3
var updown = 3

// DEFINE YOUR FUNCTION HERE
function moveBall(){
  var y = getY(ball) 
  var x = getX(ball)
 
    
  if(leftright > 0 && x > 295){
    leftright = -3
     ball.setAttribute("display", "none");  
    ball = makeRect( 150, 90, 5, 5, "white")
    score = score + 1
    leftright = -3
 scoreLabel.innerHTML = score        
  } 
    
    if (leftright < 0 && x < 0){
        leftright = 3
    ball.setAttribute("display", "none");  
        ball = makeRect( 150, 90, 5, 5, "white")
    score2 = score2 + 1
 scoreLabel2.innerHTML = score2
 leftright = 3
    }
    if (updown > 0 && y > 172){
    updown = -3
  } 
    if (updown < 0 && y < 4){
    updown = 3
  }
  if(collides(ball, paddle1)){
   leftright = 3;   
     
 
  } 
    if(collides(ball, point1)){

     stopAnimationFrame(moveBall)
 
  } 
 if(collides(ball, paddle2)){
 
     leftright = -3;   
         
  }
    
    
  move(ball,leftright,updown)
  requestAnimationFrame(moveBall)
}
  
addEventListener('keydown', ight)
addEventListener('keydown', ight2)
addEventListener('keydown', begin)

function ight(event){
  var W = getX(paddle1)
  var E = getY(paddle1)


    if(event.key == "w" && E > 10){
    move(paddle1,0,-15)
    
}
 if(event.key == "s" && E < 120){
    move(paddle1,0,15)
 }
}
  
function ight2(event){
  
  var E = getY(paddle2)
    if(event.key == "o" && E > 10){
    move(paddle2,0,-15)
    
}
 if(event.key == "l" && E < 120){
    move(paddle2,0,15)    
}
}
function begin(){
moveBall()
removeEventListener('keydown', begin)  
addEventListener('keydown', ight)
addEventListener('keydown', ight2)
}
// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }  
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }  
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  } 
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  } 
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) && 
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}
