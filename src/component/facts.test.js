// Importing necessary modules for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // This is for the .toBeInTheDocument() matcher
import Facts from './Facts'; 

// Defining the test suite for the Facts component
describe('Facts Component', () => {
  // Test to check if the Facts component renders without crashing
  test('renders without crashing', () => {
    render(<Facts />);
  });

  // Test to check if the correct heading is rendered
  test('renders the correct heading', () => {
    render(<Facts />);
    const headingElement = screen.getByText(/Did you know?/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Test to check if all facts are rendered
  test('renders all facts', async () => {
    render(<Facts />);

    const facts = [
      'Cardiff has the highest crime rate compared to other South Glamorgan\'s 55 towns, villages, and cities. As of 2024, the crime rate in Cardiff is 41% higher than Wales and 36% higher than the overall figure for England, Wales, and Northern Ireland.',
      'In 2023, Cardiff had an overall crime rate of 118 crimes per 1,000 people. The most common crimes in Cardiff are violence and sexual offences, with shoplifting becoming the fastest growing crime.',
      'Cathays is the most popular yet most dangerous area in Cardiff. The area has a high overall crime rate of 351.8 crimes per 1000 people, marked by significant issues in violent crime, shoplifting, antisocial behaviour, criminal damage, and vehicle crime.',
      'Butetown, known for its scenic Bay area, has a surprisingly high crime rate of 277.8 crimes per 1000 people, with significant issues in violent crime, antisocial behaviour, shoplifting, and drug offences.',
      'South Wales Police employs facial recognition technology to prevent and identify crime while safeguarding vulnerable individuals. This technology is commonly deployed at public gatherings and crowded areas to identify individuals of interest, triggering an alert upon detecting a potential match.',
      'Plain clothes officers patrol the city centre to prevent violence against women and girls by targeting suspicious individuals and those displaying unwanted sexual behaviour.'
    ];

    // Looping through each fact and checking if it is rendered
    for (const fact of facts) {
      // Using a function to match the full text for each fact
      const factElement = await screen.findByText(fact);
      expect(factElement).toBeInTheDocument();
    }
  });
});
