import Link from 'next/link';

const navItems = [
    { linkText: 'About SIAN', href: '#about-sian' },
    { linkText: 'About the Meeting', href: '#about-meeting' },
    { linkText: 'Scientific Programme', href: '#programme' },
    { linkText: 'Faculty', href: '#faculty' },
    { linkText: 'Venue & Format', href: '#venue' },
    { linkText: 'Register Interest', href: '#registration' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-16 section-container">
            <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-90">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="18" cy="18" r="17" stroke="#16a34a" strokeWidth="2" />
                    <path d="M18 6 L18 30 M10 12 Q18 8 26 12 M10 18 Q18 14 26 18 M10 24 Q18 20 26 24" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-lg font-bold tracking-tight sm:text-xl text-primary">SIAN</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-sm no-underline hover:text-primary transition-colors">
                                {item.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
