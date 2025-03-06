import React, { useState } from "react";

const ChangeAddress = () => {
  const [address, setAddress] = useState(
    "Industrial Area, Sector 62, Noida, Uttar Pradesh 201309"
  );
  const [showAddress, setShowAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const handleAddressChange = (e) => {
    e.preventDefault();
    if (newAddress.trim() !== "") {
      setAddress(newAddress);
    }
    setShowAddress(false);
  };

  return (
    <div className="mt-8">
      {showAddress ? (
        <form onSubmit={handleAddressChange}>
          <input
            type="text"
            placeholder="Enter your address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </form>
      ) : (
        <p>
          Address: <span className="font-semibold">{address}</span>
        </p>
      )}
      {!showAddress && (
        <button
          className="my-6 cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={() => setShowAddress(true)}
        >
          Change Address
        </button>
      )}
    </div>
  );
};

export default ChangeAddress;
