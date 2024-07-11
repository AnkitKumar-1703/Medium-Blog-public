import { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupInput } from "../../common/src/zod";
import axios from 'axios';

function SigninLeft({ text }: { text: "signin" | "signup" }) {
  const navigate = useNavigate();
  const [detail, setDetail] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });
  const [loader, setLoader] = useState(false);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setDetail((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
    console.log(detail);
  }

  async function sendrequest() {
    try {
      console.log(detail);
      setLoader(true);
      const response = await axios.post(`Your-backend-url/api/v1/user/${text === "signin" ? "signin" : "signup"}`, detail);
      const data = response.data;
      console.log(data);
      setLoader(false);
      localStorage.setItem('token', data.jwt);
      navigate('/blogs');
    } catch (error) {
      setLoader(false);
      alert("Wrong creds");
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className='w-1/2'>
        <Heading label={text === 'signup' ? "Create an account" : "Sign In"} />
        <SubHeading label={text === "signin" ? "Don't Have an Account?" : "Already Have an Account?"} link={text === "signup" ? "Login" : "Register"} />
        {text === "signup" ? <InputBox label='name' placeholder='Enter your username' onChange={changeHandler} /> : null}
        <InputBox label='email' placeholder='m@example.com' onChange={changeHandler} />
        <InputBox label='password' placeholder='12345678' type="password" onChange={changeHandler} />
        <Button label={text === 'signin' ? 'Sign In' : "Sign Up"} onClick={sendrequest} />
        {loader && <Loader />}
      </div>
    </div>
  );
}

function Heading({ label }: { label: string }) {
  return (
    <div className="text-4xl font-bold m-2 text-center">{label}</div>
  );
}

function SubHeading({ label, link }: { label: string, link: string }) {
  return (
    <div className="text-lg flex justify-center mb-4">
      <div className="mr-2">{label}</div>
      <div className="underline"><Link to={link === "Register" ? "/signup" : "/signin"}>{link}</Link></div>
    </div>
  );
}

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ label, placeholder, type, onChange }: InputProps) {
  return (
    <div>
      <div>
        <label htmlFor={label} className="block mb-2 text-md font-medium text-gray-900">{label === "name" ? "Username" : label.charAt(0).toUpperCase() + label.slice(1)}</label>
        <input onChange={onChange} type={type} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
      </div>
    </div>
  );
}

function Button({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label}</button>
  );
}

export function Loader() {
  return (
    <div className="text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline mt-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default SigninLeft;
