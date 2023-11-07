const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>120);
});

let menu=document.querySelector("#menu-icon");
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll=() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}
let btn2 = document.getElementsByClassName("btn2");
let submit = document.getElementsByClassName("send-btn");
let bar = document.getElementById("bar");

btn2.addEventListener("click", function () {
  alert("Downloaded Successfully");
});
submit.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email.value == "" && password.value == "") {
    alert("Fill  the Details");
  } else {
    alert("Logged In");
  }
});
let ul=document.querySelector("ul");
bar.addEventListener("click",function(){
    ul.classList.toggle("showData")

    if(ul.className == "showData"){
        bar.className="fa-solid fa-xmark"
    }else{
        bar.className="fa-solid fa-bars"


    }
})