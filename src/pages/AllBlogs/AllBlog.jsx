import { useEffect , useState } from "react"
import Navbar from "../../components/Navbar"
import './AllBlog.css'
import axios from "axios"

const AllBlog = () => {

  const[blogs,setBlogs] = useState([])

  const fetchBlogs= async()=>{
    const response = await axios.get("https://66ec553e2b6cf2b89c5e1e2b.mockapi.io/blogs/")
    if(response.status == 200){
      console.log(response.data)
      setBlogs(response.data)
      // console.log(blogs,"blogs")     
      // console.log(blogs.title)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div>
      <Navbar/>
      <div className="main-card">
        {
          blogs.map((blog)=>{
            return(
              <div className="card" key={blog.id}>
              <img src={blog.avatar} alt="Avatar" width="100%"/>
              <div className="container">
               <h4><b>{blog.title}</b></h4> 
               <p>{blog.description}</p> 
               <p>{blog.createdAt}</p>
              </div>
           </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllBlog
