// Importing necessary libraries and stylesheets
import React from 'react';
import './Facts.css';

// Defining the Facts component
function Facts() {
  return (
    // Main container for the Facts component"
    <div className="factsContainer">
      {/* Container for the facts and heading in the component */}
      <div className="allFacts">
        {/* Heading for the facts section */}
        <h2>Did you know?</h2>
        {/* Container for the facts */}
        <div className="factsDiv">
          <p className='factParagraph'>
            Cardiff has the highest crime rate compared to other South Glamorgan's 55 towns, villages, and cities. As of 2024, the crime rate in Cardiff is 41% higher than Wales and 36% higher than the overall figure for England, Wales, and Northern Ireland.
          </p>
          <p className="factParagraph">
            In 2023, Cardiff had an overall crime rate of 118 crimes per 1,000 people. The most common crimes in Cardiff are violence and sexual offences, with shoplifting becoming the fastest growing crime. 
          </p>
        </div>
        <div className="factsDiv">
          <p className="factParagraph">
          Cathays is the most popular yet most dangerous area in Cardiff. The area has a high overall crime rate of 351.8 crimes per 1000 people, marked by significant issues in violent crime, shoplifting, antisocial behaviour, criminal damage, and vehicle crime.</p>
          <p className='factParagraph'>
          Butetown, known for its scenic Bay area, has a surprisingly high crime rate of 277.8 crimes per 1000 people, with significant issues in violent crime, antisocial behaviour, shoplifting, and drug offences.
          </p>
        </div>
        <div className="factsDiv"> 
          <p className="factParagraph">
          South Wales Police employs facial recognition technology to prevent and identify crime while safeguarding vulnerable individuals. This technology is commonly used at public gatherings and crowded areas to identify individuals of interest, triggering an alert upon detecting a potential match.
          </p>
          <p className="factParagraph">
          Plain clothes officers patrol the city centre to prevent violence against women and girls by targeting suspicious individuals and those displaying unwanted sexual behaviour.
          </p>
        </div>
        <div className="factsDiv"> 
          <p className="factParagraph">
          It takes about 5-10 minutes to report a crime on the South Wales Police website directly on <a href='https://www.south-wales.police.uk/ro/report/'>this link</a>. There is a 'Leave this site' button that closes the site and opens Google if you need to or are worried someone may be watching you. Your form won't be saved or sent.
          </p>
          <p className='factParagraph'>
          If you want to report a crime anonymously, you can contact Crimestoppers, either <a href='https://crimestoppers-uk.org/'>online</a> or on their free helpline 0800555111.
          </p>
        </div>
      </div>
    </div>
  );
}

// Exporting the Facts component as the default export
export default Facts;
