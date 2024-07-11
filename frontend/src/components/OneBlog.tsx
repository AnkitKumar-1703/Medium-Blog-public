

export default function OneBlog({title ,content,authorName}:{title:string,content:string,authorName:string}) {
  return (

    <div className=' flex justify-evenly h-screen m-10 p-10'>
      
      <div className='w-2/3 border-r p-4'>
        <div className='text-balance font text-5xl font-bold mb-2'>{title}</div>
        <div className='text-lg text-slate-500'>Posted on 5th july </div>
        <div className='text-lg mb-4 text-slate-400'>( {Math.ceil(content.length/100)} min read )</div>
        <div className='text-lg '>{content}</div>

      </div>
      <div className='w-1/4'>
          <div className='text-lg font-semibold'>Author</div>
          <div className='flex gap-2 mt-3'> 
          <div className='rounded-full bg-orange-400 text-white w-8 h-8 flex justify-center items-center mx-1'>{authorName[0].toUpperCase()}</div>
          <div className=' text-2xl font-bold'>{authorName}</div>
      </div>
      </div>
    </div>
  )
}
