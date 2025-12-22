import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carData } from '../data';
import './Carinfo.css';

const Carinfo = () => {
    const { carid } = useParams();
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);

    // Flatten data if nested (handling your previous [ [ ] ] issue)
    const flatData = Array.isArray(carData[0]) ? carData[0] : carData;
    const car = flatData.find(item => item.id === parseInt(carid));

    if (!car) return <div className="error-msg"><h2>Car not found!</h2></div>;

    const handleAddToCart = () => {
        setAdded(true);
        // Optional: Save to localStorage to persist the cart
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!cart.find(c => c.id === car.id)) {
            cart.push(car);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        setTimeout(() => setAdded(false), 2000); // Reset button text after 2s
    };

    return (
        <div className='detail-wrapper'>
            <button className='floating-back' onClick={() => navigate(-1)}>← Back</button>
            
            <div className='detail-container'>
                <div className='image-section'>
                    <img className='detail-image' src={car.image} alt={car.name} />
                </div>

                <div className='info-section'>
                    <span className="brand-badge">{car.brand}</span>
                    <h1 className="car-name">{car.name}</h1>
                    <div className="price-tag">{car.price}</div>
                    
                    <div className='specs-grid'>
                        <div className="spec-item">
                            <span>Engine</span>
                            <p>{car.engine_type}</p>
                        </div>
                        <div className="spec-item">
                            <span>Fuel</span>
                            <p>{car.fuel_type}</p>
                        </div>
                        <div className="spec-item">
                            <span>Mileage</span>
                            <p>{car.mileage}</p>
                        </div>
                        <div className="spec-item">
                            <span>Max Speed</span>
                            <p>{car.highest_speed}</p>
                        </div>
                    </div>

                    <button 
                        className={`btn-cart ${added ? 'added' : ''}`} 
                        onClick={handleAddToCart}
                    >
                        {added ? '✓ Added to Cart' : 'Add to Collection'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carinfo;