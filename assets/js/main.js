// function textFunction() {
//     var str = document.getElementById("h1");
//     var res = str.replace("Microsoft", "W3Schools");
//     document.getElementById("demo").innerHTML = res;
//   }
function myFunction() {
  var header_image = document.getElementById("header-img");
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");
  var image3 = document.getElementById("img3");
  var image4 = document.getElementById("img4");
  var image5 = document.getElementById("img5");
  var image6 = document.getElementById("img6");

  var chkbox1 = document.getElementById("chkbox1");
  var chkbox2 = document.getElementById("chkbox2");
  var chkbox3 = document.getElementById("chkbox3");
  var chkbox4 = document.getElementById("chkbox4");
  var chkbox5 = document.getElementById("chkbox5");
  var chkbox6 = document.getElementById("chkbox6");

  var h1text = document.getElementById("h1");

  if (
    chkbox1.checked == true ||
    chkbox2.checked == true ||
    chkbox3.checked == true ||
    chkbox4.checked == true ||
    chkbox5.checked == true ||
    chkbox6.checked == true
  ) {
    if (chkbox1.checked == true) {
      image1.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-1 1s 1";

      image1.style.transform = "scale(1)";
      image2.style.transform = "scale(0)";
      image3.style.transform = "scale(0)";
      image4.style.transform = "scale(0)";
      image5.style.transform = "scale(0)";
      image6.style.transform = "scale(0)";

      h1text.innerHTML = "Frappuccino!";
      h1text.style.transition = "all 0.5s ease in";
      h1text.style.transformOrigin = "left";
      h1text.style.animation = "text-anim1 0.5s 1";
    } else if (chkbox2.checked == true) {
      image2.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-2 1s 1";

      image1.style.transform = "scale(0)";
      image2.style.transform = "scale(1)";
      image3.style.transform = "scale(0)";
      image4.style.transform = "scale(0)";
      image5.style.transform = "scale(0)";
      image6.style.transform = "scale(0)";

      h1text.innerHTML = "SummerFraps!";
      h1text.style.transition = "all 0.5s";
      h1text.style.animation = "text-anim2 0.5s 1";
    } else if (chkbox3.checked == true) {
      image3.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-3 1s 1";

      image1.style.transform = "scale(0)";
      image2.style.transform = "scale(0)";
      image3.style.transform = "scale(1)";
      image4.style.transform = "scale(0)";
      image5.style.transform = "scale(0)";
      image6.style.transform = "scale(0)";

      h1text.innerHTML = "StrawberryFraps!";
      h1text.style.transition = "all 0.5s";
      h1text.style.animation = "text-anim3 0.5s 1";
    }else if (chkbox4.checked == true) {
      image4.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-4 1s 1";

      image1.style.transform = "scale(0)";
      image2.style.transform = "scale(0)";
      image3.style.transform = "scale(0)";
      image4.style.transform = "scale(1)";
      image5.style.transform = "scale(0)";
      image6.style.transform = "scale(0)";

      h1text.innerHTML = "Summer Charemel!";
      h1text.style.transition = "all 0.5s";
      h1text.style.animation = "text-anim4 0.5s 1";
    }else if (chkbox5.checked == true) {
      image5.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-5 1s 1";

      image1.style.transform = "scale(0)";
      image2.style.transform = "scale(0)";
      image3.style.transform = "scale(0)";
      image4.style.transform = "scale(0)";
      image5.style.transform = "scale(1)";
      image6.style.transform = "scale(0)";

      h1text.innerHTML = "GreenDragon!";
      h1text.style.transition = "all 0.5s";
      h1text.style.animation = "text-anim5 0.5s 1";
    }else if (chkbox6.checked == true) {
      image6.style.transition = "all 1s";
      header_image.style.animation = "h-image-anim-6 1s 1";

      image1.style.transform = "scale(0)";
      image2.style.transform = "scale(0)";
      image3.style.transform = "scale(0)";
      image4.style.transform = "scale(0)";
      image5.style.transform = "scale(0)";
      image6.style.transform = "scale(1)";

      h1text.innerHTML = "SummerFraps!";
      h1text.style.transition = "all 0.5s";
      h1text.style.animation = "text-anim6 0.5s 1";
    } else {
      header_image.style.animation = "none";
      image1.style.display = "block";
      image2.style.display = "none";
      image3.style.display = "none";
      image4.style.display = "none";
      image5.style.display = "none";
      image6.style.display = "none";
    }
  }
}
