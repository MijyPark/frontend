
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"

function DogListPage() {

  const [dogs, setDogs] = useState([]);

  const getAllDogs = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/dogs`)
      if(response) {setDogs(response.data)
      }    
  }

  useEffect(() => {
    getAllDogs();
  }, [] );

  return (
    <>
      <Navbar/>
     <div className="dog-list-container">

      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >

        {dogs.map((dog, _id) => {
          return (
            <div className="list-group" key={dog._id}>
               <h4 className="dog-card-name"> {dog.name}</h4>
               <h5 className="dog-card-text"> {dog.info}</h5>
              <img src={dog.image} className="dog-card-img"/>
            
            </div>
        )}
        )} 
      </div>
       </div> 
  </div>
  </>
)

}

export default DogListPage;
