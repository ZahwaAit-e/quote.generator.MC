let quotes = [
  "the similary between love and war lies in one thing ... Both require men.",
  "Intelligence's traditionally viewed as the ability to think and learn and yet a turbulant world, it's also the ability to rethink and unlearn.",
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
];
let authors = [
  "Djebran Khalil Djebran",
  "Adam Grant",
  "Oscar Wilde",
  "Frank Zappa",
  "Bernard M. Baruch",
];
//fonction pour générer une citation aléatoire à chaqque fois que le bouton New Quote est cliqué
function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
  document.getElementById("author").innerHTML = authors[randomNumber];
}
// Ce code permet d'écouter les clics sur le bouton "Add to Favorites", de récupérer la citation et l'auteur actuellement affichés, et de les ajouter à la liste des citations favorites dans le conteneur spécifié.

let addButton = document.getElementById("fav");
let Container = document.getElementById("favContainer");
// liste pour afficher les citations favorites
let list = document.createElement("ul");

addButton.addEventListener("click", function () {
  // vars pour stocker la citation et l'auteur actuellement affichés à l'écran
  //récupèrer le contenu HTML avec les IDs "quote" et "author"
  let quoteElement = document.getElementById("quote").textContent;
  let authorElement = document.getElementById("author").textContent;

  let element = document.createElement("li"); // représente un élement de la liste des citations favorites
  element.style.color = "#ffbec8";
  element.textContent = quoteElement + " - " + authorElement;
  // Cela ajoute l'élément de la liste à la liste des citations favorites affichée à l'écran.
  Container.appendChild(element);

  // définir un effet de texte barré pour l'élément de la liste qu on veut retirer des favoris et ce el le cliquant.
  element.addEventListener("click", function () {
    element.style.textDecoration = "line-through";
  });

  // Cette partie de code gère la fonctionnalité de suppression d'une citation favorite lorsqu'elle est double-cliquée.
  element.addEventListener("dblclick", function () {
    Container.removeChild(element);
  });
});

// Cette partie de code gère la fonctionnalité de commutation entre les onglets "Generator" et "Favorites" lorsque l'utilisateur clique sur l'un des onglets.

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs); // convertir la liste des éléments <li> en un tableau en utilisant la méthode Array.from()
let cards = document.querySelectorAll(".cards > div");
let cardsArray = Array.from(cards); //convertit la liste des éléments <div> en un tableau en utilisant la méthode Array.from()
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active"); //supprime la classe "active" de tous les éléments du tableau tabsArray
    });
    e.currentTarget.classList.add("active");
    cardsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
