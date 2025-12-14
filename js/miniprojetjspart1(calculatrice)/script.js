
  const result = document.getElementById ( "result" ) ; 
 const buttons=document.querySelectorAll(".btn-calc");
 const clearbtn=document.getElementById("clear");
 const equalbtn=document.getElementById("equal");
 let resultat="";
 //append numbers/operators
buttons.forEach(btn=>{
    btn.onclick=()=>{
    resultat+=btn.dataset.value; 
    result.value=resultat;   
    }
})
//clear button
clearbtn.addEventListener("click",()=>{
    resultat="";
    result.value=resultat;
})
//clear button second method
/* clearbtn.onclick=()=>{
    resultat="";
    result.value=resultat; 
}; */
/* <------------------------ > */
//calculate
equalbtn.onclick=()=>{
    let last=eval(resultat);
     result.value=last; 
resultat=last;
    };
