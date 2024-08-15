import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {

    formData: {
        title: "",
        discription: ""
    },
    blogs: []
}


export const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, actions) => {
            // console.log(actions)
            let cpyFormData = { ...state.formData }
            cpyFormData = { ...cpyFormData, ...actions.payload }
            state.formData = cpyFormData
            // console.log(cpyFormData)
        },
        handleNewBlog :(state,actions)=>{
            state.blogs.push({
                id:nanoid(),
                ...state.formData
            });
            state.formData = {
                title: "",
                discription: ""
            }
            localStorage.setItem('blogs', JSON.stringify(state.blogs));
            
        },
        blogsLoadInitialFromStorage:(state,actions)=>{
            state.blogs = actions.payload.blogs;
        }
    }
});


export const { blogsLoadInitialFromStorage,handleInputChange,handleNewBlog } = BlogSlice.actions;

export default BlogSlice.reducer;