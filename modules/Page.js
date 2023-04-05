import Footer from './Footer.js';
import Header from './Header.js';
import MainCont from './MainCont.js';
import logica from './logica.js';

const Page = () => {
  const myPage = document.getElementById('page');
  const myHideMsg = document.getElementsByClassName('tohide');
  myHideMsg.style.display = 'none';
  myPage.appendChild(Header());
  myPage.appendChild(MainCont());
  myPage.appendChild(Footer());
  logica();
};

export default Page;