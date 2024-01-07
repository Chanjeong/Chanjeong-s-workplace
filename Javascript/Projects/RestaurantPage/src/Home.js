import _ from "lodash";
import menuModule from "./Menu.js";
import contactModule from "./Contact.js";
import "./Home.css";

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
  main.id = "main";
  main.appendChild(homeModule());
  element.append(homeButton, menuButton, contactButton, main);

  return element;
}

document.body.appendChild(component());

document.getElementById("homeButton").addEventListener("click", () => {
  switchTab(homeModule);
});

document.getElementById("menuButton").addEventListener("click", () => {
  switchTab(menuModule);
});

document.getElementById("contactButton").addEventListener("click", () => {
  switchTab(contactModule);
});

function switchTab(moduleFunction) {
  // Clear current contents of mainItems
  const main = document.getElementById("main");
  main.innerHTML = "";

  // Run the specified 'tab module' function and append its content to mainItems
  main.append(moduleFunction());
}

function homeModule() {
  const homeTitle = document.createElement("div");
  const homeItems = document.createElement("div");
  const homeItem1 = document.createElement("div");
  const homeItem2 = document.createElement("div");
  const homeItem3 = document.createElement("div");
  homeTitle.className = "home-title";
  homeItems.id = "home-items";
  homeItem1.className = "home-item";
  homeItem2.className = "home-item";
  homeItem3.className = "home-item";

  homeTitle.innerHTML = "<h1>Dongtan Korean Ramen Restaurant</h1>";
  homeItem1.innerHTML = `<div>DKR has one of the greatest ramen dishes in Korea.
  It is locaed in the center of Dongtan, Gyeoggido.
  Foreigners also feel free to taste it, it's not that spicy.
  We have run the restaurant since 1924.
  If you like the nooddle, DKR will be a good choice for you.</div>`;
  homeItem2.innerHTML = `<h3>Hours</h3>
  <ul>Sunday: 8am - 8pm</ul>
  <ul>Monday: 6am - 6pm</ul>
  <ul>Tuesday: 6am - 6pm</ul>
  <ul>Wednesday: 6am - 6pm</ul>
  <ul>Thursday: 6am - 10pm</ul>
  <ul>Friday: 6am - 10pm</ul>
  <ul>Saturday: 8am - 10pm</ul>`;
  homeItem3.innerHTML = `<h3>Location</h3>
  <ul>123 Forest Drive, Forestville, Maine</ul>`;

  homeItems.append(homeTitle, homeItem1, homeItem2, homeItem3);

  return homeItems;
}
