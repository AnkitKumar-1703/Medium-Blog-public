
import { Link } from 'react-router-dom'
interface blog{
    title:string,
    content:string,
    authorName:string,
    date:string,
    id:string
}
export default function BlogCard({title,content,authorName,date,id}:blog) {
  return (
    <Link className='w-1/2 border-b-2 p-6 cursor-pointer' to={`/blog/${id}`}>
    
        <div className='flex  items-center '>
            <div className='rounded-full bg-slate-600 text-white w-8 h-8 flex justify-center items-center mx-1'>{authorName[0].toUpperCase()}</div>
            <div className='mx-1 font-semibold text-lg'>{authorName}</div>
            <div className='mx-1 text-slate-500'>{date}</div>
        </div>
        <div className='my-4 px-2'>
            <div className='text-3xl text-balance font-bold'>{title}</div>
            <div className='text-lg'>{content.slice(0,150)+"...."}</div>

        </div>

        <div className='text-slate-600 my-4 px-3'> {Math.ceil(content.length/100)} min read</div>

    
    </Link>
  )
}
