import { Divider, Input } from "antd"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
 
 
function DogForm(props) {

  const [name, setName] = useState("");
  const [age, setAge] = useState(2);
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");


  const navigate = useNavigate()

  const handleSubmit = async(e) => {   

    e.preventDefault();

    const fData = new FormData();
    const image = e.target.image.files[0];

    fData.append("name", name);
    fData.append("age", age);
    fData.append("breed", breed);
    fData.append("size", size);
    fData.append("info", info);
    fData.append("imageUrl", image);
    
    axios
    .post("http://localhost:5005/api/dogs", fData)
    .then(() => {
     props.refreshDogs()
    })
    .catch(err => console.error(err))
    }


  return (
    
      <form encType="multipart/form-data" className="dog-edit-card" onSubmit={handleSubmit}>    
      <Divider>Admin Dog Form</Divider>
      <label htmlFor="name">Name:  </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e)=>{ setName(e.target.value)}}/>
       

        <label  htmlFor="age">Age:  </label>
        <input 
            type="number" 
            name="age" 
            value={age} 
            onChange={(e)=>{ setAge(e.target.value)}}/>
      

        <label  htmlFor="breed">Breed: </label>
        <input 
            type="text" 
            name="breed" 
            value={breed} 
            onChange={(e)=>{ setBreed(e.target.value)}}/>
       
        <label htmlFor="size">Size:  </label>

        <input
            type="text" 
            name="size" 
            value={size} 
            onChange={(e)=>{ setSize(e.target.value)}}/>
        
        <label  htmlFor="info"> About:  </label>
        <textarea
            name="info" 
            value={info} 
            onChange={(e)=>{ setInfo(e.target.value)}}/>
        
        <label>Image:  </label>
        <input 
            type="file" 
            name="image"
            value={image}
            onChange={(e)=>{ setImage(e.target.value)}}/>
       
        <button type="submit">ADD</button>
      </form>
  )
 }

export default DogForm;
