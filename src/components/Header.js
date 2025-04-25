import React,{useEffect} from 'react';
import { signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate=useNavigate();
   const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
       
      }
    });
    //unsubscribing when componnet unmounts
return ()=>unsubscribe();
  },[])
  const handleSignout=()=>{
   
signOut(auth).then(() => {
  navigate("/");
  // Sign-out successful.
}).catch((error) => {
  navigate("/error");
  // An error happened.
});
  }

  const handleGPTSearchClick=()=>{
    dispatch(toggleGptSearchView());

  }

  const handleLanguageChange=(e)=>{

    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO}
        
        alt="Netflixlogo"/>
        {user && 
        (<div className='flex p-2'>
         {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
           
          </select>}
          <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg' onClick={handleGPTSearchClick}>
            {showGptSearch?"Home Page":" GPT Search"}
           </button>
        <img alt="usericon" className='w-12 h-12' src={user?.photoURL}/>
        <button onClick={handleSignout} className='font-bold text-white'>Sign out</button>

      </div>)}
        
    </div>
  )
}

export default Header