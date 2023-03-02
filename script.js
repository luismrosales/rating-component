var ratings = document.getElementById("ratings");
const button = document.querySelector("button");
const selectedOpt = document.querySelectorAll("#c1, #c2, #c3, #c4, #c5");
const finalRating = document.querySelector("span");
let idValue;

selectedOpt.forEach((num) => {
  num.addEventListener("click", (e) => {
    idValue = e.target.id;
    localStorage.setItem("class", idValue);
    console.log(idValue);
  });
});

if (button) {
  button.addEventListener("click", () => {
    if (idValue) {
      location = "./thank-you.html";
      localStorage.getItem("class");
    } else {
      window.alert("Please select a number");
    }
  });
}
if (ratings) {
  var cir = ratings.getElementsByClassName("circle");

  for (var i = 0; i < cir.length; i++) {
    cir[i].addEventListener("click", function () {
      if (ratings.getElementsByClassName("circle selected").length != 0) {
        var current = ratings.getElementsByClassName("circle selected");
        current[0].className = current[0].className.replace(" selected", "");
      }

      this.className += " selected";
    });
  }
}
if (finalRating) {
  span();
}
function span() {
  let x = localStorage.getItem("class").slice(-1);
  finalRating.innerText = `${x}`;
}
