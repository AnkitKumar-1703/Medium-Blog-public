
import AppBar from "../components/AppBar";
import { useProfile } from "../hooks";
import { Link, useNavigate } from "react-router-dom";
import ProfileSkeleton from "../components/ProfileSkeleton";

export default function Profile() {
    
    const {loading,profile,posts}=useProfile()
    const navigate=useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        console.log("User logged out");
        navigate("/signin")
    };
    if(loading){
        return <div>
            <AppBar />
            <ProfileSkeleton/>
            </div>
    }
    return (
        <div>
            <AppBar />
            <div className="container mx-auto p-4 flex justify-center">
                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 relative">
                    <button
                        onClick={handleLogout}
                        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                    >
                        Logout
                    </button>
                    <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
                        Profile
                    </h2>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">Username</h3>
                        <p className="text-xl text-gray-600">{profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">UserId</h3>
                        <p className="text-xl text-gray-600">{profile.id}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">Email</h3>
                        <p className="text-xl text-gray-600">{profile.email}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">Password</h3>
                        <p className="text-xl text-gray-600">{profile.password}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">
                            Number of Posts
                        </h3>
                        <p className="text-xl text-gray-600">{posts.length}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-700">Posts</h3>
                        <div className="space-y-4">
                            {posts.slice().reverse().map((post) => (
                                <Link to={`/blog/${post.id}`}>
                                <div key={post.id} className="p-4 bg-gray-100 rounded-lg">
                                    <h4 className="text-lg cursor-pointer font-semibold text-gray-800">
                                        {post.title}
                                    </h4>
                                    
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
