import React from 'react';
import { render, screen } from '@testing-library/react';
import SafetyTips from './SafetyTips';
/* Make sure to have Jest up to date */

describe('SafetyTips', () => {
  /* Check if both headers (h4) render correctly */
  test('headers load correctly', () => {
    render(<SafetyTips />);
    const header = screen.getAllByRole('heading');
    expect(header.length).toBe(2); /* 2 headers in total - needs to be updated if changed in SafetyTips.js */
  });

  /* Chech if images appear as they should */
  test('all images load correctly', () => {
    render(<SafetyTips />);
    const image = screen.getAllByRole('img');
    expect(image.length).toBe(6); /* 6 images in total - - needs to be updated if changed in SafetyTips.js */
  });

  /* Check if link work properly */
  test('links function properly', () => {
    render(<SafetyTips />);
    const links = screen.getAllByRole('link');
    const expectedLinks = ['Ashley Alarm', 'Trident Walk Easy Alarm', 'Amazon list of whistles',];
    links.forEach((link, index) => {
      expect(link.textContent).toBe(expectedLinks[index]);
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  /* Check that prohibited items are in red */
  test('applies red colour hover effect correctly for prohibited items', () => {
    render(<SafetyTips />);
    const prohibitedItems = screen.getAllByAltText(/Pepper Spray|Sharp Weapon/);
    prohibitedItems.forEach(image => {
      expect(image.parentElement).toHaveClass('red-overlay');
    });
  });
});