import React, { useState } from "react";

function CarRental() {
  const [cars] = useState([
    { id: 1, name: "Swift", price: 1500 },
    { id: 2, name: "Innova", price: 3000 },
    { id: 3, name: "Honda City", price: 2500 }
  ]);

  const [selectedCar, setSelectedCar] = useState("");

  return (
    <div>
      <h1>Car Rental System</h1>

      <h2>Available Cars</h2>

      {cars.map((car) => (
        <div key={car.id}>
          <h3>{car.name}</h3>
          <p>Price: ₹{car.price}/day</p>

          <button onClick={() => setSelectedCar(car.name)}>
            Book Now
          </button>
        </div>
      ))}

      {selectedCar && (
        <h2>You selected: {selectedCar}</h2>
      )}
    </div>
  );
}

export default CarRental;