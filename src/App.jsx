import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactForm } from './components/ContactForm/ContactForm'
import Nav from './components/Nav/Nav'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import Projects from './components/projects/Projects'
import {DetailGames} from "./components/Detail/DetailGames/DetailGames"
import { DetailTodo } from './components/Detail/DetailTodo/DetailTodo'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/projects/detail/Games' element={<DetailGames/>} />
          <Route path='/projects/detail/Todo' element={<DetailTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
