// const element = document.getElementById("element");


// const clear = document.querySelector(".clear")


// // const getDate= document.getElementById("date")

// const input = document.getElementById("input")



// const list = document.getElementById("list")

// let LIST= [];
// let id= 0


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

// const CHECK= document.querySelector(".thin-circle-completed")
// const UNCHECK= document.querySelector(".trash-deleted")
// const lineThrough= "lineThrough"

// function addToDo(toDo, ) {

//     if(trash){
//         return toDo;
//     }

//     const DONE = done ? CHECK : UNCHECK;
//     const line = done ? lineThrough: "";

// const text= `<li class = "item">
//                 <i class = "thin-circle-completed ${DONE}" job= "complete" id="${id}" ></i>
//                 <p class="text ${line}" >${toDo}</p>
//                 <i class = "trash-deleted" job ="delete id="${id}" ></i>
//                 <i class= "priority" ></i> 
//             </li>`
//             const position = "beforeEnd";
            
//     list.insertAdjacentHTML(position, text)
    
//     return addToDo()
// }




// // let LIST= [];
// // let id= 0
// // // const input = document.getElementById("input")
// // document.addEventListener("keyup",function(event){ 

// //     if(event.keyCode == 13){
// //         const toDo = input.value;
// //     if(toDo){
// //         addToDo(toDo,id,false,false)
// //         LIST.push(
// //             {
// //                 name: toDo,
// //                 id: id,
// //                 done: false,
// //                 trash:false,
// //             })
// //         } input.value = ""
// //                 id++
// //     }
// //     })


// list.addEventListener("click", function(event){
//     let element = event.target;
//     const elementJOB = event.target.attributes.job.value;    
//     if(elementJOB == "complete"){
//         completeTodo(element)
//     }else if(elementJOB == "delete"){
//         removeTodo(element)
//     }
// })




// //MOVED TO MAIN.JS  but did not work //
// function completeTodo(element){
//     element.classList.toggle(CHECK);
//     element.classList.toggle(UNCHECK);
//     element.parentNode.querySelector(".text").classList.toggle(lineThrough)
//     LIST[element.id].done = LIST[element.id].done ? false : true; 
// }


// function removeTodo(element){
//     element.parentNode.parentNode.removeChild(element.parentNode);
//     LIST[element.id].trash = true;
// }

let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let a;
for (a = 0; a < close.length; a++) {
  close[a].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}