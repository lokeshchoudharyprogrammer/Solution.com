const login_btn=document.querySelector("#login form")
login_btn.addEventListener("submit",loginuser);
function loginuser(event){
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("signupdata"))||[];
    let email=document.getElementById("useremailid").value ;
    let password=document.getElementById("userpassword").value ;
let obj={
    email:email,
    password:password
}
if(data.email==obj.email && data.password==obj.password){

alert("login in successfully")
window.location.href=""
}
else {
   
     alert("wrong password")
}
}
loginuser()