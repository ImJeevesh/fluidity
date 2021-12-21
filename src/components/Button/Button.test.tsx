import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Fulidity Button', () => {
  test('renders correctly', () => {
    render(<Button />);
  });
});
