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
        <div className="w-full bg-white border-b border-[#D8E2EC]">
            <nav className="flex flex-wrap items-center gap-4 py-3 sm:py-4 section-container">
                <Link href="/" className="flex items-center gap-4 no-underline hover:opacity-90">
                    <img src="/images/sian-logo-circular.png" alt="SIAN" width="72" height="72" className="rounded-full object-cover" style={{ background: 'transparent' }} />
                    <span className="text-lg font-semibold tracking-tight sm:text-2xl lg:text-3xl text-[#10243E] leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>Scientific Institute for Advanced Nutrition</span>
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-sm font-medium no-underline text-[#10243E] hover:text-[#1B7E82] transition-colors">
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
