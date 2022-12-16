

const singup_btn=document.querySelector("#registerform form");
singup_btn.addEventListener("submit", resisteruser);
let data1=JSON.parse(localStorage.getItem("signupdata"));
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
    if(data1.fullname==obj.fullname&&data1.email==obj.email &&data1.password==obj.password&&data1.account_name==obj.account_name){
        alert("User already existed");
    }
   else{
        alert("create account successfully")
  
   }
   window.location.href="login.html"
   localStorage.setItem("signupdata",JSON.stringify(obj))


}
resisteruser();
