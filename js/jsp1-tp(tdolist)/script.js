const taskinput=document.getElementById('taskinput');
const addbtn=document.getElementById('addbtn');
const msg=document.getElementById('msg');
const taskslist=document.getElementById('taskslist');
const clearbtn=document.getElementById('clear');
//add btn 
addbtn.addEventListener("click",()=>{
 let task=taskinput.value;
 if(task=="") {
    msg.innerHTML="vous dever ecrire une tache";
    msg.style.display="block";
 }
 else{
    let li=document.createElement('li');
    li.textContent=task;
    taskslist.appendChild(li);
    taskinput.value="";

    //local storage
    /* for(let i=0;i<localStorage.length;i++){
        localStorage.setItem(i,task);
        let li=document.createElement('li');
        li.textContent=task;
taskslist.appendChild(li);
taskinput.value=""; */
    }
   
})
//clearbtn
clearbtn.addEventListener("click",()=>{
    taskslist.innerHTML="";
})

//delete par tache 
taskslist.addEventListener("click",(e)=>{
   taskslist.removeChild(e.target);
})