import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogsLoadInitialFromStorage } from '../store/Slices/BlogSlice'

const AllblogList = () => {
  const dispatch = useDispatch()
  const {blog} = useSelector((state)=>state)
  const {blogs} = blog

 useEffect(()=>{
  dispatch(blogsLoadInitialFromStorage({
    blogs:JSON.parse(localStorage.getItem('blogs') || '[]')
  }))
 },[])
  return (
    <div>
      {
        blogs.length > 0 ?
        blogs.map((blog)=>(
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.discription}</p>
          </div>
        )):<h1>No blog Added ! pleas Add blog.</h1>
      }
    </div>
  )
}

export default AllblogList
