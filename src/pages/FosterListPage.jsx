import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdoptForm from "./AdoptForm"
 
function FosterList() {

const[fosters, setFosters] = useState([])
 
useEffect(() => {                              
  axios
    .get("https://localhost:5005/api/fosters")
    .then((response) => {
      console.log('response.data', response.data);
      setFosters(response.data)
    });
  
}, [] );
  
const addFoster = (foster) => {
    const updatedFosters = [...fosters, foster]

    setFosters(updatedFosters)
  }
  const deleteFoster = fosterId => {
    const filteredFosters = fosters.filter(foster => {
      return foster._id !== fosterId;
    });
 
    setFosters(filteredFosters);
  };


  return (
    <div className="form>
    <AdoptForm addFoster= {addFoster} />
    <h3>Family List</h3>

      {fosters.map (foster) = > (
                <div key={foster._id} className="foster-card">
                  <h3>{foster.name}</h3>
                  <p>Family Size: {foster.family}</p>
                  <p>Housing: {foster.housing}</p>
                  <p>About: {foster.info}</p>
 
                  <button onClick={() => deleteFoster(foster._id)} className="delete">Delete</button>
                </div>
              );
            }


export default FosterList;