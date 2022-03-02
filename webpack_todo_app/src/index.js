// import ("./index.css")
// import React from "react";   
// import ReactDOM from "react-dom";


import "./index.css";
import image from "./assets/range_rover.jpg";
const button = document.querySelector("#submit");
let tasks = JSON.parse(localStorage.getItem("tasks"))||[];

// Creating a task.
button.addEventListener("click",()=>{
    let obj = {
        "name":document.querySelector("#name").value,
        "notes":document.querySelector("#notes").value,
        "priority":document.querySelector("#priority").value,
    }
    tasks.push(obj);
    localStorage.setItem("tasks",JSON.stringify(tasks))
    window.alert("Task Created")
})

let img = document.createElement("img");
img.src = image
document.querySelector(".header").append(img)

// Displaying all tasks
let display_div = document.querySelector(".display");

function display(tasks,display_div){
    display_div.innerHTML = "";
    tasks.forEach((element,index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        p1.textContent = element['name'];
    
        let p2 = document.createElement("p");
        p2.textContent = element['notes'];
        
        let p3 = document.createElement("p");
        p3.textContent = element['priority'];
    
        let button = document.createElement("button");
        button.textContent = 'Delete'
        button.addEventListener("click",()=>{
            tasks.splice(index,1);

            display(tasks,display_div)
        })
        localStorage.setItem("tasks",JSON.stringify(tasks))
        div.append(p1,p2,p3,button)
        display_div.append(div);
    });
}
display(tasks,display_div);

// takes tow arguements what to render and where to render.

// ReactDOM.render(
//     React.createElement("h1",{className:"redtext"},[
//         React.createElement("i",null,"Hello react!")
//     ]),
//     document.querySelector("#root")
// )