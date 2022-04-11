const box = document.querySelectorAll('.box');
window.addEventListener('DOMContentLoaded', ch);
let arr = [];
function ch() {
    for (let b of box) {
        for (let i=0; i<3; i++) {
            arr.push(Math.floor(Math.random() * 255));
        }
        arr = arr.join(' ');
        b.style.backgroundColor = `rgb(${arr})`;
        arr = [];
    }
}