import React, { useState } from 'react';
import './Facts.css';

// Facts component to display various facts and information about Cardiff
function Facts() {
  // Define facts data as an array of objects
  const initialFacts = [
    { id: 1, text: 'Cardiff has the highest crime rate compared to other South Glamorgan\'s 55 towns, villages, and cities. As of 2024, the crime rate in Cardiff is 41% higher than Wales and 36% higher than the overall figure for England, Wales, and Northern Ireland.' },
    { id: 2, text: 'In 2023, Cardiff had an overall crime rate of 118 crimes per 1,000 people. The most common crimes in Cardiff are violence and sexual offences, with shoplifting becoming the fastest growing crime.' },
    { id: 3, text: 'Cathays is the most popular yet most dangerous area in Cardiff. The area has a high overall crime rate of 351.8 crimes per 1000 people, marked by significant issues in violent crime, shoplifting, antisocial behaviour, criminal damage, and vehicle crime.' },
    { id: 4, text: 'Butetown, known for its scenic Bay area, has a surprisingly high crime rate of 277.8 crimes per 1000 people, with significant issues in violent crime, antisocial behaviour, shoplifting, and drug offences.' },
    { id: 5, text: 'South Wales Police employs facial recognition technology to prevent and identify crime while safeguarding vulnerable individuals. This technology is commonly deployed at public gatherings and crowded areas to identify individuals of interest, triggering an alert upon detecting a potential match.' },
    { id: 6, text: 'Plain clothes officers patrol the city centre to prevent violence against women and girls by targeting suspicious individuals and those displaying unwanted sexual behaviour.' },
    { id: 7, text: 'It takes about 5-10 minutes to report a crime on the South Wales Police website directly on this link. There is a \'Leave this site\' button that closes the site and opens Google if you need to or are worried someone may be watching you. Your form won\'t be saved or sent.' },
    { id: 8, text: 'If you want to report anonymously, you can contact Crimestoppers, either online or on their free helpline 0800555111.' },
  ];

  // Use state hook to manage the facts data
  const [facts, setFacts] = useState(initialFacts);

  return (
    <div className="factsContainer">
      <div className="allFacts">
        <h2>Did you know?</h2>
        {/* Map over facts array to render each fact */}
        {facts.map(fact => (
          <p key={fact.id} className="factParagraph">
            {fact.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Facts;
