import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'bun:test';
import Button from './Button';

describe('Fluidity Button', () => {
  test('renders correctly', () => {
    render(<Button>Fluidity</Button>);
    expect(screen.getByText(/Fluidity/)).toBeDefined();
  });
});
