console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (karela){
  karela.addEventListener("click",function(e){
     if(e.target.id=="grey"){
      body.style.background="grey";
     }
     if(e.target.id=="white"){
      body.style.background="black"
     }
     if(e.target.id=="blue"){
      body.style.background="blue";
     }
     if(e.target.id=="yellow"){
      body.style.background="yellow";
     }
  });
  
});


