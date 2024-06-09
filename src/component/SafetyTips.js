import React from 'react';
import "./SafetyTips.css";

/* Function to set up the hover effect over images*/
const HoverEffect = ({ imageSrc, altText, overlayText, redOverlay, link }) => {
  return (
      <div className={`image ${redOverlay || ''}`}>
          <img src={imageSrc} alt={altText} />
          <div className="overlay">
              <div className="text">
                  {overlayText}
                  {link && (
                      <>
                          {' '} 
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="overlay-link">{link.label}</a>
                      </>
                  )}
              </div>
          </div>
      </div>
  );
};
  /* rel="noopener noreferrer" is to protect the app when linking external websites */
  /* Function to add images, text and links to the page */
  const SafetyTips = () => {
    const images = [
      {
        src: 'Ashley-Alarm.png',
        alt: 'Rape Alarm',
        text: 'Rape alarm is a small device which can be attached to keys or other convenient places. Its purpose is to make a loud noise and/or flash bright light with a press of a button, attracting attention and surprising your attacker. This device is legal in the UK as it does not cause physical harm and can be purchased at amazon amongst other places. The alarm on the picture is available on this website',
        link: { url: 'https://empoweredbyashley.com/', label: 'Ashley Alarm' }
      },
      {
        src: 'Trident-Alarm.png',
        alt: 'Trident Alarm',
        text: 'Similarly to rape alarm, Trident alarm can make a very loud noise. It also produces UV light and on top of things releases a foul odour. Once again the aim of the device is to make things difficult for your attacker. You can purchase one here: ',
        link: { url: 'https://wealarms.co.uk/product/trident-triple-action-personal-alarm/', label: 'Trident Walk Easy Alarm'}
      },
      { 
        src: 'Emergency-Dial.png', 
        alt: 'Phone emergency button', 
        text: 'Most modern phones today have an emergency button option. This can be an already set or it can be set up by the user. If you are unsure how this works on your phone, speak to your provider or look for a guide online. Remember to also add your emergency contacts and always keep your device charged when going outside. Your phone or smart watch can be used in many ways when it comes to your safety.'
      },
      { 
        src: 'Whistle.png', 
        alt: 'Whistle', 
        text: 'If all else is unavailable to you, there is always a good old fashioned whistle. These are cheap to purchase and easy to carry. And while they do not posses the same features as alarms above do, they still make noise which can attract attention and potentially startle your attacker.',
        link: { url: 'https://www.amazon.co.uk/s?k=whistle', label: 'Amazon list of whistles'}
      },
      { 
        src: 'Pepper-Spray.png', 
        alt: 'Pepper Spray', 
        text: 'Pepper Spray is likely one of the first items many of us think of when it comes to personal safety and self-defence tools. However this item is currently ILLEGAL in the UK. This means that should you obtain and use it, it may end up being more trouble for you, than it is worth. That said, you may still be able to carry pepper spray if you travel to a country where it is allowed. Always make sure to check local laws!', 
        redOverlay: 'red-overlay', /* Create red hover effect instead of green one */
      },
      { 
        src: 'Knife.png', 
        alt: 'Sharp Weapon', 
        text: 'In the UK it is ILLEGAL to carry anything that could be considered a weapon and injure another person. This is especially true for sharp weapons of any kind including pocket knives. ', 
        redOverlay: 'red-overlay', /* Create red hover effect instead of green one */
      },
  ];
  
    return (
      <div className="SafetyTips">
        <p>Preparation is a key when it comes to safety. And there are of course many precautions you can take whenever you leave your home such as not walking outside alone after dark, remain aware of your surroundings, keep your loved ones aware where you are if you go outside or even setting up message codes for dangerous situations and taking self-defense classes.</p>
        <p>For the cases where all prevention fails, it is important to have have a last minute option which can mean all the difference when it comes to your safe escape from a dangerous situation. Below are multiple options for items that can help you and some which cannot. Hover over each image to see the description and, if available, also a link.</p>
        <div className="image-grid">
          {images.map((image, index) => (
            <HoverEffect
              key={index}
              imageSrc={image.src}
              altText={image.alt}
              overlayText={image.text}
              redOverlay={image.redOverlay}
              link={image.link}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default SafetyTips;
