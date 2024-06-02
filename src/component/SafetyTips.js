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
      { src: 'Rape-Alarm.jpeg', alt: 'Rape Alarm', text: 'This is a rape alarm' },
      { src: 'Trident-Walk-Easy.jpg', alt: 'Trident Alarm', text: 'This is a Trident alarm which makes uncomfortable noise and also releases bad odour to repell attackers' },
      { src: 'image3.jpg', alt: 'Image 3', text: 'Phone emergency button' },
      { src: 'image4.jpg', alt: 'Image 4', text: 'Text 4' },
      { src: 'image5.jpg', alt: 'Image 5', text: 'Pepper Spray - illegal' },
      { src: 'image6.jpg', alt: 'Image 6', text: 'Knife/sharp weapon - illegal' },
    ];
  
    return (
      <div className="SafetyTips">
        <h4>Welcome to the page about Safety tips. Here you can learn the best way to protect yourself if you face imminent danger.</h4>
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