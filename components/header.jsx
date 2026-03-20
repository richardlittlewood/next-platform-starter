'use client';

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
        <div className="w-full bg-white border-b border-[#D8E2EC]">
            <div className="w-full max-w-[1440px] mx-auto px-[5%] sm:px-[10%]">
                {/* Logo and title row */}
                <div className="pt-3 sm:pt-4 pb-2 flex items-center justify-between">
                    <Link href="/" className="inline-flex items-center gap-3 sm:gap-4 no-underline hover:opacity-90">
                        <img src="/images/sian-logo-circular.png" alt="SIAN" width="72" height="72" className="rounded-full object-cover w-12 h-12 sm:w-[72px] sm:h-[72px]" style={{ background: 'transparent' }} />
                        <span className="font-semibold tracking-tight text-[#10243E] leading-tight" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.95rem, 2.5vw, 1.875rem)" }}>Scientific Institute for Advanced Nutrition</span>
                    </Link>
                    {/* Hamburger button - visible only on mobile */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 -mr-2 bg-transparent border-none cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <span className={`block w-6 h-[2.5px] bg-[#10243E] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
                        <span className={`block w-6 h-[2.5px] bg-[#10243E] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-[2.5px] bg-[#10243E] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
                    </button>
                </div>
                {/* Desktop navigation row - hidden on mobile */}
                {!!navItems?.length && (
                    <nav className="hidden md:block pb-3 sm:pb-4">
                        <ul className="flex justify-between w-full list-none m-0 p-0">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="inline-flex px-3 py-2 sm:px-5 sm:py-2.5 text-sm font-medium no-underline text-[#10243E] hover:text-[#1B7E82] transition-colors">
                                        {item.linkText}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
            {/* Mobile navigation drawer overlay */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMenuOpen(false)} />
            )}
            {/* Mobile navigation drawer */}
            <nav className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="p-2 bg-transparent border-none cursor-pointer"
                        aria-label="Close menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10243E" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    </button>
                </div>
                <ul className="list-none m-0 p-0 px-6">
                    {navItems.map((item, index) => (
                        <li key={index} className="border-b border-[#D8E2EC] last:border-b-0">
                            <a
                                href={item.href}
                                className="block px-2 py-4 text-base font-medium no-underline text-[#10243E] hover:text-[#1B7E82] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
