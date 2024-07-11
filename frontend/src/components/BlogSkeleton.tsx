

export default function BlogSkeleton() {
  return (
    <div className='w-1/2 border-b-2 p-6'>
        <div className='flex items-center animate-pulse'>
            <div className='rounded-full bg-slate-300 w-8 h-8 flex justify-center items-center mx-1'></div>
            <div className='mx-1 bg-slate-300 h-6 w-24 rounded'></div>
            <div className='mx-1 bg-slate-300 h-6 w-16 rounded'></div>
        </div>
        <div className='my-4 px-2 animate-pulse'>
            <div className='bg-slate-300 h-8 w-3/4 mb-2 rounded'></div>
            <div className='bg-slate-300 h-6 w-full rounded'></div>
            <div className='bg-slate-300 h-6 w-11/12 rounded mt-2'></div>
        </div>
        <div className='text-slate-300 my-4 px-3 bg-slate-300 h-6 w-20 rounded animate-pulse'></div>
    </div>
  )
}
