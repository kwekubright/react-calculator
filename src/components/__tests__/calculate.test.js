import calculate from '../../logics/calculate';

describe('calculate', () => {
  test('should return {total: 0, next: null, operation: null} when buttonName is AC', () => {
    expect(calculate({ total: 0, next: null, operation: null }, 'AC')).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('should return {total: 7, next: null, operation: null} when buttonName is 3+4', () => {
    expect(calculate({ total: '3', next: '4', operation: '+' }, '=')).toEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });

  test('should return {total: -1, next: null, operation: null} when buttonName is =', () => {
    expect(calculate({ total: '3', next: '4', operation: '-' }, '=')).toEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });

  test('should return {total: 12, next: null, operation: null} when buttonName is =', () => {
    expect(calculate({ total: '3', next: '4', operation: 'x' }, '=')).toEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  test('should return {total: 0, next: null, operation: null} when buttonName is 0', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '0')).toEqual({ next: '0', total: null });
  });

  test('should return {total: 3, next: null, operation: null} when buttonName is +/-', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '+/-')).toEqual({ total: '-3', next: null, operation: null });
  });

  test('should return { total: 3, next: 3, operation: null } when buttonName is .', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '.')).toEqual({ total: '3', next: '3.', operation: null });
  });

  test('should return { next: 3, total: null } when buttonName is 3', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '3')).toEqual({ next: '3', total: null });
  });

  test('should return {total: 0, next: null, operation: null} when buttonName is =', () => {
    expect(calculate({ total: '3', next: '3', operation: '%' }, '=')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('should return {total: 0, next: null, operation: null} when buttonName is 0', () => {
    expect(calculate({ total: '0', next: '0', operation: null }, '0')).toEqual({});
  });
});
