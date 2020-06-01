const con = document.querySelectorAll('.con')
const btn = document.getElementsByTagName('button')
let i = 0

btn[0].addEventListener('click', prev)
btn[1].addEventListener('click', next)

function next () {
  if (i === 0) {
    console.log(i)
    i = 1
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[0].style = 'opacity:0;z-index:1'
    con[2].style = 'opacity:0;z-index:2'
  }
  else if (i === 1) {
    console.log(i)
    i = 2
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[0].style = 'opacity:0;z-index:1;left:-500px'
    con[1].style = 'opacity:0;z-index:2;left:0'
  }
  else if (i === 2) {
    console.log(i)
    i = 0
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[2].style = 'opacity:0;z-index:2;left:0'
    con[1].style = 'opacity:0;z-index:1;left:-500px'
  }
}
function prev () {
  if (i === 0) {
    i = 2
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[0].style = 'opacity:0;z-index:2;left:0'
    con[1].style = 'opacity:0;z-index:1;left:1000px'
  }
  else if (i === 1) {
    i = 0
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[2].style = 'opacity:0;z-index:1;left:1000px'
    con[1].style = 'opacity:0;z-index:2;left:0'
    i = 0
  }
  else if (i === 2) {
    i = 1
    con[i].style = 'left:0;z-index:3;opacity:1'
    con[2].style = 'opacity:0;z-index:2;left:0'
    con[0].style = 'opacity:0;z-index:1;left:1000px'
  }
}
