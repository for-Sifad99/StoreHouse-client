'use client';

import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import { TbUser, TbSearch } from 'react-icons/tb';
import Sidebar from './Sidebar';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="w-full h-full">
            <nav className="flex items-center justify-between text-sm font-medium uppercase py-7 px-28">
                {/* logo */}
                <div className="w-30">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={80}
                        alt="Short logo for navbar"
                        priority
                        className="h-auto w-full"
                    />
                </div>

                {/* Links */}
                <div>
                    <NavLinks />
                </div>

                {/* icons */}
                <div className="flex items-center justify-center gap-5">
                    <div>
                        <h4>
                            cart{' '}
                            <span className="ml-0.5 text-zinc-500">($0)</span>
                        </h4>
                    </div>

                    <div className="flex items-center justify-center gap-0.5">
                        <TbUser className="-mt-1" />
                        <h3>Login</h3>
                    </div>

                    <div>
                        <TbSearch className="rotate-90 -mt-1" />
                    </div>

                    <div
                        onClick={() => setSidebar(true)}
                        className="group cursor-pointer w-10 h-10 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center justify-center gap-0.75 -mt-1">
                            <span className="block w-6 h-0.5 bg-zinc-500 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:rotate-90" />
                            <span className="block w-6 h-0.5 bg-zinc-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-180" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
    );
}

export default Navbar;
