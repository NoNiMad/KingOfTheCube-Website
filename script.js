const challenges = `Working with AR came with a number of interesting challenges. Correctly adjusting the virtual elements of the game to properly fit the physical elements of the game, and implementing correct position of networked characters in multiplayer are examples of some of the challenges we faced. More importantly, we didn’t want to use AR just as a gimmick, so we put effort into finding purposeful ways of using AR in our project. 
<br><br>
Guaranteeing smooth animations of our characters was another challenge we faced, we tried several tools but ended up using Adobe Mixamo to implement our animations. We also encountered some challenges related to the input scheme of our game, which users were having a hard time with. We have tried to make the controls simpler, and are working on introducing indicators that show users how to interact with the game. Finally we had to always be mindful that the game should run smoothly on mobile devices, this was particularly important when we were working on the more graphical components of the project. `

const lessons = `Some lessons came as pleasant surprises while working on, and presenting our project. For example, having a physical component to the project can be a huge attraction, even if it’s just a plain wooden box. When showing our project at fairs we have noticed that our cube really catches the eyes of people passing by. We also realized how valuable user feedback really is, it’s easy to get bogged down with your ideas when only communicating internally in the group, and getting input from the users really helped us see our project in more objective light.  
<br><br>
Other lessons we were forced to learn the hard way, for example we could have done a better job at identifying hardware limitations before starting the project. Naturally we expected hardware limitations, but these limitations were somewhat stricter than we had expected. The same can be said for choosing frameworks to work with, we tried using some frameworks that ended up having critical flaws, and we could have saved some time by investigating these frameworks better beforehand. 
<br><br>
Finally we realized how important it is to stay organized, especially when working together in a group. Regularly we would sit down and try to identify what were our most urgent tasks at the moment, which enabled us to work in a parallel manner and increased our productivity as a group. However, this also had some negative side effects, mainly in the form of code maintenance and integration of features. We could have been better at proactively defining various interfaces to minimize the negative impact of people working in parallel. `

new Vue({
  el: '#app',
  data: {
    users: [{
      name: "Sonia Camacho",
      email: "soniach@kth.se",
      pic: "sonia.jpg"
    }, {
      name: "Julien Rouault",
      email: "rouault@kth.se",
      pic: "user.png"
    }, {
      name: "Pooria Ghavamian",
      email: "pooriag@kth.se",
      pic: "pooria.jpg"
    }, {
      name: "Bjarni Gudmundsson",
      email: "brgud@kth.se",
      pic: "bjarni.jpg"
    }, {
      name: "Rafa Lucena",
      email: "rafaella@kth.se",
      pic: "rafa.jpg"
    }, {
      name: "Henrique Furtado",
      email: "hfm@kth.se",
      pic: "henrique.jpg"
    }],
    challenges: challenges,
    lessons: lessons
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