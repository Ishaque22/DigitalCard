import './App.css'
import Info from './components/Info'
import About from './components/About'
import { Interest } from './components/Interest'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className='container'>
      <main className='main'>
      <Info />
     <About />
     <Interest />
     <Footer />
      </main>
    
    </div>
  )
}

export default App



