let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logobi.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/logobi.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Bienvenue sur le site officiel du club de basket du Soleil, " + myName;
}

if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Bienvenue sur le site officiel du club de basket du Soleil, " + storedName;
}

myButton.addEventListener("click", function () {
  setUserName();
});
