import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";

function DogDetailPage(props) {
  
    const [oneDog, setOneDog] = useState(null);
    const { dogId } = useParams();

    useEffect(() => {
    
      const oneDog = async () => {
        const { data } = await axios.get(
          `http://localhost:5005/api/dogs":${dogId}`
        );
        setOneDog(data);
        console.log("oneDog", data);
      };
      oneDog();
    }, [dogId]);
  
    return (
      <div className="dog-detail-page">
        {oneDog &&(
          <>
          <Divider>Dog Card</Divider>
         < Row style={{ width: "100%", justifyContent: "center" }}>
               <div className="dog-card" key={dog._id} >
               <h4 className="dog-card-name"> {dog.name}</h4>
               <h4 className="dog-card-age"> {dog.age}</h4>
               <h4 className="dog-card-breed"> {dog.breed}</h4>
               <h4 className="dog-card-size"> {dog.size}</h4>
               <h5 className="dog-card-info"> {dog.info}</h5>
               <img src={dog.image} className="dog-card-img"/>
          </div>
          </Row>
          </>
        )
       }   
        <Link to="/dogs">
        <button>Back to List</button></Link>
     </div>
    )
  }

export default DogDetailPage
