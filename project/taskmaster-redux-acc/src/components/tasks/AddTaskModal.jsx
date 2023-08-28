import React from 'react';
import Modal from '../ui/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const onCancel = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='programming hero'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="title" className='mb-2'>Title</label>
                        <input className='w-full rounded-md' id='title' type="text" {...register("title")} />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="title" className='mb-2'>Description</label>
                        <textarea className='w-full rounded-md' id='description' type="text" {...register("description")} />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="title" className='mb-2'>Deadline</label>
                        <input className='w-full rounded-md' id='date' type="date" {...register("date")} />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="title" className='mb-2'>Assign to</label>
                        <select className='w-full rounded-md' id='assignTo'  {...register("assignTo")}>
                            <option value="Mir Hussain">Mir Hussain</option>
                            <option value="Mezba Abedin">Mezba Abedin</option>
                            <option value="Nahid Hasan"> Nahid Hasan</option>
                            <option value="Mizanur Rahman">Mizanur Rahman</option>
                            <option value="Tanmoy Parvez">Tanmoy Parvez</option>
                            <option value="Fahim Ahmed Feroz">Fahim Ahmed Feroz</option>
                            <option value="Rahatul Islam">Rahatul Islam</option>
                            <option value="Samin Isrsr Ravi">Samin Isrsr Ravi</option>
                            <option value="Mehedi Anik">Mehedi Anik</option>
                            <option value="Ehtisam Haq">Ehtisam Haq</option>
                            <option value="Anisur Rahman">Anisur Rahman</option>
                            <option value="Muktadir Hasan">Muktadir Hasan</option>
                            <option value="Masud Alam">Masud Alam</option>

                        </select>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="title" className='mb-2'>Priority</label>
                        <select className='w-full rounded-md' id='Priority' {...register("Priority")}>
                            <option defaultValue value="High">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>

                        </select>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <button onClick={() => onCancel()} className='btn btn-danger' type='button'>Cancel</button>
                    </div>

                    <button className='btn btn-primary' type='submit'>Submit</button>

                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;