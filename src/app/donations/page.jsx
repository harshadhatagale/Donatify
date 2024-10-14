"use client"
import React, { useState, useEffect } from "react";

// Define the donations URL (adjust if you're using an API)
const donationsUrl = "/donations.json"; // If hosted locally in the public folder

const DonationsList = () => {
  const [donations, setDonations] = useState([]); // Store the donation data
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [category, setCategory] = useState('');
  // Fetch the donation data from the JSON file
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(donationsUrl);
        const data = await response.json();
        setDonations(data);
        setFilteredDonations(data); // Set initial filtered data
      } catch (error) {
        console.error("Error fetching the donations data:", error);
      }
    };

    fetchDonations();
  }, []);
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Filter donations based on selected category
    if (selectedCategory === '') {
      setFilteredDonations(donations); // If no category selected, show all donations
    } else {
      const filtered = donations.filter((donation) => donation.type === selectedCategory);
      setFilteredDonations(filtered);
    }
  };
  // Handle search input
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = donations.filter((donation) =>
      donation.title.toLowerCase().includes(searchValue) ||
      donation.type.toLowerCase().includes(searchValue) ||
      donation.description.toLowerCase().includes(searchValue)
    );
    setFilteredDonations(filtered);
  };

  return (
    <div className="container mx-auto py-8 px-6">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search donations..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Filter by Category: </label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Money">Money</option>
          <option value="Clothes">Clothes</option>
          <option value="Items">Items</option>
          {/* Add more categories if needed */}
        </select>
      </div>
      {/* Donations List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation) => (
            <div key={donation.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{donation.title}</h3>
              <p className="text-gray-500 mb-2">{donation.type}</p>
              <p className="text-gray-600 mb-4">{donation.description}</p>
              <p className="text-blue-500 font-bold">{donation.amount}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No donations found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default DonationsList;
