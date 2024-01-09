import _ from "lodash";
import "./Contact.css";

export default function contactModule() {
  const contact = document.createElement("div");
  const contactTitle = document.createElement("div");
  const contactItems = document.createElement("div");
  const contactItem1 = document.createElement("div");
  const contactItem2 = document.createElement("div");
  const contactItem3 = document.createElement("div");

  contact.id = "contact";
  contactTitle.className = "contact-title";
  contactItems.id = "contact-items";
  contactItem1.className = "contact-item";
  contactItem2.className = "contact-item";
  contactItem3.className = "contact-item";

  contactTitle.innerHTML = "<h1>Contact Us</h1>";

  contactItem1.innerHTML = `<h2>Chanjeong Park</h2>
  <div>Chef<div>
  <div>010-1234-5678</div>
  <div>ckswjd9595@gmail.com</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/G-DRAGON_CHANEL_Photo_Call_3.jpg/500px-G-DRAGON_CHANEL_Photo_Call_3.jpg" alt="" />`;

  contactItem2.innerHTML = `<h2>Jisung Park</h2>
  <div>Manager<div>
  <div>010-0987-6553</div>
  <div>pjs3549@naver.com</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Park_Ji-sung_G20_Seoul_Summit_Ambassador_%28cropped%29.jpg" alt="" />`;

  contactItem3.innerHTML = `<h2>Heungmin Son</h2>
  <div>Waiter<div>
  <div>010-5234-4534</div>
  <div>kim123@naver.com</div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Team_Korea_Russia_WorldCup_02_%28cropped%29.png/440px-Team_Korea_Russia_WorldCup_02_%28cropped%29.png" alt="" />`;

  contactItems.append(contactItem1, contactItem2, contactItem3);

  contact.append(contactTitle, contactItems);

  return contact;
}

