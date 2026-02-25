import { render, screen, fireEvent } from '@testing-library/react';
import SettingsPanel from '../src/components/SettingsPanel';

test('updates text on input change', () => {
  const mockSetNodes = vi.fn();
  const mockSetSelectedNodeId = vi.fn();

  const selectedNode = {
    id: '1',
    data: { label: 'Hello' }
  };

  render(
    <SettingsPanel
      selectedNode={selectedNode}
      setNodes={mockSetNodes}
      setSelectedNodeId={mockSetSelectedNodeId}
    />
  );

  const input = screen.getByDisplayValue('Hello');
  fireEvent.change(input, { target: { value: 'Updated' } });

  expect(mockSetNodes).toHaveBeenCalled();
});