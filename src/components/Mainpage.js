import React, { useState } from 'react';
import { carData } from '../data';
import { Link } from 'react-router-dom';
import './Mainpage.css';

const Mainpage = () => {
    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='main-wrapper'>
            {/* Hero Section */}
            <div className='hero-section'>
                <div className='video-container'>
                    <video autoPlay loop muted className="bgVideo"><source src="/car1.mp4" type="video/mp4" /></video>
                    <video autoPlay loop muted className="bgVideo"><source src="/car3.mp4" type="video/mp4" /></video>
                    <video autoPlay loop muted className="bgVideo"><source src="/car2.mp4" type="video/mp4" /></video>
                </div>
                
                {/* Overlay for better text contrast */}
                <div className="overlay"></div>

                <div className='hero-content'>
                    <h1 className='animated-text'>Experience the Future</h1>
                    <p className="sub-text">Find your dream machine today</p>
                    <input 
                        className='search-bar' 
                        type='text' 
                        placeholder='Search your car...' 
                        onChange={handleInput}
                    />
                </div>
            </div>

            {/* Systematic Grid Section */}
            <div className='car-section'>
                <h2 className='section-title'>Available Collection</h2>
                <div className='car-grid'>
                    {carData && carData
                        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((curItem) => (
                            <Link to={`/${curItem.id}`} key={curItem.id} className="card-link">
                                <div className='car-card'>
                                    <div className="img-box">
                                        <img src={curItem.image} alt={curItem.name}/>
                                    </div>
                                    <div className="card-info">
                                        <span className="brand-tag">{curItem.brand}</span>
                                        <h3>{curItem.name}</h3>
                                        <p className="price-text">{curItem.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Mainpage;