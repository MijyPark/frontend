import { useState, useEffect } from "react";
import axios from "axios";


function AdoptPage() {

const[fosters, setFosters] = useState([])

const [name, setName] = useState("");
const [family, setFamily] = useState(2);
const [housing, setHousing] = useState("");
const [contact, setContact] = useState("");
const [info, setInfo] = useState("");

const navigate = useNavigate()

const handleSubmit = async(e) => {   

    e.preventDefault();

    const requestBody = ({name, family, housing, contact, info});
    
    const response = await axios.post("http://localhost:5005/api/fosters", requestBody)
    .then(() => props.refreshFosters())
    .catch(err => console.error(err))
    }

  return (
    <div>
     <form className="apply-page" onSubmit={handleSubmit}>    
     
      <label htmlFor="name">Name:  </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e)=>{ setName(e.target.value)}}/>
       

        <label  htmlFor="family">Family Size?:  </label>
        <input 
            type="number" 
            name="family" 
            value={family} 
            onChange={(e)=>{ setFamily(e.target.value)}}/>
      

        <label  htmlFor="Housing Type?">Breed: </label>
        <input 
            type="text" 
            name="housing" 
            value={housing} 
            onChange={(e)=>{ setHousing(e.target.value)}}/>
       
        <label htmlFor="contact">Contact Number:  </label>

        <input 
            type="number" 
            name="contact" 
            value={contact} 
            onChange={(e)=>{ setContact(e.target.value)}}/>
        
        <label  htmlFor="info"> About You:  </label>
        <textarea
            name="info" 
            value={info} 
            onChange={(e)=>{ setInfo(e.target.value)}}/>
        
       
        <button type="submit">APPLY</button>
        </form>
  </div>
  )
}

export default AdoptPage;