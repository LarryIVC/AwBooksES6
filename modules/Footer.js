const Footer = () => {
  const doc = document;
  const myFooter = doc.createElement('footer');
  myFooter.innerHTML = '<p>Copyright &copy; 2023 Awesome Books</p>';
  return myFooter;
};

export default Footer;