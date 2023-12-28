import React from 'react';
import Wrapper from '../Wrapper';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-background-100 shadow-md border-t border-background-500'>
            <Wrapper>
            <div className='mt-[20px] md:mt-[10px] font-roboto' >
                <footer className="text-black-600 body-font">
                    <div className="container px-0 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">

                            <div className='md:ml-0 ml-[90px]'>
                                <div className='w-[80px]'>
                                    <img src="http://localhost:3000/images/logo.png" alt="Logo" />
                                </div>
                            </div>

                            <p className="mt-2 text-sm text-black-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font  text-black-900 font-bold tracking-widest text-sm mb-3">IMPORTANT</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link to={'/'} className="text-black-600 hover:text-black-800">Home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/about'} className="text-black-600 hover:text-black-800">About</Link>
                                    </li>
                                    <li>
                                        <Link to={'/products'} className="text-black-600 hover:text-black-800">All bike</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'} className="text-black-600 hover:text-black-800">Contact</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-black-900 tracking-widest text-sm mb-3">OUR POLICY</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link to={'/privacy'} className="text-black-600 hover:text-black-800">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to={'/refund'} className="text-black-600 hover:text-black-800">Refund Policy</Link>
                                    </li>

                                </nav>
                            </div>

                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-black-900 tracking-widest text-sm mb-3">OUR TEAM</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link to={'/founders'} className="text-black-600 hover:text-black-800">Founders</Link>
                                    </li>
                                    <li>
                                        <Link to={'/techteam'} className="text-black-600 hover:text-black-800">Tech Team</Link>
                                    </li>
                                    <li>
                                        <Link to={'/employees'} className="text-black-600 hover:text-black-800">Employees</Link>
                                    </li>

                                </nav>
                            </div>


                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-black-900 tracking-widest text-sm mb-3">Follow Us</h2>
                                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-black-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-black-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-black-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-black-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                            </div>

                        </div>
                    </div>

                    <div className='border-t-2 border-t-background-500 '>
                         
                            
                    <p className="text-black-500 text-sm font-bold text-center py-5">© 2023 BIKE HAAT —
                                <a to="https://weblagbe.com" rel="noopener noreferrer" className="text-black-500 text-center " target="_blank">Developed by WEB LAGBE</a>
                            </p>
                           
                    </div>
                </footer>

            </div>
        </Wrapper>
        </div>
    );
};

export default Footer;
