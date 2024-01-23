let loginTracker = 0;
let userName = "";
let password = "";
const openLogin = () =>{
  if(loginTracker == 0){
    loginContainer.style.display = "flex";
    loginContainer.style.zIndex = 1;
    loginTracker = 1;
    lightbox.style.display = "block";
  }
  else if (loginTracker == 1){
    loginContainer.style.display = "none";
    loginTracker = 0;
  }
  
}
const closeLogin = () => {
  lightbox.style.display = "none";
  loginContainer.style.display = "none";
}
const submitLogin = () => {
  
}

document.querySelector("#close-button").addEventListener("click",closeLogin);
document.querySelector("#submit-button").addEventListener("click", () => {
    ;
  });


const lightbox = document.querySelector("#lightbox")
const login = document.querySelector("#open-login");
const loginContainer = document.querySelector("#container-for-login");
login.addEventListener("click",openLogin);

