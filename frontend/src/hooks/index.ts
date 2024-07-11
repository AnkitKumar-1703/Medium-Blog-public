import { useEffect, useState } from "react";
import axios from "axios";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  // console.log("inside the useBlog",localStorage.getItem("token"));

  useEffect(() => {
    axios.get(`Your-backend-url/api/v1/post/bulk`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        // console.log(response.data.posts);

        setBlogs(response.data.posts);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);

      })
    axios.get(`Your-backend-url/api/v1/user/name`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        // console.log(response.data.posts);

        localStorage.setItem("name", response.data.author.name);
        // setLoading(false);
      })
      .catch((e) => {
        // setLoading(false);
        console.log(e);

      })
  }, []);

  return {
    loading, blogs
  }
};
interface Author {
  name: string;
}

interface Blog {
  id: string;
  title: string;
  content: string;
  author: Author;
}

export const useBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    axios.get(`Your-backend-url/api/v1/post/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        setBlog(response.data.post);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [id]);

  return {
    loading, blog
  };
};

interface Profile {
  name: string;
  id: string;
  email: string;
  password: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

interface UseProfileReturn {
  loading: boolean;
  profile: Profile;
  posts: Post[];
}

export const useProfile = (): UseProfileReturn => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>({ name: '', id: '', email: '', password: '' });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(`Your-backend-url/api/v1/user/profile`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        setProfile(response.data.author);
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return {
    loading, profile, posts
  };
};

export async function useSearch({ keyword }:{keyword:string}) {
  try {
    const response = await axios.get(`Your-backend-url/api/v1/post/search/${keyword}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    // console.log(response.data);
    
    return response.data.posts
  } catch (error) {
    console.log(error);
    
  }
  
}
