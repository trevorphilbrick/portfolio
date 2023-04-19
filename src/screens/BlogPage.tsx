import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogPosts } from "../redux/slices/blogSlice";
import { RootState } from "../redux/store";

type BlogPost = {
  title: string;
  content: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
  id: string;
};

const BlogPage = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state: RootState) => state.blog.blogPosts);
  useEffect(() => {
    const blogPostsQuery = collection(db, "blog-posts");
    getDocs(blogPostsQuery).then((querySnapshot) => {
      const blogPosts: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        blogPosts.push(doc.data() as BlogPost);
      });
      dispatch(setBlogPosts(blogPosts));
    });
  }, []);

  return (
    <div>
      {blogPosts?.map((blogPost) => {
        return (
          <div key={blogPost.id}>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
