const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/corgi1.jpg") {
    myImage.setAttribute("src", "images/corgi2.webp");
  } else {
    myImage.setAttribute("src", "images/corgi1.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
