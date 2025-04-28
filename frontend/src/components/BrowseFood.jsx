import React, { useState } from 'react';

function BrowseFood() {
    const [formData, setFormData] = useState({
        donorName: '',
        foodName: '',
        quantity: '',
        manufactureDate: '',
        expiryDate: '',
        price: '',
        category: 'veg',
        foodImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            foodImage: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the backend)
        console.log(formData);
    };

    return (
        <div>
            <header style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
                <h1>Donate Food</h1>
            </header>

            <section style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>Donate Your Surplus Food</h2>
                <form onSubmit={handleSubmit}>
                    {/* Donor's Name */}
                    <label htmlFor="donor-name">Donor's Name</label>
                    <input
                        type="text"
                        id="donor-name"
                        name="donorName"
                        value={formData.donorName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Food Name */}
                    <label htmlFor="food-name">Food Name</label>
                    <input
                        type="text"
                        id="food-name"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        required
                        placeholder="Enter the name of the food"
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Quantity */}
                    <label htmlFor="quantity">Quantity (in kg or units)</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        placeholder="Enter the quantity"
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Manufacture Date */}
                    <label htmlFor="manufacture-date">Manufacture Date</label>
                    <input
                        type="date"
                        id="manufacture-date"
                        name="manufactureDate"
                        value={formData.manufactureDate}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Expiry Date */}
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input
                        type="date"
                        id="expiry-date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Price in Rupees */}
                    <label htmlFor="price">Price (in INR)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        placeholder="Enter the price of food in Rupees"
                        step="0.01"
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Food Category */}
                    <label htmlFor="category">Food Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    >
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non-Veg</option>
                        <option value="bakery">Bakery</option>
                        <option value="dairy">Dairy</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="frozen-foods">Frozen Foods</option>
                        <option value="sweets">Sweets</option>
                    </select>

                    {/* Upload Food Image */}
                    <label htmlFor="food-image">Upload Food Image (Optional)</label>
                    <input
                        type="file"
                        id="food-image"
                        name="food-image"
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ width: '100%', padding: '10px', margin: '8px 0 20px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', fontSize: '1.2em', cursor: 'pointer', width: '100%' }}
                    >
                        Submit Donation
                       
                    </button>
                </form>
            </section>
        </div>
    );
}

export default BrowseFood;