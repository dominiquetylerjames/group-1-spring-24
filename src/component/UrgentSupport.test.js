import React from 'react';
import { render, screen } from '@testing-library/react';
import UrgentSupport from './UrgentSupport';

describe('UrgentSupport', () => {
  // Test if the component renders without crashing
  test('renders without crashing', () => {
    render(<UrgentSupport />);
    // If the component renders without throwing an error, the test passes
  });

  // Test all sections of text are displayed on the page
  test('displays all sections', () => {
    render(<UrgentSupport />);
    const introText = screen.getByText(/in need of urgent support/i);
    const helplineText = screen.getByText(/BAWSO/i);
    const policeText = screen.getByText(/cardiff bay police station/i);
    const womensAidText = screen.getByText(/advice and support regarding accomodation/i);
    expect(introText).toBeInTheDocument();
    expect(helplineText).toBeInTheDocument();
    expect(policeText).toBeInTheDocument();
    expect(womensAidText).toBeInTheDocument();
  });

  // Test if images are clickable
  test('images are clickable', () => {
    render(<UrgentSupport />);
    const imageLinks = screen.getAllByRole('link');
  
    // Assert that each image link has an href attribute and opens in a new tab
    imageLinks.forEach(link => {
      // Check if the link has an href attribute
      expect(link).toHaveAttribute('href'); 
      // Check if the link opens in a new tab
      expect(link).toHaveAttribute('target', '_blank'); 
    });
  });
});
