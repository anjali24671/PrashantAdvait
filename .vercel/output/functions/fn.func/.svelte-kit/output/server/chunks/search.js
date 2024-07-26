async function search(query, type) {
  if (type === "book") {
    try {
      const response = await fetch(`http://localhost:5173/api/eBooks?query=${query}`);
      const book = await response.json();
      return book;
    } catch (err) {
      console.log(err);
    }
  } else if (type == "video_series") {
    try {
      const response = await fetch(`http://localhost:5173/api/videoSeries/?query=${query}`);
      const videoSeries = await response.json();
      return videoSeries;
    } catch (err) {
      console.log(err);
    }
  }
}
export {
  search as s
};
