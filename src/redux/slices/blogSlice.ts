// write a redux slice that stores an array of blog posts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogPost } from "../../types/BlogPost";




const initialState = {
    blogPosts: [] as BlogPost[],
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlogPosts: (state, action: PayloadAction<BlogPost[]>) => {
            console.log("setBlogPosts", action.payload)
            state.blogPosts = action.payload;
        },
    }
});

export const { setBlogPosts } = blogSlice.actions;
export default blogSlice.reducer;