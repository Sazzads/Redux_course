import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../Redux/featurers/counter/counterSlice';

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h1 className='text-7xl'>{count}</h1>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => dispatch(incrementByValue(5))} className='btn bg-black text-white rounded-lg p-2'>Increment By 5</button>
                <button onClick={() => dispatch(increment())} className='btn bg-black text-white rounded-lg p-2'>Increment</button>
                <button onClick={() => dispatch(decrement())} className='btn bg-black text-white rounded-lg p-2'>Decrement</button>

            </div>
        </div>
    );
};

export default Counter;