import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Catagory from './pages/category/Catagory'
import Latest from './pages/latest/Latest'
import Blog from './pages/blog/Blog'
import Page from './pages/page/Pages'
import Contact from './pages/contact/Contact'
import Header from './layout/header/Header'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catagory' element={<Catagory/>}/>
        <Route path='/latest' element={<Latest/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
    </>
  )
}

export default App
