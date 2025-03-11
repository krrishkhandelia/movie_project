import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
  <div>
    <MovieCard movie={{title: "krrish ki picture", release_date:2006}} />
    <MovieCard movie={{url: './gand.png', title: "ansh ki picture", release_date:2004}} />
  </div>
  )
}

export default App