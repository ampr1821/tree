var canvas= document.getElementById("myCanvas");
var btns = [document.getElementById("draw"), document.getElementById("text"), document.getElementById("line1"), document.getElementById("line2")];
function checkState(x) {
  for(let i = 0; i < btns.length; i++) {
    if(i === x)
      btns[i].classList.add('innerbox');
    else
      btns[i].classList.remove('innerbox');
  }
}

var state = 0;
checkState(0);
// 0 is draw circle
// 1 is type text
// 2 is draw line

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ()=>{state = i; checkState(i);});
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
ctx.fillStyle="cyan";
ctx.font = "22px Arial";

// ctx.arc(200,150,100,0,360);
// ctx.arc(400,150,50,0,360);

function printMousePos(event) {
  // console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
  // ctx.arc(event.clientX, event.clientY, 20, 0, 360);
  // ctx.stroke();

  ctx.fillStyle = "cyan";
  switch(state) {
    case 0:
      ctx.beginPath(); //starts a new line
      // ctx.fillRect(event.clientX - 25, event.clientY - 50, 50, 50);
      ctx.arc(event.clientX, event.clientY - 25, 25, 0, 2 * Math.PI); ctx.stroke();
      break;
    case 1:
      ctx.fillStyle = "black";
      ctx.fillText(document.getElementById("text_value").value, event.clientX - 5, event.clientY - 12);
      break;
    case 2:
      ctx.beginPath();
      ctx.moveTo(event.clientX, event.clientY - 20); state = 3; break;
    case 3:
      ctx.lineTo(event.clientX, event.clientY - 20); ctx.stroke(); state = 2; break;
  }
}

canvas.addEventListener("click", printMousePos);