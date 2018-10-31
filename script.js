const challenges = `Working with AR came with a number of interesting challenges. Correctly adjusting the virtual elements of the game to properly fit the physical elements of the game, and implementing correct position of networked characters in multiplayer are examples of some of the challenges we faced. More importantly, we didn’t want to use AR just as a gimmick, so we put effort into finding purposeful ways of using AR in our project. 
<br><br>
Guaranteeing smooth animations of our characters was another challenge we faced, we tried several tools but ended up using Adobe Mixamo to implement our animations. We also encountered some challenges related to the input scheme of our game, which users were having a hard time with. We have tried to make the controls simpler, and are working on introducing indicators that show users how to interact with the game. Finally we had to always be mindful that the game should run smoothly on mobile devices, this was particularly important when we were working on the more graphical components of the project. `

const lessons = `Some lessons came as pleasant surprises while working on, and presenting our project. For example, having a physical component to the project can be a huge attraction, even if it’s just a plain wooden box. When showing our project at fairs we have noticed that our cube really catches the eyes of people passing by. We also realized how valuable user feedback really is, it’s easy to get bogged down with your ideas when only communicating internally in the group, and getting input from the users really helped us see our project in more objective light.  
<br><br>
Other lessons we were forced to learn the hard way, for example we could have done a better job at identifying hardware limitations before starting the project. Naturally we expected hardware limitations, but these limitations were somewhat stricter than we had expected. The same can be said for choosing frameworks to work with, we tried using some frameworks that ended up having critical flaws, and we could have saved some time by investigating these frameworks better beforehand. 
<br><br>
Finally we realized how important it is to stay organized, especially when working together in a group. Regularly we would sit down and try to identify what were our most urgent tasks at the moment, which enabled us to work in a parallel manner and increased our productivity as a group. However, this also had some negative side effects, mainly in the form of code maintenance and integration of features. We could have been better at proactively defining various interfaces to minimize the negative impact of people working in parallel. `

const relatedWork = `We were inspired by some of the classic 2D platforming games, namely Donkey Kong. However we wanted to add a layer of gameplay, via AR, on top of the 2D platformer game. For this we got a lot of inspiration from some of the previous projects from the AGI course, for example from <a href="http://tabletopheroesar.com/">Tabletop Heroes</a> (a.k.a. <a href="http://brarwl.com/">BraARwl</a>) and <a href="https://app.weld.io/knyttet/knyttet">Knyttet</a>.`

const technologies = `We chose to deploy this game in AR, as it provides us with novel ways to interact with a familiar video game genre. By using occlusion in AR, we encourage the players to use the environment to their advantage. We use ARCore, since it provides real-time position of the device, light estimation and the ability to anchor objects. 
<br><br>
Early on, we decided to have a consistent voxelized aesthetics for the game. It is a style that has become popular once more due to games like Minecraft and the emergence of other indie games.`

new Vue({
  el: '#app',
  data: {
    users: [{
      name: "SONIA CAMACHO",
      email: "soniach@kth.se",
      pic: "sonia.jpg",
      contributions:["Animation and sound","AI King for single-player","Website"]
    }, {
      name: "JULIEN ROUAULT",
      email: "rouault@kth.se",
      pic: "julien.jpg",
      contributions:["Augmented reality","Mobile controls","Website"]
    }, {
      name: "POORIA GHAVAMIAN",
      email: "pooriag@kth.se",
      pic: "pooria.jpg",
      contributions:["Advanced graphics", "Animation", "Modelling"]
    }, {
      name: "BJARNI GUDMUNDSSON",
      email: "brgud@kth.se",
      pic: "bjarni.jpg",
      contributions:["Advanced graphics","Multiplayer","Project management"]
    }, {
      name: "RAFA LUCENA",
      email: "rafaella@kth.se",
      pic: "rafa.jpg",
      contributions:["Level instantiator","Multiplayer"]
    }, {
      name: "HENRIQUE FURTADO",
      email: "hfm@kth.se",
      pic: "henrique.jpg",
      contributions:["Gameplay programming","Multiplayer"]
    }],
    challenges: challenges,
    lessons: lessons,
    relatedWork: relatedWork,
    technologies: technologies
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