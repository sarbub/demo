

const first_name = document.getElementById("first_name");
const second_name = document.getElementById("second_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
//add event listener on form container
const button = document.getElementsByClassName("form-contact")[0];


button.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("this is me");
})
