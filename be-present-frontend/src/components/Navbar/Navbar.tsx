import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navbar_animation = {
    // System view 
    open: {
        width: "16rem",
        transition: {
          damping: 40,
        },

    },
    closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
    },
  };

  const image_animation = {
    open: {
      width: "16.625rem",
      height: "9.5rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      x: -100,
      scale: 0.4,
      transition: {
        damping: 40,
      },
    },
  };


  return (
  
    <div className="body">
      <motion.div
        variants={navbar_animation}
        animate={isOpen ? 'open' : 'closed'}
        className="nav-layout"
      >
        <motion.div
          variants={image_animation}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0 }}
        >
          <img src="/public/logo.png" alt="" className="pic" />
        </motion.div>

        <div>
          {isOpen ? (
            <>
              <NavLink to={"/"} style={{ textDecoration: 'none' }}>
                <div className="text" style={{ marginTop: '3rem' }}>
                  <img src="/public/dashboard.png" alt="" className="img" />
                  Dashboard
                </div>
              </NavLink>

              <NavLink to={"/"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/student.png" alt="" className="img"/>
                  Student
                </div>
              </NavLink>

              <NavLink to={"/"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/classes.png" alt="" className="img"/>
                  Classes
                </div>
              </NavLink>

              <NavLink to={"/"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/records.png" alt="" className="img"/>
                  Records
                </div>
              </NavLink>

              <NavLink to={"/"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/notification.png" alt="" className="img"/>
                  Notification
                </div>
              </NavLink>

              <NavLink to={"/"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/settings.png" alt="" className="img"/>
                  Settings
                </div>
              </NavLink>

              <NavLink to={"/login"} style={{textDecoration: "none"}}>
                <div className="text">
                  <img src="/public/logout.png" alt="" className="img"/>
                  Logout
                </div>
              </NavLink>
            </>
          ) : (
            <div>
              <NavLink to={"/"}>
                <img src="/public/dashboard.png" alt="" className="img img-content" />
              </NavLink>

              <NavLink to={"/"}>
                <img src="/public/student.png" alt="" className="img img-content"/>
              </NavLink>

              <NavLink to={"/"}>
                <img src="/public/classes.png" alt="" className="img img-content"/>
              </NavLink>

              <NavLink to={"/"}>
                <img src="/public/records.png" alt="" className="img img-content"/>
              </NavLink>

              <NavLink to={"/"}>
                <img src="/public/notification.png" alt="" className="img img-content"/>
              </NavLink>

              <NavLink to={"/"}>
                <img src="/public/settings.png" alt="" className="img img-content"/>
              </NavLink>

              <NavLink to={"/login"}>
                <img src="/public/logout.png" alt="" className="img img-content"/>
              </NavLink>
              
            </div>
          )}
        </div>

        <motion.div
          className="collapse"
          onClick={toggleSidebar}
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
        >
          <IoIosArrowBack size={30} className="icon" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
