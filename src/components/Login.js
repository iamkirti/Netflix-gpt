import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
        <Header/>
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
        alt="background-image"/>
    </div>
    <form className='relative p-12 bg-black'>
    <input type="text" placeholder='Email Address' className='p-2 m-2'/>
    <input type="password" placeholder='Password' className='p-2 m-2'/>
    <button className='p-4 m-4'>Sign In</button>

    </form>
    
    </div>
  )
}

export default Login