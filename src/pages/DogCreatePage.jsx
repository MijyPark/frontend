import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


function DogCreatePage(props) {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState(""); 
  const [image, setImage] = useState(""); 

  const navigate = useNavigate()

  const handleSubmit = async(e) => {   

    e.preventDefault();

    const fData = new FormData();
    const image = e.target.image.files[0];

    fData.append("imageUrl", image);
    fData.append("name", name);
    fData.append("age", age);
    fData.append("info", info);
    fData.append("location", location);
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/dogs`, fData)
    .then(() => navigate('/'))
    .catch(err => console.error(err))
  }

  return (
    <div className="dog-edit-card">

      <form encType="multipart/form-data" className="dog-edit-card" onSubmit={handleSubmit}>    
     
      <label htmlFor="name">Name: 
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e)=>{ setName(e.target.value)}}/>
        </label>

        <label  htmlFor="age">Age:
        <input 
            type="number" 
            name="age" 
            value={age} 
            onChange={(e)=>{ setAge(e.target.value)}}/>
        </label>

        <label htmlFor="info">Info: 
        <textarea 
            type="text" 
            name="info" 
            value={info} 
            onChange={(e)=>{ setInfo(e.target.value)}}/>
         </label>

        <label  htmlFor="name">Location: 
        <input 
            type="text" 
            name="location" 
            value={location} 
            onChange={(e)=>{ setLocation(e.target.value)}}/>
        </label>

        <label>Image: 
        <input 
            type="file" 
            name="image"
            value={image}
            onChange={(e)=>{ setImage(e.target.value)}}/>
        </label>
        <button type="submit">Add</button>
        <Link to={"/dogs"}> List</Link>
      </form>
  </div>
  )
 }

export default DogCreatePage;