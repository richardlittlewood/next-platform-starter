import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="grid gap-8 sm:grid-cols-3">
                <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">SIAN</h3>
                    <p className="text-sm text-blue-200">
                        Scientific Institute of Advanced Nutrition. Advancing the science of human nutrition
                        through research, education, and community engagement.
                    </p>
                </div>
                <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="decoration-dashed text-blue-200 underline-offset-4 hover:text-white">About Us</Link></li>
                        <li><Link href="/programs" className="decoration-dashed text-blue-200 underline-offset-4 hover:text-white">Programs</Link></li>
                        <li><Link href="/research" className="decoration-dashed text-blue-200 underline-offset-4 hover:text-white">Research</Link></li>
                        <li><Link href="/faculty" className="decoration-dashed text-blue-200 underline-offset-4 hover:text-white">Faculty</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Contact</h3>
                    <ul className="space-y-2 text-sm text-blue-200">
                        <li>123 Nutrition Science Drive</li>
                        <li>Cambridge, CB2 1TN, UK</li>
                        <li>info@sian-institute.ac.uk</li>
                        <li>+44 (0)1234 567890</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
                &copy; {new Date().getFullYear()} Scientific Institute of Advanced Nutrition. All rights reserved.
            </div>
        </footer>
    );
}
