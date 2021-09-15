import { screen, render, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import * as reactRedux from 'react-redux';
import { MemoryRouter } from 'react-router';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

describe('Home Page', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn());
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test('must display a tittle ', () => {
    useSelectorMock.mockReturnValueOnce('lineas');
    expect(screen.queryByText(/Editor Vec/i)).toBeInTheDocument();
  });
  test('must display modal on click float button', () => {
    const floatButton = screen.getByRole('button');
    fireEvent(floatButton, new Event('click'));
  });
});
