import { useEffect, useState, useCallback } from "react";
import MangaList from "../components/MangaList";
import jikanApiClient from "../services/api";
import Loader from "../components/Loader";

const Homepage = () => {
  const [mangaList, setMangaList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const mangaPerPage = 10;

  // useCallback so the function does not have to be recreted every render
  // only on renders where the page number changes
  const fetchData = useCallback(async () => {
    const response = await jikanApiClient.get("/top/manga", {
      params: { page: page, limit: mangaPerPage },
    });

    setMangaList((prev) => [...prev, ...response.data.data]);
    setLoading(false);
  }, [page, mangaPerPage]);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //return cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let hasScrolledBottom =
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight;

    if (hasScrolledBottom) {
      setPage((page) => page + 1);
      setLoading(true);
    }
  };

  return (
    <main className="homepage">
      <h1>Top Mangas</h1>
      <MangaList mangaList={mangaList} />
      {loading && <Loader />}
    </main>
  );
};

export default Homepage;
