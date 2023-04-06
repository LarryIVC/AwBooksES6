import Footer from './Footer.js';
import Header from './Header.js';
import MainCont from './MainCont.js';
import logica from './logica.js';

const Page = () => {
  const myPage = document.getElementById('page');
  const myHideMsg = document.querySelector('.tohide');
  myPage.appendChild(Header());
  myPage.appendChild(MainCont());
  myPage.appendChild(Footer());

  setTimeout(() => logica(), 100);
  myHideMsg.style.display = 'none';
};

export default Page;