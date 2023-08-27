import React from 'react';
import Counter from '../Components/Counter';
import Cart from '../Components/Cart';
import Form from '../Components/Form';

const Home = () => {
    return (
        <div>
            Home
            <Counter></Counter>
            <Cart></Cart>
            <Form></Form>
        </div>
    );
};

export default Home;