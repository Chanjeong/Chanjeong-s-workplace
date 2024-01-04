import _ from "lodash";
import "./Menu.js";
import "./Contact.js";
import "./homeStyle.css";

function component() {
  //tabbed elements
  const element = document.createElement("div");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  element.id = "content";
  homeButton.id = "homeButton";
  menuButton.id = "menuButton";
  contactButton.id = "contactButton";

  homeButton.innerHTML = "Home";
  menuButton.innerHTML = "Menu";
  contactButton.innerHTML = "Contact";

  //main element
  const main = document.createElement("div");
  const mainTitle = document.createElement("div");
  const mainItems = document.createElement("div");
  const mainItem1 = document.createElement("div");
  const mainItem2 = document.createElement("div");
  const mainItem3 = document.createElement("div");
  main.id = "main";
  mainTitle.id = "main-title";
  mainItems.id = "main-items";
  mainItem1.id = "main-item";
  mainItem2.id = "main-item";
  mainItem3.id = "main-item";

  mainTitle.textContent = "Dongtan Korean Ramen Restaurant";
  mainItem1.textContent = `DKR has one of the greatest ramen dishes in Korea.
  It is locaed in the center of Dongtan, Gyeoggido.
  Foreigners also feel free to taste it, it's not that spicy.
  We have run the restaurant since 1924.
  If you like the nooddle, DKR will be a good choice for you.`;

  main.append(mainTitle, mainItem1);

  element.append(homeButton, menuButton, contactButton, main);

  return element;
}

document.body.appendChild(component());
