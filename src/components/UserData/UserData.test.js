import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import { InputContentUserData } from './UserData'
import { InputRadioUserData } from './UserData'

afterEach(cleanup)

describe('Testing the InputContentUserData component', () => {

  it('The "data-testid=user-data-div-text-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-div-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-input-text-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-input-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-label-text-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-label-text-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-img-text-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData />);
    expect(queryByTestId('user-data-img-text-content')).toBeInTheDocument();
  });

  it ('The button inside a input should dispatch a function.', () => {
    const fn = jest.fn();
    const {queryByTestId} = render (<InputContentUserData buttonEvent={fn}/>)
    const btn = queryByTestId('user-data-btn-text-content');
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it ('The text input value should be modified during onChange events.', () => {
    const {queryByTestId} = render (<InputContentUserData/>)
    const input =  queryByTestId('user-data-input-text-content');
    fireEvent.change(input, {target: {value:'test'}});
    expect(input.value).toBe('test');
  });

});

describe('Testing the InputRadioUserData component', () => {
  it('The "data-testid=user-data-div-radio-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputRadioUserData />);
    expect(queryByTestId('user-data-div-radio-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-input-radio-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputRadioUserData />);
    expect(queryByTestId('user-data-input-radio-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-label-radio-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputRadioUserData />);
    expect(queryByTestId('user-data-label-radio-content')).toBeInTheDocument();
  });

  it('The "data-testid=user-data-p-radio-content" should be in the document.', () => {
    const {queryByTestId} = render(<InputRadioUserData />);
    expect(queryByTestId('user-data-p-radio-content')).toBeInTheDocument();
  });

  it ('The radio input value should be modified during onChange events.', () => {
    const {queryByTestId} = render (<InputRadioUserData />)
    const input =  queryByTestId('user-data-input-radio-content');
    fireEvent.change(input, {target: {value:'test'}});
    expect(input.value).toBe('test');
  });
})