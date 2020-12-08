import {get } from "./req.js";
get('https://api.github.com/users')
    .then(
        e => {
            makeLI(e)
        }).catch(console.log);
(async() => {
    try {
        let a = await get('https://api.github.com/users')
        makeLI(a)
    } catch (e) {
        console.log(e);
    }

})()

function makeLI(e) {
    let id = Math.floor(Math.random() * e.length);
    let divmain = document.querySelector('.div1')
    let ul = document.createElement("ul")
    for (let i in e[id]) {
        let li = document.createElement("li")
        li.innerHTML = `${i}: ${e[id][i]}`
        ul.appendChild(li)
    }
    divmain.appendChild(ul)
}