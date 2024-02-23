import React from 'react';
import "./Navbar.css"
import Image from 'next/image';
import Logo from "../../../../assets/logo.svg"


const Navbar = () => {
      const links = [
            {
                  title: "Home",
                  url: "/home"
            },
            {
                  title: "How It Works",
                  url: "/How-It-Works"
            },
            {
                  title: "Reviews",
                  url: "/Reviews"
            },
            {
                  title: "Pricing",
                  url: "/Pricing"
            },
            {
                  title: "Faq's",
                  url: "/Faqs"
            },
      ]
      return (
            <nav className='navbar-container relative bg-transparent text-white flex flex-row items-center justify-evenly'>
                  <Image
                        className='logo'
                        src={Logo}
                        alt="Logo"

                  />
                  <div className='flex flex-row navlinks '>
                        {links.map((link, index) => <a className='link-title' key={index} href={link.url}>{link.title}</a>)}
                  </div>

                  <div className='navbar-buttons'>
                        <button className='navbar-login-button'>Login</button>
                        <button className='navbar-getstarted-button'><p className='getstarted-text'>GET STARTED</p></button>
                  </div>
            </nav>
      );
}

export default Navbar;
