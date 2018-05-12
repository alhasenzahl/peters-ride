var slideIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {
		slideIndex = 1;
	} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

carousel();