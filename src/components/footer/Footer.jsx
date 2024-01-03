import React from 'react';
import Wrapper from '../Wrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const { t } = useTranslation()


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

                                <div className="mt-2 text-sm text-black-500">
                                    <div>
                                    {t('footerDescription')}
                                    </div>
                                    
                                    <div className='mt-5 font-bold'>
                                    {t('phone')}: 01870-721166
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                                <div className="lg:w-4/12 md:w-6/12 w-full px-4">
                                    <h2 className="title-font  text-black-900 font-bold tracking-widest text-sm mb-3">
                                        {t('important')}
                                    </h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <Link to={'/'} className="text-black-600 hover:text-black-800">
                                                {t('home')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about'} className="text-black-600 hover:text-black-800">
                                                {t('about')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/allBikes'} className="text-black-600 hover:text-black-800">
                                                {t('allBike')}
                                            </Link>
                                        </li>
                                    </nav>
                                </div>
                                <div className="lg:w-4/12 md:w-6/12 w-full px-4">
                                    <h2 className="title-font font-bold text-black-900 tracking-widest text-sm mb-3">
                                        {t('ourconditions')}
                                    </h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <Link to={'/conditions'} className="text-black-600 hover:text-black-800">
                                                {t('conditions')}
                                            </Link>
                                        </li>
                                    </nav>
                                </div>

                                <div className="lg:w-4/12 md:w-6/12 w-full px-4">
                                    <h2 className="title-font font-bold text-black-900 tracking-widest text-sm mb-3">
                                        {t('followUs')}

                                    </h2>
                                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                        <a className="text-black-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>

                                        <a className="ml-3 text-black-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>

                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className='border-t-2 py-5 text-center border-t-background-500 '>
                            {t('copyrightYear')}
                            <span className="text-black-500 text-sm font-bold text-center py-5">
                                <span className='font-bold mx-2 text-secondary-400'>
                                    {t('bikehaat')}
                                </span> —
                                  <span className="text-black-500 ml-[1px] text-center ">
                                    {t('developedBy')}
                                    <a className='mx-2' href="https://weblagbe.com">
                                        {t('webLagbe')}
                                    </a>
                                    </span>
                            </span>

                        </div>
                    </footer>

                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;
