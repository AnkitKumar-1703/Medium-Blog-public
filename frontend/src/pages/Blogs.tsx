import { useState,} from 'react';
import BlogCard from '../components/BlogCard';
import AppBar from '../components/AppBar';
import { useBlogs } from '../hooks';
import BlogSkeleton from '../components/BlogSkeleton';

function Blogs() {
  const { loading, blogs } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionState, setTransitionState] = useState('fadeIn'); // State to handle transition effects
  const blogsPerPage = 5;

  // Calculate indices for current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice().reverse().slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber:any) => {
    setTransitionState('fadeOut'); // Start fade-out animation
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setTransitionState('fadeIn'); // Start fade-in animation after fade-out completes
    }, 300); // Duration of fade-out animation
  };

  if (loading) {
    return (
      <>
        <AppBar />
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </>
    );
  }
interface blog{
  id:string,
  title:string,
  content:string,
  author:{
    name:string
  }
}
  return (
    <>
      <AppBar />
      <div className={`flex flex-col justify-center items-center min-h-screen transition-opacity duration-300 ${transitionState}`}>
        {currentBlogs.map((blog:blog, index) => (
          <BlogCard
            id={blog.id}
            key={index}
            title={blog.title}
            content={blog.content}
            date='5th July 2024'
            authorName={blog.author?.name || 'Anonymous'}
          />
        ))}
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }:{blogsPerPage:any, totalBlogs:any, paginate:any, currentPage:any}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex justify-center mt-4'>
      <ul className='flex space-x-2'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-full px-3 py-1 cursor-pointer transition-transform transform hover:scale-110`}>
            <button 
              onClick={() => paginate(number)} 
              className={`page-link focus:outline-none ${currentPage === number ? 'text-white' : 'text-gray-700'}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Blogs;
