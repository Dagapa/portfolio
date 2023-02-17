import { Nav } from './components/Nav/Nav'
import { ContactForm } from './components/ContactForm/ContactForm'
import './App.css'
import { Main } from './components/Main/Main'


function App() {

  return (
    <div className='App'>
      <Nav file="./assets/Cv.pdf"/>
      <Main/>
  
      <ContactForm />
    </div>
  )
}

export default App
