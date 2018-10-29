new Vue({
  el: '#app',
  data: {
    users: [{
      name: "Sonia Camacho",
      email: "soniach@kth.se",
      pic: "user.png"
    }, {
      name: "Julien Rouault",
      email: "rouault@kth.se",
      pic: "user.png"
    }, {
      name: "Pooria Ghavamian",
      email: "pooriag@kth.se",
      pic: "user.png"
    }, {
      name: "Bjarni Gudmundsson",
      email: "brgud@kth.se",
      pic: "user.png"
    }, {
      name: "Rafa Lucena",
      email: "rafaella@kth.se",
      pic: "user.png"
    }, {
      name: "Henrique Furtado",
      email: "hfm@kth.se",
      pic: "user.png"
    }]
  }
})

/////////////////////////////////////////////////////////////
// GALLERY
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function showImg(thisImg) {
    modal.style.display = "block";
    modalImg.src = thisImg.src;
    captionText.innerHTML = thisImg.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

////////////////////////////////////////////////////////////////
// FOOTER
// Add a back to top animation to the button in the footer
$(document).ready(function () {

    // fade in #back-top
    $(function () {
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});