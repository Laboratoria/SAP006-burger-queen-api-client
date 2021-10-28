import { fireEvent, render } from '@testing-library/react';
import Input from '../components/Input';


test('selected hall', done => {
    function handleChange(e) {
        expect(e.target.value).toEqual('salão');
        done();
    }
    const { getByPlaceholderText } = render(
        <Input onChange={handleChange} placeholder="salao" />);
    const rolekitchen = getByPlaceholderText('salao');
    fireEvent.change(rolekitchen, { target: { value: "salao" } });
});

test('selected kitchen', done => {
    function handleChange(e) {
        expect(e.target.value).toEqual('cozinha');
        done();
    }
    const { getByPlaceholderText } = render(
        <Input onChange={handleChange} placeholder="cozinha" />);
    const rolekitchen = getByPlaceholderText('cozinha');
    fireEvent.change(rolekitchen, { target: { value: "cozinha" } });
});
