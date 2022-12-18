const login_btn = document.querySelector("#login form");
login_btn.addEventListener("submit", loginuser);
function loginuser(event) {
  event.preventDefault();
  
  let data = JSON.parse(localStorage.getItem("signupdata")) || [];

  let email = document.getElementById("useremailid").value;
  let password = document.getElementById("userpassword").value;
  let obj = {
    email: email,
    password: password,
  };
  let flag = false;
  let name;
  if (obj.email != "" && obj.password) {
    data.forEach((e) => {
      if (e.email == obj.email) {
        flag = true;
        name = e.fullname;
      }
    });
    if (flag == true) {
      alert(` Welcome ${name} You Successfully LogIn`);
      window.location.href = "./workspace.html";

    } else {
      alert("You are Not signup till Now");
      window.location.href = "./sign_up.html";
    }
  } else {
    alert("Please Fill data");
  }
}
