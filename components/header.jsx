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
            <div className="w-full max-w-[1440px] mx-auto px-[5%] sm:px-[10%]">
                {/* Logo and title row - aligned far left */}
                <div className="pt-3 sm:pt-4 pb-2">
                    <Link href="/" className="inline-flex items-center gap-4 no-underline hover:opacity-90">
                        <img src="/images/sian-logo-circular.png" alt="SIAN" width="72" height="72" className="rounded-full object-cover" style={{ background: 'transparent' }} />
                        <span className="text-lg font-semibold tracking-tight sm:text-2xl lg:text-3xl text-[#10243E] leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>Scientific Institute for Advanced Nutrition</span>
                    </Link>
                </div>
                {/* Navigation row - spans full width */}
                {!!navItems?.length && (
                    <nav className="pb-3 sm:pb-4">
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
        </div>
    );
}
