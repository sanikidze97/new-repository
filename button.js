  
  
  
  
  
  
  
  var button=document.querySelector("i")
var box =document.querySelector(".conteiner")
  var flag= true



  
button.addEventListener('click', function(){
    
    if(flag)  {
    box.style.display="none"
         }
    else{
    box.style.display="block"
        }


    flag= !flag
})


  console.log(button)