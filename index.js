let arrayone=[];
function addNameOne(){
   let value= document.querySelector(".input1-js").value;
    arrayone.push(String(value));
    console.log(arrayone);
    document.querySelector(".input1-js").value='';
}
let arraytwo = [];
function addNameTwo(){
    
    let value = document.querySelector(".input2-js").value;
    arraytwo.push(String(value)); 
    document.querySelector(".input2-js").value='';
    afficherArray2() 
}
function afficherArray2(){
    let ArrayValue =""; 
    let DivValue ="";
    for (let i = 0; i < arraytwo.length; i++){
    ArrayValue=arraytwo[i];
    DivValue +=`<p>${ArrayValue}<p> `; 
    }
    document.querySelector(".div1Style").innerHTML =DivValue;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arraytree=[]; 

function addd(){
let name = document.querySelector(".input3-js").value; 
let date = document.querySelector(".input4-js").value; 
arraytree.push({
    name,
    date
  });

document.querySelector(".input3-js").value="";
document.querySelector(".input4-js").value=""; 
afficherArray3();

}
function afficherArray3(){
    let name =""; 
    let date =""; 
    let Div1Value ="";

    for (let i = 0; i < arraytree.length; i++){
    name=arraytree[i].name;
    date=arraytree[i].date;

    Div1Value +=`<div class ="todo-row" >
    <div>${name}</div>
    <div>${date}</div>    
    <button class ="delete"onclick="DeleteIndex(${i})">Delete</button><p>
    </div> `; 
    
};
    document.querySelector(".div2style").innerHTML =Div1Value;
};

function DeleteIndex(j){
    arraytree.splice (j,1); 
    afficherArray3();
}
