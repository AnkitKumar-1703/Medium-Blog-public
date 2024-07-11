

export default function OneBlogSkeleton() {
  return (
    <div className='flex justify-evenly h-screen m-10 p-10'>
        <div className='w-2/3 border-r p-4'>
            <div className='h-12 bg-slate-300 rounded mb-2 animate-pulse'></div>
            <div className='h-6 bg-slate-300 rounded w-1/3 mb-4 animate-pulse'></div>
            <div className='h-6 bg-slate-300 rounded w-1/4 mb-4 animate-pulse'></div>
            <div className='space-y-4'>
                <div className='h-6 bg-slate-300 rounded w-full animate-pulse'></div>
                <div className='h-6 bg-slate-300 rounded w-11/12 animate-pulse'></div>
                <div className='h-6 bg-slate-300 rounded w-10/12 animate-pulse'></div>
                <div className='h-6 bg-slate-300 rounded w-9/12 animate-pulse'></div>
                <div className='h-6 bg-slate-300 rounded w-8/12 animate-pulse'></div>
            </div>
        </div>
        <div className='w-1/4'>
            <div className='h-6 bg-slate-300 rounded w-1/3 mb-4 animate-pulse'></div>
            <div className='flex items-center gap-2 mt-3'>
                <div className='rounded-full bg-slate-300 w-8 h-8 flex justify-center items-center animate-pulse'></div>
                <div className='h-8 bg-slate-300 rounded w-1/2 animate-pulse'></div>
            </div>
        </div>
    </div>
  )
}
