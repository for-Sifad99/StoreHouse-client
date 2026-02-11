'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLinks() {
    const pathname = usePathname();

    const linkStyle = (path) =>
        pathname === path
            ? 'font-bold opacity-60'
            : 'hover:opacity-60 transition-all duration-300 ease-in-out';

    return (
        <ul className="flex items-center justify-center gap-10">
            <li>
                <Link href="/" className={linkStyle('/')}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/products" className={linkStyle('/products')}>
                    Products
                </Link>
            </li>
            <li>
                <Link href="/offers" className={linkStyle('/offers')}>
                    Offers
                </Link>
            </li>
            <li>
                <Link href="/blogs" className={linkStyle('/blogs')}>
                    Blogs
                </Link>
            </li>
        </ul>
    );
}

export default NavLinks;
