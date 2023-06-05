import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DogForm from "../components/DogForm"
import axios from "axios"

function DogsListPage() {

const [dogs, setDogs] = useState([]);

const allDogs =() => {                               
  axios
      .get("http://localhost:5005/api/dogs")
      .then((response) => setDogs(response.data))
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    allDogs();
  }, [] );

  return (
    <div>
     <Search searchText={searchText} setSearchText={setSearchText} />

     <div className="dog-list">
     <Divider>Dog List</Divider>
     < Row style={{ width: "100%", justifyContent: "center" }}>

     <DogForm refreshDogs={allDogs} />
     
     {dogs.map((dog) => (

            <div className="dog-list-id" key={dog._id}>
               <h4 className="dog-list-name"> {dog.name}</h4>
               <h4 className="dog-list-age"> {dog.age}</h4>
              <img src={dog.image} className="dog-list-img"/>
            
            </div>))} 
       </Row>
    </div> 
   </div> 
  )
}

export default DogsListPage;
