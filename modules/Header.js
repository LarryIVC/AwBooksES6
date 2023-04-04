const Header = () => {
  const html = `
  <nav class="book-list-container">
    <h3 class="book-list-title">Awesome Books</h3>
    <div>
      <a href="#List" id="list-link">List</a>
      <span>|</span>
      <a href="#add-book" id="add-link">Add new</a>
      <span>|</span>
      <a href="#Contact" id="contact-link">Contact</a>      
    </div>
  </nav>
  <div class="date">
  <time id="date-time"></time>
  </div>`;
  const doc = document;
  const nodHeader = doc.createElement('header');
  nodHeader.innerHTML = html;
  return nodHeader;
}

export default Header;