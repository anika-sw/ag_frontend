import App from '../src/App';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// why we switched from toContain() to toBeInTheDocument() for the dropdown menu tests
// From ChatGTP: Limitations in DOM Testing: When used in the context of DOM testing, 
// toContain isn't designed to verify the existence of an element node within the DOM tree. 
// It's more suitable for verifying text content within a rendered string (substring).

describe('App component', () => {
  it('renders landing page text', () => {
    render(<App />); // render the App component in the DOM

    // consolidate all string checks into a single test per Ansel's recommendation
    expect(screen.getByText('AutomatedGroove')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText('Mood')).toBeInTheDocument();
    expect(screen.getByText('Tempo')).toBeInTheDocument();
  });

  // mock API calls
  it('calls APIs, captures song URL and displays song name', async () => {
    render(<App />);

    // Select (click) options
    fireEvent.click(screen.getByText('Genre'));
    fireEvent.click(screen.getByText('rock'));

    fireEvent.click(screen.getByText('Tempo'));
    fireEvent.click(screen.getByText('fast'));

    fireEvent.click(screen.getByText('Mood'));
    fireEvent.click(screen.getByText('happy'));

    // Click Generate Song button
    fireEvent.click(screen.getByText('Generate Song'));

    // Assert song name returned and audioplayer displayed after API call
    await waitFor(() => {
      expect(screen.getByText('Mock Song Name')).toBeInTheDocument();
      expect(screen.getByTestId('audio-player')).toHaveAttribute(
        'src',
        'http://mock_musicfy_api.com/song.mp3'
      );
    });
  });
});


// import React from 'react';
// import { describe, it, expect } from 'vitest';
// import { renderToString } from 'react-dom/server';
// import App from './App';

// describe('App page', () => {
//   it('renders AutomatedGroove text', () => {
//     const html = renderToString(<App />);
//     expect(html).toContain('AutomatedGroove');
//   });
// });

// describe('Genre button on App page', () => {
//   it('renders Genre dropdown menu', () => {
//     const html = renderToString(<App />);
//     expect(html).toContain('Genre');
//   });
// });

// describe('Mood button on App page', () => {
//   it('renders Mood dropdown menu', () => {
//     const html = renderToString(<App />);
//     expect(html).toContain('Mood');
//   });
// });

// describe('Tempo button on App page', () => {
//   it('renders Tempo dropdown menu', () => {
//     const html = renderToString(<App />);
//     expect(html).toContain('Tempo');
//   });
// });
