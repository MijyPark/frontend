import { Card, Col, Button } from "antd";
import axios from 'axios'
import { useState } from "react";

const [dogs, setDogs] = useState([])

function DogCard({ dog, dogs, setDogs }) {
  const handleDelete = (dogName) => {
    console.log("deleted dog", dogName);
    const filteredDogs = dogs.filter((dog) => {
      if (dog.name !== dogName) {
        return dog;
      }
    });
    setDogs(filteredDogs);
  };

  return (
    <Col>
      <Card
        title={dog.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img
          src = "https://www.thesprucepets.com/dog-breed-profile-beagle-1117938"
          height={60}
          alt="one"
        />
        <p>size:{dog.size}</p>
        <p>Age:{dog.age}</p>

        <Button
          type="primary"
          onClick={() => {
            handleDelete(dog.name);
          }}
        >
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default DogCard;