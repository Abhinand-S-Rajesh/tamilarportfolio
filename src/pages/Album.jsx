import React from 'react';
import './Album.css';

const Album = () => {
  // Generate array from 1 to 59 for image filenames
  const imageNumbers = Array.from({ length: 59 }, (_, i) => i + 1);

  return (
    <div className="album-page">
      <div className="album-header">
        <h1>Our Album</h1>
        <p className="album-subtitle">Capturing moments and memories</p>
      </div>
      
      <div className="album-grid">
          {imageNumbers.map((num) => (
            <div key={num} className="album-item">
              <div className="image-wrapper">
                <img 
                  src={`/assets/album/${num}.png`} 
                  alt={`Album moment ${num}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Found'; // Fallback
                  }}
                />
                <div className="overlay">
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Album;
