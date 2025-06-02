'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Navelink {
    link_page_tiitle: string;
    link_lable: string;
}

export default function MobileMenu({ links }: { links: Navelink[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-2xl"
            >
                {isOpen ? '✖' : '☰'}
            </button>
            {isOpen && (
                <nav className="bg-white shadow-md px-4 pb-4 space-y-3">
                    <Link href="/" className="block hover:text-blue-600">Home</Link>
                    {links.map((nav, index) => (
                        <Link key={index} href={`${nav.link_page_tiitle}`} className="block hover:text-blue-600">
                            {nav.link_lable}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    );
}
