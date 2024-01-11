let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let h = document.querySelector("h2");
let message = document.querySelector(".message");

option1.addEventListener("click",()=>{
    let date = prompt("please fix the date and discuss about our relationship");
    h.classList.add("msg");
    h.innerText = `Congratulation our date is ${date}`;
});
