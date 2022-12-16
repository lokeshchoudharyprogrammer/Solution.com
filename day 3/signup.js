let data1=JSON.parse(localStorage.getItem("signupdata"))||[];

const singup_btn=document.querySelector("#registerform form");
singup_btn.addEventListener("submit", resisteruser);

function  resisteruser(event){
    event.preventDefault();
    let fullname=document.getElementById("fullName").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   let account_name= document.getElementById("username").value;
let obj={
    fullname:fullname,
    email:email,
    password:password,
    account_name:account_name
}
for(let i=0;i<obj.length;i++){
    if(data1[i]==obj[i]){
        alert(" account is already created")
    }
    else{
alert("create account successfully")
window.location.href="login.html"
    }
}


localStorage.setItem("signupdata",JSON.stringify(obj))

}
resisteruser();
