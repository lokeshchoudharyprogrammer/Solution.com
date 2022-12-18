const singup_btn = document.querySelector("#registerform form");
singup_btn.addEventListener("submit", resisteruser);
let data1 = JSON.parse(localStorage.getItem("signupdata")) || [];
function resisteruser(event) {
  event.preventDefault();
  let fullname = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let account_name = document.getElementById("username").value;

  let obj = {
    fullname: fullname,
    email: email,
    password: password,
    acName: account_name,
  };
  let flag = true;
  if (
    obj.fullname != "" &&
    obj.email != "" &&
    obj.password != "" &&
    obj.acName
  ) {
    data1.forEach((e) => {
      if (obj.email == e.email) {
        flag = false;
      }
    });

    if (flag == false) {
      alert("This User is already Exist , Please Login");
    } else {
      data1.push(obj);
      localStorage.setItem("signupdata", JSON.stringify(data1));
      window.location.href = "./login.html";
    }
  } else {
    alert("Please Fill Complete Data");
  }
}
