import ManageDom from "./ManageDom.js";
export default class Task extends ManageDom {
  constructor(label) {
    super();
    this.label = label;
    this.dom_elements = this.render();
    this.isValidated = true;

    // appel de la méthode qui gère les événement
    this.manageEvents();
  }
  render() {
    const section = this.createMarkup("section", "", document.body, [
      { class: "task" },
    ]);
    const h2 = this.createMarkup("h2", this.label, section);

    // Création du bouton valider
    const valider = this.createMarkup("button", "valider", section);
    // Création du bouton supprimer
    const supprimer = this.createMarkup("button", "supprimer", section);
    // Renvoie de la référence vers les deux boutons
    return {
      section,
      valider,
      supprimer,
    };
  }
  manageEvents() {
    this.dom_elements.supprimer.onclick = (event) => {
      this.dom_elements.section.remove();
    };

    this.dom_elements.valider.onclick = (event) => {
      event.preventDefault();
      if (this.isValidated) {
        this.dom_elements.section.style.textDecoration = "line-through";
        this.dom_elements.valider.textContent = "Invalidez";
        this.isValidated = false;
      } else {
        this.dom_elements.section.style.textDecoration = "none";
        this.dom_elements.valider.textContent = "Valider";
        this.isValidated = true;
      }
    };
  }

  
}
