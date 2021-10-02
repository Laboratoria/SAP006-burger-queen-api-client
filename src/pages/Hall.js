import { React /*useState*/ } from 'react'

import '../global.css';

function Hall() { 
    /*const [formValues, setFormValues] = useState({});

     const handleSelectChange = (e) => {
         const {name, value} = e.target;
         setFormValues({...formValues, [name]: value});
     };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        /*const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);*/
    }
    return (
        <section className="hall-page">
            <h1>Salão</h1>
            <form onSubmit={handleSubmit}>
                <select name="Mesa" onChange={handleSubmit}>
                    <option valeu="mesa01">Mesa 01</option>
                    <option valeu="mesa02">Mesa 02</option> 
                    <option valeu="mesa03">Mesa 03</option> 
                    <option valeu="mesa04">Mesa 04</option> 
                    <option valeu="mesa05">Mesa 05</option> 
                </select>
                <button type="submit">Pedir</button>
            </form>
        </section>
    );
}

export default Hall;