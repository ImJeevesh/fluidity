import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Button from './Button';

describe('Fulidity Button', () => {
  test('renders correctly', () => {
    render(<Button />);
  });
});
