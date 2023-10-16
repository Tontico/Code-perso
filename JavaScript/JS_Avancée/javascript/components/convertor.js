import ManageDom from "./ManageDom.js";

export default class Convertor extends ManageDom {
  constructor(rate) {
    super();
    this.rate = rate;
    this.dom_elements = this.render();
    this.handleEvents();
  }
  render() {
    const form = this.createMarkup("form", "", document.body);
    const labelEuro = this.createMarkup("label", "euro", form, [
      { for: "euro" },
    ]);
    const inputEuro = this.createMarkup("input", "", form, [
      { id: "euro" },
      { type: "number" },
      { placeholder: 0 },
    ]);
    const labelFrancSuisse = this.createMarkup("label", "Franc Suisse", form, [
      { for: "franc_suisse" },
    ]);
    const inputFrancSuisse = this.createMarkup("input", "", form, [
      { id: "franc_suisse" },
      { type: "number" },
      { placeholder: 0 },
    ]);
    return {
      inputEuro,
      inputFrancSuisse
    };
  }

  handleEvents() {
    this.dom_elements.inputEuro.oninput = () => {
      this.dom_elements.inputFrancSuisse.value = (
        this.dom_elements.inputEuro.value * this.rate
      ).toFixed(2);
    };
    this.dom_elements.inputFrancSuisse.oninput = () => {
      this.dom_elements.inputEuro.value = (
        this.dom_elements.inputFrancSuisse.value / this.rate
      ).toFixed(2);
    };
  }
}
