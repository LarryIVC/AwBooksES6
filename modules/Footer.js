export function Footer() {
  const doc = document,
  myFooter = doc.createElement('footer');
  myFooter.innerHTML=`<p>Copyright &copy; 2023 Awesome Books</p>`;
  return myFooter;
} 