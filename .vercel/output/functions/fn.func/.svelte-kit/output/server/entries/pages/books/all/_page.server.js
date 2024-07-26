async function load({ fetch }) {
  const eBookRes = await fetch("/api/eBooks");
  const eBooks = await eBookRes.json();
  const bookRes = await fetch("/api/books");
  const books = await bookRes.json();
  for (let e of eBooks) {
    for (let b of books) {
      if (e.name === b.name) {
        e.paper_price = b.price;
        e.book_id = b._id;
      }
    }
  }
  return {
    eBooks
  };
}
export {
  load
};
