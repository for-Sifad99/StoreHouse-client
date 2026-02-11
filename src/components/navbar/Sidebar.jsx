import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Sidebar = ({ sidebar, setSidebar }) => {
    return (
        <div
            className={`w-88 h-full fixed top-0 left-full z-999 bg-zinc-900 px-6 py-16 ${sidebar ? '-translate-x-full opacity-100' : 'translate-x-0 opacity-0'} transition-all duration-300 ease-in-out`}
        >
            <div
                onClick={() => setSidebar(false)}
                className="group cursor-pointer flex justify-center items-center w-8 h-5.5"
            >
                <div className="flex flex-col items-center justify-center gap-0.75 -mt-1">
                    <span className="block w-6 h-0.5 bg-zinc-500 transition-transform duration-200 rotate-90 group-hover:rotate-135" />
                    <span className="block w-6 h-0.5 bg-zinc-500 transition-transform duration-200 -translate-y-1.25 group-hover:-rotate-135" />
                </div>
            </div>

            <div className="text-lg font-normal tracking-tighter leading-4 mt-14 pb-8">
                <p className="text-zinc-300 p-1 pl-0">
                    <span className="w-full h-fit px-1 bg-red-700 font-bold underline">
                        Storehouse
                    </span>{' '}
                    is a modern warehouse solution designed for safe storage,
                    organized inventory, and efficient inventory management.
                </p>
                <p className="text-zinc-900 bg-zinc-300 p-1">
                    It ensures fast handling, secure facilities, and smooth
                    logistics to support reliable supply chain operations.
                </p>
            </div>

            <div
                className={`w-0 h-px bg-zinc-700 ${sidebar && 'w-full translate-x-0 opacity-100'} transition-all delay-100 duration-700 ease-in`}
            ></div>

            <div className="flex justify-between mt-8">
                <div className="w-[40%] text-md font-medium tracking-tight uppercase text-zinc-300">
                    <h1 className="text-sm font-extrabold leading-4 uppercase border-b-4 pb-0.5 border-red-700 mt-4 mb-5">
                        storehouse in everywhere
                    </h1>

                    <div className="space-y-1.5">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 hover:text-blue-500 transition-all duration-300 ease-in-out"
                        >
                            <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-zinc-900 transition">
                                <FaFacebookF className="w-2" />
                            </span>
                            <span className="group-hover:underline">
                                Facebook
                            </span>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 hover:text-pink-500 transition-all duration-300 ease-in-out"
                        >
                            <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-zinc-900 transition">
                                <FaInstagram className="w-2" />
                            </span>
                            <span className="group-hover:underline">
                                Instagram
                            </span>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 hover:text-sky-500 transition-all duration-300 ease-in-out"
                        >
                            <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-zinc-900 transition">
                                <FaLinkedinIn className="w-2" />
                            </span>
                            <span className="group-hover:underline">
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </div>

                <div className="w-[50%] ml-auto">
                    <Image
                        src="/shoping-pose.png"
                        width={300}
                        height={300}
                        alt="Short logo for navbar"
                        priority
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
