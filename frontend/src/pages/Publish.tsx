import { useState } from 'react'
import AppBar from '../components/AppBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/SigninLeft';

export default function Publish() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loader, setLoader] = useState(false)
    // console.log(title,content);
    const navigate=useNavigate()

    const handlePublish = async () => {
        try {
            setLoader(true)
            const response = await axios.post(`Your-backend-url/api/v1/post`, {
                title,
                content
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setLoader(false)
            const id=response.data.id
            navigate(`/blog/${id}`)
            
        } catch (error) {
            setLoader(false)
            console.log(error);

        }

    }

    return (
        <>
            <AppBar />
            <div className=' flex justify-center mt-5'>
                <div className='  w-1/2 flex-col '>
                    <div className="mb-6">
                        <label htmlFor="default-input" className="block mb-2 text-lg font-semibold text-gray-900 ">Title of the Blog</label>
                        <input type="text" id="default-input" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold" placeholder='Title' />
                    </div>
                    <div>

                        <label htmlFor="message" className="block mb-2 text-lg font-semibold text-gray-900 ">Your Blog</label>
                        <textarea id="message" rows={10} value={content} onChange={(e) => setContent(e.target.value)} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your Blog here..."></textarea>

                    </div>
                    <div className='flex justify-center mt-3'>
                        <button type="submit" onClick={handlePublish} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Publish
                            </span>
                        </button>
                    </div>
                    {loader&&<Loader/>}

                </div>
            </div>
        </>
    )
}
