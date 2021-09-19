class Card {
    createImageComponent() {
      let data =
        "https://i.insider.com/6146891fa060c800184bd84c?width=1200&format=jpeg";
      let image = `<img class="rounded-t-xl" src='${data}' />`;
      return image;
    }
  
    createHeadingComponent() {
      let data = "Title";
      let heading = `<h1 class="text-center mx-2 my-2">${data}</h1>`;
      return heading;
    }
  
    createParagraphComponent() {
      let data = "Paragraph";
      let paragraph = `<p class="mx-2 my-2">${data}</p>`;
      return paragraph;
    }
  
    createButtonComponent() {
      let button = `<button class="mx-2 my-2 border rounded-xl bg-yellow-400 py-2 px-2">Read more...</button>`;
      return button;
    }
  
    render(element) {
      let fullComponent =
        "<div class='w-1/3 mx-10 border rounded-xl'>" +
        this.createImageComponent() +
        this.createHeadingComponent() +
        this.createParagraphComponent() +
        this.createButtonComponent() +
        "</div>";
      element.innerHTML = fullComponent + fullComponent + fullComponent;
    }
  }
  
  const app = new Card();
  
  let card = document.getElementById("cardcomponent");
  
  app.render(card);
  