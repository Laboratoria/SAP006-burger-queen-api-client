import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from '../src/components/inputs/Input'

describe('Input.js', () => {
    test('Should render Input without errors', () => {
        render(<Input onChange={() => {}} />)
    })
})

test('selected salon', done => {
    function handleRoleChange(e) {
      expect(e.target.value).toEqual('salon');
      done();
    }
    const { getByPlaceholderText } = render(
      <Input onChange={handleRoleChange} placeholder="salon" />);
    const infoRoleSalon = getByPlaceholderText('salon');
    fireEvent.change(infoRoleSalon, { target: { value: "salon" } });
  });
  
  test('selected kitchen', done => {
    function handleRoleChange(e) {
      expect(e.target.value).toEqual('kitchen');
      done();
    }
    const { getByPlaceholderText } = render(
      <Input onChange={handleRoleChange} placeholder="kitchen" />);
    const infoRole = getByPlaceholderText('kitchen');
    fireEvent.change(infoRole, { target: { value: "kitchen" } });
  });


