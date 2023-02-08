import { Nav } from './components/Nav/Nav'
import { ContactForm } from './components/ContactForm/ContactForm'
import './App.css'


function App() {

  return (
    <div className='App'>
      <Nav file="./assets/Cv.pdf"/>
  
      <ContactForm />
    </div>
  )
}

export default App
