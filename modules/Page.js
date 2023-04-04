import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { MainCont } from "./MainCont.js";
import { logica } from "./logica.js";

export function Page() {
  const myPage = document.getElementById('page');
  myPage.appendChild(Header());
  myPage.appendChild(MainCont());
  myPage.appendChild(Footer());
  logica();
}
