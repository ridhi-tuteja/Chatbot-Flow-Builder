import { render, screen } from '@testing-library/react';
import NodesPanel from '../src/components/NodesPanel';

import '@testing-library/jest-dom';

test('renders Message node', () => {
  render(<NodesPanel />);
  expect(screen.getByText('Message Node')).toBeInTheDocument();
});