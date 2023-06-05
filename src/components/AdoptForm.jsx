 
import { useState } from "react";
 
function AdoptForm(props) {

  const [name, setName] = useState("");
  const [family, setFamily] = useState(2);
  const [housing, setHousing] = useState("");
  const [contact, setContact] = useState(030);
  const [info, setInfo] = useState("");

  const handleNameInput = e => setName(e.target.value);
  const handleFamilyInput = e => setFamily(e.target.value);
  const handleHousingInput = e => setHousing(e.target.value);
  const handleContactInput = e => setContact(e.target.value);
  const handleInfoInput = e => setInfo(e.target.value);

  const handleSubmit = (e) => {        
    e.preventDefault();

    const newFoster = { name, family, housing, contact, info };
    console.log("Submitted: ", newFoster);
    props.AdoptForm(newFoster)
  }

  return (

    <div className="Adoption-form">
      <h4>Adoptin Formr</h4>
  
      <form onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput} 
        />
        
  
        <label>Family size?: </label>
        <input 
            type="number" 
            name="family" 
            value={family} 
            onChange={handleFamilyInput} 
        />
  
        <label>Housing Type?: </label>
        <input 
            type="text" 
            name="housing" 
            value={housing} 
            onChange={handleHousingInput} 
        />
  
        <label>Contact Number: </label>
        <input 
            type="number" 
            name="contact" 
            value={contact} 
            onChange={handleContactInput} 
        />

        <label> Tell me about you more?: </label>
         <textarea 
            type="text" 
            name="info" 
            value={info} 
            onChange={handleInfoInput} 
        />
        
        <button type="submit">APPLY</button>

      </form>
    </div>
  );
 
}
 
export default AdoptForm;