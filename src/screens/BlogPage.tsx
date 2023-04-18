import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const blogPostsQuery = collection(db, "blog-posts");
    getDocs(blogPostsQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBlogPosts([...blogPosts, doc.data()]);
      });
    });
  }, []);
  return <div>BlogPage</div>;
};

export default BlogPage;
