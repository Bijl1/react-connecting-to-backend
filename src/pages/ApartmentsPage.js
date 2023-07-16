import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function DynamicIronbnbList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
    });
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default DynamicIronbnbList;
