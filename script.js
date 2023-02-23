var ratings = document.getElementById("ratings");

var cir = ratings.getElementsByClassName("circle");



    for (var i = 0; i < cir.length; i++) {
        cir[i].addEventListener("click", function() {
          this.className.replace(" selected", "");
          this.className += " selected";
        })
    
    }