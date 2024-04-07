import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Fulidity Button', () => {
  test('renders correctly', () => {
    render(<Button />);
  });
});
