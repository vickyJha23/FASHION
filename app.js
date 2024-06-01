console.log("Har har mahdev");
const subsBtn = document.querySelector("#header > .header-detail > button");
const subscriber = document.querySelector("#subscriber");
console.log(subscriber);
subsBtn.addEventListener("click", () => {
    console.log("clicked");
      if(!subscriber.classList.contains("show-subscriber")){
             subscriber.classList.add("show-subscriber");     
      }  
      else{
          subscriber.classList.remove("show-subscriber");
      }
});
const closeBtn = document.querySelector(".times");
closeBtn.addEventListener("click", () => {
     subscriber.classList.remove("show-subscriber");
})