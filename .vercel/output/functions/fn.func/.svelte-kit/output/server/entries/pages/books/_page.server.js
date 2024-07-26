import { B as Books } from "../../../chunks/Books.js";
import { c as connect } from "../../../chunks/connection.js";
import { E as EBooks } from "../../../chunks/EBooks.js";
async function loadBestSellers() {
  try {
    await connect();
    const EBKresponse = await EBooks.find().sort({ number_of_orders: -1 }).limit(5);
    let bestSellerBooks = [];
    for (let ebook of EBKresponse) {
      let newBook = {};
      const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 1 });
      newBook["name"] = ebook.name;
      newBook["price"] = ebook.price;
      newBook["id"] = ebook._id;
      newBook["photoURL"] = ebook.photoURL;
      newBook["language"] = ebook.language;
      if (book) {
        newBook["paperPrice"] = book.price;
        newBook["paperID"] = book._id;
      }
      bestSellerBooks.push(newBook);
    }
    return new Response(JSON.stringify({ bestSellerBooks }), {
      headers: { "Content-type": "application/json" }
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ status: 401, message: e.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function loadCategories() {
  const lifeProblemTags = ["depression and anxiety", "money", "fear", "suffering", "lonliness", "personality", "success", "desire", "emotions", "anger", "goal", "attachment", "concentration"];
  const spiritualWisomTags = ["ramayan", "advait", "shri ramchandra manas", "renunciation", "saint kabir", "meditation", "ashtavakra gita", "chhandogya upanishad", "karma", "bhagawat gita", "purana"];
  const veganismTags = ["animal cruelity", "population", "climate change", "liberation", "ego"];
  try {
    await connect();
    const lifeProblemCategoryResponse = await EBooks.find({ tags: { $in: lifeProblemTags } });
    const spiritualWisdomResponse = await EBooks.find({ tags: { $in: spiritualWisomTags } });
    const veganismResponse = await EBooks.find({ tags: { $in: veganismTags } });
    for (let ebook of lifeProblemCategoryResponse) {
      const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 1 });
      if (book) {
        ebook["paperPrice"] = book.price;
        ebook["paperID"] = book._id;
      }
    }
    for (let ebook of spiritualWisdomResponse) {
      const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 1 });
      if (book) {
        ebook["paperPrice"] = book.price;
        ebook["paperID"] = book._id;
      }
    }
    for (let ebook of veganismResponse) {
      const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 1 });
      if (book) {
        ebook["paperPrice"] = book.price;
        ebook["paperID"] = book._id;
      }
    }
    return new Response(JSON.stringify({ veganismResponse, lifeProblemCategoryResponse, spiritualWisdomResponse }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ status: 401, message: e.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function loadNewRelease() {
  try {
    await connect();
    const newRelease = await EBooks.find().sort({ created_at: -1 }).limit(5);
    let newReleaseBooks = [];
    for (let ebook of newRelease) {
      let newBook = {};
      const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 1 });
      newBook["name"] = ebook.name;
      newBook["price"] = ebook.price;
      newBook["id"] = ebook._id;
      newBook["photoURL"] = ebook.photoURL;
      newBook["language"] = ebook.language;
      if (book) {
        newBook["paperPrice"] = book.price;
        newBook["paperID"] = book._id;
      }
      newReleaseBooks.push(newBook);
    }
    return new Response(JSON.stringify({ newReleaseBooks }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 401, message: err.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function load() {
  try {
    const newReleaseResponse = await loadNewRelease();
    const loadCategoriesResponse = await loadCategories();
    const loadBestSellersResponse = await loadBestSellers();
    const newRelease = await newReleaseResponse.json();
    const newCategories = await loadCategoriesResponse.json();
    const loadBestSeller = await loadBestSellersResponse.json();
    return {
      newRelease,
      newCategories,
      loadBestSeller
    };
  } catch (e) {
    console.error("Failed to load data:", e);
    return {
      status: 401,
      message: e.message
    };
  }
}
export {
  load
};
