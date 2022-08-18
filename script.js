const h3 = document.createElement("h3");
h3.textContent = "Flatiron School Student";
document.querySelector("body").appendChild(h3);

function myFunc() {
const bio = document.querySelector("#myBio");
  if (bio.classList.contains("hide")) {
    bio.classList.toggle("hide");
  }
  else {
    bio.classList.remove("hide")
  }
};

