let next = document.querySelector(".next")
let container1 = document.querySelector(".shope-container")
let container2 = document.querySelector(".shope-container2")
let rizwan = document.querySelector(".rizwan")
next.addEventListener("click",()=>{
   rizwan.classList.add("invisible")
   container1.classList.add("invisible")
   container1.classList.remove(".shope-container")
   console.log(container1)
   container1.AllElementChild.remove();
})
