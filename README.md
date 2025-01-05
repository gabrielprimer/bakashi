import fs from 'fs/promises';
import path from 'path';

interface AnimeDetailsProps {
  params: { slug: string };
}

interface Anime {
  id: number;
  name: string;
  slug: string;
  data: string;
  image: string;
  synopsis: string;
  isLancamento: boolean;
  rating: string;
  score: number;
  genres: string[];
  airing: string;
  episodes: number;
  season: number;
}

const AnimeDetails = async ({ params }: AnimeDetailsProps) => {
  const filePath = path.join(process.cwd(), 'src/data/animes.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const { Animes }: { Animes: Anime[] } = JSON.parse(data);

  const anime = Animes.find((anime: Anime) => anime.slug === params.slug);

  if (!anime) {
    return <div>Anime não encontrado</div>;
  }

  // Função para recomendar animes com base nos gêneros
  const getSimilarAnimes = (currentAnime: Anime, allAnimes: Anime[]): Anime[] => {
    return allAnimes.filter((a) => 
      a.id !== currentAnime.id && 
      a.genres.some((genre) => currentAnime.genres.includes(genre))
    );
  };

  // Obter animes semelhantes
  const similarAnimes = getSimilarAnimes(anime, Animes);

  return (
    <div>
      {/* Caminho de Referência */}
      <nav>
        <span>Home</span> &gt; <span>Animes</span> &gt; <span>{anime.name}</span>
      </nav>

      {/* Imagem e Informações do Anime */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Imagem */}
        <img src={anime.image} alt={anime.name} style={{ width: '185px', height: '278px' }} />

        {/* Informações */}
        <div>
          <h1>{anime.name}</h1>
          <p>Lançamento: {anime.data}</p>

          {/* Sistema de Votação */}
          <div>
            <p>Avalie este anime:</p>
            <div>
              {[...Array(10)].map((_, index) => (
                <button key={index} style={{ fontSize: '18px', margin: '0 2px' }}>
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Gêneros */}
          <p>
            Gêneros: {anime.genres.join(', ')}
          </p>
        </div>
      </div>

      {/* Episódios e Temporadas */}
      <div style={{ marginTop: '32px' }}>
        <h2>Episódios</h2>
        <p>
          Temporadas: {anime.season} | Episódios: {anime.episodes}
        </p>

        {/* Sinopse */}
        <h3>Sinopse</h3>
        <p>{anime.synopsis}</p>
      </div>

      {/* Animes Semelhantes */}
      {similarAnimes.length > 0 && (
        <div style={{ marginTop: '32px' }}>
          <h2>Animes Semelhantes</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {similarAnimes.map((similarAnime) => (
              <li key={similarAnime.id} style={{ width: '200px', listStyle: 'none' }}>
                <img src={similarAnime.image} alt={similarAnime.name} style={{ width: '100%' }} />
                <h4>{similarAnime.name}</h4>
                {/* <p>{similarAnime.synopsis}</p> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;