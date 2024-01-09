import _ from "lodash";
import "./Menu.css";

export default function menuModule() {
  const menuTitle = document.createElement("div");
  const menu = document.createElement("div");

  menu.id = "menu";

  //menu-title
  menuTitle.id = "menu-title";
  menuTitle.innerHTML = "<h1>Menu</h1>";

  //beverages
  const beverage = document.createElement("div");
  const beverageTitle = document.createElement("div");
  const beverageItem1 = document.createElement("div");
  const beverageItem2 = document.createElement("div");

  beverage.id = "beverage-items";
  beverageTitle.className = "beverage-title";
  beverageItem1.className = "beverage-item";
  beverageItem2.className = "beverage-item";

  beverageTitle.innerHTML = "<h2>Beverage</h2>";

  beverageItem1.innerHTML = `<h3>Cola</h3>
  <div>Cola is a carbonated soft drink flavored with vanilla, cinnamon, citrus oils, and other flavorings.</div>
  <div>$1</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Glass_of_Cola.jpg" alt="" />`;

  beverageItem2.innerHTML = `<h3>Cider</h3>
  <div>Cider is an alcoholic beverage made from the fermented juice of apples.</div>
  <div>$1</div>
  <img src="https://yt3.googleusercontent.com/K0ynyYEVcQOQYO7SXZDr-CELnHCH55A1vcwf_WVRzGeD84_cp1BiHCPAp796TaSR26p8WCyz8FA=s176-c-k-c0x00ffffff-no-rj" alt="" />`;
  beverage.append(beverageTitle, beverageItem1, beverageItem2);

  //main menus
  const main = document.createElement("div");
  const mainTitle = document.createElement("div");
  const mainItem1 = document.createElement("div");
  const mainItem2 = document.createElement("div");
  const mainItem3 = document.createElement("div");
  const mainItem4 = document.createElement("div");
  const mainItem5 = document.createElement("div");
  const mainItem6 = document.createElement("div");
  const mainItem7 = document.createElement("div");
  const mainItem8 = document.createElement("div");

  main.id = "main-items";
  mainTitle.className = "main-title";
  mainItem1.className = "main-item";
  mainItem2.className = "main-item";
  mainItem3.className = "main-item";
  mainItem4.className = "main-item";
  mainItem5.className = "main-item";
  mainItem6.className = "main-item";
  mainItem7.className = "main-item";
  mainItem8.className = "main-item";

  mainTitle.innerHTML = "<h2>Main dishes</h2>";

  mainItem1.innerHTML = `<h3>Shin Ramen</h3>
  <div>Shin Ramyun is a brand of instant noodle (including cup ramyeon) that has been produced by the South Korean food company Nongshim since 1 October 1986.</div>
  <div>$5</div>
  <img src="https://oasisproduct.cdn.ntruss.com/68755/detail/detail_68755_0_9b7f02c9-1ed0-48dd-8514-738ab6cad062.jpg" alt="" />`;

  mainItem2.innerHTML = `<h3>Buldak stir-fried noodles</h3>
  <div>Hot Chicken Flavor Ramen[1] or buldak-bokkeum-myeon is a South Korean brand of instant noodle, produced by Samyang Foods since April 2012.</div>
  <div>$7</div>
  <img src="https://cdn.iconsumer.or.kr/news/photo/202108/20714_23857_244.jpg" alt="" />`;

  mainItem3.innerHTML = `<h3>Nuguri Ramen</h3>
  <div>Neoguri is a brand of ramyun produced by Nongshim in South Korea since 1982.</div>
  <div>$6</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nongshim_Neoguri_20201112_003.jpg/440px-Nongshim_Neoguri_20201112_003.jpg" alt="" />`;

  mainItem4.innerHTML = `<h3>Chapagetti</h3>
  <div>Chapagetti (Korean: 짜파게티) is a brand of ramyeon produced by Nongshim. It was first released in South Korea on March 19, 1984.</div>
  <div>$5</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Nongshim_Chapagetti_20201120_003.jpg/440px-Nongshim_Chapagetti_20201120_003.jpg" alt="" />`;

  mainItem5.innerHTML = `<h3>Sari gomtang</h3>
  <div>Sari Gomtangmyeon is a Korean ramen developed by Nongshim. It was released in February 1988 and gained sensational popularity among the people.</div>
  <div>$6</div>
  <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/84081101_2686772361402326_778723419540684800_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=dX_9oAz9nxwAX_HLaIw&_nc_ht=scontent-ssn1-1.xx&oh=00_AfA8-dfqDgsNp9jwnFZJhtzqUAW-1DvMUotzbfMKoW-KTg&oe=65C1F1B0" alt="" />`;

  mainItem6.innerHTML = `<h3>Jin Ramen</h3>
  <div>Jin Ramyun is a ramen manufactured and sold by Ottogi Ramen. There are two types of flavors: mild and spicy, and there are two more types of cup ramen: the Jin Ramyun large cup and the mini cup type, mild and spicy.</div>
  <div>$5</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jin_Ramen_%28spicy%29_20210731_002.jpg/440px-Jin_Ramen_%28spicy%29_20210731_002.jpg" alt="" />`;

  mainItem7.innerHTML = `<h3>Bibimmyeon</h3>
  <div>It is an instant mixed noodle soup made with ramen as a base.</div>
  <div>$7</div>
  <img src="https://www.businesspost.co.kr/news/photo/202207/20220715155538_135680.jpg" alt="" />`;

  mainItem8.innerHTML = `<h3>Samyang Ramen</h3>
  <div>Ramen sold by Samyang Foods. Launched on September 15, 1963[1], it is Korea's first instant ramen, celebrating its 60th anniversary of production as of 2023, and is the original pioneer of the ramen market in Korea.</div>
  <div>$4</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Samyang_Ramen_20210730_002.jpg/440px-Samyang_Ramen_20210730_002.jpg" alt="" />`;

  main.append(
    mainTitle,
    mainItem1,
    mainItem2,
    mainItem3,
    mainItem4,
    mainItem5,
    mainItem6,
    mainItem7,
    mainItem8
  );

  menu.append(menuTitle, beverage, main);

  return menu;
}
