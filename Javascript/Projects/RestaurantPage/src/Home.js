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
  mainItem1.className = "main-item";
  mainItem2.className = "main-item";
  mainItem3.className = "main-item";

  mainTitle.innerHTML = "<h1>Dongtan Korean Ramen Restaurant</h1>";
  mainItem1.innerHTML = `<div>DKR has one of the greatest ramen dishes in Korea.
  It is locaed in the center of Dongtan, Gyeoggido.
  Foreigners also feel free to taste it, it's not that spicy.
  We have run the restaurant since 1924.
  If you like the nooddle, DKR will be a good choice for you.</div>`;
  mainItem2.innerHTML = `<h3>Hours</h3>
  <ul>Sunday: 8am - 8pm</ul>
  <ul>Monday: 6am - 6pm</ul>
  <ul>Tuesday: 6am - 6pm</ul>
  <ul>Wednesday: 6am - 6pm</ul>
  <ul>Thursday: 6am - 10pm</ul>
  <ul>Friday: 6am - 10pm</ul>
  <ul>Saturday: 8am - 10pm</ul>`;
  mainItem3.innerHTML = `<h3>Location</h3>
  <ul>123 Forest Drive, Forestville, Maine</ul>`;

  mainItems.append(mainTitle, mainItem1, mainItem2, mainItem3);
  main.append(mainItems);
  element.append(homeButton, menuButton, contactButton, main);

  return element;
}

document.body.appendChild(component());

homeButton.addEventListener("click", () => {
  window.location.href = "./Home.js";
});

menuButton.addEventListener("click", () => {
  window.location.href = "./Menu.js";
});

contactButton.addEventListener("click", () => {
  window.location.href = "./Contact.js";
});


// // index.js
// import _ from "lodash";
// import contactModule from "./Contact";
// import menuModule from "./Menu";
// import "./homeStyle.css";

// function component() {
//   // Tabbed elements
//   const element = document.createElement("div");
//   const homeButton = document.createElement("button");
//   const menuButton = document.createElement("button");
//   const contactButton = document.createElement("button");

//   element.id = "content";
//   homeButton.id = "homeButton";
//   menuButton.id = "menuButton";
//   contactButton.id = "contactButton";

//   homeButton.innerHTML = "Home";
//   menuButton.innerHTML = "Menu";
//   contactButton.innerHTML = "Contact";

//   // Main element
//   const main = document.createElement("div");
//   const mainTitle = document.createElement("div");
//   const mainItems = document.createElement("div");

//   main.id = "main";
//   mainTitle.id = "main-title";
//   mainItems.id = "main-items";

//   mainTitle.innerHTML = "<h1>Dongtan Korean Ramen Restaurant</h1>";

//   // Attach the initial content to mainItems
//   mainItems.appendChild(homeModule());

//   main.append(mainItems);
//   element.append(homeButton, menuButton, contactButton, main);

//   return element;
// }

// document.body.appendChild(component());

// // Event listeners for tab buttons
// document.getElementById("homeButton").addEventListener("click", () => {
//   switchTab(homeModule);
// });

// document.getElementById("menuButton").addEventListener("click", () => {
//   switchTab(menuModule);
// });

// document.getElementById("contactButton").addEventListener("click", () => {
//   switchTab(contactModule);
// });

// // Function to switch tabs
// function switchTab(moduleFunction) {
//   // Clear current contents of mainItems
//   const mainItems = document.getElementById("main-items");
//   mainItems.innerHTML = "";

//   // Run the specified 'tab module' function and append its content to mainItems
//   mainItems.appendChild(moduleFunction());
// }

// // Home module (initial content)
// function homeModule() {
//   const homeContent = document.createElement("div");
//   homeContent.innerHTML = `
//     <h2>Welcome to our restaurant!</h2>
//     <p>Explore our menu and get in touch with us.</p>
//   `;

//   return homeContent;
// }