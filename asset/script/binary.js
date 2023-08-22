const conv = document.getElementById("conv")

const disp = document.getElementById("display")


let rem
let i = 1
let ans = " "

function binary(){
  let enter = document.getElementById("enter").value
while(enter != 0){
  rem = enter % 2
  enter = parseInt(enter/2)
  ans += rem
}
disp.textContent = ans.split("").reverse().join("")
// console.log(ans)
}
conv.addEventListener("click", binary)