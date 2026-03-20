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
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-16 section-container bg-[#28371c]">
            <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-90">
                <img src="/images/sian-logo.png" alt="SIAN" width="40" height="40" className="rounded" />
                <span className="text-sm font-bold tracking-tight sm:text-base text-[#cbfcff] leading-tight max-w-[260px]">Scientific Institute for Advanced Nutrition</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-sm no-underline text-white/70 hover:text-[#cbfcff] transition-colors">
                                {item.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
