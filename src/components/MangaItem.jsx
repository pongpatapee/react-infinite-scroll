const MangaItem = ({ mangaData }) => {
  return (
    <div className="mangaItem">
      <img
        src={mangaData.images.jpg.image_url}
        alt={`${mangaData.title} image`}
      />
      <h1>{mangaData.title}</h1>

      <div>
        <p>Rank: {mangaData.rank}</p>
        <p>Popularity: {mangaData.popularity}</p>
        <p>Score: {mangaData.score}</p>
      </div>
    </div>
  );
};

export default MangaItem;
