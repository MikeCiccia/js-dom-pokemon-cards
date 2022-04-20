console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
const listEL = document.querySelector(".cards");
data.forEach((pokemonData) => {
  const cardElement = document.createElement("li");
  cardElement.setAttribute("class", "card");
  //   cardheading
  const cardheading = document.createElement("h2");
  cardheading.setAttribute("class", "card-title");
  cardheading.innerText = pokemonData.name;
  cardElement.append(cardheading);
  //cardimg
  const image = document.createElement("img");
  image.setAttribute("width", "256");
  image.setAttribute("class", "card--img");

  listEL.append(cardElement);
});
