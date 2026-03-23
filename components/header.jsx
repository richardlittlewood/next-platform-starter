'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'About SIAN', href: '#about-sian' },
    { linkText: 'About the Meeting', href: '#about-meeting' },
    { linkText: 'Scientific Programme', href: '#programme' },
    { linkText: 'Faculty', href: '#faculty' },
    { linkText: 'Venue & Format', href: '#venue' },
    { linkText: 'Register Interest', href: '#registration' }
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            <div className="flex items-center gap-4">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
                    />
                </button>
            </div>
            {menuOpen && (
                <ul className="absolute top-full right-0 z-50 flex flex-col bg-blue-900/95 backdrop-blur-sm border border-white/10 rounded-lg py-2 min-w-48 shadow-lg">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block px-6 py-3 hover:bg-white/10 transition-colors no-underline"
                            >
                                {item.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
