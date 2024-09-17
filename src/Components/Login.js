import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState('0');
    const [errorMessage, setErrorMessage] = useState (null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
    }

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm); //This will toggle between the signin and sign up 
    }
    
    
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg" alt="Backgroundimg"></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
            <h1 className="font-bold  text-3xl py-4 my-2 ">{isSignInForm ?  "Sign In" : "Sign Up" }</h1>
            
            {!isSignInForm && (<input type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"/>
            )}
            
            <input 
             ref={email}
             type="text" 
             placeholder="Email or Phone Number" 
             className="p-4 my-4 w-full bg-gray-700 rounded-sm"/>
            
            <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"/>
            
            <p className="text-red-700 font-semibold text-lg py-2 ">{errorMessage}</p>

            <button className="py-4  my-6 bg-red-700 w-full rounded-md font-semibold" onClick={handleButtonClick} >
            {isSignInForm ?  "Sign In" : "Sign Up" }</button>
            <p className="py-4 cursor-pointer" 
            onClick={toggleSignInForm}>{isSignInForm ?  "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }</p>
        </form>


    </div>
  )
}

export default Login;