
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Tarjeta from './components/Card.jsx'
import cardData from './data/data.jsx'


function App() {
  return (
    <div className='App'>
      <Header title="Galería de imagenes con React" />
      {cardData.map((card) => {
        return (
          <Tarjeta
            key={card.id}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App
