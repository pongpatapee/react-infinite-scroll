import MangaItem from "./MangaItem";

const MangaList = ({ mangaList }) => {
  return (
    <main className="mangaList">
      {mangaList.map((mangaData, index) => (
        <MangaItem key={index} mangaData={mangaData} />
      ))}
    </main>
  );
};

export default MangaList;
