const element = document.getElementById("element");


const clear = document.querySelector(".clear")


// const getDate= document.getElementById("date")

const input = document.getElementById("input")



const list = document.getElementById("list")

let LIST= [];
let id= 0


document.addEventListener("keyup",function(event){ 

    if(event.keyCode == 13){
        const toDo = input.value;
    if(toDo){
        addToDo(toDo,id,false,false)
        LIST.push(
            {
                name: toDo,
                id: id,
                done: false,
                trash:false,
            })
        } input.value = ""
                id++
    }
    })

const CHECK= document.querySelector(".thin-circle-completed")
const UNCHECK= document.querySelector(".trash-deleted")
const lineThrough= "lineThrough"

function addToDo(toDo, ) {

    if(trash){
        return toDo;
    }

    const DONE = done ? CHECK : UNCHECK;
    const line = done ? lineThrough: "";

const text= `<li class = "item">
                <i class = "thin-circle-completed ${DONE}" job= "complete" id="${id}" ></i>
                <p class="text ${line}" >${toDo}</p>
                <i class = "trash-deleted" job ="delete id="${id}" ></i>
                <i class= "priority" ></i> 
            </li>`
            const position = "beforeEnd";
            
    list.insertAdjacentHTML(position, text)
    
    return addToDo()
}




// let LIST= [];
// let id= 0
// // const input = document.getElementById("input")
// document.addEventListener("keyup",function(event){ 

//     if(event.keyCode == 13){
//         const toDo = input.value;
//     if(toDo){
//         addToDo(toDo,id,false,false)
//         LIST.push(
//             {
//                 name: toDo,
//                 id: id,
//                 done: false,
//                 trash:false,
//             })
//         } input.value = ""
//                 id++
//     }
//     })


list.addEventListener("click", function(event){
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;    
    if(elementJOB == "complete"){
        completeTodo(element)
    }else if(elementJOB == "delete"){
        removeTodo(element)
    }
})




//MOVED TO MAIN.JS  but did not work //
function completeTodo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ? false : true; 
}


function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}