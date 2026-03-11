import Image from 'next/image';
import Link from 'next/link';
import sianLogo from 'public/images/sian-logo.png';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
                <Image src={sianLogo} alt="Scientific Institute for Advanced Nutrition logo" className="w-10 h-10" />
                <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold">Scientific Institute for Advanced Nutrition</p>
                    <p className="text-xs text-white/60 mt-1">Metabolic Science &amp; Application</p>
                </div>
            </div>
        </footer>
    );
}
