
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateBlog from './pages/CreateBlogs/CreateBlog'
import EditBlog from './pages/EditBlogs.jsx/EditBlogs'
import SingleBlog from './pages/SingleBlogs/SingleBlog'
import AllBlog from './pages/AllBlogs/AllBlog'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/createblog' element ={<CreateBlog/>}/>
        <Route path='/editblog' element ={<EditBlog/>}/>
        <Route path='/singleblog' element ={<SingleBlog/>}/>
        <Route path='/' element ={<AllBlog/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
