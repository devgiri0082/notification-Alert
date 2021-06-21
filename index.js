let message = document.querySelector(".message");
let alert = document.querySelector(".alert");
let box = document.querySelector(".box");
let timeOut;
message.addEventListener("click", giveMessage);
alert.addEventListener("click", giveAlert);
box.addEventListener("mouseenter", (e) => clearTimeout(timeOut));
box.addEventListener("mouseleave", settingTimeOut);
async function giveMessage(e) {
  box.style.background = "black";
  box.innerText = "Just a usual message";
  box.style.top = "0%";
  buttonAction(true);
  settingTimeOut();
}

function giveAlert(e) {
  box.style.background = "red";
  box.innerText = "there is a error";
  box.style.top = "0%";
  buttonAction(true);
  settingTimeOut();
}

function settingTimeOut() {
  timeOut = setTimeout(() => {
    box.style.top = "-20%";
    buttonAction(false);
  }, 2000);
}
function buttonAction(action) {
  message.disabled = action;
  alert.disabled = action;
}
