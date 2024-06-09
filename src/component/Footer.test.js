import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders Footer component and checks content and links', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  // Check for About Us section
  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('This app is to help people feel safe in their local area. We hope you find it useful.')).toBeInTheDocument();

  // Check for Contact Us section
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('Email: KeepSafe@Guardify.co.uk')).toBeInTheDocument();
  expect(screen.getByText('Phone: 0800 123456')).toBeInTheDocument();

  // Check for Take me to section
  expect(screen.getByText('Take me to')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Stats')).toBeInTheDocument();
  expect(screen.getByText('Map')).toBeInTheDocument();
  expect(screen.getByText('Useful Tips')).toBeInTheDocument();
  expect(screen.getByText('Urgent Support')).toBeInTheDocument();

  // Verify the links and their href attributes
  const homeLink = screen.getByText('Home').closest('a');
  const statsLink = screen.getByText('Stats').closest('a');
  const mapLink = screen.getByText('Map').closest('a');
  const tipsLink = screen.getByText('Useful Tips').closest('a');
  const supportLink = screen.getByText('Urgent Support').closest('a');

  expect(homeLink).toHaveAttribute('href', '/');
  expect(statsLink).toHaveAttribute('href', '/stats');
  expect(mapLink).toHaveAttribute('href', '/map');
  expect(tipsLink).toHaveAttribute('href', '/tips');
  expect(supportLink).toHaveAttribute('href', '/urgent-support');
});