import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdoptForm from "./AdoptForm"
 
function FosterList() {

const[fosters, setFosters] = useState([])
 
  const addFoster = (foster) => {
    const updatedFosters = [...fosters, foster]

    setFosters(updatedFosters)
  }


  return (
    
    <div className:list>
    <AdoptForm addFoster= {addFoster} />

    <h3>Application List</h3>
    <table>
    <thead>
     <tr>
      <th>Name</th>
      <th>Family Size</th>
      <th>Housinf Type</th>
     </tr>
</thead>
     <tbody>
      {fosters.map((foster) => {
        return (
                <tr div key={foster._id}>
                  <td>{foster.name}</td>
                  <td>{foster.family}</td>
                  <td>{foster.housing}</td>
                  <td>
                  <button onClick={() => deleteMovie(foster._id)} className="button">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          </table>
          </div>
        );
      }


export default FosterList;
