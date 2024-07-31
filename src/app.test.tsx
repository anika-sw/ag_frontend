import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import App from './App';

describe('App page', () => {
  it('renders AutomatedGroove text', () => {
    const html = renderToString(<App />);
    expect(html).toContain('AutomatedGroove');
  });
});

describe('Genre button on App page', () => {
  it('renders Genre dropdown menu', () => {
    const html = renderToString(<App />);
    expect(html).toContain('Genre');
  });
});

describe('Mood button on App page', () => {
  it('renders Mood dropdown menu', () => {
    const html = renderToString(<App />);
    expect(html).toContain('Mood');
  });
});

describe('Tempo button on App page', () => {
  it('renders Tempo dropdown menu', () => {
    const html = renderToString(<App />);
    expect(html).toContain('Tempo');
  });
});