const h4 = document.createElement("h4");
h4.textContent = "emilyfernschild@gmail.com";
document.querySelector("body").appendChild(h4);

function myFunc() {
const bio = document.querySelector("#myBio");
  if (bio.classList.contains("hide")) {
    bio.classList.toggle("hide");
  }
  else {
    bio.classList.remove("hide")
  }
};

