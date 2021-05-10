import { renderHook, act } from '@testing-library/react-hooks';
import useItemsSelection from '../useItemsSelection';

describe('Hooks: useItemsSelection', () => {
  test('Default selection === []', () => {
    const {
      result: { current }
    } = renderHook(() => useItemsSelection());

    expect(current.values).toEqual([]);
  });
  test('Initial selection match', () => {
    const { result } = renderHook(() => useItemsSelection([1, 2]));

    expect(result.current.values).toEqual([1, 2]);
  });
  test('Should add new value', () => {
    const { result } = renderHook(() => useItemsSelection());

    act(() => result.current.add('first'));
    expect(result.current.values).toEqual(['first']);
    act(() => result.current.add('first'));
    expect(result.current.values).toEqual(['first']);
    act(() => result.current.add('second'));
    expect(result.current.values).toEqual(['first', 'second']);
  });
  test('Should remove value', () => {
    const { result } = renderHook(() => useItemsSelection(['first', 'second']));

    act(() => result.current.remove('first'));
    expect(result.current.values).toEqual(['second']);
    act(() => result.current.remove('first'));
    expect(result.current.values).toEqual(['second']);
  });
  test('Should remove/add on toggle', () => {
    const { result } = renderHook(() => useItemsSelection(['first', 'second']));

    act(() => result.current.toggle('first'));
    expect(result.current.values).toEqual(['second']);
    act(() => result.current.toggle('first'));
    expect(result.current.values).toEqual(['second', 'first']);
  });
  test('Should reset selection', () => {
    const { result } = renderHook(() =>
      useItemsSelection<string>(['first', 'second'])
    );

    act(() => result.current.reset());
    expect(result.current.values).toEqual([]);
  });
  test('Should reset selection with the given arg', () => {
    const { result } = renderHook(() =>
      useItemsSelection<string>(['first', 'second'])
    );

    act(() => result.current.reset(['third', 'hello']));
    expect(result.current.values).toEqual(['third', 'hello']);
  });
  test('Should work with number', () => {
    const { result } = renderHook(() => useItemsSelection([1, 2]));

    act(() => result.current.toggle(1));
    expect(result.current.values).toEqual([2]);
    act(() => result.current.toggle(1));
    expect(result.current.values).toEqual([2, 1]);
  });
});
