export function Footer() {
    return (
        <footer className="bg-[#070910] py-14 sm:py-20 border-t border-white/5">
            <div className="section-container">
                <div className="grid gap-8 sm:grid-cols-3">
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">SIAN</h3>
                        <p className="text-sm text-[#6B7280]">
                            Scientific Institute for Advanced Nutrition. Advancing evidence-based metabolic nutrition through rigorous science, independent research, and clinical translation.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about-sian" className="no-underline text-[#6B7280] hover:text-accent transition-colors">About SIAN</a></li>
                            <li><a href="#about-meeting" className="no-underline text-[#6B7280] hover:text-accent transition-colors">About the Meeting</a></li>
                            <li><a href="#programme" className="no-underline text-[#6B7280] hover:text-accent transition-colors">Scientific Programme</a></li>
                            <li><a href="#faculty" className="no-underline text-[#6B7280] hover:text-accent transition-colors">Faculty</a></li>
                            <li><a href="#registration" className="no-underline text-[#6B7280] hover:text-accent transition-colors">Register Interest</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Policies & Disclosures</h3>
                        <ul className="space-y-2 text-sm text-[#4B5563]">
                            <li>Privacy Policy (coming soon)</li>
                            <li>Conflict of Interest Policy (coming soon)</li>
                            <li>Faculty Disclosures (coming soon)</li>
                            <li>Terms of Use (coming soon)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-sm text-[#4B5563]">
                        &copy; {new Date().getFullYear()} Scientific Institute for Advanced Nutrition (SIAN). All rights reserved.
                    </p>
                    <p className="text-xs text-[#374151] mt-2">
                        BHB Special Focus Meeting &middot; 8 June 2026 &middot; Spain (Hybrid)
                    </p>
                </div>
            </div>
        </footer>
    );
}
