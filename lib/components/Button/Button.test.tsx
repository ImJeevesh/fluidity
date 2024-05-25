import { describe, expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Fluidity Button', () => {
  test('renders correctly', () => {
    render(<Button>Fluidity</Button>);
    expect(screen.getByText(/Fluidity/)).toBeDefined();
  });
});
