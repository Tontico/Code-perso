/*
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object[]} attributes  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
/*function createMarkup(markupname, text, parent, attributes = []) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}

const header = createMarkup("header", "", document.body);
const h1 = createMarkup("h1", "mon titre h1", header);
const nav = createMarkup("nav", "", header);

for (let i = 1; i <= 4; i++) {
  const button = createMarkup("button", `item ${i}`, nav);
}

document.querySelector("button").style.color = "red";*/

/*//Exercice button genere paragraphes

const section = document.createElement("section");
const button = document.createElement("button");
const buttonText = document.createTextNode("Ajoutez un paragraphes");
button.appendChild(buttonText);
document.body.appendChild(button);
document.body.appendChild(section);


button.addEventListener("click", function () {
  const paragraphes = document.createElement("p");
  paragraphes.textContent = "Lorem ipseum";
  section.appendChild(paragraphes);
});*/

/*class FormTast{
  constructor(){
    this.render();
  }
  render(){
    const form = this.createMarkup("form", "", document.body);
  }
}*/

const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");
const button = document.createElement("button");
input.setAttribute("type", "text");
button.textContent = "Ajoutez une tache";

document.body.appendChild(form);
form.appendChild(input);
form.appendChild(button);

//premier evenement creation de la section
button.addEventListener("click", function (event) {
  event.preventDefault();
  const section = document.createElement("section");
  form.appendChild(section);
  let valeurInput = input.value;
  section.textContent = valeurInput;
  const buttonAdd = document.createElement("button");
  const buttonRemove = document.createElement("button");
  section.appendChild(buttonAdd);
  buttonAdd.textContent = "Validez";
  section.appendChild(buttonRemove);
  buttonRemove.textContent = "Supprimez";
  input.value = "";
  let estValide = true;

  //permet lors du click de passer de l'etat validé a invalidé
  buttonAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (estValide) {
      form.appendChild(section);
      section.style.textDecoration = "line-through";
      buttonAdd.textContent = "Invalidez";
      estValide = false;
    } else {
      form.appendChild(section);
      section.style.textDecoration = "none";
      buttonAdd.textContent = "Validez";
      estValide = true;
      form.insertBefore(section, button.nextSibling);
    }
  });

  //evenemenet creer une pop up qui nous demande si l'on veux supprimer la section
  buttonRemove.addEventListener("click", function () {
    buttonRemove.textContent = "voulez vous vraiment supprimez ?";
    if (window.confirm(buttonRemove.textContent)) {
      // Lorsque le bouton "Supprimez" est cliqué, supprimez la section parente
      form.removeChild(section);
    }
  });

  //afficher les sections les unes apres les autres
  form.insertBefore(section, button.nextSibling);
});
