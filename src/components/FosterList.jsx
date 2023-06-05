import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdoptForm from "./AdoptForm"
 
function FosterList() {

const[fosters, setFosters] = useState()
 
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

    <div>
    <AdoptForm addFoster= {addFoster} className="form"/>

    <h3>Family List</h3>
      {fosters.map(foster => {
        return (
                <div key={foster._id} className="list">
                  <h3>{foster.name}</h3>
                  <p>Family Size: {foster.family}</p>
                  <p>housing: {foster.housing}</p>
                  <p>housing: {foster.info}</p>

                  <button onClick={() => deleteMovie(foster._id)} className="delete">Delete</button>
                </div>
              );
            })}
          </div>
        );
      }


export default FosterList;