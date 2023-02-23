var ratings = document.getElementById("ratings");

var cir = ratings.getElementsByClassName("circle");

    for (var i = 0; i < cir.length; i++) {
        cir[i].addEventListener("click", function() {

          if(ratings.getElementsByClassName("circle selected").length != 0){
            var current = ratings.getElementsByClassName("circle selected");
            current[0].className = current[0].className.replace(" selected", "");
          }
         
          this.className += " selected";

        })
    
    }