import { s as search } from "../../../../chunks/search.js";
async function load({ url }) {
  const query = url.searchParams.get("query");
  const booksData = await search(query, "book");
  return {
    booksData
  };
}
export {
  load
};
