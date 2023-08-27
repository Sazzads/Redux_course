import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    // const formData = useSelector((state) => state.formdata.formdata); //for array
    const formData = useSelector((state) => state.formdata.formdata);
    console.log(formData.name);
    return (
        <div>
            <h2>Form Data:</h2>
            <ul>
                <li>Name: {formData?.name}</li>
                <li>Email: {formData?.email}</li>
                <li>Password: {formData?.password}</li>
            </ul>
            {/* <ul>
                {formData.map((data, index) => (
                    <li key={index}>
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Password: {data.password}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Display;