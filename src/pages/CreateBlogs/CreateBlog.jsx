import { useState } from 'react'
import Navbar from '../../components/Navbar'
import './CreateBlog.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const[title,setTitle] = useState("");

  const[description,setDescription] = useState("");

  const[avatar,setAvatar] = useState("");

  console.log(title,"Title");
  console.log(description,"Description");
  console.log(avatar,"Image");

  const createBlog=async(e)=>{
    e.preventDefault()
    const data = {
      title:title,
      description:description,
      avatar:avatar,
    }
    const response = await axios.post("https://66ec553e2b6cf2b89c5e1e2b.mockapi.io/blogs/",data)
    console.log(response)

    if(response.status == 201){
      navigate("/")
    }else{
      alert("Something is wrong")
    }
  }
  return (
    <div>
      <Navbar/>
       <div className ="form-container">
        <h1 className="form-title">Add Blogs</h1>
        
        <form onSubmit={createBlog}>
            <input type="text" id="title" placeholder='Title' name="title" required
            onChange={(e)=>{setTitle(e.target.value)}}/>

            <textarea id="description" name="description" placeholder="Description"rows="4" required
             onChange={(e)=>{setDescription(e.target.value)}}></textarea>

            <input type="text" id="imagee" placeholder='Image' name="image" required
             onChange={(e)=>{setAvatar(e.target.value)}}/> 

            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateBlog
