const colors = ["#6495ed", "#7fffd4","#ffa07a","#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) =>{
    item.style.cssText = `background-color: ${colors[i++]}`
})

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.
        toggle("change")
    }
})