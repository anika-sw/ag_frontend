
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


// why we switched from toContain to toBeInTheDocument
// Limitations in DOM Testing: When used in the context of DOM testing (like your React app), 
// toContain isn't designed to verify the existence of an element node within the DOM tree. 
// It's more suitable for verifying text content within a rendered string.


describe('App component', () => {
  it('renders AutomatedGroove text', () => {
    render(<App />);
    expect(screen.getByText('AutomatedGroove')).toBeInTheDocument();
  });

  it('renders Genre dropdown menu', () => {
    render(<App />);
    expect(screen.getByText('Genre')).toBeInTheDocument();
  });

  it('renders Mood dropdown menu', () => {
    render(<App />);
    expect(screen.getByText('Mood')).toBeInTheDocument();
  });

  it('renders Tempo dropdown menu', () => {
    render(<App />);
    expect(screen.getByText('Tempo')).toBeInTheDocument();
  });

  it('calls APIs and displays song URL and name', async () => {
    render(<App />);

    // Select options
    fireEvent.click(screen.getByText('Genre'));
    fireEvent.click(screen.getByText('rock'));

    fireEvent.click(screen.getByText('Tempo'));
    fireEvent.click(screen.getByText('fast'));

    fireEvent.click(screen.getByText('Mood'));
    fireEvent.click(screen.getByText('happy'));

    // Click Generate Song button
    fireEvent.click(screen.getByText('Generate Song'));

    // Assert song URL and name after API call
    await waitFor(() => {
      expect(screen.getByText('Mock Song Name')).toBeInTheDocument();
      expect(screen.getByRole('audio')).toHaveAttribute('src', 'http://example.com/song.mp3');
    });
  });
});
