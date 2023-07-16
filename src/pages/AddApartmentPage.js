import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title: headline, pricePerDay: price };

    axios.post(apiURL, body).then((response) => {
      setHeadline("");
      setPrice(1);

      navigate("/");
    });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
