import {useState } from 'react'
import AppBar from '../components/AppBar'
import { useSearch } from '../hooks';

import BlogCard from '../components/BlogCard';
import BlogSkeleton from '../components/BlogSkeleton';

export default function Search() {
    const [keyword, setKeyword]=useState("");
    const [loader,setloader]=useState(false);
    const [blogs,setBlogs]=useState([]);
    const keyHandler=(e:any)=>{
        setKeyword(e.target.value)
    }
  
    const searchHandler=async()=>{
        setloader(true);
        try {
            // console.log(keyword);
            
            const res=await useSearch({keyword});
            setBlogs(res)
            
        } catch (error) {
            
            console.log(error);
            
        }finally{
            setloader(false)
        }
    }
    if(loader){
        return (
            <div>
                <AppBar />
                <div className='flex justify-center mt-8'>
    
                    
                        
                        <div className="relative w-1/2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" value={keyword} onChange={keyHandler} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Blog" required />
                            <button type="submit" onClick={searchHandler} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                   
    
                </div>
                <div className='flex flex-col items-center min-h-screen'>

                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                </div>
            </div>
        )
    }
    if(blogs.length==0){
        return (
            <div>
                <AppBar />
                <div className='flex justify-center mt-8'>
    
                    
                        
                        <div className="relative w-1/2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" value={keyword} onChange={keyHandler} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Blog" required />
                            <button type="submit" onClick={searchHandler} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                   
    
                </div>
                <div className='text-center mt-4 text-2xl font-bold text-pretty '>No results Found ! Try to search something</div>
            </div>
        )
    }
    return (
        <div>
            <AppBar />
            <div className='flex justify-center mt-8'>

                
                    
                    <div className="relative w-1/2">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" value={keyword} onChange={keyHandler} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Blog" required />
                        <button type="submit" onClick={searchHandler} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
               

            </div>
            <div className='flex flex-col items-center min-h-screen'>

            <SearchResult blogs={blogs}/>
            </div>
            
        </div>
    )
}
interface Blog {
    id: string;
    title: string;
    content: string;
    author?: {
      name: string;
    };
  }

  interface SearchResultProps {
    blogs: Blog[];
  }
  
  const SearchResult: React.FC<SearchResultProps> = ({ blogs }) => {
    return (
      <>
        {blogs.slice().reverse().map((blog, index) => (
          <BlogCard
            id={blog.id}
            key={index}
            title={blog.title}
            content={blog.content}
            date='5th July 2024'
            authorName={blog.author?.name || 'Anonymous'}
          />
        ))}
      </>
    );
  };
