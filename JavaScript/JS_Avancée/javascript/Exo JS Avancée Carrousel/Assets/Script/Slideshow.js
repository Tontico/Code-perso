import ManageDom from "./ManageDom.js";

export default class Slideshow extends ManageDom {
  constructor(nb_images, width, height, speed) {
    super();
    this.nb_images = nb_images;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.images = [];
    this.feedSlideShow();
    this.dom_elements = this.render();
    this.animateSlideShow();
  }

  feedSlideShow() {
    for (let i = 0; i < this.nb_images; i++) {
      this.images[i] = this.createImage();
    }
    return this.images;
  }

  createImage() {
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://picsum.photos/${this.width}/${this.height}?id=${
        Math.random() * 1000
      }`
    );
    return img;
  }

  render() {
    const div_container = this.createMarkup("div", "", document.body, [
      { class: "container" },
    ]);
    const left_div_slide_container = this.createMarkup(
      "div",
      "",
      div_container,
      [{ class: "left-slide-container" }]
    );
    const title_h1 = this.createMarkup(
      "h1",
      "Citrus SlideShow",
      left_div_slide_container
    );
    const right_div_slide_container = this.createMarkup(
      "div",
      "",
      div_container,
      [{ class: "right-slide-container" }]
    );
    const div_slide = this.createMarkup("div", "", right_div_slide_container, [
      { class: "carrousel-box" },
    ]);
    const imgArray = [];
    //crée une boucle, on stock les div qui stock eux meme les images dans imgArray
    for (let i = 0; i < this.nb_images; i++) {
      const div_item = this.createMarkup("div", "", div_slide, [
        { class: "carrousel-item" },
      ]);
      const img = this.createMarkup("img", "", div_item, [
        { src: this.images[i].src },
        { class: "img-container" },
      ]);

      imgArray.push(div_item);
      div_item.style.display = "none";
    }
    const first_div = document.querySelector(".carrousel-item");
    first_div.style.display = "block";

    return {
      div_slide,
      imgArray,
    };
  }

  animateSlideShow() {
    // cache la premiere div, puis passer la deuxieme div en block etc
    //on fait une boucle qui permet changer létat display
    //img[i].style.display === "block", img[(i+1)%this.nb_images].style.display = "block"
    //si on fait +1 sort du tableau

    let setIntervalId = setInterval(() => {
      for (let i = 0; i < this.nb_images; i++) {
        if (this.dom_elements.imgArray[i].style.display === "block") {
          this.dom_elements.imgArray[(i + 1) % this.nb_images].style.display =
            "block";
          this.dom_elements.imgArray[i].style.display = "none";
          break;
        }
      }
    }, this.speed);

    let reboot = false;
    this.dom_elements.div_slide.onclick = () => {
      if (!reboot) {
        clearInterval(setIntervalId);
        reboot = true;
      } else {
        setIntervalId = setInterval(() => {
          for (let i = 0; i < this.nb_images; i++) {
            if (this.dom_elements.imgArray[i].style.display === "block") {
              this.dom_elements.imgArray[
                (i + 1) % this.nb_images
              ].style.display = "block";
              this.dom_elements.imgArray[i].style.display = "none";
              break;
            }
          }
        }, this.speed);
        reboot = false;
      }
    };
  }
}
