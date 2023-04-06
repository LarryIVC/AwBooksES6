const MainCont = () => {
  const doc = document;
  const myMain = doc.createElement('main');
  myMain.innerHTML = `<section id="all-books">
    <h1>All Awesome Books</h1>
    <ul id="book-list"><p>No Books yet, please add ...</p></ul>
    </section>
    <section id="add-book">
      <form id="add-book-form">
        <h2>Add a new book</h2>
        <label for="title-input"></label>
        <input type="text" id="title-input" name="title" placeholder="Title" required>
        <label for="author-input"></label>
        <input type="text" id="author-input" name="author" placeholder="Author" required>
        <button type="submit" id="add-button">Add</button>
      </form>
    </section>
    <section id="contact-us">
      <h1>Contact Information</h1>
      <p>If you have any questions or you just want to say "Hello", you can reach out to us!</p>
      <ul>
        <li>Our e-mail: <a href="mailto:larry.villegas@gmail.com" target="_blank">larry.villegas@gmail.com</a></li>
        <li>Our e-mail: <a href="mailto:naanahmed.na@gmail.com" target="_blank">naanahmed.na@gmail.com</a></li>        
        <li>Our e-mail: <a href="mailto:abiola.arobieke@gmail.com" target="_blank">abiola.arobieke@gmail.com</a></li>
      </ul>
    </section>`;
  return myMain;
};

export default MainCont;