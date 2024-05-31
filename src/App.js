import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'

function App() {
  return (
    <div className="App">
    <div className="Header">
      <Header />
      <div className='main'>
        {
          movies.map ((element) => {
            return (
            <Movie 
            title={element.Title}
            year= {element.Year}
            img={element.Poster}
            />
          )
          })
        }
        </div>
      </div>
      <div className='footer'>
          <Footer />
        </div>
      </div>
  )
}

export default App;
