import { B as Books } from "../../../../chunks/Books.js";
import { c as connect } from "../../../../chunks/connection.js";
import { E as EBooks } from "../../../../chunks/EBooks.js";
async function load({ params }) {
  try {
    await connect();
    const ebook_id = params.book_id;
    const EbookResponse = await EBooks.find({ _id: ebook_id });
    let newBook = {};
    const bookres = await Books.findOne({ _id: EbookResponse[0]._id }, { price: 1, _id: 1 });
    newBook["name"] = EbookResponse[0].name;
    newBook["price"] = EbookResponse[0].price;
    newBook["id"] = EbookResponse[0]._id;
    newBook["photoURL"] = EbookResponse[0].photoURL;
    newBook["language"] = EbookResponse[0].language;
    newBook["description"] = EbookResponse[0].description;
    if (bookres) {
      newBook["paperPrice"] = bookres.price;
      newBook["paperID"] = bookres._id;
    }
    const book = await JSON.stringify(newBook);
    return {
      book
    };
  } catch (e) {
    return {
      status: 401,
      message: e.message
    };
  }
}
export {
  load
};
