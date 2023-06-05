import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
 
 
function DogEditPage(props) {

  const [name, setName] = useState("");
  const [age, setAge] = useState(2);
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate()
  
  const {dogId} = useParams()

  useEffect(() => {                                 
    axios
      .get(`http://localhost:5005/api/dogs:${dogId}`)
      .then((response) => {
        const oneDog = response.data;
        setName(oneDog.name);
        setAge(oneDog.age);
        setBreed(oneDog.breed);
        setSize(oneDog.size);
        setInfo(oneDog.info);
        setImage(oneDog.image);
      })
      .catch((error) => console.log(error));    
     }, [dogId]);

  const handleSubmit = (e) => {   
    e.preventDefault();

    const fData = new FormData();
    const image = e.target.image.files[0];

    fData.append("name", name);
    fData.append("age", age);
    fData.append("breed", breed);
    fData.append("size", size);
    fData.append("info", info);
    fData.append("imageUrl", image);
 
    axios.put(`http://localhost:5005/api/dogs/:${dogId}`,fData)
    .then(() => props.refreshDogs())
    .navigate(`/dogs/:${dogId}`);
}

  const deleteDog = () => {
    axios.delete(`http://localhost:5005/api/dogs/:${dogId}`)
    .then(()  =>{
     navigate('/dogs/');
    })
    .catch((err)=>console.log(err))
 }

  return (
    <div className="dog-card">

     <form encType="multipart/form-data" onSubmit={handleSubmit}>    
     
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

        <textarea 
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
       
        <button type="submit">UPDATE</button>
        </form>
        <button onClick={deleteDog}>DELETE</button>
  </div>
  )
}

export default DogEditPage;