import { useState } from "react";
0
function AddApartmentPage() {
    const [headline, setHeadline] = useState("");
    const [price, setPrice] = useState(1);

    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            <form >
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
                name="pricePerDay"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />

                <button type="submit">Create Apartment</button>

            </form>
        </div>
    )
}

export default AddApartmentPage;