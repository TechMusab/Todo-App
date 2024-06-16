let arr=[];
let arrdate=[];
display();
function addToDO() {

   let taskValue = document.querySelector('.todoinput').value;
   let dateValue = document.querySelector('.date').value;
   if(taskValue=='' || dateValue==''){
    alert("Please Enter The Required Fields");
    return;
   }
   console.log(taskValue);
   arr=JSON.parse(localStorage.getItem('arr'));
   arrdate=JSON.parse(localStorage.getItem('arrdate'));
   arr.push(taskValue);
   arrdate.push(dateValue);
   localStorage.setItem('arr', JSON.stringify(arr));
   localStorage.setItem('arrdate',JSON.stringify(arrdate));
   display();
}

function display(){
    let divelement=document.querySelector('.div1');
    let newhtml=' ';
    arrlocal=JSON.parse(localStorage.getItem('arr'));
    arrdatelocal=JSON.parse(localStorage.getItem('arrdate'));
       for(let i=0;i<arrlocal.length;i++){
    newhtml+=`
    <span class="task">${arrlocal[i]}</span>
    <span class="datepara">${arrdatelocal[i]}</span>
    <button class="deletebtn" onclick=" 
    arr.splice(${i},1);
    arrdate.splice(${i},1);
    display();
    ">Delete</button>
    `;
    document.querySelector('.todoinput').value='';
    document.querySelector('.date').value='';
       }
       divelement.innerHTML=newhtml;
    }

