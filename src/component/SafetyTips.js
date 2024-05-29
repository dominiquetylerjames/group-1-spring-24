import React from 'react';
import "./SafetyTips.css";

const HoverEffect = ({ imageSrc, altText, overlayText }) => {
    return (
      <div className="image-container">
        <img src={imageSrc} alt={altText} />
        <div className="overlay">
          <div className="text">{overlayText}</div>
        </div>
      </div>
    );
  };
  
  const SafetyTips = () => {
    const images = [
      { src: 'image1.jpg', alt: 'Image 1', text: 'Text 1' },
      { src: 'image2.jpg', alt: 'Image 2', text: 'Text 2' },
      { src: 'image3.jpg', alt: 'Image 3', text: 'Text 3' },
      { src: 'image4.jpg', alt: 'Image 4', text: 'Text 4' },
    ];
  
    return (
      <div className="SafetyTips">
        <div className="image-grid">
          {images.map((image, index) => (
            <HoverEffect
              key={index}
              imageSrc={image.src}
              altText={image.alt}
              overlayText={image.text}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default SafetyTips;