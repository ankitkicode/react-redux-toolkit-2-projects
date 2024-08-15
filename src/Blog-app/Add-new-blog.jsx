import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  handleInputChange, handleNewBlog } from '../store/Slices/BlogSlice';

const AddNewBlog = () => {
    const state = useSelector((state=>state))
    const dispatch = useDispatch();
   const{ blog } = state
    function handleChange(e){
        dispatch(handleInputChange(
            {
                [e.target.name] : e.target.value
            }
        ));

    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(handleNewBlog())
    }  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} type="text" id="title" value={blog?.formData?.title} name="title" />
                </div>
                <div>
                    <label htmlFor="author">Discription</label>
                    <input onChange={handleChange} type="text" id="author" value={blog?.formData?.discription} name="discription" />
                </div>

                <button type="submit">Add Blog</button>

            </form>
        </div>
    )
}

export default AddNewBlog
