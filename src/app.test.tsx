// src/HelloWorld.test.tsx
import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import App from './App';

describe('HelloWorld component', () => {
  it('renders Hello, World! text', () => {
    const html = renderToString(<App />);
    expect(html).toContain('Hello, World!');
  });
});