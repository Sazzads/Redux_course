import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../Redux/featurers/Form/formSlice';


const Form = () => {
    const dispatch = useDispatch()

    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = ({ name, email, password });
       
        dispatch(setFormData(data))
    }
    return (
        <div >
            <div className='flex flex-col justify-center items-center w-1/2 border-black border-2 mx-auto my-5'>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="">Name</label>
                    <br />
                    <input name='name' className='border-2 border-black' type="text" />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input name='email' className='border-2 border-black' type="text" />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input name='password' className='border-2 border-black' type="text" />
                    <br />
                    <input  className='bg-gray-500 my-3 p-2 rounded-md cursor-pointer' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Form;