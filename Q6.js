const Button=document.querySelector('.button');
const Counterdiv=document.querySelector('.counter');
let counter=-1
Button.addEventListener('click',()=>{


buttonClick()


})
function buttonClick(){
  
  counter=counter+1;
    const Ptag=document.createElement('p');
Ptag.innerHTML=counter

Counterdiv.appendChild(Ptag)
}