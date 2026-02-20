function addtodo(){
    console.log("hi there ")
   const element= document.getElementById("todoInput")
   const todo=element.value;
   console.log(todo)

   const todoDiv=document.createElement("div");
   const todoSapn=document.createElement("span");
   todoSapn.innerHTML=todo;
   todoDiv.appendChild(todoSapn)
   
   const parentDiv=document.getElementById("todos");
    parentDiv.appendChild(newDiv);
}