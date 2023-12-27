//import React from 'react'
import './ErrorPage.css'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container">
        <img src="/public/error.png" alt="" className="pic_error"/>
        <p className="text_error">Oops!! Looks Like Something Went Wrong</p>
        <NavLink to={"/"} style={{ textDecoration: 'none' }}><button className="back-button">Back To Dashboard</button></NavLink>
        <p className="new-text">Retry after sometime</p>
    </div>
  )
}

export default ErrorPage