import { useEffect, useState } from 'react'
// import './App.css'

const TMDB_API_BASE = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w342'

const DEMO_MOVIES = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  },
  {
    id: 2,
    title: 'The Godfather',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  },
  {
    id: 3,
    title: 'Whiplash',
    poster_path: '/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
  },
]

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [warning, setWarning] = useState(null)

  useEffect(() => {
    const apiKey = "https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86"

    const fetchData = async () => {
      if (!apiKey) {
        // setWarning(
        // )
        setMovies(DEMO_MOVIES)
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)
      setWarning(null)

      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86")

        console.log(response)

        if (!response.ok) {
          throw new Error(`Movie API request failed (status ${response.status})`)
        }

        const data = await response.json()
        setMovies(data.results ?? [])
      } catch (err) {
        console.error(err)
        setError('Failed to load movies. ' + (err instanceof Error ? err.message : err))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Popular Movies</h1>

      {loading ? (
        <div className="loading">
          <div className="spinner" aria-hidden="true" />
          <span>Loading movies…</span>
        </div>
      ) : error ? (
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <article key={movie.id} className="movie-card">
              <div className="poster">
                {movie.poster_path ? (
                  <img
                    src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="poster placeholder">No poster</div>
                )}
              </div>
              <h2 className="title">{movie.title}</h2>
            </article>
          ))}
        </div>
      )}

      {warning ? (
        <div className="warning">
          <strong>Note:</strong> {warning}
        </div>
      ) : null}
    </div>
  )
}

export default App
