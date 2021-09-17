import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import { InputContentUserData } from './UserData'
import { InputRadioUserData } from './UserData'

afterEach(cleanup)

describe('Testing the UserDataTextContent component', () => {

  it('The UserData Div component should be rendered in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataDiv')).toBeInTheDocument();
  });

  it('The UserData Input component should be rendered in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataInput')).toBeInTheDocument();
  });

  it('The UserData Label component should be rendered in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataLabel')).toBeInTheDocument();
  });

  it('The UserData Img component should be rendered in the document.', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataImg')).toBeInTheDocument();
  });

  it('The UserData Input component, with subject = test, should have the class="test".', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('test');
  });

  it('The UserData Input component, with subject = name, component should have the class="auth-correct-input', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='name' InputValue='' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-correct-input');
  });

  it('The UserData Input component, with subject = name, component should have the class="auth-wrong-input when Error=true', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='name' InputValue='' InputOnChange = {(event) => event.target.value} Error={true}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-wrong-input');
  });

  it('The UserData Input component, with subject = name, component should have the class="auth-correct-input when Error=false', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='name' InputValue='' InputOnChange = {(event) => event.target.value} Error={false}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-correct-input');
  });

  it('The UserData Input component, with subject = name, input value <7, should have the class="auth-wrong-input when Error=true', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='name' InputValue='<7' InputOnChange = {(event) => event.target.value} Error={false}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-wrong-input');
  });

  it('The UserData Input component, with subject = name, input value "greatherthan7", should have the class="auth-correct-input when Error=false', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='name' InputValue='greatherthan7' InputOnChange = {(event) => event.target.value} Error={false}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-correct-input');
  });

  it('The UserData Input component, with subject = email, input value "test", should have the class="auth-wrong-input when Error=false', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='email' InputValue='test' InputOnChange = {(event) => event.target.value} Error={false}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-wrong-input');
  });

  it('The UserData Input component, with subject = email, input value "test@", should have the class="auth-correct-input when Error=false', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='email' InputValue='test@s' InputOnChange = {(event) => event.target.value} Error={false}/>);
    expect(queryByTestId('userDataInput')).toHaveClass('auth-correct-input');
  });


  it('The UserData Button component should not be in the document when subject = test', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='test' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('button')).toBeNull();
  });

  it('The UserData Button component should be in the document when subject = password', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='password' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it('The UserData Button component should be in the document when subject = confirmPassword', () => {
    const {queryByTestId} = render(<InputContentUserData Subject='confirmPassword' InputValue='test' InputOnChange = {(event) => event.target.value}/>);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it ('The Button component, when subject = password, should change class when clicked.', () => {
    const {queryByTestId} = render(
    <InputContentUserData Subject='password' 
    InputValue='test' 
    InputOnChange = {(event) => event.target.value}
    />);
    expect(queryByTestId('button')).toHaveClass('auth-not-show-password')
    fireEvent.click(queryByTestId('button'))
    expect(queryByTestId('button')).toHaveClass('auth-show-password')
  });

  it ('The Button component, when subject = confirmPassword, should change class when clicked.', () => {
    const {queryByTestId} = render(
    <InputContentUserData Subject='confirmPassword' 
    InputValue='test' 
    InputOnChange = {(event) => event.target.value}
    />);
    expect(queryByTestId('button')).toHaveClass('auth-not-show-password')
    fireEvent.click(queryByTestId('button'))
    expect(queryByTestId('button')).toHaveClass('auth-show-password')
  });

})

describe('Testing the UserDataRadioContent component', () => {
  it('The UserDataRadio Div component should be rendered in the document.', () => {
    const {queryByTestId} = render(<InputRadioUserData Subject='test' InputOnChange = {(event) => event.target.value} InputChecked={false}/>);
    expect(queryByTestId('userDataDiv')).toBeInTheDocument();
  });

})