'use client';

const navItems = [
    { linkText: 'About', href: '#about' },
    { linkText: 'Meeting Overview', href: '#overview' },
    { linkText: 'Agenda', href: '#agenda' },
    { linkText: 'Speakers', href: '#speakers' },
    { linkText: 'Contact', href: '#contact' },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50">
            {/* Top banner matching the official green banner */}
            <div className="bg-primary-800 text-white">
                <div className="container-narrow flex items-center gap-4 py-3">
                    <img
                        src="/images/sian-logo.png"
                        alt="SIAN Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0 bg-white"
                    />
                    <span className="font-bold text-base sm:text-lg md:text-xl tracking-wide">
                        Scientific Institute for Advanced Nutrition
                    </span>
                </div>
            </div>
            {/* Navigation */}
            <nav className="bg-white/95 backdrop-blur border-b border-border shadow-sm">
                <div className="container-narrow flex items-center justify-center py-2">
                    <ul className="flex flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-6 items-center justify-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="nav-link text-xs sm:text-sm px-1.5 py-1 sm:px-2 sm:py-1.5"
                                >
                                    {item.linkText}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
