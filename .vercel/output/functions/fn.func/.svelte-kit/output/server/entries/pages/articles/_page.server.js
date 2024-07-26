import { A as Articles } from "../../../chunks/Articles.js";
import { c as connect } from "../../../chunks/connection.js";
import { B as Books } from "../../../chunks/Books.js";
async function loadTrendingArticle() {
  try {
    await connect();
    const trendingArticle = await Articles.find().sort({ views: -1 }).limit(5);
    return new Response(JSON.stringify(trendingArticle), {
      headers: { "Content-type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ status: 401, message: e.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function loadCategories() {
  try {
    await connect();
    const loadCategoryResponse = await Books.find({ tags: "clarity" });
    return new Response(JSON.stringify(loadCategoryResponse), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 401, message: err.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function loadRecentArticles() {
  try {
    await connect();
    const RecentArticles = await Articles.find().sort({ created_at: -1 }).limit(5);
    return new Response(JSON.stringify(RecentArticles), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ status: 401, message: e.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function load() {
  const RecentArticlesRespose = await loadRecentArticles();
  const loadCategoriesResponse = await loadCategories();
  const loadTrendingArticleResponse = await loadTrendingArticle();
  const loadTrendingArticles = await loadTrendingArticleResponse.json();
  const RecentArticles = await RecentArticlesRespose.json();
  const newCategories = await loadCategoriesResponse.json();
  return {
    RecentArticles,
    newCategories,
    loadTrendingArticles
  };
}
export {
  load
};
