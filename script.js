let loginTracker = 0;

const openLogin = () =>{
  if(loginTracker == 0){
    loginContainer.style.display = "flex";
    loginContainer.style.zIndex = 1;
    loginTracker = 1;
    document.querySelector("#lightbox").style.display = "block";
  }
  else if (loginTracker == 1){
    loginContainer.style.display = "none";
    loginTracker = 0;
  }
  

  
}



document.querySelector("#submit-button").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });



const login = document.querySelector("#open-login");
const loginContainer = document.querySelector("#container-for-login");
login.addEventListener("click",openLogin);

