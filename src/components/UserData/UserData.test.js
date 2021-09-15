import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { Button } from '../Button/Button';
import { InputContentUserData } from './UserData'

afterEach(cleanup)

describe('Testing the InputContentUserData component', () => {

  it('The "data-testid=user-data-div-text-content" should be truthy.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-div-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-input-text-content" should be truthy.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-input-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-label-text-content" should be truthy.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-label-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-img-text-content" should be truthy.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-img-text-content')).toBeInTheDocument();
  });

  it ('The buttons inside a input should dispatch a function.', () => {
    const fn = jest.fn();
    render(<InputContentUserData> <Button buttonEvent={fn}></Button></InputContentUserData>);
    const btn = screen.queryAllByTestId('user-data-btn-text-content');
    fireEvent.click(btn)
    expect(fn).toHaveBeenCalledTimes(1);
  });

});