
// Menu bar

var redmi=document.querySelector(".slidenav")
var note=document.getElementById("charge")

var theicon=document.getElementById("menu")

theicon.addEventListener("click",function(){
    console.log("hello World")
    redmi.style.left=0
})

note.addEventListener("click",function(){
    console.log("hello")
    redmi.style.left="-50%"
})

var quit=document.getElementById("cancel")
var offer=document.querySelector(".offerbanner")
quit.addEventListener("click",function(){
    offer.remove()
})


