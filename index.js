// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft(){
    const LeftNumbers= dodger.style.left.replace("px","")
    const left=parseInt(LeftNumbers,10)

  if (left>0){
        dodger.style.left=`${left-1}px`
        console.log(dodger.style.left=`${left-1}px`)
    }
    
}

function moveDodgerRight(){
    const LeftNumbers= dodger.style.left.replace("px","")
    const left=parseInt(LeftNumbers,10)
    if(left<400){
        dodger.style.left=`${left+1}px`
    }

}

document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){
      moveDodgerLeft()
    }
})

document.addEventListener("keydown",function(e){
    if(e.keyCode===39){
        moveDodgerRight()
    }
})