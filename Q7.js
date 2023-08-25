let TextField=document.querySelector('.textarea');
let DisplayField=document.querySelector('.displayText');
TextField.addEventListener("click",()=>{
    const TextValue=TextField.value
    DisplayField.innerHTML=TextValue;
}
)