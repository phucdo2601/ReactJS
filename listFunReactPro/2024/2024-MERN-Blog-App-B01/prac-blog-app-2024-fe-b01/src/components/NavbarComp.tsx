import React, { useState } from 'react'
import { FiAlignJustify, FiX } from "react-icons/fi";
import { IKContext, IKImage } from 'imagekitio-react';
import ImageComp from './ImageComp';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const NavbarComp = () => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <>
        <div className="
            w-full h-16 md:h-20 flex items-center justify-between
        ">
            {/* LOGO */}
            <Link to={`/`} className="flex items-center gap-4 rtext-2xl font-bold">
                <ImageComp
                    src='https://ik.imagekit.io/ua3deylp8/logo.png'
                    alt='Image Logo App'
                    w={32}
                    h={32}
                    className='hover:pointer-events-auto'
                />
                
                <span className="">Phucdn-Blog-Page</span>
            </Link>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
                    {
                        open ? (<>
                            <FiX />
                        </>) : (
                            <>
                                <FiAlignJustify />
                            </>
                        )
                    }
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-red-70 ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">Aboout</Link>
                    <Link to="/">Home</Link>
                    <Link to="/login">
                        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login </button>
                    </Link>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className=" hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">Aboout</Link>
                <Link to="/">Home</Link>
                

                <SignedOut>
                    <Link to="/login">
                        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
        
    </>
  )
}

export default NavbarComp