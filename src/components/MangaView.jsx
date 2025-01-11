const MangaView = ({ mangaData }) => {
  return (
    <main
      style={{
        background: "#e3e3e3",
        color: "black",
        borderRadius: "10px",
        padding: "1.25em",
        margin: "0px",
      }}
    >
      <h1 style={{ margin: "0px", marginBottom: "5px" }}>{mangaData.title}</h1>
      <img
        src={mangaData.images.jpg.image_url}
        alt={`${mangaData.title} image`}
      />

      <div>
        <p style={{ margin: "0px" }}>Rank: {mangaData.rank}</p>
        <p style={{ margin: "0px" }}>Popularity: {mangaData.popularity}</p>
        <p style={{ margin: "0px" }}>Score: {mangaData.score}</p>
      </div>
    </main>
  );
};

export default MangaView;
