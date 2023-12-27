//import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginPage.css';

interface FormData {
  email: string
  password: string
  checkbox: boolean
}

function LoginPage() {
  // const { register, handleSubmit, errors } = useForm<FormData>();

  // const onSubmit = handleSubmit(({ email, password, checkbox }) => { console.log(email, password, checkbox); });

  return (
    <div className="main-box">
      {/* <div className="pic"></div> */}
      <div>
        <img src="/public/pic.png" alt="" className="pic"/></div>
      <div className="box">
      <div className="hello"><p>Hey, Hello 👋</p></div>
      <div className="message"><p>Welcome to present for your 100% attendance</p></div>
      <div className="login"><p>Login</p></div>
        <form action="" 
        // onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="email" className="email">Email Address</label>
          <input 
          // ref={register(
          //   //{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, minLength: 5, maxLength: 30 }
          // )}
          name="email" type="text" id="email" className="email-box" placeholder="✉️    Enter your email address" 
          //{...errors.email && { style: { borderColor: 'red' }}}
          />
          </div>
        
          <div>
            <label htmlFor="password" className="password">Password</label>
          <input 
          // ref={register()} 
          name="password" type="password" id="password" className="password-box" placeholder="🔒    Enter your password" />
          </div>
          

          <div className="checkbox-out">
          <div className="checkbox-inside">
            <input 
            // ref={register()} 
            name="checkbox" type="checkbox" id="checkbox" className="check-box"/>
            <label htmlFor="" className="remember-me">Remember me</label>
            </div>
            <div className="forgot"><a href="/">Forgot Password?</a></div>
          </div>
        <div><button className="login-button">Login</button></div>
        </form>
      </div>
      
    </div>
  );
}

export default LoginPage;
