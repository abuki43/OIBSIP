const title = document.querySelector(".title")
const notes = document.querySelector(".notes")
const discription = document.querySelector(".discrip")
const btn = document.querySelector(".btn")

const toDoLists =  JSON.parse(localStorage.getItem('todos')) || []

function renderTodo(){
    notes.innerHTML = ""
    if(toDoLists.length == 0){
        let noNote = `<h4>NO NOTE</h4>`
        notes.innerHTML= noNote 
    }else{
        toDoLists.forEach((toDo,index)=>{
            let note = `<div class="note">
                <h5>${toDo.title}</h5>
                <p>${toDo.discription}</p>
                <button id=${index} class="delete-btn">X</button> 
            </div>`
            const taskItem = document.createElement('li');
            taskItem.innerHTML = note;
            notes.appendChild(taskItem) 
        })
    }
    

    let deleteBtns = document.querySelectorAll(".delete-btn");
    for(i=0;i<deleteBtns.length;i++){
        deleteBtns[i].addEventListener("click",(e)=>{
            let index = e.target.id
            toDoLists.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(toDoLists));
            renderTodo();
        })
    }  
}


function addTodo(){
    let titleValue = title.value
    let discriptionValue = discription.value
    if(titleValue != "" && discriptionValue != ""){
        let toDo = {
            title: titleValue,
            discription: discriptionValue
        }
        toDoLists.push(toDo)
        localStorage.setItem('todos', JSON.stringify(toDoLists))
        renderTodo()
        title.value = ""
        discription.value = ""
    }else(
        alert("ENTER VALUE TO THE INPUTS")
    )
    
}
btn.addEventListener("click",()=>{
    addTodo()     
})

renderTodo()





    


