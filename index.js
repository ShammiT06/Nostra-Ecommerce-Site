
// Remove Banner
var quit=document.getElementById("cancel")
var offer=document.querySelector(".offerbanner")
quit.addEventListener("click",function(){
    offer.remove()
})




// Liked Message
var likebuttons=document.querySelectorAll(".heart")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="/images/Icons/red.png"
            alert("It has been added in Your Collections")
        }
        else{
            e.target.src="/images/Icons/blackheart.png"
            alert("It has been removed from Your Collections")
        }
    })
})

document.getElementById("newArrivalLink2").addEventListener("click",function(evebt){
    event.preventDefault()
    document.getElementById("new-arrivals").scrollIntoView({
        behavior:"smooth"
    })
})


document.getElementById("most-wanted2").addEventListener("click",function(){
    event.preventDefault()
    document.getElementById("most").scrollIntoView({
        behavior:"smooth"
    })
})






// New Arivals

document.getElementById("newArrivalLink").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById("new-arrivals").scrollIntoView({
        behavior: "smooth"
    });
});
//Most Wanted

document.getElementById("most-wanted").addEventListener("click",function(){
    event.preventDefault();
    document.getElementById("most").scrollIntoView({
        behavior:"smooth"
    })
})

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


var pop=document.querySelector(".popup")
var amd=document.querySelector(".amd")
var slide=document.querySelector(".slider-content")
var slidebtn=document.getElementById("slider-button")
var cancelicon=document.querySelector(".wrongpop")

slidebtn.addEventListener("click",function(){
    pop.style.display="block"
    amd.style.display="block"
    
})


cancelicon.addEventListener("click",function(){
    pop.style.display="none"
    amd.style.display="none"
})