
var slideIndex = 1;

export const startSlide = () => {

    // event listener for clicking on any image to open lightbox modal
    Array.prototype.forEach.call(document.querySelectorAll(".imgThumb"), (img, i) => {
        img.onclick = e => {
          openModal();
          currentSlide(i+1)
          console.log(i)
        }
      })

  
      // event listener for clicking on thumbnails inside modal
      Array.prototype.forEach.call(document.querySelectorAll(".demo"), (img, i) => {
        img.onclick = e => {
          currentSlide(i+1)
        }
      })
  
      // event listener for clicking on close button (X)
      document.querySelector(".close").onclick = e => {
        closeModal();
      }

      // When the user clicks anywhere outside of the modal, close it
      var modal = document.getElementById('myModal');
      window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
      }
  
      // event listener for clicking on next button (>)
      document.querySelector(".next").onclick = e => {
        plusSlides(1);
        console.log("mouse click slide right")
      }
  
      // event listener for clicking on previous button (<)
      document.querySelector(".prev").onclick = e => {
        plusSlides(-1);
      }


    
    showSlides(slideIndex);



}

function openModal() {
    document.getElementById("myModal").style.display = "block";
    window.scrollTo(0, 0);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}



function plusSlides(n) {
  console.log("slideindex is" + slideIndex)
    showSlides(slideIndex += n);
    console.log("slideindex is" + slideIndex)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log("slideindex is" + slideIndex)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


// keyboard events to slide left and right and also close modal
document.addEventListener('keydown', (e) => {

  if (e.code === "ArrowRight") {
    plusSlides(1);
  }

  else if (e.code === "ArrowLeft") {
    plusSlides(-1);
  }

  else if (e.code === "Escape") {
    closeModal();
  }
});

    