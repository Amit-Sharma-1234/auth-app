const notify = document.querySelector("#notify");
function creatUser() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == " " || password == " ") {
    notify.innerText = "Please  provide eamil and password";
    notify.style.display = "block";
  } else {
  }
}

const signup_btn = document.querySelector("#signup_btn");
console.log(signup_btn);
signup_btn.addEventListener("click", creatUser);
console.log("Helo");
