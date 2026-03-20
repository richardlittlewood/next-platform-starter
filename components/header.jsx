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
        <div className="w-full bg-[#2D2D2D]">
            <nav className="flex flex-wrap items-center gap-4 py-3 sm:py-4 section-container">
                <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-90">
                    <img src="/images/sian-logo-circular.png" alt="SIAN" width="48" height="48" className="rounded-full object-cover" style={{ background: 'transparent' }} />
                    <span className="text-sm font-bold tracking-tight sm:text-base text-[#00FFB2] leading-tight max-w-[260px]">Scientific Institute for Advanced Nutrition</span>
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-sm no-underline text-[#00FFB2]/70 hover:text-[#00FFB2] transition-colors">
                                    {item.linkText}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
}
