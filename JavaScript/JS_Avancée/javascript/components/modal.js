import ManageDom from "./ManageDom.js";

export default class Modal extends ManageDom {
  constructor() {
    super();
    this.dom_elements = this.render();
    this.initEvents();
  }

  render() {
    const div_100vh = this.createMarkup("div", "", document.body, [
      { class: "vh" },
    ]);
    const div_modal = this.createMarkup("div", "", div_100vh, [
      { class: "modal" },
    ]);
    const paragraphs = this.createMarkup(
      "p",
      "Ceci est une boite modal",
      div_modal
    );
    const button_add = this.createMarkup("button", "Valider", div_modal, [
      { class: "add" },
    ]);
    const button_remove = this.createMarkup("button", "supprimez", div_modal, [
      { class: "remove" },
    ]);

    return {
      div_100vh,
      div_modal,
      paragraphs,
      button_add,
      button_remove,
    };
  }

  initEvents() {
    this.dom_elements.button_remove.onclick = (event) => {
      if (event.target === this.dom_elements.button_remove) {
        this.dom_elements.div_100vh.style.display = "none";
      }
    };
    this.dom_elements.div_100vh.onclick = (event) => {
      if (event.target === this.dom_elements.div_100vh)
        this.dom_elements.div_100vh.style.display = "none";
    };
  }
}
