import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
function AdoptPage() {


  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [housing, setHousing] = useState("");
  const [contact, setContact] = useState(0);
  const [desc, setDesc] = useState();
  
  const handleName = (e) => setName(e.target.value);
  const handleFamily = (e) => setFamily(e.target.value);
  const handleHousing = (e) => setHousing(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleDesc = (e) => setDesc(e.target.value);

   const handleSubmit = async(e) => {   

    e.preventDefault();

    const adoptForm = {
      name:name,
      family:family,
      housing:housing,
      contact:contact,
      desc:desc,
    };

    const applyForm = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/adopt`);

    console.log("Application Sent");

    navigate("/dogs");
  } 

  return (
    <>
    <div
      className="adopt-form"
      style={{ maxWidth: "700px" }}>


      <form onSubmit={handleSubmit}>
     
       <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />

        <label>Famijy: </label>
        <input 
          type="text"
          name="family"
          value={family}
          onChange={handleFamily}
        />
        <label>Housing: </label>
        <input 
          type="text"
          name="housing"
          value={housing}
          onChange={handleHousing}
        />

        <label>Contact Phone Number: </label>
        <input 
            type="number" 
            name="contact" 
            value={contact} 
            onChange={handleContact}
        />
        
        <label>About YOU: </label>
        <input
            type="text" 
            name="desc" 
            value={desc}  
            onChange={handleDesc}
        />

        <button type="submit">Apply</button>

        <Link to={"/dogs"}> List</Link>
      </form>
    </div>
  </>
  )
};
 
export default AdoptPage;