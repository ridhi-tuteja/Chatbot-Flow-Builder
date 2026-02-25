import { validateFlow } from '../src/utils/flowValidation';

test('valid single node flow', () => {
  const nodes = [{ id: '1' }];
  const edges = [];

  const result = validateFlow(nodes, edges);

  expect(result.valid).toBe(true);
});

test('invalid multiple root nodes', () => {
  const nodes = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
  const edges = [];

  const result = validateFlow(nodes, edges);

  expect(result.valid).toBe(false);
});

test('valid chained flow', () => {
  const nodes = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];

  const edges = [
    { source: '1', target: '2' },
    { source: '2', target: '3' }
  ];

  const result = validateFlow(nodes, edges);

  expect(result.valid).toBe(true);
});