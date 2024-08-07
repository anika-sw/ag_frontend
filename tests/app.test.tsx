import App from '../src/App';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App component', () => {
  it('renders landing page text', () => {
    render(<App />); // render the App component in the DOM

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
