import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function DogDetailPage({dogs}) {
  
    const [oneDog, setOneDog] = useState(null);
    const { dogId } = useParams();

    useEffect(() => {
      setBorders(null);
      const getOnedog = async () => {
        const { data } = await axios.get(
          "`${import.meta.env.VITE_BASE_API_URL}`/dogs:`${dogId}`"
        );
        setOneDog(data);
        console.log("one dog", data);
      };
      getOneDog();
    }, [dogId]);
  
    return (
      <div className="col-7">
        <h1>{oneDog.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Age</td>
              <td>{oneDog.capital[0]}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                {oneDog.age} old
                <sup>2</sup>
              </td>
            </tr>
        
          </tbody>
        </table>
      </div>
    );
  }

export default DogDetailPage
