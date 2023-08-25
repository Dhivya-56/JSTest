let Button=document.querySelector('.Button');
Button.addEventListener('click',()=>{
    if (Button.innerHTML === "Click Me") {
        Button.innerHTML = "Clicked!";
      } else {
        Button.innerHTML = "Click Me";
      }
    
})