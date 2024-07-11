
import { Link } from "react-router-dom";
import Theme from "./Theme";

export default function AppBar({ authorName=localStorage.getItem("name")||"Ankit" }: { authorName?: string }) {
  return (
    <div className="flex justify-between items-center px-6 h-14 border-b-2">
      <Link
        to={"/blogs"}
        className="text-xl font-extrabold font-serif cursor-pointer"
      >
        Medium 2.0
      </Link>
      <Link to={"/search"}>
      <div className="text-xl p-1 rounded-md font-extrabold font-serif cursor-pointer flex items-center gap-3 border border-gray-400 hover:border-blue-500 hover:bg-blue-100 transition duration-200 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
  </svg>
  Search a blog
</div>
</Link>

      <div className="flex gap-5 items-center">
        <Theme/>
        <Link to={'/publish'}>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          + NEW BLOG
        </button>
        </Link>
        <Link to={'/profile'}>
        <div  className="rounded-full bg-blue-500 text-white w-10 h-10 flex justify-center items-center mx-1 text-2xl cursor-pointer">
          {authorName[0].toUpperCase()}
        </div>
        </Link>
      </div>
    </div>
  );
}
