import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dec, decByValue, inc, incByValue } from '../Redux/featurers/Cart/cartSlice';
import Display from './Display';

const Cart = () => {
    const { calc } = useSelector((state) => state.calc)
    const dispatch = useDispatch()


    return (
        <div className='border-2 border-black p-3 my-10 mx-32 mx-auto'>

            <div className='border-2 border-black bg-pink-200 p-3 w-80 h-48 my-5 mx-auto'>
                <Display></Display>
            </div>
            <div>
                <div className='text-center'>
                    <h2>Cart</h2>
                    <h1 className='text-5xl my-5'>{calc}</h1>
                </div>
                <div className='flex gap-4 justify-center'>

                    <button onClick={() => dispatch(inc())} className='btn bg-black text-white rounded-lg p-2'>Increment</button>
                    <button onClick={() => dispatch(dec())} className='btn bg-black text-white rounded-lg p-2'>Decrement</button>
                    <button onClick={() => dispatch(incByValue(5))} className='btn bg-black text-white rounded-lg p-2'>Increment by 5</button>
                    <button onClick={() => dispatch(decByValue(5))} className='btn bg-black text-white rounded-lg p-2'>Decrementc by 5</button>

                </div>
            </div>
        </div>
    );
};

export default Cart;