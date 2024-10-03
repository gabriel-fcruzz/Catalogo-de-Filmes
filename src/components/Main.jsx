// src/Main.js
import React from "react";
import MovieCard from "./Card.js";
import "../styles/Main.css";

const movies = [
  {
    title: "Inception",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    rating: 4.8,
    description:
      "Um ladrão que invade os sonhos das pessoas para roubar suas ideias é oferecido a chance de ter sua vida de volta.",
    genres: ["Ação", "Ficção Científica", "Suspense"],
  },
  {
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    rating: 4.7,
    description:
      "Um hacker descobre a verdade sobre sua realidade e sua luta contra os controladores da mente.",
    genres: ["Ação", "Ficção Científica"],
  },
  {
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SY679_.jpg",
    rating: 4.6,
    description:
      "Um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
    genres: ["Aventura", "Drama", "Ficção Científica"],
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.9,
    description:
      "Batman, o vigilante de Gotham, deve enfrentar o Coringa, um criminoso que coloca a cidade em caos.",
    genres: ["Ação", "Crime", "Drama"],
  },
  {
    title: "Fight Club",
    image:
      "https://media.fstatic.com/n2kXPV_KNY09nr91AA2N2bCImag=/210x312/smart/filters:format(webp)/media/movies/covers/2017/03/Clube_da_Luta.jpg",
    rating: 4.8,
    description:
      "Um narrador anônimo se envolve em um clube secreto de luta como uma forma de terapia e autodescoberta.",
    genres: ["Drama", "Mistério"],
  },
  {
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    rating: 4.9,
    description:
      "Dois prisioneiros formam um laço ao longo dos anos e se ajudam a encontrar a esperança em um lugar sombrio.",
    genres: ["Drama"],
  },
];

const Main = () => {
  const h2Style = {
    fontSize: "1.5rem",
    textAlign: "center",
  };

  return (
    <main>
      <h2 style={h2Style}>Catálogo de Filmes</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            description={movie.description}
            genres={movie.genres}
          />
        ))}
      </div>

      <section>
        <h3 style={h2Style}>Trailers de Filmes</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/YoHD9XEInc0"
            title="Inception Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/vKQi3bBA1y8"
            title="The Matrix Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/zSWdZVtXT7E"
            title="Interstellar Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/EXeTwQWrcwY"
            title="The Dark Knight Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/SUXWAEX2jlg"
            title="Fight Club Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/6hB3S9bIaco"
            title="The Shawshank Redemption Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Main;
