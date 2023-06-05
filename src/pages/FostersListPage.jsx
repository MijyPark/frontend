import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import AdoptPage from "./AdoptPage"
 
function FostersListPage() {

const[fosters, setFosters] = useState([])

const [name, setName] = useState("");
const [family, setFamily] = useState(2);
const [housing, setHousing] = useState("");
const [contact, setContact] = useState("");
const [info, setInfo] = useState("");

const navigate = useNavigate()

const {fosterId} = useParams()

useEffect(() => {                              
  axios
    .get("https://localhost:5005/api/fosters")
    .then((response) => {
      console.log('response.data', response.data);
      setFosters(response.data)
    });
  
}, [] );

useEffect(() => {                                 
  axios
    .get(`http://localhost:5005/api/fosters:${fosterId}`)
    .then((response) => {
      const oneFoster = response.data;
      setName(oneFoster.name);
      setFamily(oneFoster.family);
      setHousing(oneFoster.housing);
      setContact(oneFoster.contact);
      setInfo(oneFoster.info);
    })
    .catch((error) => console.log(error));    
   }, [fosterId]);


   const handleSubmit = (e) => {   
    e.preventDefault();

    const requestBody = ({name, family, housing, contact, info});
    
    axios.put(`http://localhost:5005/api/fosters/:${fosterId}`,requestBody)
    .then(() => props.refreshFosters())
    .navigate(`/fosters/:${fosterId}`);
}

  const deleteFoster = () => {
    axios.delete(`http://localhost:5005/api/fosters/:${fosterId}`)
    .then(()  =>{
     navigate('/fosters/');
    })
    .catch((err)=>console.log(err))
 }

  return (
    <div>
     <form className="apopt-card" onSubmit={handleSubmit}>    
     <AdoptPage refreshFosters={allFosters} />
     
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
        
       
        <button type="submit">UPDATE</button>
        </form>
        <button onClick={deleteFoster}>DELETE</button>
  </div>
  )
}

export default FostersListPage;