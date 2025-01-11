import { useEffect } from "react";
import MangaList from "../components/MangaList";
import { useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [mangaList, setMangaList] = useState([]);
  const [page, setPage] = useState(1);
  const mangaPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v4/top/manga?page=${page}&limit=${mangaPerPage}`,
      );

      setMangaList((prev) => [...prev, ...response.data.data]);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //return cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("ScrollHeight", document.documentElement.scrollHeight);
    console.log("ScrollTop", document.documentElement.scrollTop);
    console.log("Window Height", window.innerHeight);

    let hasScrolledBottom =
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight;

    if (hasScrolledBottom) {
      setPage((page) => page + 1);
    }
  };

  return (
    <main className="homepage">
      <h1>Top Mangas</h1>
      <MangaList mangaList={mangaList} />
    </main>
  );
};

export default Homepage;
