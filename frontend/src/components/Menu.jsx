import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/Menu.css';



function Menu({ addToCart }) {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/menu')
            .then(response => {
                setMenuData(response.data);
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    }, []);


    const handleAddToCart = (item) => {
        console.log(item);
        addToCart(item);
    };


    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedFeatures, setSelectedFeatures] = useState('All');
    const [selectedRating, setSelectedRating] = useState(0);
    const [selectedMinPrice, setSelectedMinPrice] = useState('');
    const [selectedMaxPrice, setSelectedMaxPrice] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleFeaturesChange = (event) => {
        setSelectedFeatures(event.target.value);
    };

    const handleRatingChange = (event) => {
        setSelectedRating(parseFloat(event.target.value));
    };

    const handleMinPriceChange = (event) => {
        setSelectedMinPrice(parseFloat(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setSelectedMaxPrice(parseFloat(event.target.value));
    };

    const filteredMenu = menuData.filter((item) => {
        return (
            (selectedCategory === 'All' || item.category === selectedCategory) &&
            (selectedType === 'All' || item.type === selectedType) &&
            (selectedFeatures === 'All' || item.features === selectedFeatures) &&
            (selectedRating === 0 || item.rating >= selectedRating) &&
            (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedMinPrice === '' || item.price >= selectedMinPrice) &&
            (selectedMaxPrice === '' || item.price <= selectedMaxPrice)
        );
    });

    return (
        <div className="menu-container">
            <div className="filter-section">
                <input
                    type="text"
                    placeholder="Search for items..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="All">All Category</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Salads">Salads</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Soups">Soups</option>
                    <option value="Breads">Breads</option>
                    <option value="Beverages">Beverages</option>
                    {/* Add more categories as needed */}
                </select>
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value="All">All Type</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                </select>
                <select value={selectedFeatures} onChange={handleFeaturesChange}>
                    <option value="All">All Features</option>
                    <option value="Spicy">Spicy</option>
                    <option value="Gluten-free">Gluten-free</option>
                    <option value="Contains Nuts">Contains Nuts</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Contains Pork">Contains Pork</option>
                    <option value="Contains Alcohol">Contains Alcohol</option>
                    <option value="Contains Seafood">Contains Seafood</option>
                </select>
                <input
                    type="number"
                    placeholder="Min Rating"
                    value={selectedRating}
                    onChange={handleRatingChange}
                    step={0.5}
                />
                <input
                    type="number"
                    placeholder="Min Price"
                    value={selectedMinPrice}
                    onChange={handleMinPriceChange}
                    step={10}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={selectedMaxPrice}
                    onChange={handleMaxPriceChange}
                    step={10}
                />
            </div>
            <div className="menu-items">
                {filteredMenu.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img
                            src={item.imageUrls}
                            alt={item.name}
                            className="item-image"
                        />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Rating: {item.rating.toFixed(1)}</p>
                        <p>Type: {item.type}</p>
                        <p>Features: {item.features}</p>
                        <p>Price: ${item.price}</p>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Menu;
